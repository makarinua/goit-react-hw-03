import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css'

export default function Contact({ userName, userNumber, id, deleteC }) {
    
    function deleteHandler() {
        deleteC(id)
    }

    return (
        <div className={css.container}>
            <ul>
                <li className={css.listItem}><IoMdContact size={20} />{userName}</li>
                <li className={css.listItem}><FaPhoneAlt size={20} />{userNumber}</li>
            </ul>
            <button className={css.btn} onClick={deleteHandler}>Delete</button>
        </div>
    )
}