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


## [<p align="center">front-end readme</p>](./front-end/README.md)

## [<p align="center">back-end endpoints API</p>](./back-end/README.md)