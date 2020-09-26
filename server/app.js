const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose")
const app = express();

mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser:  true, useUnifiedTopology: true })
mongoose.connection.once("open",()=>{
    console.log("connected to database")
})
new Promise(() => { throw new Error(); });
mongoose.set('useCreateIndex', true);
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
 
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
 