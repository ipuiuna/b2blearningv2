import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  successMessage: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '29px',
    color: '#532C1B',
    marginBottom: '32px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      lineHeight: '18px'
    }
  },
  goodByeMessage: {
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 700,
    color: '#825542',
    marginBottom: '32px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
      lineHeight: '20px'
    }
  },
  successImg: {
    maxWidth: '100%',
    marginBottom: '32px',
    textAlign: 'center'
  },
  typoButton: { padding: '4px 0' },
  img: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '70%'
    }
  }
}));

export default useStyles;
