import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { continentsList } from '../redux/home/home';
import DetailInfo from '../components/detail-info';
import './home.css';

const population = 7924303275;
const Home = () => {
  const total = useSelector((state) => state.home.total);
  const randOpacity = () => ({ opacity: (Math.random() * 0.3 + 0.2).toString() });
  return (
    <section className="home">
      {total.date && (
        <div className="world">
          <p>Total: </p>
          <DetailInfo infoName="Population: " infoNumber={population} />
          <DetailInfo
            infoName="Confirmed: "
            infoNumber={total.today_confirmed}
          />
          <DetailInfo
            infoName="Per Population: "
            infoNumber={total.today_confirmed}
            population={population}
          />
          <DetailInfo infoName="Deaths: " infoNumber={total.today_deaths} />
          <DetailInfo
            infoName="Per Population: "
            infoNumber={total.today_deaths}
            population={population}
          />
          <DetailInfo
            infoName="New Confirmed: "
            infoNumber={total.today_new_confirmed}
          />
          <DetailInfo
            infoName="Per Population: "
            infoNumber={total.today_new_confirmed}
            population={population}
          />
        </div>
      )}
      <div className="continents">
        {continentsList.map((continent) => (
          <div className="continent" key={continent.name}>
            <div className="div-bg" style={randOpacity()} />
            <Link to={`/continent/${continent.name}/${continent.code}`}>
              {continent.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Home;
