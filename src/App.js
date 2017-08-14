import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsApi from './utils/contactsAPI'

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
      ContactsApi.getAll().then((contacts) => this.setState({ contacts }))
  }

  removeContact = (contact) => {
      this.setState((state) => ({
          contacts: state.contacts.filter((con) => con.id !== contact.id)
      }));

      ContactsApi.remove(contact)
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
