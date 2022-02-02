/* eslint camelcase: 0 */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPopulation } from '../redux/home/home';
import DetailInfo from '../components/detail-info';
import './details.css';

const Details = () => {
  const { country, countryCode } = useParams();
  const population = useSelector((state) => state.home.population);
  const data = useSelector((state) => state.home.data[country]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopulation(countryCode));
  }, []);

  return (
    <section className="country">
      {data && (
      <>
        <h2>{data.name}</h2>
        <div className="details tabs">
          <DetailInfo infoName="Total Population: " infoNumber={population} />
          <DetailInfo infoName="Total Confirmed Cases: " infoNumber={data.today_confirmed} />
          <DetailInfo infoName="New Confirmed Cases: " infoNumber={data.today_new_confirmed} />
          <DetailInfo
            infoName="Confirmed Cases Per Population: "
            infoNumber={data.today_confirmed}
            population={population}
          />
          <DetailInfo infoName="Total Deaths: " infoNumber={data.today_deaths} />
          <DetailInfo infoName="New Deaths: " infoNumber={data.today_new_deaths} />
          <DetailInfo
            infoName="Deaths Per Population: "
            infoNumber={data.today_deaths}
            population={population}
          />
          <DetailInfo infoName="Total Open Cases: " infoNumber={data.today_open_cases} />
          <DetailInfo infoName="New Open Cases: " infoNumber={data.today_new_open_cases} />
          <DetailInfo
            infoName="Open Cases Per Population: "
            infoNumber={data.today_open_cases}
            population={population}
          />
          <DetailInfo infoName="Total Recovered: " infoNumber={data.today_recovered} />
          <DetailInfo infoName="New Recovered: " infoNumber={data.today_new_recovered} />
          <DetailInfo
            infoName="Recovered Per Population: "
            infoNumber={data.today_recovered}
            population={population}
          />
        </div>
      </>
      )}
    </section>
  );
};
export default Details;
