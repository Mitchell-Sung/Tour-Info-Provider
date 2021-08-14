import React from 'react';

import useStyles from './headerStyles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='static'>
			<Toolbar className={classes.toolbar}>
				<Typography className={classes.title} variant='h5'>
					Travel Guide
				</Typography>
				<Box display='flex'>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search...'
							classes={{ root: classes.inputRoot, input: classes.inputInput }}
						/>
					</div>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;

// #009688
