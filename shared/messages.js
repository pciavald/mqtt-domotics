const Messages = new Mongo.Collection('messages');
export default Messages;

if (Meteor.isServer)
{
	// add the creation date to the message document
	Messages.before.insert(function (userId, doc) {
		doc.createdAt = Date.now();
	});

	Meteor.publish("messages", function () {
		return (Messages.find({}));
	});
}
