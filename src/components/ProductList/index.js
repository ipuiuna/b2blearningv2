import React from 'react';
import Product from '../Product';
import { Grid, Container } from '@material-ui/core';
import './style.css';

export default ({ products, ...others }) => {
  return (
    <Container justify='center'>
      <Grid container>
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
    </Container>
  );
};
