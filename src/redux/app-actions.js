
import { v4 as uuidv4 } from "uuid";


const ADDCONTACT = 'app/addContact';
const HANDLECHANGE = 'app/handleChange';
const HANDLEDELETE = 'app/handleDelete';

export {ADDCONTACT, HANDLECHANGE, HANDLEDELETE};

const addContact = (name, number) =>({
    type: ADDCONTACT,
    payload: {
        id: uuidv4(),
        name,
        number,
        filter: '',
      }
})

const handleDelete = (id) =>({
    type: HANDLEDELETE,
    payload: id
})

const handleChange = (ETvalue) =>({
    type: HANDLECHANGE,
    payload: ETvalue
})

export {addContact, handleDelete, handleChange};
