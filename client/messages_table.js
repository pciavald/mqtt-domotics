import Messages from '/shared/messages.js'

Template.messages_table.rendered = function () {
	Session.set("rowNumber", 1)
}

Template.messages_table.helpers({
	"messages": function () {
		var filter = {
			topic:	Session.get("filter-topic"),
			time:	Session.get("filter-time")
		};
		var search = {};
		if (filter.topic != undefined)
			search.topic = filter.topic;
		if (filter.time != undefined) {
			if (filter.time[0].getTime() != 0
			 || filter.time[1].getTime() != 0) {
				search.createdAt = {};
				if (filter.time[0].getTime() != 0)
					search.createdAt["$gte"] = filter.time[0].getTime();
				if (filter.time[1].getTime() != 0)
					search.createdAt["$lte"] = filter.time[1].getTime();
			}
		}
		return (Messages.find(search).fetch());
	}
});
