import React from 'react';
import CartManager from '../../components/CartManager';
import NavBarTop from '../../components/NavBarTop';
import { Container, Form, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';
import CartList from '../../components/CartList';
import './style.css';

export default () => {
  return (
    <CartManager>
      {(loading, products, total, getCart, changeQuantity) => (
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
