import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import request from 'request';
import Contacts from './components/Contacts';
import Form from './components/Form';

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    request('http://localhost:3005/', (err, res, body) => {
      if (err) return console.log(err);
      if (body) {
        this.setState({
          contacts: JSON.parse(body),
        });
      }
    });
  }

  render() {
    const myContacts = (props) => {
      return (
        <Contacts
          displayContacts={this.state.contacts}
          {...props}
        />
      );
    };

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
      <div >
        <MuiThemeProvider>
        <Router>
          <div>
            <ul className="container-fluid d-flex justify-content-around navbar text-center">
              <li className="firstItem">
                <Link to="/" className="navbarItem">Mes contacts</Link>
              </li>
              <li>
                <Link to="/ajouter_un_contact" className="navbarItem">
                  Ajouter des contacts à mon répértoire
                </Link>
              </li>
            </ul>
            
            <Route exact path="/" render={myContacts}/>
            <Route path="/ajouter_un_contact" component={Form}/>
          </div>
        </Router>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
