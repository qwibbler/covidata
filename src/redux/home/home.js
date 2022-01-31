import { DateTime } from 'luxon';

export const ERROR = 'api/ERROR';
export const LOAD_DATA = 'api/data/LOAD';
export const FETCHED_DATA = 'api/data/FETCHED';
export const FETCHED_CONTINENT = 'api/continent/FETCHED';
export const FETCHED_COUNTRIES = 'api/countries/FETCHED';

export const url = 'https://api.covid19tracking.narrativa.com/api/';
const now = DateTime.now().toFormat('yyyy-MM-dd');

const myHeaders = new Headers();
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const fetchData = (date = now) => (dispatch) => {
  dispatch({ type: LOAD_DATA });
  return fetch(
    `https://api.covid19tracking.narrativa.com/api/${date}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCHED_DATA, data, date }))
    .catch((error) => dispatch({ type: ERROR, error }));
};

export const fetchContinents = () => (dispatch) => fetch('https://api.teleport.org/api/continents/', requestOptions)
  .then((response) => response.json())
  .then((data) => dispatch({ type: FETCHED_CONTINENT, data }))
  .catch((error) => dispatch({ type: ERROR, error }));

export const fetchCountries = (continent) => (dispatch) => fetch(`${continent.href}/countries/`, requestOptions)
  .then((response) => response.json())
  .then((data) => dispatch({ type: FETCHED_COUNTRIES, data, continent: continent.name }))
  .catch((error) => dispatch({ type: ERROR, error }));

const initialState = {
  data: {},
  date: '',
  continents: [],
  countries: {},
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_DATA: {
      return {
        ...state,
        data: action.data,
        date: action.date,
        loading: false,
      };
    }
    case FETCHED_CONTINENT: {
      return {
        ...state,
        continents: [...action.data['_links']['continent:items']], // eslint-disable-line dot-notation
        loading: false,
      };
    }
    case FETCHED_COUNTRIES: {
      const { continent } = action;
      console.log(continent);
      const countries = action.data['_links']['country:items'].map((country) => country.name); // eslint-disable-line dot-notation
      return {
        ...state,
        countries: { continent: countries },
        loading: false,
      };
    }
    case LOAD_DATA: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case ERROR: {
      console.log(action.error);
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
export default reducer;
