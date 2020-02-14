import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  successMessage: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '29px',
    color: '#532C1B',
    marginBottom: '32px'
  },
  goodByeMessage: {
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 700,
    color: '#825542',
    marginBottom: '32px'
  },
  successImg: {
    marginBottom: '32px'
  },
  typoButton: { padding: '4px 0' }
}));

export default useStyles;
