import { Container } from '@material-ui/core';
import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';

import { useStyles } from './styles';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartState } from '../../context/context';

const Header: FC = () => {
  const classes = useStyles();
  const location = useLocation();

  const activeLink = location.pathname === '/';

  const {
    state: { cart }
  } = CartState();

  return (
    <>
      <div className={classes.headerWrapper}>
        <Container>
          <div className={classes.innerWrapper}>
            <Link to="/" className={classes.BrandLogo}>
              FreshFoods
            </Link>
            <div className={classes.NavMenu}>
              <Link to="/" className={activeLink ? classes.active : ''}>
                Menu
              </Link>
              <Link to="/cart" className={!activeLink ? classes.active : ''}>
                <IconButton aria-label="cart" className={classes.cartBtn}>
                  <Badge badgeContent={cart?.length ?? ''} color="success">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                Cart
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
