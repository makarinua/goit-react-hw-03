import { Formik, Form, Field } from 'formik'
import { useId } from "react";
import css from './SearchBox.module.css'

export default function SearchBox({doSearch, inputValue}) {
    const SearchId = useId()
    
    return (
        <div>
            <Formik
                initialValues={{name: ''}}
            >
                <Form className={css.search}>
                    <label htmlFor={SearchId}>Find contacts by name</label>
                    <Field className={css.input} onChange={(event) => doSearch(event.target.value)} type='text' name='name' id={SearchId} value={inputValue}></Field>
                </Form>
            </Formik>
        </div>
    )
}