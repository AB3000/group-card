//  index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//aSK2gJ8ICMGOI8pL

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb+srv://test:aSK2gJ8ICMGOI8pL@cluster0-hetxl.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(error) {
      if (error) {
        console.log("Couldn't connect to database");
      } else {
        console.log("Connected To Database");
      }
    }
  );

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});