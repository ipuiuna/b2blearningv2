import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.primary.main
  },
  list: {
    width: 300
  },
  root: {
    flexGrow: 1
  },
  logo: {
    height: '43px'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  total: {
    justifyContent: 'center',
    padding: '0px'
  },
  buttonMargin: {
    marginRight: '10px'
  },
  finalizarButton: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: '#BD7900'
    },
    width: 'auto',
    height: 40
  }
}));

export default useStyles;
