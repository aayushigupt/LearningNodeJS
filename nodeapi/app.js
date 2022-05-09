const express = require('express');
const app = express();

const morgan = require("morgan");
const { post } = require('./routes/post');

//middleware
//middleware is required for the authentication , protection of routes
// const myOwnMiddleware = (req, res, next) => {
//     console.log("My own middleware");
//     //if next is not applied then it will not move to next step
//     next();
// }

const postRoutes = require('./routes/post')

app.use(morgan("dev"));
app.use("/", postRoutes); //postRoutes will act as a middleware
// app.use(myOwnMiddleware);

// const {getRoutes} = require('./routes/post')

// app.get('/', getRoutes)

app.listen(8080, () => {
    console.log("Hello writing message on the console");
});



//Workflow
//post.js from routes will take the data from post.js from controllers and then that post.js(routes) will act as a middleware and 
//that we will use in the app.js