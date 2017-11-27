import React, { Component } from 'react';

class EditForm extends Component {

  render() {
    return (
      <div className="container-fluid editForm">
        <form action={`http://localhost:3005/${this.props.id}/update`} method="POST"
              className="d-flex flex-column align-items-center">
          <div>
            <input className="form-control" defaultValue={this.props.nom}
                   name="nom" placeholder="Nom"/>
            <input className="form-control" defaultValue={this.props.prenom}
                   name="prenom" placeholder="Prénom"/>
            <input className="form-control" defaultValue={this.props.titre}
                   name="titre" placeholder="Poste"/>
            <input className="form-control" defaultValue={this.props.entreprise}
                   name="entreprise" placeholder="Entreprise"/>
          </div>
          <div>
            <input className="form-control" defaultValue={this.props.email}
                   name="email" placeholder="Adresse mail"/>
            <input className="form-control" defaultValue={this.props.adresse}
                   name="adresse" placeholder="Adresse"/>
            <input className="form-control" defaultValue={this.props.mobile}
                   name="telephone.mobile" placeholder="Contact Perso"/>
            <input className="form-control" defaultValue={this.props.work}
                   name="telephone.work" placeholder="Contact Pro"/>
          </div>
          <div>
            <button type="submit" className="btn btn-secondary">Modifier</button>
          </div>
        </form>
      </div>
    );
  }

}

export default EditForm;
