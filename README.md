# Get PeopleSoft Token

Populates a cookie jar with PS_TOKEN.

## Installation

`yarn add -D @highpoint/get-ps-token`

## Usage

To populate a [cookie jar](https://github.com/request/request#requestjar) with
a valid PS_TOKEN, call `getToken` with an object that includes the following:

  * PeopleSoft hostname
  * PeopleSoft environment
  * PeopleSoft user name
  * PeopleSoft user password
  * HTTP Auth user name (optional)
  * HTTP Auth user password (optional)
  
## Example 

```javascript
const request = require('request-promise');
const getToken = require('@highpoint/get-ps-token');

require('dotenv').config({ silent: true });

/* 
  Add the following environment variables to a `.env` file in the root of your
  project:
    ISCRIPT_HOSTNAME
    ISCRIPT_ENVIRONMENT
    HTTP_USERNAME
    HTTP_PASSWORD
    PS_USERNAME
    PS_PASSWORD
*/

const makeRequest = async () => {
  request
    .get({
      uri: '...',
      jar: await getToken(process.env)
    })
    .then(response => {
      // ...
    });
};

makeRequest();
```

## API

| Key                 | Required | Example        |
| ------------------- | -------- | -------------- |
| PS_HOSTNAME         | True     | example.com    |
| PS_ENVIRONMENT      | True     | csdev92        |
| PS_USERNAME         | True     | user           |
| PS_PASSWORD         | True     | password       |
| HTTP_USERNAME       | False    | user           |
| HTTP_PASSWORD       | False    | password       |

Example:

```javascript
const jar = await getToken({
  PS_HOSTNAME: 'example.com',
  PS_ENVIRONMENT: 'csdev92',
  PS_USERNAME: 'user',
  PS_PASSWORD: 'password1'
});
```
