import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/style.css';
import Admin from './components/Admin';
import Specialist from './components/Specialist';
import Display from './components/Display';

class App extends Component {
  state = {
    data: {},
    loading: true,
    activeSpec: '',
    registeringNumber: ''
  }

  componentDidMount() {

    this.fetchData()
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
    localStorage.setItem('clients', JSON.stringify(this.state.data))

  }
  addClient = (e) => {

    let spec, data, object, Client, newClient, lastNumber, newNumber;
    spec = e.target.dataset["specialist"];
    data = { ...this.state.data }
    object = data[0][spec]
    lastNumber = object.length

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
    }
    console.log('lastNumber: ', lastNumber);


    Client = function (number) {
      this.name = "Vardenis";
      this.surname = "Pavardenis";
      this.number = number;
    };

    newClient = new Client(newNumber + 1)
    data[0][spec].push(newClient)
    this.setState({ data })
    this.setState({registeringNumber:newNumber + 1})
    console.log('specialist: ', newClient);

  }

  deleteClient = () => {

    const data = { ...this.state.data };
    const client = this.state.activeSpec
    data[0][client].shift()
    this.setState({ data })


  }
  changeSpecialist = (e) => {
    const activeSpec = e.target.dataset["specialist"];
    console.log('activeSpecialist: ', activeSpec);
    this.setState({ activeSpec })

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
                <h2 className="logo">StackOverflowLive</h2>
                <ul>
                  <li>
                    <Link className="menu__button" to="/">Admin</Link>
                  </li>
                  <li>
                    <Link className="menu__button" to="/display">Display</Link>
                  </li>
                  <li>
                    <Link className="menu__button" to="/specialist">Specialist</Link>
                  </li>
                </ul>
              </div>
            </section>


            <Route exact path="/" component={() =>
              <Admin
                toLocalStorage={this.saveToLocalStorage}
                addClient={this.addClient}
                state={this.state} />}
              />

            <Route path="/display" component={() =>
              <Display state={this.state} />} />

            <Route path="/specialist" component={() =>
              <Specialist
                changeSpec={this.changeSpecialist}
                deleteClient={this.deleteClient}
                state={this.state} />}
              />

          </div>

        </Router>

      );
    }

  }
}

export default App;
