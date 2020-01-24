import React from 'react';
import Product from '../Product';
import { Grid } from '@material-ui/core';
import './style.css';

export default ({ products, ...others }) => {
  return (
    <Grid item xs={12} style={{ backgroundColor: '#fff' }}>
      <Grid container item justify='center'>
        {products.map((product, idx) => (
          <Grid item key={idx}>
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
  );
};
