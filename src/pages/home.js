import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/home/home';

const Home = () => {
  const data = useSelector((state) => state.home.data);
  const continents = useSelector((state) => state.home.continents);
  // console.log(data);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchCountries(e.target.name, e.target.textContent));
  };

  return (
    <section className="home">
      <div className="world">
        {data.total && (
          <p>
            total:
            <br />
            confirmed:
            {' '}
            {data.total.today_confirmed.toLocaleString()}
            <br />
            deaths:
            {' '}
            {data.total.today_deaths.toLocaleString()}
            <br />
            new:
            {' '}
            {data.total.today_new_confirmed.toLocaleString()}
          </p>
        )}
      </div>
      <div className="continents">
        {continents.map((continent) => (
          <button
            type="button"
            key={continent.name}
            href={continent.href}
            name={continent.href}
            onClick={handleClick}
          >
            {continent.name}
          </button>
        ))}
      </div>
    </section>
  );
};
export default Home;
