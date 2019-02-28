const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Games-api'))
app.get('/api', (req, res) => res.send('API version 1.0.0'))
app.get('/players', (req, res) => res.send('Hrvoje,Vlado,Matko,Bojan'))
app.get('/place', (req, res) => res.send('Dubec'))
app.get('/api/users', (req, res) => res.send('Vlado,Hrvoje,Matko'));
app.get('/api/teams', (req, res) => res.send({name:"Team 1", _id:"423643"}))
app.get('/api/games', (req, res) => res.send([{game:"Soccer"},{location:"Dubec"},{playerName:"Hrvoje"},{playerName:"Vlado"},{playerName:"Matko"},{playerName:"Bojan"}]))
app.get('/api/user', (req, res) => res.send([{ime:"Vlado", id:'12'}, {ime:"Hrvoje", id:'34'},{ime:"Matko", id:'56'},{ime:"Bojan", id:'78'}]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))