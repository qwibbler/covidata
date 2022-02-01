/* eslint camelcase: 0 */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPopulation } from '../redux/home/home';

const Details = () => {
  const { country, countryCode } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopulation(countryCode));
  }, []);
  const population = useSelector((state) => state.home.population);

  const data = useSelector((state) => state.home.data[country]);

  // console.log('data', data);
  // const dataArr = Object.entries(data).map(([key, value]) => [
  //   key,
  //   value,
  // ]);
  // console.log('dataArr', dataArr);

  return (
    <section className="country">
      <h2>{data.name}</h2>
      <p>
        Total Population:
        {population.toLocaleString()}
      </p>
      <p />
      <p>
        Total Confirmed Cases:
        {data.today_confirmed.toLocaleString()}
      </p>
      <p>
        New Confirmed Cases:
        {data.today_new_confirmed.toLocaleString()}
      </p>
      <p>
        Confirmed Cases Per Population:
        {((data.today_confirmed / population) * 100)
          .toFixed(2)
          .toLocaleString()}
        %
      </p>
      <p>
        Total Deaths:
        {data.today_deaths.toLocaleString()}
      </p>
      <p>
        New Deaths:
        {data.today_new_deaths.toLocaleString()}
      </p>
      <p>
        Deaths Per Population:
        {((data.today_deaths / population) * 100).toLocaleString()}
        %
      </p>
      <p>
        Total Open Cases:
        {data.today_open_cases.toLocaleString()}
      </p>
      <p>
        New Open Cases:
        {data.today_new_open_cases.toLocaleString()}
      </p>
      <p>
        Open Cases Per Population:
        {((data.today_open_cases / population) * 100).toLocaleString()}
        %
      </p>
      <p>
        Total Recovered:
        {data.today_recovered.toLocaleString()}
      </p>
      <p>
        New Recovered:
        {data.today_new_recovered.toLocaleString()}
      </p>
      <p>
        Recovered Per Population:
        {((data.today_recovered / population) * 100).toLocaleString()}
        %
      </p>
    </section>
  );
};
export default Details;
