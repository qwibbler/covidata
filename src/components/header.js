import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { DateTime } from 'luxon';
import { datingAction, fetchData, now } from '../redux/home/home';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = useSelector((state) => state.home.date);
  const changeDate = useSelector((state) => state.home.changeDate);

  const changeHandler = (e) => dispatch(fetchData(e.target.value));
  const toggleEdit = () => dispatch(datingAction());
  // const nextBtn = (n) => {
  //   console.log(date);
  //   const newDate = DateTime.now().plus({ days: n }).toFormat('yyyy-MM-dd');
  //   console.log(date, newDate);
  //   dispatch(fetchData(newDate));
  // };
  return (
    <header>
      <button type="button" onClick={() => navigate(-1)}>
        ⧀
      </button>
      {changeDate ? (
        <div className="date-inputs">
          <input
            className="search input"
            type="date"
            value={date}
            onChange={changeHandler}
            onSubmit={toggleEdit}
            min="2020-01-23"
            max={now}
          />
          <button className="search btn" type="button" onClick={toggleEdit}>
            ✔
          </button>
        </div>
      ) : (
        <p onDoubleClick={toggleEdit}>{date}</p>
      )}
      <button type="button" onClick={toggleEdit}>
        🖉
      </button>
    </header>
  );
};
export default Header;
