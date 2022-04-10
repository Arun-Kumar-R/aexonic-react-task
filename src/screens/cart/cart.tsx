import { FC } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import SummaryTable from '../../components/summaryTable/summaryTable';
import { useStyles } from './styles';
import { CartState } from '../../context/context';

const CartPage: FC = () => {
  const classes = useStyles();

  const {
    state: { cart },
    dispatch
  } = CartState();

  const handleClearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
      payload: []
    });
  };

  return (
    <>
      {cart?.length > 0 ? (
        <Container>
          <div className={classes.cartHeader}>
            <h2>Items in your cart</h2>
            {cart?.length > 0 && (
              <Button
                variant="outlined"
                startIcon={<ClearIcon className={classes.ClearIcon} />}
                onClick={handleClearCart}>
                Clear
              </Button>
            )}
          </div>

          <div className={classes.CartPageWrapper}>
            <div className={cart?.length > 0 ? classes.CartList : classes.EmptyCartImage}>
              {cart?.length > 0 &&
                cart.map((item: any, index: number) => <CheckoutItem item={item} key={index} />)}
            </div>
            <SummaryTable />
          </div>
        </Container>
      ) : (
        <div className={classes.EmptyWrapper}>
          <h2 className={classes.noItemFound}>No items found in your cart</h2>
          <Link to="/" className={classes.MenuLink}>
            Go To Menu Page
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
