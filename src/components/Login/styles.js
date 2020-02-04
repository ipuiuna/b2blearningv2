import { makeStyles } from '@material-ui/core/styles';
import muitheme from '../../Theme';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  paper: {
    height: 312,
    width: 300,
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 16
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  inicialContent: {
    marginLeft: 48
  },
  landingIcons: {
    color: muitheme.palette.primary.main
  },
  inputFields: {
    color: muitheme.palette.primary.main
  },
  brandGrid: {
    backgroundColor: muitheme.palette.primary.dark,
    paddingTop: 8,
    paddingBottom: 12,
    bottom: 0
  },
  linksGrid: {
    backgroundColor: muitheme.palette.primary.main,
    padding: '40px 0 40px 0'
  },
  linksGridItem: {
    marginRight: 60
  }
}));
export default useStyles;
