import { useState } from 'react'
import { useEffect } from 'react'

// -----
import css from './App.module.css'
import SearchBox from './SearchBox/SearchBox'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import initialData from './ContactsData/ContactsData.json'
// ------


export default function App() {
    const [initial, setInitial] = useState(() => {
        const storageData = JSON.parse(localStorage.getItem('contacts'))
        if (storageData) {
            return storageData
        }
        return initialData
    })
    const [search, setSearch] = useState('')

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(initial))
    }, [initial])

    function addContact(data) {
        setInitial((prevVersion) => {
            return [...prevVersion, data]
        })
    }
    function deleteContact(data) {
        setInitial((prevVersion) => {
            return prevVersion.filter(elem => elem.id !== data)
        })
    }

    const visibleContacts = initial.filter(elem => elem.name.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()))


    return (
        <div>
        <div className={css.main}>
            <h1>Phonebook</h1>
                <ContactForm addContact={addContact} />
            <SearchBox
            inputValue={search}
            doSearch={setSearch}
                />
        </div>
            <ContactList
                initial={visibleContacts}
                deleteC={deleteContact}
                />
            
        </div>
    )
}