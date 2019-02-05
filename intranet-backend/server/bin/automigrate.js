var path = require('path');
var app = require(path.resolve(__dirname, '../server'));


/*
var developers_insert = [
  {
    name: 'Caio Vitor Gobira Damasceno',
    email: 'caiovitor.gobira@gmail.com',
    password: 'pass'
  }
];

var hour_insert = [
  {
    hours: 10,
    date: new Date(),
    percentCompleted: 10,
    developers: [1]    
  }
];

*/
var dataSource = app.dataSources.postgree_db_datasource;


dataSource.automigrate().then(function(err) {/*

  if (err) console.log(err);

  var HourReport = app.models.HourReport;
  var count = hour_insert.length;

  hour_insert.forEach(function(dev) {
    HourReport.create(dev, function(err, record) {
      if (err) return console.log(err);
      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });

  var Developer = app.models.Developer;
  count = developers_insert.length;

  developers_insert.forEach(function(dev) {
    Developer.create(dev, function(err, record) {
      if (err) return console.log(err);
      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });

*/
});


