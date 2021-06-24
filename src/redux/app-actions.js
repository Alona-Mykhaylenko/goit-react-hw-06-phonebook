
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const addContact = createAction('app/addContact', (name, number) =>{
    return {
        payload: {
            id: uuidv4(),
            name,
            number,
            filter: '',
          }

    }
})


const handleDelete = createAction('app/handleDelete')

const handleChange = createAction('app/handleChange')

export {addContact, handleDelete, handleChange};
