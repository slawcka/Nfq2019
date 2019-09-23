import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/style.css';
import logo from './assets/images/logo.svg'
import Admin from './components/Admin';
import Specialist from './components/Specialist';
import Display from './components/Display';
class App extends Component {

  state = {
    data: {},
    loading: true,
    activeSpec: '',
    registeringNumber: '',
    SpecSessionTime:{}
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    (prevState.data[0] !== this.state.data[0]) && this.sessionTimes()
  }

  fetchData = () => {
    fetch('./klientai.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
        this.setState({ loading: false })
      })
  }

  saveToLocalStorage = () => {
    localStorage.setItem('clients', JSON.stringify(this.state.data));
    
  }

  addClient = (e) => {

    let spec, data, object, Client, newClient, lastNumber, newNumber;
    spec = e.target.dataset["specialist"];
    data = { ...this.state.data };
    object = data[0][spec];
    lastNumber = object.length;

    this.setState({ registerSpec: spec })
    // eslint-disable-next-line default-case
    switch (spec) {
      case "spec1":
        newNumber = lastNumber + 100;
        break;
      case "spec2":
        newNumber = lastNumber + 200;
        break;
      case "spec3":
        newNumber = lastNumber + 300;
    };
    
    Client = function (number) {
      this.name = "Vardenis";
      this.number = number;
      this.served = false;
      this.time = null;
    };

    newClient = new Client(newNumber + 1);
    data[0][spec].push(newClient);
    this.setState({ data });
    this.setState({ registeringNumber: newNumber + 1 });
    console.log('specialist: ', newClient);

  }

  serveClient = () => {

    const data = { ...this.state.data };
    const client = this.state.activeSpec;
    data[0][client].shift()
    this.setState({ data })

  }

  sortCLients = (spec) => {
    const data = { ...this.state.data };
    data[0][spec] = this.state.data[0][spec].sort((a, b) => a.served - b.served);
    this.setState({ data });
    console.log('a.served - b.served): ', this.state.data[0][spec]);
  }

  changeSpecialist = (e) => {
    const activeSpec = e.target.dataset["specialist"];
    console.log('activeSpecialist: ', activeSpec);
    this.setState({ activeSpec });

  }

  calculateAverageTimes = (spec) => {
    let array = []

    this.state.data[0][spec].forEach(e => {
      if (e.time >= 1) { array.push(e.time) }
    })
    return array
  }

  sessionTimes = () => {

    const SpecSessionTime={
      spec1: this.calculateAverageTimes("spec1"),
      spec2: this.calculateAverageTimes("spec2"),
      spec3: this.calculateAverageTimes("spec3")
    }
    
    this.setState({ SpecSessionTime })
    localStorage.setItem('sessionTimes', JSON.stringify(this.state.SpecSessionTime));
  }
  
  render() {

    const state = this.state

    if (state.loading) {
      return <p>loading..</p>
    } else {
      return (
        <Router>

          <div className="site">
            <section className="menu">
              <div className="content flex center">
                <img className="logo" src={logo} alt="StackOverflowLive"></img>
                <ul>
                  <li>
                    <Link className="menu__button" to="/">Administratorius</Link>
                  </li>
                  <li>
                    <Link className="menu__button" to="/display">Švieslentė</Link>
                  </li>
                  <li>
                    <Link className="menu__button" to="/specialist">Specialistas</Link>
                  </li>
                </ul>
              </div>
            </section>

            <Route exact path="/" component={() =>
              <Admin
                toLocalStorage={this.saveToLocalStorage}
                sessionTimes={this.sessionTimes}
                addClient={this.addClient}
                state={state} />}
            />

            <Route path="/display" component={() =>
              <Display state={state}
            />}
            />

            <Route path="/specialist" component={() =>
              <Specialist
                changeSpec={this.changeSpecialist}
                serveClient={this.serveClient}
                state={state} />}
            />
          </div>

        </Router>
      );
    }
  }
}

export default App;
