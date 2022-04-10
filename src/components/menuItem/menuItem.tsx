import { FC } from 'react';
import { Button, Divider } from '@material-ui/core';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useStyles } from './styles';
import ItemImage from '../../assets/Images/item.jpeg';
import VegIcon from '../../assets/Images/veg.png';
import { ItemTypes } from '../../types/types';
import { CartState } from '../../context/context';

const MenuItem: FC<{ item: ItemTypes }> = ({ item }) => {
  const classes = useStyles();

  const {
    state: { cart },
    dispatch
  } = CartState();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    });
  };

  let quantity = 0;
  let id = 0;

  cart?.filter((q: ItemTypes) => {
    return q.id === item.id ? ((quantity = q.qty), (id = q.id)) : 0;
  });

  const handleDecrease = () => {
    item.qty = 1;
    if (quantity < 1) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id
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

  return (
    <>
      <div className={classes.ItemWrapper}>
        <div className={classes.ItemContent}>
          <img src={VegIcon} alt="trademark" className={classes.TradeMarkIcon} />
          <h3 className={classes.ItemTitle}>{item.item_name ?? '-'}</h3>
          <p className={classes.ItemPrice}>
            <RupeeIcon className={classes.RupeeIcon} /> {item.price ?? '-'}
          </p>
          <p className={classes.ItemDescription}>
            A delicious combo of McChicken, 6 pc Chicken McNuggets and Coke,now in a delivery
            friendly, reusable bottle.
          </p>
        </div>
        <div className={classes.ItemImageWrapper}>
          <img src={ItemImage} alt="item" className={classes.ItemImage} />
          {quantity > 0 ? (
            <div className={classes.ButtonWrapper}>
              <button className={classes.BtnDecrease} onClick={handleDecrease}>
                <RemoveIcon className={classes.BtnIconMinus} />
              </button>
              <p className={classes.ItemCount}>
                <span>{quantity}</span>
              </p>
              <button className={classes.BtnIncrease} onClick={handleIncrease}>
                <AddIcon className={classes.BtnIconAdd} />
              </button>
            </div>
          ) : (
            <div className={classes.AddButtonWrapper}>
              {' '}
              <Button onClick={handleAddToCart}>Add</Button>
            </div>
          )}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default MenuItem;
