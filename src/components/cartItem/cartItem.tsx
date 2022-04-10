import { FC } from 'react';

import { useStyles } from './styles';
import VegIcon from '../../assets/Images/veg.png';
import { ItemTypes } from '../../types/types';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartState } from '../../context/context';

const CartItem: FC<{ item: ItemTypes; mainItem: ItemTypes | any }> = ({ item, mainItem }) => {
  const classes = useStyles();
  const {
    state: { cart },
    dispatch
  } = CartState();

  let quantity = 0;
  let id = 0;

  cart?.filter((q: ItemTypes) => {
    return q.id === mainItem?.id ? ((quantity = q.qty), (id = q.id)) : 0;
  });

  const handleDecrease = () => {
    if (mainItem?.id === id) {
      mainItem?.qty;
    }
    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        id: mainItem?.id === id ? mainItem?.id : 0,
        qty: quantity - 1,
        price: mainItem?.id === id ? mainItem?.price : 0
      }
    });
  };

  const handleIncrease = () => {
    if (mainItem?.id === id) {
      mainItem?.qty;
    }
    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: {
        id: mainItem?.id === id ? mainItem?.id : 0,
        qty: quantity + 1,
        price: mainItem?.id === id ? mainItem?.price : 0
      }
    });
  };

  return (
    <>
      <div className={classes.ItemWrapper}>
        <img src={VegIcon} alt="trademark" className={classes.TradeMarkIcon} />
        <h3 className={classes.ItemTitle}>{item.item_name}</h3>
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
    </>
  );
};

export default CartItem;
