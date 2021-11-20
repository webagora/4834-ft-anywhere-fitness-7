const request = require('supertest');
const server = require('../server');
const db = require('../data/db-config');

const testClient = {
  username: 'client1',
  password: 'client1',
  role_type: 'client',
};
const testInstructor = {
  username: 'instructor1',
  password: 'instructor1',
  role_type: 'instructor',
};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

it('sanity check', () => {
  expect(true).not.toBe(false);
});

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing');
  });
});
describe('Auth endpoint testing', () => {
  beforeEach(async () => {
    await request(server).post('/api/auth/register').send(testClient);
  });
  test('Able to register a new user', async () => {
    let registeredUsers;
    registeredUsers = await db('users');
    expect(registeredUsers).toHaveLength(5);
  });
  test('Able to login with created user', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'client1', password: 'client1' });
    expect(res.body.message).toMatch(/welcome, client1/i);
  });
  test('Returns correct message on registering with no username/password', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: '', password: '', role_type: 'client' });
    expect(res.body.message).toMatch(/username and password required/i);
  });
  test('Returns correct message on registering with no role', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'noRole', password: 'noRole' });
    expect(res.body.message).toMatch(/role type required/i);
  });

  test('Returns correct message on incorrect username/password', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'notExist', password: 'notExist' });
    expect(res.body.message).toMatch(/invalid credentials/i);
  });
  test('Cannot create duplicate usernames', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'client1', password: 'client1', role_type: 'client' });
    expect(res.body.message).toMatch(/username taken/i);
  });
});
describe('Class endpoint testing', () => {
  test('Classes are restricted behind login', async () => {
    const res = await request(server).get('/api/classes');
    expect(res.body.message).toMatch(/token required/i);
  });
  test('Classes are accessible after login', async () => {
    await request(server).post('/api/auth/register').send(testClient);
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'client1', password: 'client1' });
    const token = res.body.token;
    const classes = await request(server)
      .get('/api/classes')
      .set({ Authorization: token });
    expect(classes.body[0].class_name).toMatch(/Morning Zen/i);
  });
  test('Able to get a class by ID', async () => {
    await request(server).post('/api/auth/register').send(testClient);
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'client1', password: 'client1' });
    const token = res.body.token;
    const boxing = await request(server)
      .get('/api/classes/2')
      .set({ Authorization: token });
    expect(boxing.body.class_name).toMatch(/Boxing Basics/i);
  });
  test('Able to add a class', async () => {
    await request(server).post('/api/auth/register').send(testInstructor);
    await request(server)
      .post('/api/auth/login')
      .send({ username: 'client1', password: 'client1' });
    await request(server).post('/api/classes/add').send({
      class_name: 'Water Polo',
      class_duration: '1 hour',
      max_class_size: 10,
      class_date: '2021-11-17',
      start_time: '08:00:00',
      class_location: 'Main Pool',
      class_instructor: 1,
      intensity_id: 1,
      type_id: 1,
    });
    let allClasses;
    allClasses = await db('classes');
    expect(allClasses).toHaveLength(6);
  });
  test('Able to update a class', async () => {
    await request(server).post('/api/auth/register').send(testClient);
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'client1', password: 'client1' });
    const token = res.body.token;
    await request(server)
      .put('/api/classes/1')
      .send({ class_name: 'This classname has been changed!' });
    await request(server).post('/api/auth/register').send(testClient);

    const classes = await request(server)
      .get('/api/classes')
      .set({ Authorization: token });
    expect(classes.body[0].class_name).toMatch(
      /This classname has been changed!/i
    );
  });
});
