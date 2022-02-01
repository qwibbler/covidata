import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { continentsList } from '../redux/home/home';

const population = 7924303275;
const Home = () => {
  const total = useSelector((state) => state.home.total);
  return (
    <section className="home">
      <div className="world">
        {total.date && (
          <p>
            total:
            <br />
            Population:
            {' '}
            {population.toLocaleString()}
            <br />
            confirmed:
            {' '}
            {total.today_confirmed.toLocaleString()}
            <br />
            Per Population:
            {((total.today_confirmed / population) * 100)
              .toFixed(2)
              .toLocaleString()}
            %
            <br />
            deaths:
            {' '}
            {total.today_deaths.toLocaleString()}
            <br />
            Per Population:
            {((total.today_deaths / population) * 100)
              .toFixed(2)
              .toLocaleString()}
            %
            <br />
            new:
            {' '}
            {total.today_new_confirmed.toLocaleString()}
            <br />
            Per Population:
            {((total.today_new_confirmed / population) * 100)
              .toFixed(2)
              .toLocaleString()}
            %
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
