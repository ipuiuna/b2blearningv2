import { makeStyles } from '@material-ui/core/styles';
import muitheme from '../../Theme';

const useStyles = makeStyles(theme => ({
  brandGrid: {
    backgroundColor: muitheme.palette.primary.dark,
    paddingTop: 8,
    paddingBottom: 12,
    bottom: 0
  },
  linksGrid: {
    backgroundColor: muitheme.palette.primary.main,
    paddingTop: '20px'
  },
  linksSet: {
    marginBottom: '20px'
  }
}));

export default useStyles;
