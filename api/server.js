'use strict';

var express = require('express'),
    app = express(),
    port = 3001,
    cors = require('cors'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//routes for shopping items
var routes = require('./routes/shoppingItemRoute');
routes(app);

// handle not found route
app.use(function (req, res) {
    res
        .status(404)
        .send({
            url: req.originalUrl + ' not found'
        })
});

app.listen(port);

console.log('Shopping Item RESTful API server started on: ' + port);
