var mqtt = require('mqtt');

var options = {
	host:"127.0.0.1",
	port:6188,
	rejectUnauthorized: false
};


var client = mqtt.connect('mqtts://' + options.host,options);

client.on('connect', function () {
	client.subscribe('presence');
	client.publish('presence', 'Hello mqtts');
});

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(message.toString());
	client.end();
});