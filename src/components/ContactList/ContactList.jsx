import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/Filter/selectors';

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const contact = items.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter)
    );
    return contact;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.listContainer}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactItem} key={id}>
              <ContactItem id={id} name={name} number={number} />
            </li>
          );
        })
      ) : (
        <p>No contacts</p>
      )}
    </ul>
  );
};

export default ContactList;
