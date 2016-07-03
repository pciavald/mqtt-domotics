import Messages from '/shared/messages.js'

Template.body.rendered = function() {
	/*
	 * https://bootstrap-datepicker.readthedocs.io/en/latest/
	 */
	$('#date-from').datepicker();
	$('#date-to').datepicker();
	Session.set("rowNumber", 1)
}

Template.body.helpers({
	"messages": function () {
		var filter = Session.get("filter");
		if (filter == undefined)
			return (Messages.find({}).fetch());
		else
			return (Messages.find({topic: filter}).fetch());
	}
});

Template.body.events({
	"click #topic": function (event) {
		event.preventDefault();
		Session.set("filter", $("#topic-name").val());
	},
	"click #clear": function (event) {
		event.preventDefault();
		Session.set("filter", undefined);
	}
});

Template.message.helpers({
	"getDate": function (object) {
		return (new Date(object.createdAt));
	}
	/*
	,
	"rowNumber": function () {
		Session.set("rowNumber", Session.get("rowNumber") + 1);
		return (Session.get("rowNumber") - 1);
	}
	*/
});
