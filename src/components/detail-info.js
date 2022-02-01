import React from 'react';
import PropTypes from 'prop-types';

const DetailInfo = (props) => {
  const { infoName, infoNumber } = props;
  return (
    <p>
      {infoName}
      {infoNumber.toLocaleString()}
    </p>
  );
};
DetailInfo.propTypes = {
  infoName: PropTypes.string.isRequired,
  infoNumber: PropTypes.number.isRequired,
};
export default DetailInfo;
