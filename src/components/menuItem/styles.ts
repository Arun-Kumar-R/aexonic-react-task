import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ItemWrapper: {
      width: '100%',
      height: '200px',
      display: 'flex',
      justifyContent: 'space-around',
      background: '#fff',
      padding: '20px',
      [theme.breakpoints.down(660)]: {
        alignItems: 'center',
        height: '150px'
      }
    },
    ItemContent: {
      paddingRight: '20px'
    },
    TradeMarkIcon: {
      width: '12px'
    },
    AddBtn: {
      width: '100px',
      height: '40px',
      background: '#fff',
      boxShadow: '1px 2px 3px #e6e6e6'
    },
    ItemTitle: {
      wordBreak: 'break-word',
      fontSize: '1.22rem',
      marginRight: '4px',
      marginTop: '14px',
      fontWeight: 500,
      color: '#3e4152',
      [theme.breakpoints.down(660)]: {
        fontSize: '1rem'
      }
    },
    ItemPrice: {
      marginTop: '14px',
      display: 'flex',
      alignItems: 'center'
    },
    ItemDescription: {
      wordBreak: 'break-word',
      marginTop: '14px',
      lineHight: '1.3px',
      fontSize: '1rem',
      color: '#3e4152',
      paddingBottom: '10px',
      [theme.breakpoints.down(660)]: {
        display: 'none'
      }
    },

    ItemImageWrapper: {},
    ItemImage: {
      width: '120px'
    },
    AddButtonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      top: '-20px',
      '& button': {
        width: '100px',
        boxShadow: '-2px 3px 4px 1px #e6e6e6',
        background: 'white',
        border: 'none',
        outline: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: '#60b246',
        '&:hover': {
          background: 'white'
        }
      }
    },
    ButtonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      top: '-20px'
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
