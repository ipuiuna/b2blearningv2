import React from 'react';
import useStyles from './styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import QuantityEditor from '../QuantityEditor';

export default function Product({ product, changeQuantity, getCart }) {
  // Challenge: create rr]just one method to support both actions
  const incItem = changeQuantity
    ? () => changeQuantity(product.id, product.quantity + 1)
    : null;
  const decItem = changeQuantity
    ? () => changeQuantity(product.id, product.quantity - 1)
    : null;

  const classes = useStyles();
  const { title, price, images } = product;

  return (
    <Card className={classes.card}>
      <Grid container justify='center'>
        <img
          id='img-product'
          style={{ width: 257.72, height: 257.72 }}
          src={images[0]}
          alt={title}
        ></img>
      </Grid>

      <CardContent className={classes.content}>
        <Typography
          id='label-product-title'
          gutterBottom
          color='primary'
          variant='h3'
          component='h2'
        >
          {title}
        </Typography>
        <Typography
          id='label-product-price'
          variant='h3'
          color='textSecondary'
          component='p'
          style={{ marginTop: 16 }}
        >
          R$ {price.toFixed(2)}
        </Typography>
      </CardContent>
      <Grid container justify='center'>
        <QuantityEditor
          id='qtdy-editor'
          incItem={incItem}
          decItem={decItem}
          quantity={product.quantity}
          min={0}
        />
      </Grid>
    </Card>
  );
}
