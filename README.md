P2 – Front-end Design & Implementation 
======================================
### What's this nonsense?
Please don't call it nonsense it's **_very_** useful. So this ~**_NONSENSE_**~ practical is my implementation of a _website_ which streams audiobooks to its customers. Basically a poor man's Audible. However, this is no mere website, oh no. This is **_Bookstream.co.uk_** they store their customer data on my MySQL server hosted by St Andrews and I have to perform queries on the data and serve the appropriate responses to the user. Pretty standard stuff.

### Bruh, it doesn't even work!
Well... yeah I know. That's because when I deployed the app on Heroku, St Andrews won't let me connect to the database necessary for some parts of the website. From my _"testing"_ it seems that you should avoid **Popular Audiobooks** and **All Audiobooks**. You can look at the Log In and Sign Up screens if you want to (they're incredibly boring so I'd advise you against it) but if you complete and send the form, the site will crash on you. So don't do that. It's a shame, the Popular Audiobooks page actually looked really cool, but I don't know of a way to make the St Andrews servers see this as an authentic request from their own servers... Sorry :(

Welcome to v2.0.0!
------------------

### So what's changed?
In reality... not much of the **_core_** application. Rather, changes are seen in how the application is deployed. Now an `express` server is being used, with the `html` being rendered as `ejs` to allow for me to make appropriate requests, receive the results and display them to the user.

### So why v2.0.0?
Well... v1.0.0 was never a thing, but that didn't stop me from starting with v2.0.0. Anyway, a pseudo v1.0.0 can be seen as the application when it would not be sent as a response to a `GET` request to the new `express` server. That approach would not work for this practical, hence why v2.0.0. I guess. (**_That didn't really answer the question did it?_**) 

### Okay, well at least tell me how to run it
- Firstly you'll probably need to clone the repository ~no more of that GitHub Pages nonsense~
- Once cloned, go to the root folder of the project in terminal
- Then you'll need to type `npm install` to install the dependencies (**If you don't have node and npm get those first**)
- After you have the relevant dependencies, type `npm start` to start the server
- This will allow you to go to `localhost:20763` in your browser to see the website
- **_Simple Right?_**
