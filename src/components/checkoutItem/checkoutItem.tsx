import { FC } from 'react';
import { useStyles } from './styles';
import ItemImage from '../../assets/Images/item.jpeg';
import VegIcon from '../../assets/Images/veg.png';
import { Button, Divider } from '@material-ui/core';
import { ItemTypes } from '../../types/types';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { getItems } from '../../util/helpers';
import { CART_ITEMS } from '../../config/config';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CheckoutItem: FC<{ item: ItemTypes }> = ({ item }) => {
  const classes = useStyles();

  const handleRemoveItem = () => {
    const cartItems = getItems();

    const itemToBeRemoved = item;

    const findIndex = cartItems.findIndex((a: any) => a.id === itemToBeRemoved.id);

    findIndex !== -1 && cartItems.splice(findIndex, 1);

    localStorage.setItem(CART_ITEMS, JSON.stringify(cartItems));
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
