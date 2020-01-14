import { Component } from 'react';

const CART_NAME = 'cart';

export default class index extends Component {
  state = {
    loading: false,
    error: false,
    products: [],
    total: 0
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    this.setState({ loading: true });
    fetch('https://abi-bus-api.herokuapp.com/api/products')
      .then(data =>
        data.json().then(json => {
          this.setState({
            loading: false,
            products: json.map(product => ({ ...product, quantity: 0 }))
          });
          this.loadCart();
        })
      )
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: true });
      });
  }

  changeQuantity(productId, newQuantity) {
    const quantity = newQuantity < 0 ? 0 : newQuantity;
    const products = this.state.products;

    const product = products.find(product => product.id === productId);
    if (product) {
      product.quantity = quantity;
      this.setState({ products });
      this.calcTotal();
      this.saveCart();
    }
  }

  calcTotal() {
    let total = 0;
    this.getCart().forEach(item => {
      total += item.quantity * item.price;
    });

    this.setState({ total });
  }

  getCart() {
    return this.state.products
      .filter(product => product.quantity > 0)
      .map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity
      }));
  }

  mergeCart(cart) {
    const products = this.state.products;

    cart.forEach(item => {
      const product = products.find(product => product.id === item.id);
      if (product) {
        product.quantity = item.quantity;
      }
    });

    this.setState({ products });
    this.calcTotal();
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem(CART_NAME, JSON.stringify(this.getCart()));
  }

  loadCart() {
    const cart = localStorage.getItem(CART_NAME);
    if (cart) {
      this.mergeCart(JSON.parse(cart));
    }
  }

  render() {
    const { children } = this.props;
    const { products, total, loading } = this.state;
    return children(
      loading,
      products,
      total,
      this.getCart.bind(this),
      this.changeQuantity.bind(this)
    );
  }
}
