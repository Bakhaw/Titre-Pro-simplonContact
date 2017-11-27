import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div className="container-fluid text-center justify-content-center align-items-center">
        <h1 className="text-secondary">Ajouter un contact</h1>
        <form action="http://localhost:3005/add" method="POST" className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <input className="col-md-4 form-control" name="nom" placeholder="Nom (obligatoire)"/>
            <input className="col-md-4 form-control" name="prenom" placeholder="Prénom (obligatoire)"/>
            <input className="col-md-4 form-control" name="titre" placeholder="Poste"/>
            <input className="col-md-4 form-control" name="entreprise" placeholder="Entreprise"/>
            <input className="col-md-4 form-control" name="email" placeholder="Adresse mail"/>
            <input className="col-md-4 form-control" name="adresse" placeholder="Adresse"/>
            <input className="col-md-4 form-control" name="telephone.mobile" placeholder="Contact Perso"/>
            <input className="col-md-4 form-control" name="telephone.work" placeholder="Contact Pro"/>
          </div>
          <div>
            <button type="submit" className="btn btn-secondary">Ajouter</button>
          </div>
        </form>
      </div>
    );
  }

}

export default Form;
