import React from 'react';
import useStyles from './styles';
import Product from '../Product';
import { Grid, Container } from '@material-ui/core';

export default ({ products, ...others }) => {
  const classes = useStyles();
  return (
    <Container
      id='pageTop'
      className={classes.productListContainer}
      justify='center'
    >
      <Grid container>
        {products.map((product, idx) => (
          <Grid
            className={classes.productCard}
            item
            key={idx}
            lg={3}
            md={3}
            sm={5}
            xl={3}
            xs={12}
          >
            <Product
              id={`product-${idx}`}
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
