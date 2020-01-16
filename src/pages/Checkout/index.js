import React from 'react';
import { NavLink } from 'react-router-dom';
import CartManager from '../../components/CartManager';
import NavBarTop from '../../components/NavBarTop';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Footer from '../../components/Footer';
import CartList from '../../components/CartList';
import './style.scss';

export default () => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity, payments) => (
        <div>
          <NavBarTop totals={total} />
          <Container>
            {loading ? (
              <div>Loading your products...</div>
            ) : (
              <React.Fragment>
                <CartList total={total} getCart={getCart} editable={false} />
                <Form className='address-form'>
                  <h2>Please enter the delivery address:</h2>
                  <Row>
                    <Col>
                      <Form.Control placeholder='Full name' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control placeholder='Address line 1' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control placeholder='Address line 2' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control className='short' placeholder='City' />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        className='short'
                        placeholder='State / Province'
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className='payments'>
                      {payments.map(method => (
                        <div key={`key-${method.id}`} className='mb-3'>
                          <Col>
                            <Form.Check
                              type='radio'
                              id={`id-${method.id}`}
                              label={method.name}
                              name='radio'
                              value={method.id}
                            />
                          </Col>
                        </div>
                      ))}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Col>
                        <NavLink
                          to={'/cart'}
                          isActive={match => {
                            return match ? match.isExact : false;
                          }}
                          className='nav-link'
                        >
                          <Button>Edit Cart</Button>
                        </NavLink>
                      </Col>
                    </Col>
                    <Col className='payments'>
                      <Button type='submit'>Place Order</Button>
                    </Col>
                  </Row>
                </Form>
              </React.Fragment>
            )}
          </Container>

          <Footer />
        </div>
      )}
    </CartManager>
  );
};
