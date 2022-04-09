import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    CartPageWrapper: {
      marginTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down(940)]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    CartList: {
      width: '55%',
      [theme.breakpoints.between(660, 940)]: {
        width: '80%',
        marginBottom: '30px'
      },
      [theme.breakpoints.down(660)]: {
        width: '100%',
        marginBottom: '30px'
      }
    },
    EmptyCartImage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '55%',
      [theme.breakpoints.between(660, 940)]: {
        width: '80%',
        marginBottom: '30px'
      },
      [theme.breakpoints.down(660)]: {
        width: '100%',
        marginBottom: '30px'
      }
    },
    cartHeader: {
      marginTop: '120px',
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center'
    },
    ClearIcon: {
      color: 'red'
    }
  })
);
