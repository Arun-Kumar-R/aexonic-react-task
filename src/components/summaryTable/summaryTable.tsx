import { Divider } from '@material-ui/core';
import { FC } from 'react';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';

import { useStyles } from './styles';
import { CartState } from '../../context/context';
import { ItemTypes } from '../../types/types';

const SummaryTable: FC = () => {
  const classes = useStyles();

  const {
    state: { cart }
  } = CartState();

  const TaxAmount = 10;
  const ShippingCharge = 'Free';

  const handleSubTotalPrice = () => {
    let total = 0;
    cart.map((item: ItemTypes) => {
      total += item.price;
    });
    return total;
  };

  const handleTotalPrice = () => {
    let total = handleSubTotalPrice() + TaxAmount;
    if (total >= 101 && total <= 500) {
      let discountAmount = (total * 10) / 100;
      total -= discountAmount;
    } else if (total > 500) {
      let discountAmount = (total * 20) / 100;
      total -= discountAmount;
    }
    return total;
  };

  return (
    <>
      <div className={classes.SummaryWrapper}>
        <h2 className={classes.SummaryTitle}>Summary</h2>
        <Divider />
        <div className={classes.SummaryContent}>
          <div className={classes.SubItem}>
            <p>SubTotal</p>
            <p className={classes.amount}>
              <RupeeIcon className={classes.RupeeIcon} /> {handleSubTotalPrice()}
            </p>
          </div>
          <div className={classes.SubItem}>
            <p>Extimated Tax</p>
            <p className={classes.amount}>
              <RupeeIcon className={classes.RupeeIcon} /> {TaxAmount}
            </p>
          </div>
          <div className={classes.SubItem}>
            <p>Shipping Charges</p>
            <p>{ShippingCharge}</p>
          </div>
          <Divider />
          <div className={classes.SubItem}>
            <p>Total</p>
            <p className={classes.Totalamount}>
              <span style={{ textDecoration: 'line-through' }}>
                <RupeeIcon className={classes.RupeeIcon} /> {handleSubTotalPrice() + TaxAmount}
              </span>
              <span>
                <RupeeIcon className={classes.RupeeIcon} /> {handleTotalPrice()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryTable;
