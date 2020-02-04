import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1),
    paddingTop: 10,
    paddingBottom: 10,
    width: '290px'
  },
  buttonBack: {
    marginRight: theme.spacing(1),
    paddingTop: 10,
    paddingBottom: 10,
    width: '290px'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default useStyles;