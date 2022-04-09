import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    headerWrapper: {
      background: '#fff',
      boxShadow: '2px 3px 4px #e6e6e6',
      height: '75px',
      position: 'fixed',
      width: '100%',
      top: '0px',
      zIndex: 1
    },
    innerWrapper: {
      height: '75px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    BrandLogo: {},
    active: {
      color: '#60b246 !important'
    },
    NavMenu: {
      '& a': {
        padding: '0px 15px',
        fontSize: '1rem',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#3b3b3b'
      }
    }
  })
);
