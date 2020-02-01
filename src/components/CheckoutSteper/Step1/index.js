import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import {
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody
} from '@material-ui/core';

export default function Step1(props) {
  const { getCart, total } = props;
  const classes = useStyles();
  const items = getCart();

  return (
    <TableContainer>
      {console.log('STEP1', getCart)}
      <Table className={classes.table} aria-label='simple table'>
        <TableHead style={{ backgroundColor: 'rgba(229, 229, 229, 0.35)' }}>
          <TableRow>
            <TableCell>
              <Typography align='left' variant='h3' color='primary'>
                Produto
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align='left' variant='h3' color='primary'>
                Preço
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align='center' variant='h3' color='primary'>
                Quantidade
              </Typography>
            </TableCell>
            <TableCell>
              <Typography align='left' variant='h3' color='primary'>
                Total
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableRow style={{ backgroundColor: 'rgba(229, 229, 229, 0.35)' }}>
              <TableCell>
                <Typography color='primary'>{item.title}</Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography color='primary'>
                  R$ {item.price.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography color='primary'>{item.quantity}</Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography color='primary'>
                  R$ {(item.quantity * item.price).toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
          <TableRow style={{ backgroundColor: 'rgba(229, 229, 229, 0.83)' }}>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <Typography color='primary' variant='h3'>
                R$ {total.toFixed(2)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Step1.propTypes = {
  getCart: PropTypes.func
};
