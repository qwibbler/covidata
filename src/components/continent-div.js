import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

const ContinentDiv = (props) => {
  const { country, densityOpacity } = props;
  const { continent, code } = useParams();
  return (
    <div className="country tab">
      <div className="div-bg" style={densityOpacity(country)} />
      <Link
        to={`/continent/${continent}/${code}/${
          country.name
        }/${country.href.slice(-3)}`}
      >
        {country.name}
      </Link>
    </div>
  );
};
ContinentDiv.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
  densityOpacity: PropTypes.func.isRequired,
};
export default ContinentDiv;
