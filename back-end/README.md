# <p align="center">Anywhere Fitness API</p>

## <p align="center">https://ft-anywherefitness-7.herokuapp.com/</p>

## <p align="center">---------- REGISTER / LOGIN ----------</p>

## Dummy Login Info

<details>
<summary>Usernames/Passwords</summary>

```json
[
  {
    "user_id": 1,
    "username": "tom",
    "password": "password",
    "role_type": "instructor"
  },
  {
    "user_id": 2,
    "username": "jerry",
    "password": "password",
    "role_type": "instructor"
  },
  {
    "user_id": 3,
    "username": "garfield",
    "password": "password",
    "role_type": "client"
  },
  {
    "user_id": 4,
    "username": "odie",
    "password": "password",
    "role_type": "client"
  }
]
```

</details>

### [POST] /api/auth/register

- Register a new user
  - _username required (must be between 3 and 30 characters)_
  - _password required (must be between 5 and 200 characters)_
  - _role required (must be between 'client' or 'instructor', insructor requires auth code)_

_What you send:_

```json client
{
  "username": "SampleUser",
  "password": "abc123",
  "role_type": "client"
}
```

```json instructor
{
  "username": "SampleUser",
  "password": "abc123",
  "role_type": "instructor",
  "auth_code": "auth_instructor_123"
}
```

_What you receive:_

```json
{
  "message": "Account successfully created. Please login.",
  "newUser": {
    "user_id": 15,
    "username": "SampleUser",
    "role_type": "instructor"
  }
}
```

### [POST] /api/auth/login

- Login
  - _username and password required_
  - _provides a newly created token_

_What you send:_

```json
{
  "username": "SampleUser",
  "password": "abc123"
}
```

_What you receive:_

```json
{
  "message": "welcome, SampleUser",
  "role": "instructor",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Ik5ld1VzZXIiLCJpYXQiOjE2MjcyNjY4MDYsImV4cCI6MTYyNzM1MzIwNn0.J1dFd3ghUPYVTodsaAU3Bg2RRcmYM_1oOe-96nvLLUg"
}
```

##

### [GET] /api/users/

**_RESTRICTED ENDPOINT_**

