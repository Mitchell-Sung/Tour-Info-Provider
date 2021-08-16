import React from 'react';

import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';

import useStyles from './mapStyles.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

dotenv.config();

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(min-width:600px)');
	const isDesktop = useMediaQuery('(min-width:600px)');

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
			>
				{places?.map((place, i) => (
					<div
						className={classes.markerContainer}
						lat={Number(place.latitude)}
						lng={Number(place.longitude)}
						key={i}
					>
						{!isDesktop ? (
							<LocationOnOutlinedIcon color='primary' fontSize='large' />
						) : (
							<Paper elevation={3} className={classes.paper}>
								<Typography
									variant='subtitle2'
									gutterBottom
									className={classes.typography}
								>
									{place.name}
								</Typography>
								<img
									className={classes.pointer}
									src={
										place.photo
											? place.photo.images.large.url
											: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
									}
									alt={place.name}
								/>
								<Rating
									size='small'
									name='read-only'
									value={Number(place.rating)}
									readOnly
								/>
							</Paper>
						)}
					</div>
				))}
			</GoogleMapReact>
		</div>
	);
};

export default Map;
