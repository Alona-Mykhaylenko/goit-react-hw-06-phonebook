import PropTypes from "prop-types";

import { connect } from "react-redux";
import { handleChange } from "../../redux/app-actions";


const Filter = ({ filter, handleChange }) => {
  return (
    <label>
      Find contacts by name <br />
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};

const mapStateToProps =(state) =>({
  filter: state.filter,
})

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(handleChange(event.target.value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
