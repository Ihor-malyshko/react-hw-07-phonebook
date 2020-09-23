import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './Logo/Logo';
import Section from './section/Section';
import PhoneList from './phoneList/PhoneList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import Alert from './Alert/Alert';

class App extends Component {
  state = {
    alert: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  render() {
    const { alert } = this.state;
    const { contacts } = this.props;

    return (
      <>
        <Logo />
        <Section>
          <Alert isVisible={alert} />
          <ContactForm />
        </Section>

        {contacts && (
          <Section title="Contacts">
            <Filter isVisible={contacts.length > 1 ? true : false} />
            <PhoneList />
          </Section>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contact.items,
  };
};

export default connect(mapStateToProps, null)(App);
