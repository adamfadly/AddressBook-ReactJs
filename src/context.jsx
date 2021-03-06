import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
        name: "Jemi",
        email: "jemi@gmail.com",
        phone: "444-444-444"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
