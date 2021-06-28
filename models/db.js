const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const DB_NAME = process.env.DB_NAME;
mongoose.connect(DB_NAME, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');