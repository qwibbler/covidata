import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { fetchCountries } from '../redux/home/home';

const Details = () => {
  const [href, continent] = ['https://api.teleport.org/api/continents/geonames:AS/', 'Asia'];
  // const { continent } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries(href, continent));
  }, []);

  const countries = useSelector((state) => state.home.countries);
  const date = useSelector((state) => state.home.date);
  const data = useSelector((state) => state.home.data.dates[date].countries);
  const filteredData = Object.entries(data).filter((country) => countries.includes(country[0]));
  return (
    <section className="details">
      <h1>continent</h1>
      {filteredData.map((country) => (
        <p key={country[0]}>{country[0]}</p>
      ))}
    </section>
  );
};
export default Details;
