import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
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
