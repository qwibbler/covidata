import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

const ContinentDiv = (props) => {
  const { country, population, confirmed } = props;
  const { continent, code } = useParams();
  const percent = confirmed / population;
  const densityOpacity = () => ({ opacity: percent * 2 + 0.2 });
  return (
    <Link
      to={`/continent/${continent}/${code}/${
        country.name
      }/${country.href.slice(-3)}`}
      className=" tab"
    >
      <div className="country tab">
        <div className="div-bg" style={densityOpacity()} />
        <h2>{country.name}</h2>
        <div className="info block">
          <h3>{population}</h3>
          <p>Population</p>
          <h3>{confirmed}</h3>
          <p>Confirmed</p>
          <h3>
            {percent.toFixed(2)}
            %
          </h3>
          <p>Percent</p>
        </div>
      </div>
    </Link>
  );
};
ContinentDiv.propTypes = {
  country: PropTypes.objectOf(PropTypes.string).isRequired,
  population: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
};
export default ContinentDiv;
