import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		padding: '25px',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
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
