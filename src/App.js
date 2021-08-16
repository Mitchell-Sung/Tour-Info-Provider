import React, { Fragment, useState, useEffect } from 'react';

import getPlaceData from './api/getPlaceData.js';

import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

const App = () => {
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
	const [bounds, setBounds] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinates({ lat: latitude, lng: longitude });
			}
		);
		console.log(`current coordinates, bounds`, coordinates, bounds);
	}, []);

	// modify await syntax
	useEffect(() => {
		console.log(`coordinates, bounds`, coordinates, bounds);

		getPlaceData(bounds.sw, bounds.ne).then((data) => {
			console.log(`getPlaceData`, data);
			setPlaces(data);
		});
	}, [coordinates, bounds]);

	return (
		<Fragment>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: '100%' }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map
						coordinates={coordinates}
						setCoordinates={setCoordinates}
						setBounds={setBounds}
						places={places}
					/>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default App;
