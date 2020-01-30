import React from 'react';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import CartManager from '../../components/CartManager';
import Footer from '../../components/Footer';
import { Grid } from '@material-ui/core';

export default props => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity) => (
        <div>
          <NavBarTop
            total={total}
            getCart={getCart}
            changeQuantity={changeQuantity}
          />
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
          <Footer />
        </div>
      )}
    </CartManager>
  );
};
