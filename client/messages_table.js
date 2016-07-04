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
		var nullDate = new Date(0).getTime();
		if (filter.topic != undefined)
			search.topic = filter.topic;
		if (filter.time != undefined) {
			if (filter.time[0].getTime() != nullDate
			 || filter.time[1].getTime() != nullDate) {
				search.createdAt = {};
				if (filter.time[0].getTime() !== nullDate)
					search.createdAt["$gte"] = filter.time[0].getTime();
				if (filter.time[1].getTime() !== nullDate)
					search.createdAt["$lte"] = filter.time[1].getTime();
			}
		}
		console.log(search);
		return (Messages.find(search).fetch());
	}
});
