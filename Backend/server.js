const express = require('express')
const path = require('path');
const { ppid } = require('process');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(3306, () => console.log('Server started at http://localhost:3306'))