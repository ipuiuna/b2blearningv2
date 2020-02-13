import React from 'react';
import useStyles from './styles';
import Product from '../Product';
import { Grid, Container } from '@material-ui/core';

export default ({ products, ...others }) => {
  const classes = useStyles();
  return (
    <Container className={classes.productListContainer} justify='center'>
      <Grid container>
        {products.map((product, idx) => (
          <Grid
            className={classes.productCard}
            item
            key={idx}
            lg={3}
            md={4}
            sm={6}
            xs={12}
          >
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
