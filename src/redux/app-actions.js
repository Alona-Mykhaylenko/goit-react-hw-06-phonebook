
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";



// const ADDCONTACT = 'app/addContact';
// const HANDLECHANGE = 'app/handleChange';
// const HANDLEDELETE = 'app/handleDelete';

// export {ADDCONTACT, HANDLECHANGE, HANDLEDELETE};

// const addContact = (name, number) =>({
//     type: ADDCONTACT,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//         filter: '',
//       }
// })

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

// const handleDelete = (id) =>({
//     type: HANDLEDELETE,
//     payload: id
// })

const handleDelete = createAction('app/handleDelete')


// const handleChange = (ETvalue) =>({
//     type: HANDLECHANGE,
//     payload: ETvalue
// })

const handleChange = createAction('app/handleChange')

export {addContact, handleDelete, handleChange};
