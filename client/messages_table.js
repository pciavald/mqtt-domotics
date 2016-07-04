import Messages from '/shared/messages.js'

Template.messages_table.rendered = function () {
	Session.set("rowNumber", 1)
}

Template.messages_table.helpers({
	"messages": function () {
		var filter = Session.get("filter");
		if (filter == undefined)
			return (Messages.find({}).fetch());
		else
			return (Messages.find({topic: filter}).fetch());
	}
});
