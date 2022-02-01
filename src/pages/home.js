import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { continentsList } from '../redux/home/home';

const Home = () => {
  const total = useSelector((state) => state.home.total);
  return (
    <section className="home">
      <div className="world">
        {total.date && (
          <p>
            total:
            <br />
            confirmed:
            {' '}
            {total.today_confirmed.toLocaleString()}
            <br />
            deaths:
            {' '}
            {total.today_deaths.toLocaleString()}
            <br />
            new:
            {' '}
            {total.today_new_confirmed.toLocaleString()}
          </p>
        )}
      </div>
      <div className="continents">
        {continentsList.map((continent) => (
          <>
            <Link
              key={continent.name}
              to={`/continent/${continent.name}/${continent.code}`}
            >
              {continent.name}
            </Link>
            <br />
          </>
        ))}
      </div>
    </section>
  );
};
export default Home;
