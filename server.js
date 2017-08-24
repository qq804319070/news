let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();

app.use(express.static("./public"));




app.listen(8080);
