import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    SummaryWrapper: {
      padding: '20px',
      width: '40%',
      height: '300px',
      boxShadow: '1px 2px 3px 4px #e6e6e6',
      [theme.breakpoints.between(660, 940)]: {
        width: '80%',
        marginBottom: '30px'
      },
      [theme.breakpoints.down(660)]: {
        width: '100%',
        marginBottom: '30px'
      }
    },
    RupeeIcon: {
      width: '16px !important'
    },
    amount: {
      display: 'flex',
      alignItems: 'center'
    },
    Totalamount: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '& span': {
        display: 'flex',
        alignItems: 'center',
        '&:first-child': {
          fontSize: '12px'
        },
        '&:last-child': {
          fontSize: '18px'
        }
      }
    },
    SummaryContent: {},
    SummaryTitle: {
      marginBottom: '20px'
    },
    SubItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      '&:first-child': {
        marginTop: '20px'
      },
      '&:last-child': {
        marginTop: '20px',
        marginBottom: '0px'
      }
    },
    CheckoutBtn: {
      width: '100%',
      height: '40px',
      marginTop: '20px'
    }
  })
);
