import React, { Component } from 'react';
import ModalEditButton from './ModalEditButton';

class EditButton extends Component {

  state = {
    formToggle: false,
  };

  handleDisplay = () => {
    this.setState({
      formToggle: this.state.formToggle ? false : true,
    });
  };

  render() {

    const displayer = {
      display: this.state.formToggle ? 'inline' : 'none',
    };

    return (
      <div>
        <div className="edit-button">
            <ModalEditButton contact={this.props.contact} onClick={() => this.handleDisplay()}/>
            <div style={displayer}>
            </div>
        </div>
      </div>
    );
  }

}

export default EditButton;
