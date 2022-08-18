const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extends: false}));


app.use(require('./routes/index'));

app.listen(1234);
console.log('server on port 1234');