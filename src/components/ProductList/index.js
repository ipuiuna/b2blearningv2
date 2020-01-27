import React from 'react';
import Product from '../Product';
import { Grid, Container } from '@material-ui/core';
import './style.css';

export default ({ products, ...others }) => {
  return (
    <Container>
      <Grid item lg={12}>
        <Grid container item>
          {products.map((product, idx) => (
            <Grid item key={idx} lg={3} md={4} sm={6} xs={12}>
              <Product
                className='product'
                key={idx}
                product={product}
                {...others}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
