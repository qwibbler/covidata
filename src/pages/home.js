import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector((state) => state.home.data.total);
  return (
    <section className="home">
      <div className="world">
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
      </div>
    </section>
  );
};
export default Home;
