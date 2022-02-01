/* eslint dot-notation: 0 */ //
import { DateTime } from 'luxon';

export const ERROR = 'api/ERROR';
export const LOAD_DATA = 'api/data/LOAD';
export const FETCHED_DATA = 'api/data/FETCHED';
export const FETCHED_CONTINENT = 'api/continent/FETCHED';
export const FETCHED_COUNTRIES = 'api/countries/FETCHED';

export const covidUrl = 'https://api.covid19tracking.narrativa.com/api/';
export const countriesUrl = 'https://api.teleport.org/api/continents/';
export const now = DateTime.now().toFormat('yyyy-MM-dd');

const myHeaders = new Headers();
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const fetchData = (date = now) => (dispatch) => {
  dispatch({ type: LOAD_DATA });
  return fetch(`${covidUrl + date}`, requestOptions)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCHED_DATA, data, date }))
    .catch((error) => dispatch({ type: ERROR, error }));
};

export const fetchContinents = () => (dispatch) => fetch(countriesUrl, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    dispatch({ type: FETCHED_CONTINENT, data });
  })
  .catch((error) => dispatch({ type: ERROR, error }));

  export const fetchCountries = (href, continent) => (dispatch) => fetch(`${href}countries/`, requestOptions)
  .then((response) => response.json())
  .then((data) => dispatch({ type: FETCHED_COUNTRIES, data, continent }))
  .catch((error) => dispatch({ type: ERROR, error }));

const initialState = {
  data: {},
  date: '',
  continents: [],
  countries: [],
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
        continents: [...action.data['_links']['continent:items']],
        loading: false,
      };
    }
    case FETCHED_COUNTRIES: {
      const countries = action.data['_links']['country:items'].map(
        (country) => country.name,
      );
      return {
        ...state,
        countries: [...countries],
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
      // console.log(action.error);
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
