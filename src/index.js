const express = require('express');

const app = express();

require('./config/handlebars')(app);
require('./config/express')(app);