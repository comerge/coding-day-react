## Requirements
git and a recent version of NodeJS + npm need to be installed.

## Setup

1. go to /server and `npm install`
1. go to /coding-day-react and `npm install` 

## Server
The server uses [json-server](https://github.com/typicode/json-server) under the hood and is serving a RESTful API under http://localhost:3000/ , allowing CORS by default. 

The endpoints are:

```
  /news
  /teams/
  /teams/{id}
  /users
  /users/{id}
```

### Running

To run it, go under /server and `npm start`


## React client

The frontend was generated using the [create-react-app](https://github.com/facebook/create-react-app). 

### Running

To run in development mode, go under /coding-day-react and `npm start`


### Testing

To run the tests, go under /coding-day-react and `npm test`
