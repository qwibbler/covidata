import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCountries } from '../redux/home/home';
import { corresponding } from '../redux/home/namefix';

const Continent = () => {
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
    <section className="continent">
      <h1>{continent}</h1>
      {countriesFiltered.map((country) => (
        <>
          <Link
            to={`/continent/${continent}/${code}/${
              country.name
            }/${country.href.slice(-3)}`}
            key={country.name}
          >
            {country.name}
          </Link>
          <br />
        </>
      ))}
    </section>
  );
};
export default Continent;
