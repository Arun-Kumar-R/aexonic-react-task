import { Button, Container } from '@material-ui/core';
import { FC } from 'react';
import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import SummaryTable from '../../components/summaryTable/summaryTable';
import { getItems } from '../../util/helpers';
import { useStyles } from './styles';
import EmptyCartImage from '../../assets/Images/empty-cart.png';
import { CART_ITEMS } from '../../config/config';
import ClearIcon from '@mui/icons-material/Clear';

const CartPage: FC = () => {
  const classes = useStyles();
  const cartItems = getItems();

  const handleClearCart = () => {
    return localStorage.removeItem(CART_ITEMS);
  };

  return (
    <Container>
      <div className={classes.cartHeader}>
        <h2>Items in your cart</h2>
        {cartItems?.length > 0 && (
          <Button
            variant="outlined"
            startIcon={<ClearIcon className={classes.ClearIcon} />}
            onClick={handleClearCart}>
            Clear
          </Button>
        )}
      </div>

      <div className={classes.CartPageWrapper}>
        <div className={cartItems?.length > 0 ? classes.CartList : classes.EmptyCartImage}>
          {cartItems?.length > 0 ? (
            cartItems.map((item: any, index: number) => <CheckoutItem item={item} key={index} />)
          ) : (
            <img src={EmptyCartImage} alt="empty-cart" />
          )}
        </div>
        <SummaryTable />
      </div>
    </Container>
  );
};

export default CartPage;
