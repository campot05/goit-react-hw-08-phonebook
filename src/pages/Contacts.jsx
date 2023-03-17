// import { Contac } from 'components/Contacts/Contacts';
import ContactForm from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import Filter from 'components/Filter';
import css from './Contacts.module.css';
export default function Contacts() {
  return (
    <div className={css.container}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
