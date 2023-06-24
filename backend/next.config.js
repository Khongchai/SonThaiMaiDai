/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [{
            source: '/(.*)', // Match all pages
            headers: [{
                key: 'Access-Control-Allow-Origin',
                value: 'https://khongchai.github.io/SonThaiMaiDai', // Allow requests from this origin
            }, ],
        }, ];
    },
};

// var express = require('express')
// var cors = require('cors')
// var app = express()

// // Define CORS options
// const corsOptions = {
//     origin: 'https://khongchai.github.io/SonThaiMaiDai', // Only allow requests
// };
// app.use(cors(corsOptions));
// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });