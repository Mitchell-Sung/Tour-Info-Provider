import React, { useState, useEffect, createRef, Fragment } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './listStyles.js';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const List = ({
	places,
	childClicked,
	isLoading,
	type,
	setType,
	rating,
	setRating,
}) => {
	const classes = useStyles();

	const [elementRefs, setElementRefs] = useState([]);

	useEffect(() => {
		setElementRefs((refs) =>
			Array(places?.length)
				.fill()
				.map((_, i) => refs[i] || createRef())
		);
	}, [places]);

	return (
		<div className={classes.container}>
			<Typography variant='h6'>
				Restaurants, Hotels & Attractions around Mitchell
			</Typography>

			{isLoading ? (
				<div className={classes.loading}>
					<CircularProgress size='5rem' />
				</div>
			) : (
				<Fragment>
					<div className={classes.formControlContainer}>
						<div className={classes.formControlSubContainer}>
							<FormControl className={classes.formControl}>
								<InputLabel>Type</InputLabel>
								<Select value={type} onChange={(e) => setType(e.target.value)}>
									<MenuItem value='restaurants'>Restaurants</MenuItem>
									<MenuItem value='hotels'>Hotels</MenuItem>
									<MenuItem value='attractions'>Attractions</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div className={classes.formControlSubContainer}>
							<FormControl className={classes.formControl}>
								<InputLabel>Rating</InputLabel>
								<Select
									value={rating}
									onChange={(e) => setRating(e.target.value)}
								>
									<MenuItem value={0}>All</MenuItem>
									<MenuItem value={3}>Above 3.0</MenuItem>
									<MenuItem value={4}>Above 4.0</MenuItem>
									<MenuItem value={4.5}>Above 4.5</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>
					<Grid container spacing={3} className={classes.list}>
						{places?.map((place, i) => (
							<Grid item key={i} xs={12}>
								<PlaceDetails
									place={place}
									selected={Number(childClicked) === i}
									refProp={elementRefs[i]}
								/>
							</Grid>
						))}
					</Grid>
				</Fragment>
			)}
		</div>
	);
};

export default List;
