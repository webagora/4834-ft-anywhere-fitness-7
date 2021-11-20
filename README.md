#   ft-anywhere-fitness-7

Hello Build Weeks team- welcome to your project channel!

-   Your team will be working on Anywhere Fitness
-   You can check out the product canvas [here: ](https://www.notion.so/lambdaschool/Anywhere-Fitness-fc0ac268df284aaf8db3ae1913fa3134)
-   books  If ya haven’t already, check out the [FT Build Weeks Student Guide: ](https://www.notion.so/lambdaschool/Build-Week-Student-Guide-Full-time-1995e4ff529e40db9f240f46c3d2afd3) -  This will cover anything you need for your Build Week.

##  Attention all Unit 2 web students:

-   If you have not already, please refer to the Build Week Orientation recording, which you can find [here:](https://youtu.be/_hMsnHkCf-0)  This covers everything you need to know about what we do in Build Week and you can get through it pretty quickly if ya watch at 1.5x!
-   Please make sure that you and all Unit 2 team mates are in the main ```#bw_ft``` and ```#bw_help``` channels! I won’t be dropping any further announcements in your cohort channels and only in the ```#bw_ft``` channel from here on out.
-   If you have any problems- missing team members I might not aware of or anything else: send me a DM directly. I will not see your message here, even if you “@” me. 

##  Anywhere Fitness

###  Pitch 

These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. 

While you could use several mobile apps to accomplish this, **AnywhereFitness** is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. 

Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.

### MVP

1. User can create/register as a `client` and login with the registered credentials.

2. User can create/register as an `instructor` by entering an additional Auth Code during signup, and can login with the registered credentials.

3. `client` and `instructor` are both presented with the appropriate on-boarding walkthrough on first sign-in, with an option to skip it.

4. Authenticated `Instructor` can create update and delete a `class`. At a minimum, each `class` must have the following properties:

- `Name`
- `Type`
- `Start time`
- `Duration`
- `Intensity level`
- `Location`
- `Current number of registered attendees`
- `Max class size`

5. Authenticated `client` can search for available classes. At a minimum, they must be able to search by the following criteria:

- `class time`
- `class date`
- `class duration`
- `class type`
- `intensity level`
- `class location`

6. Authenticated `instructor` can create virtual punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, pilates, etc.)

7. Authenticated `user` can reserve a spot in a `class` with available seats open, and can reschedule or cancel their current `reservation` from the mobile app.

## 🏃‍♀️**Stretch**

1. Implement payments using PayPal, Stripe or another 3rd party API.

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