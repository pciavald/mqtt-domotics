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
