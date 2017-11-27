import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

class Contacts extends Component {
  state = {
    formToggle: false,
    search: '',
  }

 handleDisplay = () => {
    this.setState({formToggle: this.state.formToggle ? false : true})
  }

  updateSearch(e) {
    this.setState({search: e.target.value});
  }

  render() {

        const contacts = this.props.displayContacts.filter(contact => {
          const str = (contact.nom) + (contact.prenom) + (contact.telephone.mobile) + (contact.telephone.work)
          return str.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })

    return (
      <div className="container-fluid">

          <div className="text-center">
            <h1 className="text-secondary">Mes contacts</h1>
            <input className="form-control col-md-4 contactInput" type="text" value={this.state.search}
                   onChange={this.updateSearch.bind(this)} placeholder="Rechercher un contact"/>
          </div>

          {this.props.displayContacts.length === 0 && <h4 className="text-secondary text-center">Votre répértoire est vide ...</h4>}

          {this.props.displayContacts &&
            <ul className="d-flex flex-wrap justify-content-center contactContainer">
              {contacts.map((contact, index) =>
                <li key={index} className="col-md-2 d-flex contactCard flex-column justify-content-center align-items-center">
                  <p>
                    <span className="infos text-secondary">Nom:</span> {contact.nom}
                  </p>
                  <p>
                    <span className="infos text-secondary">Prénom:</span> {contact.prenom}
                  </p>
                  <p>
                    <span className="infos text-secondary">Poste:</span> {contact.titre}
                  </p>
                  <p>
                    <span className="infos text-secondary">Entreprise:</span> {contact.entreprise}
                  </p>
                  <p>
                    <span className="infos text-secondary">Email:</span> {contact.email}
                  </p>
                  <p>
                    <span className="infos text-secondary">Adresse:</span> {contact.adresse}
                  </p>
                  <p>
                    <span className="infos text-secondary">Contact pro:</span> {contact.telephone.work}
                  </p>
                  <p>
                    <span className="infos text-secondary">Contact perso:</span> {contact.telephone.mobile}
                  </p>
                  <div className="d-flex">
                    <div className="editButton">
                      <EditButton contact={contact}/>
                    </div>
                    <DeleteButton id={contact._id}/>
                  </div>
                </li>
              )}
            </ul>
          }
        </div>
    );
  }

}

export default Contacts;
