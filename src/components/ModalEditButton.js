import React from 'react';
import Dialog from 'material-ui/Dialog';
import EditForm from './EditForm';

export default class ModalEditButton extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    return (
      <div>
        <button type="submit" className="btn btn-md text-danger" onClick={this.handleOpen}>Modifier</button>
        <Dialog modal={true} open={this.state.open}>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Modifier</h4>
            <p onClick={this.handleClose} className='closeButton'>x</p>
          </div>
          <EditForm nom={this.props.contact.nom} prenom={this.props.contact.prenom} titre={this.props.contact.titre}
                    entreprise={this.props.contact.entreprise} email={this.props.contact.email}
                    adresse={this.props.contact.adresse} mobile={this.props.contact.telephone.mobile}
                    work={this.props.contact.telephone.work} id={this.props.contact._id}/>
        </Dialog>
      </div>
    );
  }
}
