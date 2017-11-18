import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditForm from './EditForm';

class Contacts extends Component {
  state = {
          formToggle: false,
          search: '',
      }
 handleDisplay = () => {
    this.setState({
            formToggle: this.state.formToggle ? false : true
    })
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
        const displayer = {
            "display": this.state.formToggle ? "inline" : "none"
        }

        const contacts = this.props.displayContacts.filter(contact => {
          const str = (contact.nom) + (contact.prenom) + (contact.telephone.mobile) + (contact.telephone.work)
          return str.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })

    return (
      <div className="container-fluid">
        {/* contacts */}
          <div className="text-center">
            <h1 className="text-secondary">Vos contacts</h1>
            <input className="form-control col-md-4 contactInput" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Rechercher un contact"/>
          </div>
          <ul className="d-flex flex-wrap">
            {contacts.map((contact, index) =>
              <li key={index} className="col-md-4 d-flex flex-column justify-content-around align-items-baseline">
                <p><span className="infos text-secondary">Nom:</span> {contact.nom}</p>
                <p><span className="infos text-secondary">Prénom:</span> {contact.prenom}</p>
                <p><span className="infos text-secondary">Poste:</span> {contact.titre}</p>
                <p><span className="infos text-secondary">Entreprise:</span> {contact.entreprise}</p>
                <p><span className="infos text-secondary">Email:</span> {contact.email}</p>
                <p><span className="infos text-secondary">Adresse:</span> {contact.adresse}</p>
                {contact.telephone.work && <p><span className="infos text-secondary">Contact pro:</span> {contact.telephone.work}</p>}
                {contact.telephone.mobile && <p><span className="infos text-secondary">Contact perso:</span> {contact.telephone.mobile}</p>}
                <div className="d-flex">
                  <div className="editButton">
                      <button type="submit" className="btn btn-secondary btn-sm" onClick={() => this.handleDisplay()}>Modifier</button>
                  </div>
                  <div style={displayer}>
                    <EditForm id={contact._id} nom={contact.nom} prenom={contact.prenom} titre={contact.titre} entreprise={contact.entreprise} email={contact.email} adresse={contact.adresse} mobile={contact.telephone.mobile} work={contact.telephone.work}/>
                  </div>
                  <DeleteButton id={contact._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Contacts;
