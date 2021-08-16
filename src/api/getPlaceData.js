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
					'x-rapidapi-key':
						'338008225amshb0aa44d81c441ddp1eac22jsn8a7f9b02990a',
					'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
				},
			}
		);
		return data;
	} catch (error) {
		console.error(error);
	}
};

export default getPlaceData;
