import styles from "./contactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleDelete } from "../../redux/app-actions";



const ContactList = ({ filteredContactsProp, handleDeleteProp }) => {
  return (
    <ul>
      {filteredContactsProp.map((contact) => (
        <li key={contact.id} className={styles.li}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDeleteProp(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) =>{
  const filterInput = state.filter.toLowerCase().trim();
    const filteredContacts = state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterInput)
    );
    return {
  filteredContactsProp: filteredContacts
}};

const mapDispatchToProps = dispatch =>({
  handleDeleteProp: (id) => dispatch (handleDelete(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);



ContactList.propTypes = {
  filteredContactsProp: PropTypes.array.isRequired,
  handleDeleteProp: PropTypes.func.isRequired,
};


