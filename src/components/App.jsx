import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactList/ContactList';

import { Container, Header } from './App.styled';

export default function App() {
  return (
    <Container>
      <Header>Phonebook</Header>
      <ContactForm />

      <Header>Contacts</Header>
      <Filter />

      <ContactsList />
    </Container>
  );
}
