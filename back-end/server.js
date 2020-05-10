require('dotenv').config();
const express = require('express')
const app = express();
const helmet = require('helmet');

app.use(helmet());
// Deserve gzip
app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

if (process.env.NODE_ENV === 'production') {
    console.log(process.env.NODE_ENV === 'production' ? 'Server serve ../front-end/build' : 'Server dev' );
    app.use(express.static(path.resolve(__dirname, '../front-end/build/')))
}


// app.use('/public', express.static('public'));



// All remaining requests return the React app, so it can handle routing.
if (process.env.NODE_ENV === 'production') {
    console.log(process.env.NODE_ENV === 'production' ? 'Server redirect * except /api on ../front-end/build/' : 'Server dev' );
    app.get('*', function (request, response) {
        response.sendFile(path.resolve(__dirname, '../front-end/build/', 'index.html'));
    })
}

app.listen(process.env.SERVER_PORT, () => console.log(`Server has started on port ${process.env.SERVER_PORT}`));
