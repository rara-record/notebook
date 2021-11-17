const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser : true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))