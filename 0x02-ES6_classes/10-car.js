export default class Car {
  constructor(brand = undefined, motor = undefined, color = undefined) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = new this.constructor();
    const symbols = Object.getOwnPropertySymbols(this);
    symbols.forEach((symbol) => {
      clone[symbol] = this[symbol];
    });
    return clone;
  }
}
