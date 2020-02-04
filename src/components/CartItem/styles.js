import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  titleMargin: {
    marginBottom: 16
  },
  paper: {
    padding: 8,
    marginBottom: 16,
    maxWidth: 395
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
    width: 50,
    alignSelf: 'center',
    padding: 2
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  image: {
    width: 100,
    height: 100
  }
});

export default useStyles;
