import { FC } from 'react';
import { Button, Divider } from '@material-ui/core';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useStyles } from './styles';
import ItemImage from '../../assets/Images/item.jpeg';
import VegIcon from '../../assets/Images/veg.png';
import { ItemTypes } from '../../types/types';
import { CartState } from '../../context/context';

const CheckoutItem: FC<{ item: ItemTypes }> = ({ item }) => {
  const classes = useStyles();

  const {
    state: { cart },
    dispatch
  } = CartState();

  let quantity = 0;

  cart?.filter((q: ItemTypes) => {
    return q.id === item.id ? (quantity = q.qty) : 0;
  });

  const handleDecrease = () => {
    item.qty = 1;
    if (quantity < 1) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: item.id
      });
    } else {
      dispatch({
        type: 'UPDATE_ITEM_QUANTITY',
        payload: {
          id: item.id,
          qty: quantity - 1,
          price: item.price
        }
      });
    }
  };

  const handleIncrease = () => {
    item.qty = 1;
    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        id: item.id,
        qty: quantity + 1,
        price: item.price
      }
    });
  };

  const handleRemoveItem = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item
    });
  };

  return (
    <>
      <div className={classes.ItemWrapper}>
        <div className={classes.CartImage}>
          <img src={ItemImage} alt="cart" />
        </div>
        <div className={classes.CartContent}>
          <div className={classes.CartTopItem}>
            <h3>
              {' '}
              <img src={VegIcon} alt="trademark" className={classes.TradeMarkIcon} />
              {item.item_name ?? '-'}
            </h3>
            <div className={classes.ButtonWrapper}>
              <button className={classes.BtnDecrease} onClick={handleDecrease}>
                {' '}
                <RemoveIcon className={classes.BtnIconMinus} />
              </button>
              <p className={classes.ItemCount}>
                <span>{item.qty}</span>
              </p>
              <button className={classes.BtnIncrease} onClick={handleIncrease}>
                {' '}
                <AddIcon className={classes.BtnIconAdd} />
              </button>
            </div>
            <p className={classes.ItemPrice}>
              <RupeeIcon className={classes.RupeeIcon} /> {item.price ?? '-'}
            </p>
          </div>
          <div className={classes.CartBottomItem}>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon className={classes.RemoveIcon} />}
              onClick={handleRemoveItem}>
              Remove
            </Button>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default CheckoutItem;
