import { Button, Container } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import CartItem from '../../components/cartItem/cartItem';
import MenuItem from '../../components/menuItem/menuItem';
import { useStyles } from './styles';
import { PRODUCTS_URL } from '../../config/config';
import { CartState } from '../../context/context';
import { ItemTypes } from '../../types/types';

const MenuList: FC = () => {
  const classes = useStyles();

  const {
    state: { cart }
  } = CartState();

  const [items, setItems] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllItems = async () => {
    setLoading(true);
    const response: any = await axios.get(PRODUCTS_URL);
    setItems(response?.data);
    if (response.data) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const handleSubTotalPrice = () => {
    let subTotal = 0;
    cart.map((item: ItemTypes) => {
      subTotal += item.price;
    });
    return subTotal;
  };

  const [mainItem, setMainItem] = useState<ItemTypes>();

  const handleMainItems = () => {
    items?.map((c: ItemTypes) => {
      setMainItem(c);
    });
  };

  useEffect(() => {
    handleMainItems();
  }, [mainItem]);

  return (
    <>
      <Container>
        <div className={loading ? classes.LoaderStyle : classes.MenuPageWrapper}>
          {!loading ? (
            <div
              className={cart?.length > 0 ? classes.ListItemsSection : classes.fullWidthContainer}>
              {items?.length > 0 &&
                items.map((item, index) => <MenuItem item={item} key={index} />)}
            </div>
          ) : (
            <CircularProgress className={classes.loader} />
          )}
          <div className={cart?.length > 0 ? classes.CartSection : classes.emptyCartStyles}>
            <h2>Cart</h2>
            <p className={classes.CartItemCount}>{cart?.length} ITEMS</p>
            <div className={classes.CartItemWrapper}>
              {cart.map((item: any, index: number) => (
                <CartItem item={item} key={index} mainItem={mainItem} />
              ))}

              <div className={classes.AmountSection}>
                <h3>SubTotal</h3>
                <p>
                  <RupeeIcon className={classes.RupeeIcon} /> {handleSubTotalPrice()}
                </p>
              </div>
              <Button variant="contained" disabled className={classes.CheckoutBtn}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MenuList;
