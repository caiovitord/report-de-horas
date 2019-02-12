var path = require('path');
var app = require(path.resolve(__dirname, '../server'));


var dataSource = app.dataSources.postgree_db_datasource;

dataSource.automigrate().then(function(err) {});


