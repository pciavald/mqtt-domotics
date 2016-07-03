const Messages = new Mongo.Collection('messages');
export default Messages;

Messages.before.insert(function (userId, doc) {
	doc.createdAt = Date.now();
});
