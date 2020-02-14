import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  stepperTitle: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  button: {
    marginRight: theme.spacing(1),
    maxWidth: '290px'
  },
  buttonBack: {
    marginRight: theme.spacing(1),
    maxWidth: '290px'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default useStyles;
