import React, { Component } from 'react';
import './App.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { amount, currency } = this.state;
    if (currency.toLowerCase() === 'euro') {
      const euro = amount * 80;
      alert(`Converting to  Euro Amount is ${euro}`);
    } else {
      alert('Please enter "Euro" as currency');
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount: </label>
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Currency: </label>
            <textarea
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
      () => {
        this.sayHello();
        this.sayStatic();
      }
    );
  }

  sayHello() {
    alert('Hello! Member1');
  }

  sayStatic() {
    // Static message function (can be customized)
  }

  decrement() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  sayWelcome(msg) {
    alert(msg);
  }

  handleClick(e) {
    alert('I was clicked');
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
        <button onClick={this.handleClick}>Click on me</button>
        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
