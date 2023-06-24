/** @type {import('next').NextConfig} */
var express = require('express')
var cors = require('cors')
var app = express()

// Define CORS options
const corsOptions = {
    origin: 'https://khongchai.github.io/SonThaiMaiDai', // Only allow requests
};
app.get('*', cors(corsOptions), function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for only khongchai.github.io/SonThaiMaiDai' })
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});