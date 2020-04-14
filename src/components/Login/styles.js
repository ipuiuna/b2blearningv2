import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loginLabel: {
    padding: '0 20px',
  },
  loginMessage: {
    marginTop: '24px',
    textAlign: 'left',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
  },
}));
export default useStyles;
