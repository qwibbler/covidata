/* eslint camelcase: 0 */
import { React } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pop } from '../redux/home/staticData';
import DetailInfo from '../components/detail-info';
import Spinner from '../components/spinner';
import './details.css';

const Details = () => {
  const { country, countryCode } = useParams();
  const population = pop[`${countryCode}/`];
  const data = useSelector((state) => state.home.data[country]);
  const loading = useSelector((state) => state.home.loading);

  return (
    <section className="country">
      <div className="heading">
        <div className="div-bg light" />
        <h2>{data.name}</h2>
      </div>
      {data && (
        <div className="details tabs spin-b4">
          {!loading ? (
            <>
              <DetailInfo
                infoName="Total Population: "
                infoNumber={population}
              />
              <DetailInfo
                infoName="Total Confirmed Cases: "
                infoNumber={data.today_confirmed}
              />
              <DetailInfo
                infoName="New Confirmed Cases: "
                infoNumber={data.today_new_confirmed}
              />
              <DetailInfo
                infoName="Confirmed Cases Per Population: "
                infoNumber={data.today_confirmed}
                population={population}
              />
              <DetailInfo
                infoName="Total Deaths: "
                infoNumber={data.today_deaths}
              />
              <DetailInfo
                infoName="New Deaths: "
                infoNumber={data.today_new_deaths}
              />
              <DetailInfo
                infoName="Deaths Per Population: "
                infoNumber={data.today_deaths}
                population={population}
              />
              <DetailInfo
                infoName="Total Open Cases: "
                infoNumber={data.today_open_cases}
              />
              <DetailInfo
                infoName="New Open Cases: "
                infoNumber={data.today_new_open_cases}
              />
              <DetailInfo
                infoName="Open Cases Per Population: "
                infoNumber={data.today_open_cases}
                population={population}
              />
              <DetailInfo
                infoName="Total Recovered: "
                infoNumber={data.today_recovered}
              />
              <DetailInfo
                infoName="New Recovered: "
                infoNumber={data.today_new_recovered}
              />
              <DetailInfo
                infoName="Recovered Per Population: "
                infoNumber={data.today_recovered}
                population={population}
              />
            </>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </section>
  );
};
export default Details;
