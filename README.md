# ***************** markbooks-api ******************
===================================================================================
## Base API URL
 https://markbooks-api.herokuapp.com/

## route:

## users API route:

- /api/users/registration 'POST';
- /api/users/login 'POST';
- /api/users/logout 'POST';
- /api/users/avatar 'PATCH';

===================================================================================
example request for registration user:

- body request

```javascript
{
    "name":"user_name",     optional
    "email":"user_email@email.com",   required
    "password":"user_password min length 8 symbols"  required
}
```

- result if success:

```javascript
{
    "status": "success",
    "code": 201,
    "data": {
        "id": "60a749c0a611ee001c601c92",
        "email": "test@email.com",
        "name": "test",
        "avatar": "https://s.gravatar.com/avatar/93942e96f5acd83e2e047ad8fe03114d?s=250",
    }
}
```

==================================================================================
example request for login user:

- body request

```javascript
{
    "email":"user_email@email.com",   required
    "password":"user_password min length 8 symbols"  required
}
```

- result if success:

```javascript
{
    "status": "success",
    "code": 201,
    "data": {
        "id": "60a749c0a611ee001c601c92",
        "email": "test@email.com",
        "name": "test",
        "avatar": "https://s.gravatar.com/avatar/93942e96f5acd83e2e047ad8fe03114d?s=250",
        "token": "token sdgbjjbndvbsdvsdv234"
    }
}
```

## markbooks API route:

- /api/markbooks/all/ 'GET' --get all markbooks;
- /api/markbooks/all/:id 'GET'-- get by id;
- /api/markbooks/mymarkbooks/ 'GET' --get all owner markbooks;
- /api/markbooks/mymarkbooks/:id 'GET'-- get by id owner markbook;
- /api/markbooks/ 'POST' -- create markbook;
- /api/markbooks/mymarkbooks/:id 'PUT' --update owner markbook by id;
- /api/markbooks/mymarkbooks/:id 'PATCH' --update owner markbook by id;
- /api/markbooks/mymarkbooks/:id 'DELETE' --remove owner markbook by id;

## shema DB:

user :

- name --String;
- email --String | required
- password --String | required
- avatar --String;

markbooks :

- title --String | required
- description --String | required
- image --String;
- urlMarkbook --String | required
- rating --String;
- ratingCounter --String

## functionality:

- CRUD private collection;
- public collection;
- user signup login logout;
- add user avatar;

### use libs:

- mongodb;
- mongoose;
- morgan;
- joi;
- express;
- dotenv;
- cors;
- cross-env;
- jsonwebtoken;
- passport;
- passport-jwt;
- bcryptjs;
- helmet;
- express-rate-limit;
- multer;
- gravatar;
- jimp;
