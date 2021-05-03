

![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# TurnTable

## Description

_Duration: 2 Week Sprint_

As a record store owner, I have a community of volunteers, workers, and regulars who like to talk about their record collections. Sometimes it's about a record in their collection, and sometimes it's about a record they really want to buy. 

TurnTable is an app that allows users to create an account and catalog their collection and wantlist. By searching through the database, you can select 'Add to Collection' or 'Add to Wantlist' for any record you'd like.

This app also features messaging for communicating with friends that also have account. The messaging portion acts as a bulletin board for TurnTable, so you can talk to everyone at the same time. 

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Installation

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `turntable`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Register as a new user to create an account
2. Search for a record of your choice
3. Add records to your Collection and Wantlist
4. Add friends so you can view their records and vice versa
5. Message your friends about records you want or have
6. Brag about your super cool and extremely huge record collection


## Built With

*React*
*Redux*
*Javascript*
*Node.js*
*Express.js*
*PostgreSQL*
*Material-UI*
*CSS*


## Acknowledgement
Thanks to David Eckerson, Colin Wilkinson, Stephanie May, Dev Jana and everyone at [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [joelaeckerson@gmail.com](mailto:joelaeckerson@gmail.com)
