import { Button, Container } from '@material-ui/core';

import { FC, useEffect, useState } from 'react';
import CartItem from '../../components/cartItem/cartItem';
import MenuItem from '../../components/menuItem/menuItem';
import { useStyles } from './styles';
import { PRODUCTS_URL } from '../../config/config';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { getItems } from '../../util/helpers';
import EmptyCartImage from '../../assets/Images/empty-cart.png';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const MenuList: FC = () => {
  const classes = useStyles();

  const [items, setItems] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllItems = async () => {
    setLoading(true);
    const response: any = await axios.get(PRODUCTS_URL);
    setItems(response?.data as any);
    if (response.data) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const cartItems = getItems();

  const handleTotalPrice = () => {
    let subTotal = 0;
    cartItems.map((item: any) => {
      subTotal += item.price;
    });
    return subTotal;
  };

  return (
    <>
      <Container>
        <div className={loading ? classes.LoaderStyle : classes.MenuPageWrapper}>
          {!loading ? (
            <div className={classes.ListItemsSection}>
              {items?.length > 0 &&
                items.map((item, index) => <MenuItem item={item} key={index} />)}
            </div>
          ) : (
            <CircularProgress className={classes.loader} />
          )}

          {cartItems?.length > 0 ? (
            <>
              {' '}
              <div className={classes.CartSection}>
                <h2>Cart</h2>
                <p className={classes.CartItemCount}>{cartItems?.length} ITEMS</p>
                <div className={classes.CartItemWrapper}>
                  {cartItems.map((item: any, index: number) => (
                    <CartItem item={item} key={index} />
                  ))}

                  <div className={classes.AmountSection}>
                    <h3>SubTotal</h3>
                    <p>
                      <RupeeIcon className={classes.RupeeIcon} /> {handleTotalPrice()}
                    </p>
                  </div>
                  <Button variant="contained" disabled className={classes.CheckoutBtn}>
                    Checkout
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className={classes.CartSection}>
              <img src={EmptyCartImage} alt="empty-cart" />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default MenuList;
