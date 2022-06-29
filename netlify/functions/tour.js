// import axios from 'axios';

exports.handler = function (event, context) {
	console.log('event :>>', event);
	// console.log(event);
	// console.log(context);
	// try {
	// 	const { type, sw, ne } = event.queryStringParameters;
	// 	const {
	// 		data: { data },
	// 	} = await axios.get(
	// 		`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
	// 		{
	// 			params: {
	// 				bl_latitude: sw.lat,
	// 				tr_latitude: ne.lat,
	// 				bl_longitude: sw.lng,
	// 				tr_longitude: ne.lng,
	// 			},
	// 			headers: {
	// 				'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
	// 				'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
	// 			},
	// 		}
	// 	);
	// 	return data;
	// } catch (error) {
	// 	console.error(error);
	// }
	return process.env.REACT_APP_RAPIDAPI_KEY;
};
