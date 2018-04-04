import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Navbar extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="#">Features</a>
          <a className="p-2 text-dark" href="#">Enterprise</a>
          <a className="p-2 text-dark" href="#">Support</a>
          <a className="p-2 text-dark" href="#">Pricing</a>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
      </div>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{this.props.type}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{this.props.price} <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>{this.props.users}</li>
                <li>{this.props.storage}</li>
                <li>{this.props.support}</li>
                <li>{this.props.help}</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">{this.props.sign}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Product {this.props.product}
      </button>
    );
  }
}

class ButtonSet extends Component {
  renderButton(i) {
    return (
      <Button
        product={i}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            {this.renderButton(1)}
            {this.renderButton(2)}
            {this.renderButton(3)}
            {this.renderButton(4)}
          </div>
        </div>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 1,
      type: 'Free',
      price: '$0',
      users: '10 users included',
      storage: '2 GB of storage',
      support: 'Email support',
      help: 'Help center access',
      sign: 'Sign up for free',
    };
  }

  handleClick(i) {
    if (i === 1) {
      this.setState({
        product: 1,
        type: 'Free',
        price: '$0',
        users: '10 users included',
        storage: '2 GB of storage',
        support: 'Email support',
        help: 'Help center access',
        sign: 'Sign up for free',
      });
    } else if (i === 2) {
      this.setState({
        product: 2,
        type: 'Pro',
        price: '$15',
        users: '20 users included',
        storage: '10 GB of storage',
        support: 'Priority Email support',
        help: 'Help center access',
        sign: 'Get started',
      });
    } else if (i === 3) {
      this.setState({
        product: 3,
        type: 'Enterprise',
        price: '$29',
        users: '30 users included',
        storage: '15 GB of storage',
        support: 'Phone and email support',
        help: 'Help center access',
        sign: 'Contact us',
      });
    } else if (i === 4) {
      this.setState({
        product: 4,
        type: 'Ultimate',
        price: '$39',
        users: '40 users included',
        storage: '25 GB of storage',
        support: 'Unlimited phone and email support',
        help: 'Exclusive help center access',
        sign: 'Most awesome deal',
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <ButtonSet 
          product={this.state.product}
          onClick={(i) => this.handleClick(i)}
        />
        <Product 
          product={this.state.product}
          type={this.state.type}
          price={this.state.price}
          users={this.state.users}
          storage={this.state.storage}
          support={this.state.support}
          help={this.state.help}
          sign={this.state.sign}
        />
      </div>
    );
  }
}

export default App;
