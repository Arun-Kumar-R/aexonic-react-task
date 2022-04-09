import { Container } from '@material-ui/core';
import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useStyles } from './styles';

const Header: FC = () => {
  const classes = useStyles();
  const location = useLocation();

  const activeLink = location.pathname === '/';

  return (
    <>
      <div className={classes.headerWrapper}>
        <Container>
          <div className={classes.innerWrapper}>
            <h2 className={classes.BrandLogo}>Brand Logo</h2>
            <div className={classes.NavMenu}>
              <Link to="/" className={activeLink ? classes.active : ''}>
                Menu
              </Link>
              <Link to="/cart" className={!activeLink ? classes.active : ''}>
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
