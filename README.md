# population-management-API

![Built with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)

## Application Description
This is a simple API built to enable a user manage population information for locations

## Features
Below are the features of the population API

Locations can be created with female and male population inputed<br/>
The total location is automatically calculated by the system<br/>
Information can be retrieved, editted and deleted<br/>

## Technologies used

Modern JavaScript technologies were adopted for this project

ES2015: Also known as ES6 or ES2015 or ECMASCRIPT 6, is a new and widely used version of Javascript
that makes it compete healthily with other languages. See [here](https://en.wikipedia.org/wiki/ECMAScript) for more infromation.

NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment which allows you enjoy the features of Javascript off the web browsers and implement server-side web development.
Visit [here](https://nodejs.org/en/) for more information.

ExressJS: This is the web application framework for Node.js
Visit [here](https://expressjs.com) for more information

MongoDB: MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. 
Visit [here](https://www.mongodb.com/) for more information

Codes are written in accordance with Airbnb JavaScript style guide, see [here](https://github.com/airbnb/javascript) for details.

## Installation
1. Clone this repository into your local machine:
```
git clone https://github.com/seunzone/population-management-API.git
```
2. Install dependencies
```
yarn install
```
3. Start the development application by running
```
yarn run dev
```
4. Create a `.env` file in the root of your project and insert
    See a sample in the `.env.sample`
    Fill in the sample data with your prefared parameters

5. Install postman to test all endpoints




## API Routes

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>
<tr><td>POST</td> <td>/api/v1/locations</td>  <td>Creates a location's population details</td></tr>

<tr><td>PUT</td> <td>/api/v1/locations/:locationId</td>  <td>Edit a location's population detail</td></tr>

<tr><td>GET</td> <td>/api/v1/locations</td>  <td>Retrieves data of all locations</td></tr>

<tr><td>DELETE</td> <td>/api/v1/locations/:locationId</td> <td>Deletes a location's population detail</td></tr>

</table>
