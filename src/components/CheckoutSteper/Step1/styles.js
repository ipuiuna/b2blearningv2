import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  table: {
    border: 'none'
  },
  tableTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 11
    }
  },
  tableCell: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 10
    }
  }
}));

export default useStyles;
