import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import request from 'request';
import Contacts from './components/Contacts';
import Form from './components/Form';
import Home from './components/Home';

class App extends Component {
state = {
  contacts: [],
}

componentDidMount() {
  request('http://localhost:3005/', (err, res, body) => {
    if (err) return console.log(err)
    if (body) {
      this.setState({
        contacts: JSON.parse(body)
      });
    }
  })
}

  render() {
    const myContacts = (props) => {
      return (
        <Contacts
          displayContacts={this.state.contacts}
          {...props}
        />
      );
    }

    return (
      // <div className="container-fluid bg-dark">
      //   {/* header */}
      //   <div className="header text-center">
      //     <h1>BIENVENUE SUR VOTRE ANNUAIRE PERSONNALISE</h1>
      //     <h2>Créez votre propre liste de contacts</h2>
      //   </div>
      //   {/* contacts */}
      //   <div className="contacts">
      //     <Contacts displayContacts={this.state.contacts} />
      //   </div>
      // </div>
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/accueil">Accueil</Link></li>
              <li>
                <Link to="/contacts">Vos contacts</Link>
              </li>
              <li><Link to="/ajouter_un_contact">Ajouter des contacts à votre répértoire</Link></li>
            </ul>

            <hr />

            <Route exact path="/accueil" component={Home}/>
            <Route path="/contacts" render={myContacts}/>
            <Route path="/ajouter_un_contact" component={Form}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
