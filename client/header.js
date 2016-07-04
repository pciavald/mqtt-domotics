Template.header.rendered = function () {
	$('#date-from').datepicker();
	$('#date-to').datepicker();
}

Template.header.events({
	"click #topic": function (event) {
		event.preventDefault();
		Session.set("filter", $("#topic-name").val());
	},
	"click #clear": function (event) {
		event.preventDefault();
		Session.set("filter", undefined);
		$("#topic-name").val("");
	}
});

