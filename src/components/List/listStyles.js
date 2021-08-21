import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: '30px',
	},
	formControlContainer: {
		display: 'flex',
	},
	formControlSubContainer: {
		width: '150px',
	},
	formControl: {
		margin: theme.spacing(1),
		// minWidth: 120,
		width: '150px',
		marginBottom: '30px',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	loading: {
		height: '600px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	marginBottom: {
		marginBottom: '30px',
	},
	list: {
		height: '75vh',
		overflow: 'auto',
	},
}));

export default useStyles;
