# How to run Shopping Cart
## Node JS Back End
1. cd backend
2. npm install
3. npm test
4. npm install -g nodemon
5. npx nodemon
6. products will be displayed at "http://localhost:5000/products"
7. call "http://localhost:5000/shipping/50" to get the shipping price

## React Redux Front End
1. cd frontend
2. npm install
3. npm start
4. run "node .\src\test\playwright.js" to create a video in this project Videos folder
5. npm test
6. shopping website will be displayed at "http://localhost:3000/"
7. enjoy the shopping

## C# Back End
1. Install Visual Studio Community 2022 ASP.NET and Web Development
2. Open The Solution File .\ShoppingCart\c#backend\ShoppingAPI.sln
3. Build -> Build Solution
4. Test -> Run All Tests
5. Run .\ShoppingCart\c#backend\ShoppingAPI\bin\Debug\net6.0\ShoppingAPI.exe
6. You can test below 3 APIs in Swagger,Postman or React Front-End Project

API Endpoints Are:
1. GET http://localhost:5000/products
2. GET http://localhost:5000/shipping/60    
3. POST http://localhost:5000/order	
  Post Body JSON value =  [{"id":2,"name":"London","desc":"LEGO 21034 Architecture London","price":20}]

## TypeScript Back End
1. cd TypeScript_Backend
2. npm install
3. npm start
4. run the front end project to start shopping
