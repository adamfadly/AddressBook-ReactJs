import React, { Component } from "react";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./Components/contacts/AddContact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
