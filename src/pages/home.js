import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector((state) => state.home.data.total);
  return (
    <section className="home">
      <div className="world">
        <p>
          total:
          confirmed:
          {' '}
          {data.today_confirmed}
          deaths:
          {' '}
          {data.today_deaths}
          new:
          {' '}
          {data.today_new_confirmed}
        </p>
      </div>
    </section>
  );
};
export default Home;
