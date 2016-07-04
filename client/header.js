Template.header.onRendered(function () {
	this.$('.datetimepicker').datetimepicker();
})

Template.time.events({
	"click #search-time": function (event) {
		event.preventDefault();
		var time = [
			new Date($("#from").val()),
			new Date($("#to").val())
		];
		Session.set("filter-time", time);
	},
	"click #clear-time": function (event) {
		event.preventDefault();
		$("#from").val("");
		$("#to").val("");
		Session.set("filter-time", undefined);
	}
});

Template.search.events({
	"click #search-topic": function (event) {
		event.preventDefault();
		var topicName= $("#topic-name").val();
		if (topicName != "")
			Session.set("filter-topic", topicName);
	},
	"click #clear-topic": function (event) {
		event.preventDefault();
		$("#topic-name").val("");
		Session.set("filter-topic", undefined);
	}
});

