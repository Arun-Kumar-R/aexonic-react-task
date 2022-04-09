import { CART_ITEMS } from '../config/config';

export const getItems = () => {
  return JSON.parse(localStorage.getItem(CART_ITEMS)!);
};
