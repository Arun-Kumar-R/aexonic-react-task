import { FC } from 'react';
import { useStyles } from './styles';
import VegIcon from '../../assets/Images/veg.png';
import { ItemTypes } from '../../types/types';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem: FC<{ item: ItemTypes }> = ({ item }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.ItemWrapper}>
        <img src={VegIcon} alt="trademark" className={classes.TradeMarkIcon} />
        <h3 className={classes.ItemTitle}>{item.item_name}</h3>
        <div className={classes.ButtonWrapper}>
          <button className={classes.BtnDecrease}>
            {' '}
            <RemoveIcon className={classes.BtnIconMinus} />
          </button>
          <p className={classes.ItemCount}>
            <span>{item.quantity}</span>
          </p>
          <button className={classes.BtnIncrease}>
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
