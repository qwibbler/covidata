import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCountries } from '../redux/home/home';

const Continent = () => {
  const { continent, code } = useParams();
  const href = `https://api.teleport.org/api/continents/geonames:${code}/`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries(href, continent));
  }, []);

  const countries = useSelector((state) => state.home.countries);
  return (
    <section className="continent">
      <h1>continent</h1>
      {countries.map((country) => (
        <>
          <Link to={`/continent/${continent}/${code}/${country}`} key={country}>{country}</Link>
          <br />
        </>
      ))}
    </section>
  );
};
export default Continent;
