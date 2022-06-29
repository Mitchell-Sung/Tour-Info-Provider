exports.handler = function (event, context) {
	console.log('event :>>', event);
	console.log('context :>>', context);
	return process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
};
