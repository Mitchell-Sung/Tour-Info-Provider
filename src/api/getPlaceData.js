import axios from 'axios';

const getPlaceData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					tr_latitude: ne.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
				},
				headers: {
					'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
					'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
				},
			}
		);
		console.log(`data`, data);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export default getPlaceData;
