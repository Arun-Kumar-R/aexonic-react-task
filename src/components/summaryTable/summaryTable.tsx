import { Divider } from '@material-ui/core';
import { FC } from 'react';
import { getItems } from '../../util/helpers';
import { useStyles } from './styles';
import RupeeIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const SummaryTable: FC = () => {
  const classes = useStyles();
  const cartItems = getItems();

  const TaxAmount = 10;
  const ShippingCharge = 'Free';

  const handleSubTotalPrice = () => {
    let total = 0;
    cartItems.map((item: any) => {
      total += item.price;
    });
    return total;
  };

  const handleTotalPrice = () => {
    let total = handleSubTotalPrice() + TaxAmount;
    if (total >= 101 && total <= 500) {
      let discountAmount = (total * 10) / 100;
      console.log(discountAmount);
      total -= discountAmount;
      console.log(total);
    } else if (total > 500) {
      let discountAmount = (total * 20) / 100;
      console.log(discountAmount);
      total -= discountAmount;
      console.log(total);
    }
    console.log(total);
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
        {/* <Button variant="contained" disabled className={classes.CheckoutBtn}>
          Proceed to Pay
        </Button> */}
      </div>
    </>
  );
};

export default SummaryTable;
