# nodejs-interview
1. Install all project dependencies
2. You have docker compose to init the db. raise the mongo container and validate you can access the db
3. run 'npm run seed' to insert all mocks to your db
4. Now you can start your service and check it's alive
5. check http://localhost:8080/keepalive is returning 'service alive'
6. Authentication:
   1. Add auth routing: /auth/signin which will receive the following body:
      {
         "email": "testuser@gmail.com",
         "password": "Aa1234"
      }
      It should return a 'success signin' message if authentication passed and proper response otherwise.
      In order to implement this kind of authentication, you should use passport with LocalStrategy.
      The file of the signin logic is in passport.ts(find the ToDo's) and after it implemented you should connect the routing to that
      logic.
   2. Validate the email is valid email address format and the password at least 6 chars
7. No valid routing found response:
   1. Add a logic where if the user request for url which isn't defined, you'll always return proper http status code
      and message: "sorry but that is invalid url"
8. Symbols support:
   1. Create new schema for symbols model. the schema should support: name, description and other fields if you want.
   2. Add an api call which will add a **list** of those symbols to our db -> add to this project the request of 100 symbols
   3. Create another api call to retrieve all symbols based on pagination -> meaning the api call will return max of 20 symbols each
      time we call it. In order to receive all symbols I will have to call the api call 5 times.