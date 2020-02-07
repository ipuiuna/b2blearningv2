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
            loading={loading}
            changeQuantity={changeQuantity}
          />
          <Grid container justify='center' className='product-list-container'>
            <div style={{ marginTop: 20 }}>
              <ProductList
                products={products}
                changeQuantity={changeQuantity}
                getCart={getCart}
              />
            </div>
          </Grid>
          <Footer />
        </div>
      )}
    </CartManager>
  );
};
