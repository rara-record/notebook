const bodyParser = require('body-parser');

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : true}));

// application/json
app.use(express.json());

