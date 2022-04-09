import { FC, useEffect, useState } from 'react';
import { useStyles } from './styles';
import ItemImage from '../../assets/Images/item.jpeg';
import VegIcon from '../../assets/Images/veg.png';
import { Button, Divider } from '@material-ui/core';
import { ItemTypes } from '../../types/types';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CART_ITEMS } from '../../config/config';
import { getItems } from '../../util/helpers';

const MenuItem: FC<{ item: ItemTypes }> = ({ item }) => {
  const classes = useStyles();
  const [itemAdded, setItemAdded] = useState<boolean>(false);
  let cartItems = getItems();

  const handleAddToCart = () => {
    let productsString = localStorage.getItem(CART_ITEMS);
    console.log(productsString);
    let products = [];
    if (productsString) {
      products = JSON.parse(productsString);
    }
    products.push({ id: item.id, item_name: item.item_name, price: item.price, quantity: 1 });
    localStorage.setItem(CART_ITEMS, JSON.stringify(products));
  };

  const handleAdded = () => {
    return (
      cartItems?.length > 0 &&
      cartItems.map((cart: any) => {
        if (cart.id === item.id && cart.quantity > 0) {
          setItemAdded(true);
        }
      })
    );
  };

  const handleDecrease = () => {
    const oldItems = JSON.parse(localStorage.getItem(CART_ITEMS)!);
    oldItems.map((p: any) =>
      p.id === item.id
        ? localStorage.setItem(CART_ITEMS, JSON.stringify({ ...oldItems, quantity: p.quantity-- }))
        : p
    );
  };

  const handleIncrease = () => {
    // cartItems.map((p: any) =>
    //   p.id === item.id
    //     ? localStorage.setItem(CART_ITEMS, JSON.stringify({ ...p, quantity: p.quantity++ }))
    //     : p
    // );
    const oldItems = JSON.parse(localStorage.getItem(CART_ITEMS)!);
    oldItems.map((p: any) =>
      p.id === item.id
        ? localStorage.setItem(CART_ITEMS, JSON.stringify({ ...p, quantity: p.quantity++ }))
        : p
    );
  };

  useEffect(() => {
    if (cartItems) handleAdded();
  }, [itemAdded]);

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
          {itemAdded && cartItems ? (
            <div className={classes.ButtonWrapper}>
              <button className={classes.BtnDecrease} onClick={handleDecrease}>
                <RemoveIcon className={classes.BtnIconMinus} />
              </button>
              <p className={classes.ItemCount}>
                <span>{item.quantity || 1}</span>
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
