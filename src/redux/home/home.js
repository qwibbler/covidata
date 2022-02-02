/* eslint dot-notation: 0 */
import { DateTime } from 'luxon';

export const ERROR = 'api/ERROR';
export const LOAD_DATA = 'api/data/LOAD';
export const FETCHED_DATA = 'api/data/FETCHED';
export const FETCHED_COUNTRIES = 'api/countries/FETCHED';
export const FETCHED_POP = 'api/pop/FETCHED';

export const covidUrl = 'https://api.covid19tracking.narrativa.com/api/';
export const countriesUrl = 'https://api.teleport.org/api/continents/';
export const popUrl = 'https://api.teleport.org/api/countries/iso_alpha2:';
export const now = DateTime.now().toFormat('yyyy-MM-dd');
export const continentsList = [
  {
    code: 'AF',
    name: 'Africa',
  },
  {
    code: 'AN',
    name: 'Antarctica',
  },
  {
    code: 'AS',
    name: 'Asia',
  },
  {
    code: 'EU',
    name: 'Europe',
  },
  {
    code: 'NA',
    name: 'North America',
  },
  {
    code: 'OC',
    name: 'Oceania',
  },
  {
    code: 'SA',
    name: 'South America',
  },
];
export const randOpacity = () => ({ opacity: (Math.random() * 0.3 + 0.2).toString() });

const myHeaders = new Headers();
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const dataAction = (data, date) => ({ type: FETCHED_DATA, data, date });
export const errorAction = (error) => ({ type: ERROR, error });
export const countryAction = (data) => ({ type: FETCHED_COUNTRIES, data });
export const popAction = (data) => ({ type: FETCHED_POP, data });

export const fetchData = (date = now) => (dispatch) => {
  dispatch({ type: LOAD_DATA });
  return fetch(`${covidUrl + date}`, requestOptions)
    .then((response) => response.json())
    .then((data) => dispatch(dataAction(data, date)))
    .catch((error) => dispatch(errorAction(error)));
};

export const fetchCountries = (href) => (dispatch) => fetch(`${href}countries/`, requestOptions)
  .then((response) => response.json())
  .then((data) => dispatch(countryAction(data)))
  .catch((error) => dispatch(errorAction(error)));

export const fetchPopulation = (code) => (dispatch) => fetch(`${popUrl + code}/`, requestOptions)
  .then((response) => response.json())
  .then((data) => dispatch(popAction(data)))
  .catch((error) => dispatch(errorAction(error)));

export const initialState = {
  data: {},
  total: {},
  date: '',
  countries: [],
  population: 0,
  loading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_DATA: {
      return {
        ...state,
        date: action.date,
        data: action.data.dates[action.date].countries,
        total: action.data.total,
        loading: false,
      };
    }
    case FETCHED_COUNTRIES: {
      return {
        ...state,
        countries: [...action.data['_links']['country:items']],
        loading: false,
      };
    }
    case FETCHED_POP: {
      return {
        ...state,
        population: action.data.population,
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
