import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsApi from './utils/contactsAPI'

class App extends Component {
  state = {
    screen: 'list', // list, contact
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
          {this.state.screen === 'list' && (
              <ListContacts
                onDeleteContact={this.removeContact}
                contacts={this.state.contacts}
                onNavigateCreateContact={() => {
                    this.setState({ screen: 'contact'})
                }}/>
          )}
          {this.state.screen === 'contact' && (
              <CreateContact />
          )}
      </div>
    )
  }
}

export default App;
