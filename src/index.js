const express = require('express');

const { port } = require('./utils/constants');

const app = express();

require('./config/express')(app);
require('./config/handlebars')(app);

app.listen(port, console.log.bind(console, `Server is running on http://localhost:${port}`));
