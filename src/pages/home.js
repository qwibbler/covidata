import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { continentsList } from '../redux/home/staticData';
import DetailShow from '../components/detail-show';
import './home.css';

const population = 7924303275;
const Home = (props) => {
  const { randOpacity } = props;
  const total = useSelector((state) => state.home.total);
  return (
    <section className="home">
      {total.date && (
        <div className="world">
          <DetailShow infoName="Population" infoNumber={population} />
          <DetailShow
            infoName="Confirmed"
            infoNumber={total.today_confirmed}
          />
          <DetailShow
            infoName="Per Population"
            infoNumber={total.today_confirmed}
            population={population}
          />
          <DetailShow infoName="Deaths" infoNumber={total.today_deaths} />
          <DetailShow
            infoName="Per Population"
            infoNumber={total.today_deaths}
            population={population}
          />
          <DetailShow
            infoName="New Confirmed"
            infoNumber={total.today_new_confirmed}
          />
          <DetailShow
            infoName="Per Population"
            infoNumber={total.today_new_confirmed}
            population={population}
          />
        </div>
      )}
      <div className="home tabs">
        {continentsList.map((continent) => (
          <div className="continent tab" key={continent.name}>
            <div className="div-bg" style={randOpacity()} />
            <Link to={`/continent/${continent.name}/${continent.code}`}>
              <h2>{continent.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
Home.propTypes = {
  randOpacity: PropTypes.func.isRequired,
};
export default Home;
