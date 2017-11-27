import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Contacts from './components/Contacts';
import Form from './components/Form';
// import myVideo from './videos/background_contact.mp4';
import './App.css';

class App extends Component {
state = {
  contacts: [],
}

componentDidMount() {
  fetch('http://localhost:3005') // URL of my dataBase
    .then(data => data.json())
    .then(contacts => this.setState({ contacts }));
}

  render() {
    const myContacts = (props) => {
      return (
        <Contacts
          displayContacts={this.state.contacts} {...props}/>
      );
    }

    return (

      <div className="bodyContainer">
        <MuiThemeProvider>
          {/* <div className='video-container'>
            <video loop fullscreen autoPlay id='bg-video'>
                <source src={myVideo} type="video/mp4"/>
                <source src={myVideo} type="video/ogg"/>
            </video>
          </div> */}
          <Router>
            <div>
              <ul className="container-fluid d-flex justify-content-around navbar text-center">
                <li className="firstItem">
                  <Link to="/" className="navbarItem">Mes contacts</Link>
                </li>
                <li>
                  <Link to="/ajouter_un_contact" className="navbarItem">Ajouter des contacts à mon répértoire</Link>
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
