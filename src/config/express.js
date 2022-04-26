const express = require('express');
const path = require('path');

const router = require('../routes');
const { port } = require('../utils/constants');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended: true }));
    app.use(router);

    app.listen(port, console.log.bind(console, `Server is running on http://localhost:${port}`));
}

module.exports = expressConfig;