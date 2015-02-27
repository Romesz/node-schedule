// https://github.com/mattpat/node-schedule

var schedule = require('node-schedule');

/*
var date = new Date(2015, 02, 27, 12, 21, 0);

console.log(date);

var j = schedule.scheduleJob(date, function(){
    console.log('The world is going to end today.');
});

//j.cancel();  //to cancel it
*/


var rule = new schedule.RecurrenceRule();
rule.minute = 25;

var j = schedule.scheduleJob(rule, function(){
  console.log('The function every hour at 25 minutes after the hour!');
  console.log(new Date());  
});