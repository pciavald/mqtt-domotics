Template.body.onRendered(function() {
	Meteor.subscribe("messages");
})
