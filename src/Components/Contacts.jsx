import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Adam",
        email: "adam@gmail.com",
        phone: "111-111-111"
      },
      {
        id: 2,
        name: "Fadhil",
        email: "fadhil@gmail.com",
        phone: "222-222-222"
      },
      {
        id: 3,
        name: "Gibran",
        email: "gibran@gmail.com",
        phone: "333-333-333"
      },
      {
        id: 4,
        name: "jemi",
        email: "jemi@gmail.com",
        phone: "444-444-444"
      }
    ]
  };

  deleteContact = () => {
    console.log(123);
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
