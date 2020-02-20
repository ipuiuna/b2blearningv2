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
  },

  expandlessIcon: {
    marginTop: 8,
    transform: 'scale(1.6)'
  }
}));

export default useStyles;
