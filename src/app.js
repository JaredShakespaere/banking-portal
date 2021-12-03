
const fs = require('fs');
const express = require('express');
const path = require('path');
const { accounts, users, writeJSON } = require('./data');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');
const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/profile', (req,res) => {
    res.render('profile', { user: users[0] })
})

app.get('/', (req, res) => {
    res.render('index', { title: 'Account Summary', accounts: accounts })
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.listen(3000, ()=> {
    console.log(`listening on port 3000`)
});