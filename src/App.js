import React, { Fragment, useState, useEffect } from 'react';
import getPlaceData from './api/getPlaceData.js';
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const App = () => {
	const [places, setPlaces] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
	const [bounds, setBounds] = useState({});
	const [childClicked, setChildClicked] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [type, setType] = useState('restaurants');
	const [rating, setRating] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		const filteredPlaces = places.filter(
			(place) => Number(place.rating) > rating
		);
		setFilteredPlaces(filteredPlaces);
	}, [rating]);

	useEffect(() => {
		setIsLoading(true);
		getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
			setPlaces(data);
			setFilteredPlaces([]);
			setIsLoading(false);
		});
	}, [type, coordinates, bounds]);

	return (
		<Fragment>
			<CssBaseline />
			<Header />

			<Grid container spacing={3} style={{ width: '100%' }}>
				<Grid item xs={12} md={4}>
					<List
						places={filteredPlaces.length ? filteredPlaces : places}
						childClicked={childClicked}
						isLoading={isLoading}
						type={type}
						setType={setType}
						rating={rating}
						setRating={setRating}
					/>
				</Grid>

				<Grid item xs={12} md={8}>
					<Map
						coordinates={coordinates}
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						places={filteredPlaces.length ? filteredPlaces : places}
						setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default App;
