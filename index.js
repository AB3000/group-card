const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/Card');

const app = express();

mongoose.Promise = global.Promise;
//AleWnwNIz7PMR8rN

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb+srv://test:AleWnwNIz7PMR8rN@cluster0-vvmb2.mongodb.net/card-data?retryWrites=true&w=majority",
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

//IMPORT ROUTES
require('./routes/cardRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});