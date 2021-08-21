import axios from 'axios';

const getWeatherData = async (lat, lng) => {
	try {
		const { data } = await axios.get(
			'https://community-open-weather-map.p.rapidapi.com/find',
			{
				params: { lon: lng, lat: lat },
				headers: {
					'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
					'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
				},
			}
		);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export default getWeatherData;
