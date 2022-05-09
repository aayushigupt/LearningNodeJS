// const {add} = require("./helpers") //object destructuring
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Hello world from nodejs real update"); //to end a response
// })

// server.listen(3000);

// console.log("Total", add(2, 4));


// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send("Hello there I am using express")
// })

// app.listen(3000)

//event loop

const fs = require('fs')
const fileName = 'target.txt'

// fs.watch(fileName, () => {
//     console.log("changed!");
// })

//nodejs is a multithreaded blocking model
//all the events are kept in stack


// fs.readFile(fileName, (err, data) => {
//     if(err) {
//         console.log(err);
//     } 

//     console.log(data.toString());
// })

// console.log("Node js program working!");

// as file reading would take longer time thats why left over code starts running
//asynchronous programming
//all the events will be executed in a stack
//single threaded
//they will be executed one by one without waiting for one to complete


const data = fs.readFileSync(fileName);
console.log(data.toString());

console.log("Node js program working!");

//synchronous program will run

