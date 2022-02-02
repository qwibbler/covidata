import React from 'react';
import PropTypes from 'prop-types';

const DetailInfo = (props) => {
  const { infoName, infoNumber, population } = props;
  return (
    <p>
      {infoName}
      {!population && infoNumber.toLocaleString()}
      {population && (`${((infoNumber / population) * 100).toFixed(2)}%`)}
    </p>
  );
};
DetailInfo.defaultProps = {
  population: null,
};
DetailInfo.propTypes = {
  infoName: PropTypes.string.isRequired,
  infoNumber: PropTypes.number.isRequired,
  population: PropTypes.number,
};
export default DetailInfo;
