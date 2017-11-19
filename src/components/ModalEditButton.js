import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import EditForm from './EditForm';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
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
        <Dialog
          title="Modifer"
          modal={true}
          open={this.state.open}
        >
          <EditForm id={this.props.contact._id} nom={this.props.contact.nom} prenom={this.props.contact.prenom} titre={this.props.contact.titre} entreprise={this.props.contact.entreprise} email={this.props.contact.email} adresse={this.props.contact.adresse} mobile={this.props.contact.telephone.mobile} work={this.props.contact.telephone.work}/>
        </Dialog>
      </div>
    );
  }
}
