import ContactForm from '../../components/ContactForm/ContactForm'
import Filter from '../../components/Filter/Filter'
import ContactList from '../../components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading } from '../../redux/contacts/selectors'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contacts/operation'

import css from './Conatacts.module.css'


const Contacts = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading);


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    < main className={css.container}>
      <div>
        <h2>PhoneBook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </div>
    </main >
  )
}

export default Contacts;
