import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../redux/home/home';
import { corresponding, pop } from '../redux/home/staticData';
import ContinentDiv from '../components/continent-div';
import './continent.css';

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
    .map((country) => ({ ...country, name: corresponding[country.name] }))
    .filter((country) => data[country.name]);

  const densityOpacity = (country) => {
    const percent = data[country.name].today_confirmed / pop[country.href.slice(-3)];
    return { opacity: percent * 2 + 0.2 };
  };

  return (
    <section className="countries">
      <h1>{continent}</h1>
      <div className="countries tabs">
        {countriesFiltered.map((country) => (
          <ContinentDiv key={country.name} country={country} densityOpacity={densityOpacity} />
        ))}
      </div>
    </section>
  );
};
export default Continent;
