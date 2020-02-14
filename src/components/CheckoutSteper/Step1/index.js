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
      <Table className={classes.table}>
        <TableHead style={{ backgroundColor: 'rgba(229, 229, 229, 0.35)' }}>
          <TableRow>
            <TableCell>
              <Typography
                className={classes.tableTitle}
                align='left'
                variant='h3'
                color='primary'
              >
                Produto
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                className={classes.tableTitle}
                align='left'
                variant='h3'
                color='primary'
              >
                Preço
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                className={classes.tableTitle}
                align='center'
                variant='h3'
                color='primary'
              >
                Quantidade
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                className={classes.tableTitle}
                align='left'
                variant='h3'
                color='primary'
              >
                Total
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, idx) => (
            <TableRow
              key={idx}
              style={{ backgroundColor: 'rgba(229, 229, 229, 0.35)' }}
            >
              <TableCell>
                <Typography className={classes.tableCell} color='primary'>
                  {item.title}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography className={classes.tableCell} color='primary'>
                  R$ {item.price.toFixed(2)}
                </Typography>
              </TableCell>
              <TableCell align='center'>
                <Typography className={classes.tableCell} color='primary'>
                  {item.quantity}
                </Typography>
              </TableCell>
              <TableCell align='left'>
                <Typography className={classes.tableCell} color='primary'>
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
              <Typography
                className={classes.tableTitle}
                color='primary'
                variant='h3'
              >
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
