import React from 'react';
import PropTypes from 'prop-types';

const DetailShow = (props) => {
  const { infoName, infoNumber, population } = props;
  return (
    <div className="info show">
      <h3>
        {!population && infoNumber.toLocaleString()}
        {population && (`${((infoNumber / population) * 100).toFixed(2)}%`)}
      </h3>
      <p>{infoName}</p>
    </div>
  );
};
DetailShow.defaultProps = {
  population: null,
};
DetailShow.propTypes = {
  infoName: PropTypes.string.isRequired,
  infoNumber: PropTypes.number.isRequired,
  population: PropTypes.number,
};
export default DetailShow;
