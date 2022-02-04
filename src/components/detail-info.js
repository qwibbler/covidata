import React from 'react';
import PropTypes from 'prop-types';

const DetailInfo = (props) => {
  const { infoName, infoNumber, population } = props;
  return (
    <div className="info bar">
      <div className="div-bg" />
      <p>{infoName}</p>
      <p>
        {!population && infoNumber.toLocaleString()}
        {population && (`${((infoNumber / population) * 100).toFixed(2)}%`)}
      </p>
    </div>
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
