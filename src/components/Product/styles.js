import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxWidth: '266px',
    margin: '8px',
    backgroundColor: '#fff',
    alignContent: 'space-around',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 0px',
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  },
  textField: {
    padding: 16,
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  typographyQuantityBox: {
    textAlign: 'center'
  },
  buttonStyled: {
    width: 80,
    alignSelf: 'center',
    padding: 5
  }
}));
export default useStyles;
