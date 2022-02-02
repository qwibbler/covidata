import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { now } from '../redux/home/home';

const Header = () => {
  const navigate = useNavigate();
  const { continent, country } = useParams();
  return (
    <header>
      <button type="button" onClick={() => navigate(-1)}>
        &#60;
      </button>
      {country || (continent || now)}
      <button type="button">&#9881;</button>
    </header>
  );
};
export default Header;
