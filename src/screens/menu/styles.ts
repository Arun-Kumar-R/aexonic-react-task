import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    MenuPageWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '100px',
      [theme.breakpoints.down(940)]: {
        justifyContent: 'center'
      }
    },
    LoaderStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '100px',
      [theme.breakpoints.between(660, 940)]: {
        width: '80%',
        justifyContent: 'center'
      },
      [theme.breakpoints.down(660)]: {
        width: '100%',
        justifyContent: 'center'
      }
    },
    loader: {
      margin: '0 auto',
      position: 'sticky',
      top: '50%',
      [theme.breakpoints.down(940)]: {
        margin: '0 auto',
        position: 'sticky',
        top: '50%'
      }
    },
    ListItemsSection: {
      width: '60%',
      height: '80vh',
      overflowY: 'scroll',
      [theme.breakpoints.between(660, 940)]: {
        width: '80%'
      },
      [theme.breakpoints.down(660)]: {
        width: '100%'
      }
    },
    CartItemWrapper: {
      maxHeight: '40vh',
      height: 'auto',
      overflowY: 'scroll'
    },
    CartSection: {
      width: '35%',
      '& h2': {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: '#3e4152',
        padding: '20px 0px'
      },
      [theme.breakpoints.down(940)]: {
        display: 'none'
      }
    },
    CartItemCount: {
      marginBottom: '20px'
    },
    RupeeIcon: {
      width: '16px !important'
    },

    AmountSection: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      '& h3': {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1rem',
        '& span': {
          padding: '10px 0px'
        }
      },
      '& p': {
        padding: '0px 10px',
        fontSize: '0.9rem',
        fontWeight: 500,
        color: '#3e4152',
        display: 'flex',
        alignItems: 'center'
      }
    },
    CheckoutBtn: {
      width: '100%',
      height: '40px',
      marginTop: '20px'
    }
  })
);
