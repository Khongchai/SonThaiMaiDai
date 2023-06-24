/** @type {import('next').NextConfig} */
var express = require('express')
var cors = require('cors')
var app = express()

// Define CORS options
const corsOptions = {
    origin: 'https://khongchai.github.io/SonThaiMaiDai', // Only allow requests
};
app.use(cors(corsOptions));
app.listen(3000, () => {
    console.log('Server started on port 3000');
});