- Get an array of users
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
  {
    "user_id": 1,
    "username": "tom",
    "role_type": "instructor"
  },
  {
    "user_id": 2,
    "username": "jerry",
    "role_type": "instructor"
  },
  {
    "user_id": 3,
    "username": "garfield",
    "role_type": "client"
  },
  {
    "user_id": 4,
    "username": "odie",
    "role_type": "client"
  }
]
```

### [GET] /api/user/

**_RESTRICTED ENDPOINT_**

- Get information on a specific user
  - _requires valid token in authorization header to access_

_What you receive:_

```json
{
  "user_id": 3,
  "username": "garfield",
  "role_type": "client"
}
```

##

## <p align="center">---------- CLASSES ----------</p>

### [GET] /api/classes

**_RESTRICTED ENDPOINT_**

- Get an array of all classes you can sing up for
  - _requires valid token in authorization header to access_

_What you receive:_

```json
[
  {
    "class_id": 1,
    "class_name": "Morning Zen",
    "class_duration": "1 hour",
    "max_class_size": 15,
    "class_date": "2021-11-17T05:00:00.000Z",
    "start_time": "08:00:00",
    "class_location": "Central Park",
    "instructor": "tom",
    "intensity_level": "beginner",
    "type_description": "yoga",
    "number_registered": 2
  },
  {
    "class_id": 2,
    "class_name": "Boxing Basics",
    "class_duration": "45 min",
    "max_class_size": 12,
    "class_date": "2021-12-22T05:00:00.000Z",
    "start_time": "10:30:00",
    "class_location": "YMCA",
    "instructor": "jerry",
    "intensity_level": "beginner",
    "type_description": "boxing",
    "number_registered": 1
  },
  {
    "class_id": 3,
    "class_name": "Sunday Spinning",
    "class_duration": "1.5 hours",
    "max_class_size": 25,
    "class_date": "2021-11-19T05:00:00.000Z",
    "start_time": "19:00:00",
    "class_location": "Gym Z",
    "instructor": "tom",
    "intensity_level": "advanced",
    "type_description": "cycling",
    "number_registered": 2
  },
  {
    "class_id": 4,
    "class_name": "Water Aerobics",
    "class_duration": "2 hours",
    "max_class_size": 10,
    "class_date": "2022-01-07T05:00:00.000Z",
    "start_time": "16:45:00",
    "class_location": "Community Pool",
    "instructor": "jerry",
    "intensity_level": "intermediate",
    "type_description": "swimming",
    "number_registered": 1
  },
  {
    "class_id": 5,
    "class_name": "Bikram Yoga",
    "class_duration": "30 min",
    "max_class_size": 20,
    "class_date": "2022-02-08T05:00:00.000Z",
    "start_time": "18:30:00",
    "class_location": "Gym X",
    "instructor": "jerry",
    "intensity_level": "advanced",
    "type_description": "yoga",
    "number_registered": 0
  }
]
```

### [POST] /api/classes/add

**_RESTRICTED ENDPOINT_**

- Add information for a new class
  - _requires valid token in authorization header to access_

_What you send:_

```json
{
  "class_name": "Weights",
  "class_duration": "1 Hour",
  "max_class_size": 20,
  "class_date": "2021-11-17",
  "start_time": "08:00:00",
  "class_location": "Weights Gym",
  "class_instructor": 1,
  "intensity_id": 1,
  "type_id": 1
}
```

### [GET] /api/classes/:class_id

**_RESTRICTED ENDPOINT_**

- Get information for a specific class
  - _requires valid token in authorization header to access_
  - _(example uses "1" for **:class_id** in URL)_

_What you receive:_

```json
{
  "class_id": 1,
  "class_name": "Morning Zen",
  "class_duration": "1 hour",
  "max_class_size": 15,
  "class_date": "2021-11-17T05:00:00.000Z",
  "start_time": "08:00:00",
  "class_location": "Central Park",
  "instructor": "tom",
  "intensity_level": "beginner",
  "type_description": "yoga",
  "number_registered": 2
}
```

### [GET] /api/classes/:user_id/attending

**_RESTRICTED ENDPOINT_**

- Get an array of classes a specific user is registered for
  - _requires valid token in authorization header to access_
- _(example uses "4" for **:user_id** in URL)_
  _What you receive:_

```json
[
  {
    "class_id": 1,
    "class_name": "Morning Zen",
    "class_duration": "1 hour",
    "max_class_size": 15,
    "class_date": "2021-11-17T05:00:00.000Z",
    "start_time": "08:00:00",
    "class_location": "Central Park",
    "instructor": "tom",
    "intensity_level": "beginner",
    "type_description": "yoga"
  },
  {
    "class_id": 2,
    "class_name": "Boxing Basics",
    "class_duration": "45 min",
    "max_class_size": 12,
    "class_date": "2021-12-22T05:00:00.000Z",
    "start_time": "10:30:00",
    "class_location": "YMCA",
    "instructor": "jerry",
    "intensity_level": "beginner",
    "type_description": "boxing"
  }
]
```

### [GET] /api/classes/:user_id/teaching

**_RESTRICTED ENDPOINT_**

- Get an array of classes a specific instructor is teaching
  - _requires valid token in authorization header to access_
- _(example uses "2" for **:user_id** in URL)_
  _What you receive:_

```json
[
  {
    "class_id": 2,
    "class_name": "Boxing Basics",
    "class_duration": "45 min",
    "max_class_size": 12,
    "class_date": "2021-12-22T05:00:00.000Z",
    "start_time": "10:30:00",
    "class_location": "YMCA",
    "intensity_level": "beginner",
    "type_description": "boxing",
    "number_registered": 1
  },
  {
    "class_id": 4,
    "class_name": "Water Aerobics",
    "class_duration": "2 hours",
    "max_class_size": 10,
    "class_date": "2022-01-07T05:00:00.000Z",
    "start_time": "16:45:00",
    "class_location": "Community Pool",
    "intensity_level": "intermediate",
    "type_description": "swimming",
    "number_registered": 1
  },
  {
    "class_id": 5,
    "class_name": "Bikram Yoga",
    "class_duration": "30 min",
    "max_class_size": 20,
    "class_date": "2022-02-08T05:00:00.000Z",
    "start_time": "18:30:00",
    "class_location": "Gym X",
    "intensity_level": "advanced",
    "type_description": "yoga",
    "number_registered": 0
  }
]
```

### [POST] /api/classes/signup

**_RESTRICTED ENDPOINT_**

- User can register for a specific class
  - _requires valid token in authorization header to access_

_What you send:_

````json
{
  "user_id": 3,
  "class_id": 4
}
````

_What you receive:_

```json
{
    "class_id": 4,
    "class_name": "Water Aerobics",
    "class_duration": "2 hours",
    "max_class_size": 10,
    "class_date": "2022-01-07T05:00:00.000Z",
    "start_time": "16:45:00",
    "class_location": "Community Pool",
    "instructor": "jerry",
    "intensity_level": "intermediate",
    "type_description": "swimming",
    "number_registered": 6
}


```
### [PUT] /api/classes/:id

**_RESTRICTED ENDPOINT_**
- _where :id is class_id (example uses "2" for **:id** in URL)_

- Edits given values of a specific class
  - _requires valid token in authorization header to access_

  _What you send:_

````json
{
  "location": "Gym Z"
}
````

_What you receive:_

```json
{
    "class_id": 2,
    "class_name": "Boxing Basics",
    "class_duration": "45 min",
    "max_class_size": 12,
    "class_date": "2021-12-22T05:00:00.000Z",
    "start_time": "10:30:00",
    "class_location": "Gym Z",
    "instructor": "jerry",
    "intensity_level": "beginner",
    "type_description": "boxing",
    "number_registered": 1
}
```

### [DELETE] /api/classes/:class_id

**_RESTRICTED ENDPOINT_**
- _where :class_id is class_id (example uses "2" for **:id** in URL)_

- Deletes specific class
  - _requires valid token in authorization header to access_


_What you receive:_

```json
{
    "message": "Boxing Basics has been deleted successfully"
}
```

##
