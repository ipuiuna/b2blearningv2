import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  card: {
    display: 'flex',
    maxWidth: '266px',
    minHeight: 'calc(100% - 20px)',
    margin: '12px',
    backgroundColor: '#fff',
    alignContent: 'space-around',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 0px'
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
});
export default useStyles;
