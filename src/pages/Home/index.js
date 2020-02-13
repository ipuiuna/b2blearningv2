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
            total={total}
            getCart={getCart}
            changeQuantity={changeQuantity}
          />
          <Grid container className='product-list-container'>
            {loading ? (
              <Loading />
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
          <Footer logout />
        </div>
      )}
    </CartManager>
  );
};
