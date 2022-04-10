import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    TradeMarkIcon: {
      width: '12px'
    },
    ItemWrapper: {
      display: 'flex',
      padding: '20px 10px'
    },
    CartImage: {
      '& img': {
        width: '90px',
        [theme.breakpoints.down(600)]: {
          width: '60px'
        }
      }
    },
    CartContent: {
      display: 'grid',
      alignContent: 'space-between'
    },
    CartTopItem: {
      display: 'flex',
      alignItems: 'center',
      '& h3': {
        padding: '0px 20px',
        wordBreak: 'break-word',
        width: '300px',
        fontSize: '1rem',
        [theme.breakpoints.between(600, 1200)]: {
          width: '250px',
          marginBottom: '30px'
        },
        [theme.breakpoints.down(600)]: {
          width: '50%',
          marginBottom: '30px',
          padding: '0px 10px'
        },
        '& img': {
          marginRight: '8px'
        }
      }
    },
    CartBottomItem: {
      marginLeft: '20px',
      '& button': {
        height: '34px',
        fontSize: '10px',
        color: '#999696',
        border: '0px',
        backgroundColor: '#ebebeb'
      }
    },
    ButtonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginRight: '20px',
      [theme.breakpoints.down(600)]: {
        marginRight: '2px'
      }
    },
    RupeeIcon: {
      width: '16px !important'
    },
    BtnDecrease: {
      width: '34px',
      height: '40px',
      boxShadow: '-2px 3px 4px 1px #e6e6e6',
      background: 'white',
      border: 'none',
      outline: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    },
    ItemCount: {
      width: '34px',
      height: '40px',
      boxShadow: '2px 4px 4px 0px #e6e6e6',
      background: 'white',
      border: 'none',
      outline: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& span': {}
    },
    BtnIncrease: {
      width: '34px',
      height: '40px',
      boxShadow: '2px 3px 4px 0px #e6e6e6',
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
    RemoveIcon: {
      fontSize: '16px !important'
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
