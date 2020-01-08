export default class Data {
  static instance = null;
  _state = [];

  static get inst() {
    if (Data.instance == null) {
      Data.instance = new Data();
      if (localStorage.getItem('cart') === null) {
        this.instance._state = localStorage.setItem('cart', JSON.stringify([]));
      } else {
        this.instance._state = JSON.parse(localStorage.getItem('cart'));
      }
    }
    return this.instance;
  }

  static get state() {
    return JSON.parse(Data.inst._state);
  }

  static getTotals() {
    Data.inst._state = JSON.parse(localStorage.getItem('cart'));
    console.log('Chegou aqui');
    let totals = 0;
    for (let i = 0; i < Data.inst._state.length; i++) {
      const item = Data.inst._state[i];
      totals += item.qtdy * item.price;
    }
    return totals;
  }
}
