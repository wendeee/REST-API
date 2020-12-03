const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', require('./routes/users'));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})