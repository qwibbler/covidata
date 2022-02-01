/* eslint camelcase: 0 */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPopulation } from '../redux/home/home';
import DetailInfo from '../components/detail-info';

const Details = () => {
  const { country, countryCode } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopulation(countryCode));
  }, []);
  const population = useSelector((state) => state.home.population);

  const data = useSelector((state) => state.home.data[country]);

  return (
    <section className="country">
      <h2>{data.name}</h2>
      <DetailInfo infoName="Total Population: " infoNumber={population} />
      <p />
      <DetailInfo infoName="Total Confirmed Cases: " infoNumber={data.today_confirmed} />
      <DetailInfo infoName="New Confirmed Cases: " infoNumber={data.today_new_confirmed} />
      <DetailInfo
        infoName="Confirmed Cases Per Population: "
        infoNumber={((data.today_confirmed / population) * 100).toFixed(2)}
      />
      <DetailInfo infoName="Total Deaths: " infoNumber={data.today_deaths} />
      <DetailInfo infoName="New Deaths: " infoNumber={data.today_new_deaths} />
      <DetailInfo
        infoName="Deaths Per Population: "
        infoNumber={((data.today_deaths / population) * 100).toFixed(2)}
      />
      <DetailInfo infoName="Total Open Cases: " infoNumber={data.today_open_cases} />
      <DetailInfo infoName="New Open Cases: " infoNumber={data.today_new_open_cases} />
      <DetailInfo
        infoName="Open Cases Per Population: "
        infoNumber={((data.today_open_cases / population) * 100).toFixed(2)}
      />
      <DetailInfo infoName="Total Recovered: " infoNumber={data.today_recovered} />
      <DetailInfo infoName="New Recovered: " infoNumber={data.today_new_recovered} />
      <DetailInfo
        infoName="Recovered Per Population: "
        infoNumber={((data.today_recovered / population) * 100).toFixed(2)}
      />
    </section>
  );
};
export default Details;
