import { React } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { country } = useParams();
  const date = useSelector((state) => state.home.date);
  const data = useSelector(
    (state) => state.home.data.dates[date].countries[country],
  );
  const dataArr = Object.entries(data).map(([key, value]) => [key, value]);
  console.log(dataArr);
  return (
    <section className="country">
      {dataArr.map((entry) => {
        if (typeof entry[1] === 'string' || typeof entry[1] === 'number') {
          return (
            <p key={entry[0]}>
              {entry[0]}
              :
              {entry[1]}
            </p>
          );
        }
        return <br key={entry[0]} />;
      })}
    </section>
  );
};
export default Details;
