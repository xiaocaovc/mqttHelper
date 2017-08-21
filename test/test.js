var Mqtt = require("../index");
var server = new Mqtt({port:6088,ports:6188,SECURE_KEY:"./ssl/tls-key.pem",SECURE_CERT:"./ssl/tls-cert.pem"});
server.on('ready', function(){
	console.log('mqtt is running...');
});
server.on('clientConnected', function(client){
	console.log('client connected', client.id);
});
server.on('clientDisconnected', function(client){
	console.log('client disConnected: ' + client.id);
});
server.on('subscribed', function(topic, client){
	console.log('subscribed: clientId: '+client.id +",topic" + topic);
});

server.on('unSubscribed', function(topic, client){
	console.log('unSubscribed: clientId: '+client.id +",topic" + topic);
});
server.on('published',async function(packet, client) {
	if(client) {
		console.log('Published topic:', packet.topic);
	}
});