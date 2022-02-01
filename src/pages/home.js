import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchCountries } from '../redux/home/home';

const Home = () => {
  const data = useSelector((state) => state.home.data.total);
  const continents = useSelector((state) => state.home.continents);
  // console.log(data);
  // const dispatch = useDispatch();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch(fetchCountries(e.target.name, e.target.textContent));
  // };

  return (
    <section className="home">
      <div className="world">
        {data.total && (
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
            to={`/continent/${continent.name}/${continent.href.slice(-3)}`}
            // href={continent.href}
            // name={continent.href}
            // onClick={handleClick}
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
