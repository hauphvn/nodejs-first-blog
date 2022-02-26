const express = require('express');
// const morgan = require('morgan');
const app = express();
const port = 4000;
const path = require('path');
const { engine } = require('express-handlebars');
const route = require('./routes/index');
route(app);

app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.use(express.urlencoded());
app.use(express.json());

// app.use(morgan('combined'));

app.listen(port, () => console.log(`listening at: port:${port} `));
