# Clothing Circle

## Video Demo:

## Description:

Clothing Circle is an e-commerce store featuring the ability for a client to veiw products by categories or through filters add products to cart or favorite page and make a purchage using stripe with different delivery options. this project is build with React.js Redux.js ( for state managment ) in front-end and uses Node.js Express.js MongoDB and JWT for backend.

![Preview of the ecommerce store](/static//homepage.png)

## [Table of contents](#table-of-contents)

- [Installation](#installation)
  - [Step 1: cloning this repository](#cloning-this-repository)
  - [Step 2: installing the dependencies](#installing-the-dependencies)
  - [Step 3: Create mongodb account](#create-mongodb-account)
  - [Step 4: get api keys from Stripe](#get-api-keys-from-stripe)
  - [Step 5: create a .env file](#create-a-.env-file)
- [Project overview](#project-overview)
- [Code Overview](#code-overview)
- [Project limitations and improvement ideas](#project-limitations-and-improvement-ideas)

---

## Installation

Anonye is more than welcome to clone this repository and make changes or improve it how ever they need.

this project hold two projects inside a client project (front-end) and api (back-end) project both with dependencies that need to be installed.

follow these steps to gets started:

1. cloning this project.
2. installing dependencies (for client and api).
3. create a mongodb account.
4. get stripe api keys.
5. create a .env and a .gitignore files.
6. runing the servers.

### cloning this repository

You may clone the repository to your local machine and push it to your own repository in your github account.
An explanation about how to go about that can be found in this Stackoverflow answer: https://stackoverflow.com/a/44076938/14517941

### installing the dependencies

you need to have Node.js installed if you don't have go to [Nodejs.com](https://nodejs.org/en) and install it in your machine.

this project consist of two sub-project "client" and "api" each inside a folder with the same name. entre those two projects and install the dependencies using the command `npm install` or `yarn install` if you are using Yarn.

### create a mongodb account.

you will need a mongodb account to connect to it. watch this [video](https://www.youtube.com/watch?v=0Pt7Kfh78Jg) en how to create a mongodb database for free and enable public access.
in this [time](https://youtu.be/0Pt7Kfh78Jg?feature=shared&t=455) frame you will get mongo db url in which it's needed in the .env setting up step.

### get stripe api keys

you will need to have an account in stripe in the dashboard you will notice in bottom left **publishable key** and **secret key**.

the public key will be implemented in **client/src/pages/Cart.jsx** in line 29 place your public key in side `loadStripe()` function
`const stripe = await loadStripe(stripe_public_key_here)`.

the secret key will be implemented in api project in .env file.

![stripe public and secret keys](https://www.appinvoice.com/images/content/documentation/stripe/en/stripe-api-keys.jpg)

read more [here](https://stripe.com/docs/keys)

### create a .env and a .gitignore files

both client and api project need to have .gitignore file which at least will include "node_modules" folder but .env file is crucial for the api project.

the .env file should have the following keys

```
MONGO_URL= ****************************
PORT= 5000
PASS_TOKEN= *****
JWT_SECRET= *****
STRIPE_KEY= **********
```

### running the servers

the run this project you will need to have two terminal open while developing for each client and api.
just head to each project folder the type `npm run start` or `yarn start`.

## Project Overview

This project is an ecommerce store where clients can view products by categories, color, size and price throught filters.

![Preview categories page](/static//categories.png)

## Profile page

users when they are logged in can update their profile information.

![Preview profile](/static//profile.png)

### product page

clients can view individual products when they will be provided with avaible colors, sizes, and choose a quantity before adding product to their cart associated with their account.

![Preview product page](/static//single-product.png)

### Search

In top bar their is a search field that will get all products by their name in real time where a user can get a specific product.

![Preivew search](/static//search.png)

## Favorite page

clients can add product to a wishlist page where their favorite products are displayed with neccessary information like size and colors available and with a press of button can go to that product so they can choose their variation and add it to cart.

![Preview favorite page](/static//favorite.png)

## Cart page

in cart page clients can view products that are willing to purchase depending in the variation they choose while are provided with prices for each product with the ability to choose a specific quantity that will change both the price of the product and total products.

![Preview Cart](/static//cart.png)

## Checkout page

clients will be redirected to stripe checkout page where they can enter their card information to make a purchase stripe is a very well known and secure way to make online purchase. they can adjust the delivery options and make a secure purchase.

![Preview Checkout](/static//stripe.png)

## Code Overview

in this section will try to break down each project folder structure.

### API

the api consist of two main folders **model** and **routes**, the first one consist of files which define Database collection models the later folder consist of routes which the client will send request to.

### Client

inside **src** folder the project is make the following folder **componenets** which holds reuasable componenets, **pages** which hold project pages, **styles** which hold the styling for each page or components and **constants** folder for svg file mostly.

## Projet Limitations

at the moment this project is still missing the admin panel which the admin wil be able to create new products track revunue and manage clients accounts the admin panel will need to in a complete new client project
