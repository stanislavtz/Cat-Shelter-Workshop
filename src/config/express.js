const express = require('express');
const path = require('path');
const router = require('../routes');

function expressConfig(app) {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended: true }));
    app.use(router);
}

module.exports = expressConfig;