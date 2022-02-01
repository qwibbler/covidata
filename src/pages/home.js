import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const data = useSelector((state) => state.home.data.total);
  const continents = useSelector((state) => state.home.continents);

  return (
    <section className="home">
      <div className="world">
        {data && (
          <p>
            total:
            <br />
            confirmed:
            {' '}
            {data.today_confirmed.toLocaleString()}
            <br />
            deaths:
            {' '}
            {data.today_deaths.toLocaleString()}
            <br />
            new:
            {' '}
            {data.today_new_confirmed.toLocaleString()}
          </p>
        )}
      </div>
      <div className="continents">
        {continents.map((continent) => (
          <Link
            key={continent.name}
            to={`/continent/${continent.name}/${continent.code}`}
          >
            {continent.name}
          </Link>
        ))}
      </div>
      <Link to="/continent/Asia/AS">Deets</Link>
    </section>
  );
};
export default Home;
