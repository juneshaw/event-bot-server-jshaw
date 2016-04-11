var db = require('./db.js');
var utilities = require('./utilities.js');
var create = require('./create.js');

module.exports =
{
// createActivities: function() {
//   // Get the groups that need to be scheduled
//   // console.log('groups to cr act:', groups);
//   this.groupsToSchedule();
//   // For each of the groups, create an activity
//
//   // groups.forEach(function(group) {
//   //   console.log('this group needs to be scheduled', group);
//
//     // Create the activity
//     // this.createActivity(group);
//   // })
//
// },

createActivities: function () {

  // Groups to schedule next
  var groups = [];
  // Lead time needed to build activity from the today to that day
  var leadDays = 20;

  // Get today's date to see what activities need to be built.
  var dateToday = new Date();

  // Get the Groups
  db.Groups().then(function(data) {

    // For each group, calculate the number of days left until the next activity date.
    data.forEach(function(group) {
      var dayDiff = utilities.dayDiff(dateToday, group.next_activity_date);

      // If the activity is within the lead time, put the group in the array to schedule
      if (dayDiff <= leadDays) {
        groups.push(group);
      }
    })

    // For each of the groups that need an activity scheduled, schedule those activities
    groups.forEach(function(group) {
      console.log('group: ', group);
      create.createActivity(group)
    })


  })
},
//
// createActivity: function(group) {
//   console.log('in createActivity with group of: ', group);
// }

};
