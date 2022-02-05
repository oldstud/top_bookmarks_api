# ***************** markbooks-api ******************
============================================================================
## Base API URL
 https://markbooks-api.herokuapp.com/

## route:

## users API route:

- /api/users/registration 'POST';
- /api/users/login 'POST';
- /api/users/logout 'POST';
- /api/users/avatar 'PATCH';

## markbooks API route:

- /api/comment/ 'GET' --get all markbooks;
- /api/markbooks/all/:id 'GET'-- get by id;
- /api/markbooks/mymarkbooks/ 'GET' --get all owner markbooks;
- /api/markbooks/mymarkbooks/:id 'GET'-- get by id owner markbook;
- /api/markbooks/mymarkbooks/ 'POST' -- create markbook;
- /api/markbooks/mymarkbooks/:id 'PUT' --update owner markbook by id;
- /api/markbooks/mymarkbooks/:id 'PATCH' --update owner markbook by id;
- /api/markbooks/mymarkbooks/:id 'DELETE' --remove owner markbook by id;

## comment API route:

- /api/comment/:id 'GET' --get all projectId comments (id = projectId);
- /api/comment/ 'POST' -- create comment;

## Socket chat route wss://markbooks-api.herokuapp.com/chat (send any object and why connection will receive it ):

- /chat

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

comment: 

- comment --String | required
- projectId --String | required
- authorId--String | required
- authorName--String | required
- authorEmail --String 
- authorAvatar --String 


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

=====================================================================

example request for create marckbook:

- body request

```javascript
{
    "title":"test",
    "description":"test apartment",
    "image":"https://cdn.pixabay.com/photo/2021/06/11/16/24/city-6328941_960_720.jpg",
    "urlMarkbook":"www.test.com"
}
```

- result if success:

```javascript
{
    "status": "success",
    "code": 201,
    "data": {
        "markbook": {
            "image": "https://cdn.pixabay.com/photo/2021/06/11/16/24/city-6328941_960_720.jpg",
            "rating": "0",
            "ratingCounter": "0",
            "_id": "61fe922f0258c0001d0ded6a",
            "title": "test",
            "description": "test apartment",
            "urlMarkbook": "www.test.com",
            "owner": "61fe7d26a2885d001d10a6d6",
            "createdAt": "2022-02-05T15:05:19.677Z",
            "updatedAt": "2022-02-05T15:05:19.677Z"
        }
    }
}
```

=====================================================================

example request for create comment:

- body request

```javascript
{
    "authorEmail":"test",
    "authorAvatar":"test apartment",
    "comment":"sdgdg smnslnlskdnbn",
    "projectId":"1212222",
    "authorId":"Kyiv",
    "authorName":"Kyiv"
}
```

- result if success:

```javascript
{
    "status": "success",
    "code": 201,
    "data": {
        "comment": {
            "authorEmail": "test",
            "authorAvatar": "test apartment",
            "_id": "61fe957859366600358c769a",
            "comment": "sdgdg smnslnlskdnbn",
            "projectId": "1212222",
            "authorId": "Kyiv",
            "authorName": "Kyiv",
            "createdAt": "2022-02-05T15:19:20.421Z",
            "updatedAt": "2022-02-05T15:19:20.421Z",
        }
    }
}
```

## functionality:

- CRUD private collection;
- public collection;
- user signup login logout;
- add user avatar;
- add comment for item;
- socket chat;

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
