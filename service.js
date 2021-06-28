require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const employeeController = require('./controllers/employeeController');
var app = express();

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.use('/employee',employeeController);     //add route for employee controller (middleware function)
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () =>{
    console.log("Server started at port 3000")
});

