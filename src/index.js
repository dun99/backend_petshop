const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
var morgan = require('morgan');
var cors = require('cors');
const route = require('./routes');

const db = require('./config/db/index');

// connect DB
db.connect();

// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
