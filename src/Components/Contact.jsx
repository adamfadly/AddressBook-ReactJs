import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.ShowContactInfo })
            }
            class="fas fa-arrow-alt-circle-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.oneDeleteClick}
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone} </li>
        </ul>
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;