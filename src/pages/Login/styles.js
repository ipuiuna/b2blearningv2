import { makeStyles } from '@material-ui/core/styles';
import muitheme from '../../Theme';

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 312,
    width: 300,
    marginTop: 24,
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'center',
    width: '351px',
    height: '64px',
    ...theme.mixins.toolbar,
    backgroundColor: muitheme.palette.primary.main,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  landingIcons: {
    color: muitheme.palette.primary.main,
    marginBottom: '60px',
    paddingTop: '18px',
    transform: 'scale(4)',
  },
  landingIconsText: {
    marginTop: '28px',
    marginBottom: '8px',
  },
  inputFields: {
    color: muitheme.palette.primary.main,
  },
  brandGrid: {
    backgroundColor: muitheme.palette.primary.dark,
    paddingTop: 8,
    paddingBottom: 12,
    bottom: 0,
  },
  linksGrid: {
    backgroundColor: muitheme.palette.primary.main,
    padding: '40px 0 40px 0',
  },
  linksGridItem: {
    marginRight: 60,
  },
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
  ola: {
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '44px',
  },
  mLogo: {
    width: '70px',
    flexGrow: 1,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 0,
  },
  closeIcon: {
    color: '#fff',
  },
}));
export default useStyles;
