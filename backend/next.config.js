/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

var express = require('express')
var cors = require('cors')
var app = express()
var whitelist = ['https://khongchai.github.io/SonThaiMaiDai']

// Define CORS options
const corsOptions = {
    origin: 'https://example.com', // Only allow requests from example.com
};
app.get('*', cors(corsOptions), function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for only example.com.' })
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});