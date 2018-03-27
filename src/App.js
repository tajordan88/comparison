import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Navbar extends Component {
  render() {
    return (
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="#">Features</a>
          <a class="p-2 text-dark" href="#">Enterprise</a>
          <a class="p-2 text-dark" href="#">Support</a>
          <a class="p-2 text-dark" href="#">Pricing</a>
        </nav>
        <a class="btn btn-outline-primary" href="#">Sign up</a>
      </div>
    );
  }
}



class Prod1 extends Component {
  render() {
    return (
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Free</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
        </div>
      </div>
    );
  }
}

class Prod2 extends Component {
  render() {
    return (
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Pro</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>20 users included</li>
            <li>10 GB of storage</li>
            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
    );
  }
}

class Prod3 extends Component {
  render() {
    return (
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Enterprise</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
        </div>
      </div>
    );
  }
}


class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tblNum: 1,
    };
  }

  changeProd1() {
    this.setState({
      tblNum: 1,
    });
  }
  changeProd2() {
    this.setState({
      tblNum: 2,
    });
  }
  changeProd3() {
    this.setState({
      tblNum: 3,
    });
  }

  render() {
    console.log(this.state.tblNum);

    if (this.state.tblNum === 1) {
      return (
        <div>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <button onClick={() => this.changeProd2()}>Product 2</button>
                <button onClick={() => this.changeProd3()}>Product 3</button>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card-deck mb-3 text-center">
              <Prod1 />
            </div>
          </div>
        </div>
      );
    } else if (this.state.tblNum === 2) {
      return (
        <div>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <button onClick={() => this.changeProd1()}>Product 1</button>
                <button onClick={() => this.changeProd3()}>Product 3</button>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="card-deck mb-3 text-center">
              <Prod2 />
            </div>
          </div>
        </div>
      );
    } 
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <button onClick={() => this.changeProd1()}>Product 1</button>
              <button onClick={() => this.changeProd2()}>Product 2</button>
            </div>
          </div>
        </div>
          <div class="container">
            <div class="card-deck mb-3 text-center">
              <Prod3 />
            </div>
          </div>
      </div>
    );
  }
}

class App extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <Pricing />
      </div>
    );
  }
}

export default App;
