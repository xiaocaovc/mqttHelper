var Mosca = require('mosca');
const _ = require('lodash');

const defaultOptions = {
	port: 0,
	ports: 0,
	httpPort: 0,
	httpsPort: 0,
	SECURE_KEY:"",
	SECURE_CERT:""
};
var MQTT =   function(options){
	options = _.merge({}, defaultOptions, options);
	options = {
		port: options.port,
		stats: false,
		http: {
			port: options.httpPort,
			bundle: true,
			static: './'},
		https: {
			port: options.httpsPort,
			bundle: true,
			static: './'
		},
		secure : {
			port: options.ports,
			keyPath: options.SECURE_KEY,
			certPath: options.SECURE_CERT,
		},
		allowNonSecure:true
	};
	if(options.port == 0){
		delete options.port;
	}
	if(options.http.port == 0){
		delete options.http;
	}
	if(options.https.port == 0){
		delete options.https;
	}
	if(options.secure.port == 0){
		delete options.secure;
	}
	var server = new Mosca.Server(options);
	return server;
};
module.exports = MQTT;