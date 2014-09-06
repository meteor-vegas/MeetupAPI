  Session.setDefault("counter", 0);

  Template.meetup.rendered = function(){}

  Template.meetup.events({
    'click .getOpenEvents': function () {
    	Meteor.call('MeetupAPI','getOpenEvents',{"sign":"true","zip": "89139","pages":"1"}, function(err, response) {
			console.log('Response: ' + JSON.stringify(response)+" Error: "+ JSON.stringify(err));
		});
      Session.set("counter", Session.get("counter") + 1);
    },
    'click .getMembers': function () {
    	Meteor.call('MeetupAPI','getMembers',{"group_urlname": "Meteor-Las-Vegas"}, function(err, response) {
			console.log('Response: ' + JSON.stringify(response)+" Error: "+ JSON.stringify(err));
		});
      Session.set("counter", Session.get("counter") + 1);
    },
    'click .getGroups': function () {
    	Meteor.call('MeetupAPI','getGroups',{"organizer_id": "54118672"}, function(err, response) {
			console.log('Response: ' + JSON.stringify(response)+" Error: "+ JSON.stringify(err));
		});
      Session.set("counter", Session.get("counter") + 1);
    }    
    
  });
