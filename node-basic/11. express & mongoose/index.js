const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bora:ssd10237879@bolierplate.oewiw.mongodb.net/bora?retryWrites=true&w=majority', {
  useUnifiedTopology: true, useNewUrlParser: true
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hi'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))