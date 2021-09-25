const exprees = require("express");
const {graphqlHTTP} = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require('mongoose');
const cors = require('cors');


const app = exprees();

//allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://danny1:1234danny@cluster0.pqiu2.mongodb.net/test')

mongoose.connection.once('open', () => {
    console.log("Connected to mongodb");
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () =>{
    console.log("Server running on 4000");
})






























// const express = require("express");
// const {graphqlHTTP} = require('express-graphql');
// const schema = require("./schema/schema");



// const app = express();

// app.get("/", (req,res) => {
//     res.send(`<h1>GraphQL</h1>`)
// })

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }))

// app.listen(4000, () => {
//     console.log("Server Started on port 4000");
// })