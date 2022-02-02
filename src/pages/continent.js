import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCountries } from '../redux/home/home';
import { corresponding } from '../redux/home/namefix';
import './continent.css';

const Continent = (props) => {
  const { randOpacity } = props;
  const { continent, code } = useParams();
  const href = `https://api.teleport.org/api/continents/geonames:${code}/`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries(href));
  }, []);

  const countries = useSelector((state) => state.home.countries);
  const data = useSelector((state) => state.home.data);

  const countriesFiltered = countries
    .map((country) => {
      if (corresponding[country.name]) {
        return { ...country, name: corresponding[country.name] };
      }
      return { ...country };
    })
    .filter((country) => data[country.name]);

  return (
    <section className="countries">
      <h1>{continent}</h1>
      <div className="countries tabs">
        {countriesFiltered.map((country) => (
          <div className="country tab" key={country.name}>
            <div className="div-bg" style={randOpacity()} />
            <Link
              to={`/continent/${continent}/${code}/${
                country.name
              }/${country.href.slice(-3)}`}
            >
              {country.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
Continent.propTypes = {
  randOpacity: PropTypes.func.isRequired,
};
export default Continent;
