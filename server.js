const express = require('express');

const app = express();
const log = console.log;

const PORT = 8080;

app.get('/',(req,res)=> {
    res.send('Hello!')
})

app.listen(PORT,() => {
    log('Server running in 8080')
})