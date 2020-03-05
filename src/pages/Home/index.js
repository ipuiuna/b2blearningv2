import React from 'react';
import NavBarTop from '../../components/NavBarTop';
import ProductList from '../../components/ProductList';
import CartManager from '../../components/CartManager';
import Footer from '../../components/Footer';
import { Grid } from '@material-ui/core';
import Loading from '../../components/Loading';

export default props => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity) => (
        <div>
          <NavBarTop
            id='navbar-home'
            total={total}
            getCart={getCart}
            changeQuantity={changeQuantity}
            showCart={true}
          />
          <Grid container className='product-list-container' justify='center'>
            {loading ? (
              <Loading />
            ) : (
              <React.Fragment>
                <ProductList
                  id='product-list'
                  products={products}
                  changeQuantity={changeQuantity}
                  getCart={getCart}
                />
              </React.Fragment>
            )}
          </Grid>
          <Footer id='footer-home' logout />
        </div>
      )}
    </CartManager>
  );
};
