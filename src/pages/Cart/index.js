import React from 'react';
import { NavLink } from 'react-router-dom';
import CartlList from '../../components/CartList';
import NavBarTop from '../../components/NavBarTop';
import Footer from '../../components/Footer';
import CartManager from '../../components/CartManager';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './style.scss';

export default () => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity, editable) => (
        <div>
          <NavBarTop totals={total} />
          <Container>
            {loading ? (
              <div>Loading your cart...</div>
            ) : (
              <React.Fragment>
                <CartlList
                  total={total}
                  getCart={getCart}
                  changeQuantity={changeQuantity}
                  editable={editable}
                />
                <Row>
                  <Col>
                    <NavLink
                      to={'/checkout'}
                      isActive={match => {
                        return match ? match.isExact : false;
                      }}
                      className='nav-link'
                    >
                      <Button disabled={getCart().length === 0}>
                        Proceed to Checkout
                      </Button>
                    </NavLink>
                  </Col>
                </Row>
              </React.Fragment>
            )}
          </Container>
          <Footer />
        </div>
      )}
    </CartManager>
  );
};
