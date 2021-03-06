const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
       <head>
            <style>
            h1 {
                color: red;
            }
        </style>
        </head>
        <body>
            <h1>Hello</h1>
            <h2>Welcome to my server</h2>
            <img src="/logo">
        </body>
    </hrtml>
    `)
})

app.get('/x', (req, res) => {
    res.send('Welcome in my server');
})

app.get('/logo', (req, res) => {
    res.sendFile(__dirname + '/google-logo.png');
})

app.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
})

app.get('/example', (req, res) => {

    request('https://example.com', (err, resp, body) => {
        res.send(body);
    })
})

app.get('/hello/:name/greeting', (req, res) => {
    console.log(req.params);
    res.send('Hello ' + req.params.name);
})

app.get('/greet/:name/:greeting', (req, res) => {
    console.log(req.params)
    let greeting = (req.params.greeting)
    res.send(` Good ${greeting} ${req.params.name}`)
})

app.get('/greet', (req, res) => {
    console.log(req.query);

    let name = 'Guest';
    if (req.query.name) {
        name = req.query.name;
    }
    let greeting = 'Hello';
    if (req.query.greeting) {
        greeting = req.query.greeting;
    }

    res.send(`${greeting} ${name}`)
})

app.listen(3333, () => {
    console.log('server started');
})

app.listen(3334, () => {
    console.log('server started')
})