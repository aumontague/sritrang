const express = require('express')
const env = require('./config/env.json');
const app = express()
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const Database = require('./models/Database');

const connectDB = function(){
    this.mySQL = Database;
}

const _connectDB = new connectDB();
var _query = "select 'Connected Mysql DB' as cn";
_connectDB.mySQL.query(_query).then(function(r){
    console.log(r[0]["cn"]);
})

app.use((req, res, next) => {
    req.env         = env;
    req.dataPost    = req.body;
    req.mySQL       = _connectDB.mySQL;
    next()
})


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

require('./controllers/login.controller.js')(app);
require('./controllers/customer.controller.js')(app);
require('./controllers/employee.controller.js')(app);
require('./controllers/company.controller.js')(app);
require('./controllers/commodity.controller.js')(app);
require('./controllers/forwarder.controller.js')(app);
require('./controllers/terms.controller.js')(app);
require('./controllers/transshipment.controller.js')(app);
require('./controllers/polpod.controller.js')(app);
require('./controllers/liners.controller.js')(app);
require('./controllers/terminal.controller.js')(app);
require('./controllers/depots.controller.js')(app);
require('./controllers/container.controller.js')(app);
require('./controllers/vehicle.controller.js')(app);
require('./controllers/branch.controller.js')(app);
require('./controllers/transport.controller.js')(app);
require('./controllers/price.controller.js')(app);
require('./controllers/quotation.controller.js')(app);

http.listen(env.app.port, function() {
    console.log(env.app.url + ":" + env.app.port);
});