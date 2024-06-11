import css from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList({initial, deleteC}) {

    return (
        <ul className={css.list}>
            {initial.map(elem => {
                return <li className={css.listItem} key={elem.id}>
                    <Contact userName={elem.name} userNumber={elem.number} id={elem.id} deleteC={deleteC}></Contact>
                </li>
                
            })}
        </ul>
    )
}