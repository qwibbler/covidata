import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const InputSearch = (props) => {
  const {
    placeholder, name, value, action,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => dispatch(action(e.target.value))}
      />
      <button type="button" className="search btn">
        &#128269;
      </button>
    </div>
  );
};
InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
export default InputSearch;
