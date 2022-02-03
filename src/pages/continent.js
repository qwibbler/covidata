import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries, filterAction } from '../redux/home/home';
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

  const filterStr = useSelector((state) => state.home.filter);
  const countries = useSelector((state) => state.home.countries);
  const data = useSelector((state) => state.home.data);
  const countriesFiltered = countries
    .map((country) => (corresponding[country.name]
      ? { ...country, name: corresponding[country.name] }
      : { ...country }))
    .filter((country) => data[country.name])
    .filter((country) => country.name.toUpperCase().indexOf(filterStr.toUpperCase()) > -1);

  return (
    <section className="countries">
      <h1>{continent}</h1>
      <div className="search-bar">
        <input
          type="text"
          className="search input"
          placeholder="Search by country"
          name="filter-input"
          value={filterStr}
          onChange={(e) => dispatch(filterAction(e.target.value))}
        />
        <button type="button" className="search btn">
          &#128269;
        </button>
      </div>
      <div className="countries tabs">
        {countriesFiltered.map((country) => (
          <ContinentDiv
            key={country.name}
            country={country}
            confirmed={data[country.name].today_confirmed}
            population={pop[country.href.slice(-3)]}
          />
        ))}
      </div>
    </section>
  );
};
export default Continent;
