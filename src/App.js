import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Admin from './components/Admin';
import Specialist from './components/Specialist';
import Display from './components/Display';

class App extends Component {
  state = {
    data: {},
    loading: true,
    activeSpec:''
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
    localStorage.setItem('clients',JSON.stringify(this.state.data))

  }
  addClient = (e) => {

    let spec, data, object, Client, newClient, lastNumber, newNumber;
    spec = e.target.dataset["specialist"];
    data = { ...this.state.data }
    object = data[0][spec]
    lastNumber = object.length

    // eslint-disable-next-line default-case
    switch (spec) {
      case "spec1":
        newNumber = lastNumber;
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

    newClient = new Client(newNumber)
    data[0][spec].push(newClient)
    this.setState({data})
    console.log('specialist: ', newClient);

  }

  deleteClient=()=>{
    
    const data = { ...this.state.data };
    const client=this.state.activeSpec
    data[0][client].shift()
    this.setState({data})
    

  }
  changeSpecialist=(e)=>{
    const activeSpec = e.target.dataset["specialist"];
    console.log('activeSpecialist: ', activeSpec);
    this.setState({activeSpec})
    
}
  render() {

    const state = this.state

    if (state.loading) {
      return <p>loading..</p>
    } else {
      return (
        <Router>
          <div>
          <ul>
          <li>
            <Link to="/">Admin</Link>
          </li>
          <li>
            <Link to="/display">Display</Link>
          </li>
          <li>
            <Link to="/specialist">Specialist</Link>
          </li>
        </ul>
         
      <Route exact path="/" component={()=> <Admin toLocalStorage={this.saveToLocalStorage} addClient={this.addClient} />} />
        <Route path="/display" component={Display} />
        <Route path="/specialist" component={()=> <Specialist changeSpec={this.changeSpecialist} deleteClient={this.deleteClient} state={this.state} />} />
        </div>
          
        </Router>
        
      );
    }

  }
}

export default App;
