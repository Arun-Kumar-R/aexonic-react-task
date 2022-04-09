import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ItemWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0px',
      borderLeft: '3px solid #3e4152',
      paddingLeft: '5px'
    },
    TradeMarkIcon: {
      width: '12px'
    },
    ItemTitle: {
      width: '40%',
      wordBreak: 'break-word',
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#3e4152',
      padding: '0px 10px',
      [theme.breakpoints.up(1200)]: {
        width: '55%'
      }
    },
    RupeeIcon: {
      width: '16px !important'
    },
    ButtonWrapper: {
      display: 'flex',
      border: '1.5px solid #e6e6e6',
      height: '35px'
    },
    BtnDecrease: {
      width: '28px',
      height: '32px',
      background: 'white',
      border: 'none',
      outline: 'none',
      justifyContent: 'center',
      boxShadow: '-2px 3px 2px -2px #e6e6e6',
      alignItems: 'center',
      cursor: 'pointer'
    },
    ItemCount: {
      width: '28px',
      height: '32px',
      background: 'white',
      border: 'none',
      outline: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& span': {}
    },
    BtnIncrease: {
      width: '28px',
      height: '32px',
      background: 'white',
      border: 'none',
      outline: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    },
    ItemPrice: {
      padding: '0px 10px',
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#3e4152',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    BtnIconAdd: {
      fontSize: '18px !important',
      color: '#60b246'
    },
    BtnIconMinus: {
      fontSize: '18px !important',
      color: 'red'
    }
  })
);
