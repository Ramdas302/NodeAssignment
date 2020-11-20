const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
const sumassending= require('./controller/sum_assending');
app.use(bodyParser.json());
app.use('/api', sumassending);
app.listen(3000,() => console.log('server started at port 3000'))