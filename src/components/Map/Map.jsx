import React from 'react';

import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';

import useStyles from './mapStyles.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

dotenv.config();

const Map = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');

	const coordinatess = { lat: 0, lng: 0 };

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_NO }}
				defaultCenter={coordinatess}
				center={coordinatess}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={''}
				onChildClick={''}
			></GoogleMapReact>
		</div>
	);
};

export default Map;
