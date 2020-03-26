require('dotenv').config();

const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);

app.use(express.static('./views'));
app.use('/data', express.static('./data'));
app.use('/scripts', express.static('./js'));
app.use('/styles', express.static('./css'));

app.get('/projects', (_, res) => {
    res.render('projects.html');
});

app.listen(process.env.APP_PORT || 8080);