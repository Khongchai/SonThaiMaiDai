/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig
var express = require('express')
var cors = require('cors')
var app = express()
var whitelist = ['https://khongchai.github.io/SonThaiMaiDai']
var corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.get('*', cors(corsOptions), function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for only example.com.' })
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});