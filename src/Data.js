export default class Data {
  static instance = null;
  _state = [];

  static get inst() {
    if (Data.instance == null) {
      Data.instance = new Data();
      if (localStorage.getItem('cart') === null) {
        this.instance._state = localStorage.setItem('cart', []);
      } else {
        this.instance._state = localStorage.getItem('cart');
      }
    }

    return this.instance;
  }

  static get state() {
    //console.log(Data.inst);
    return JSON.parse(Data.inst._state);
  }

  static getTotals() {
    let totals = 0;
    for (let i = 0; i < Object.keys(Data.inst._state).length; i++) {
      totals += Data.inst._state[i].qtdy * Data.inst._state[i].price;
    }
    return totals;
  }

  static getLenght() {
    return Object.keys(Data.inst._state).length;
  }

  static setState(newState) {
    if (this.getLenght() > 0) {
      for (let i = 0; i < this.getLenght(); i++) {
        if (newState.id === Data.inst._state[i].id) {
          Data.inst._state[i].qtdy = newState.qtdy;
          return;
        }
      }
      Data.inst._state.push({
        id: newState.id,
        title: newState.title,
        price: newState.price,
        qtdy: newState.qtdy
      });
    } else {
      Data.inst._state.push({
        id: newState.id,
        title: newState.title,
        price: newState.price,
        qtdy: newState.qtdy
      });
    }
  }
}
