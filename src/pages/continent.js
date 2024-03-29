import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries, filterAction } from '../redux/home/home';
import { corresponding, pop } from '../redux/home/staticData';
import InputSearch from '../components/input-search';
import ContinentDiv from '../components/continent-div';
import Spinner from '../components/spinner';
import './continent.css';

const Continent = () => {
  const { continent, code } = useParams();

  const href = `https://api.teleport.org/api/continents/geonames:${code}/`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries(href));
  }, []);

  const loading = useSelector((state) => state.home.loading);
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
      <div className="heading">
        <div className="div-bg light" />
        <h1>{continent}</h1>
        <InputSearch placeholder="Search by country" name="filter-input" value={filterStr} action={filterAction} />
      </div>
      <div className="countries tabs spin-b4">
        {!loading ? (countriesFiltered.map((country) => (
          <ContinentDiv
            key={country.name}
            country={country}
            confirmed={data[country.name].today_confirmed}
            population={pop[country.href.slice(-3)]}
          />
        ))) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};
export default Continent;
