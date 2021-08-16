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

const Map = ({ coordinates, setCoordinates, setBounds }) => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				// bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_NO }}
				bootstrapURLKeys={{ key: 'AIzaSyCTETnLqC_WiZzs4vvDsqNNL-RKNMRwBkI' }}
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={18}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={(e) => {
					console.log('map onChange event :>> ', e);
					setCoordinates({ lat: e.center.lat, lng: e.center.lng });
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
				}}
				onChildClick={''}
			></GoogleMapReact>
		</div>
	);
};

export default Map;
