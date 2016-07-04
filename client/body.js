Template.body.rendered = function() {
	Meteor.subscribe("messages");
}
