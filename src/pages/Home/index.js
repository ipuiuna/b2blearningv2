import React from 'react';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import CartManager from '../../components/CartManager';
import { Grid } from '@material-ui/core';
import './style.css';

export default props => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity) => (
        <div>
          <NavBarTop totals={total} />
          <Grid container className='product-list-container'>
            {loading ? (
              <div>Loading product list...</div>
            ) : (
              <React.Fragment>
                <ProductList
                  products={products}
                  changeQuantity={changeQuantity}
                  getCart={getCart}
                />
              </React.Fragment>
            )}
          </Grid>
        </div>
      )}
    </CartManager>
  );
};
