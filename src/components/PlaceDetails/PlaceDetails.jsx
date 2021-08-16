import React from 'react';

import useStyles from '../PlaceDetails/placeDetailsStyles.js';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import CardActions from '@material-ui/core/CardActions';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

const PlaceDetails = ({ place }) => {
	console.log('place props :>> ', place);
	const classes = useStyles();

	return (
		<Card elevation={6}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
				}
				title={place.name}
			/>
			<CardContent>
				<Typography variant='h5' gutterBottom>
					{place.name}
				</Typography>

				<Box display='flex' justifyContent='space-between'>
					<Typography variant='subtitle1'>Price</Typography>
					<Typography variant='subtitle1' gutterBottom>
						{place.price_level}
					</Typography>
				</Box>

				<Box display='flex' justifyContent='space-between'>
					<Typography variant='subtitle1'>Ranking</Typography>
					<Typography variant='subtitle1' gutterBottom>
						{place.ranking}
					</Typography>
				</Box>

				{place?.awards?.map((award) => (
					<Box
						my={1}
						display='flex'
						justifyContent='space-between'
						alignItems='center'
					>
						<img src={award.images.small} alt={award.display_name} />
						<Typography variant='subtitle2' color='textSecondary'>
							{award.display_name}
						</Typography>
					</Box>
				))}

				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size='small' label={name} className={classes.chip} />
				))}

				{place?.address && (
					<Typography
						variant='subtitle2'
						color='textSecondary'
						gutterBottom
						className={classes.subtitle}
					>
						<LocationOnIcon />
						{place.address}
					</Typography>
				)}

				{place.phone && (
					<Typography
						variant='subtitle2'
						color='textSecondary'
						className={classes.spacing}
					>
						<PhoneIcon /> {place.phone}
					</Typography>
				)}
			</CardContent>

			<CardActions>
				<Button
					color='primary'
					size='small'
					onClick={() => window.open(place.web_url, '_blank')}
				>
					Travel Guide
				</Button>
				<Button
					color='primary'
					size='small'
					onClick={() => window.open(place.website, '_blank')}
				>
					Website
				</Button>
			</CardActions>
		</Card>
	);
};

export default PlaceDetails;
