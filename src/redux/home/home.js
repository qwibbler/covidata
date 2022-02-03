/* eslint dot-notation: 0 */
import { DateTime } from 'luxon';

export const ERROR = 'api/ERROR';
export const LOAD_DATA = 'api/data/LOAD';
export const FETCHED_DATA = 'api/data/FETCHED';
export const FETCHED_COUNTRIES = 'api/countries/FETCHED';
export const FETCHED_POP = 'api/pop/FETCHED';
export const FILTER = 'countries/FILTER';
export const DATING = 'data/DATING';

export const covidUrl = 'https://api.covid19tracking.narrativa.com/api/';
export const countriesUrl = 'https://api.teleport.org/api/continents/';
export const popUrl = 'https://api.teleport.org/api/countries/iso_alpha2:';
export const yesterday = DateTime.now().minus({ days: 1 }).toFormat('yyyy-MM-dd');
export const randOpacity = () => ({ opacity: (Math.random() * 0.3 + 0.2).toString() });

export const dataAction = (data, date) => ({ type: FETCHED_DATA, data, date });
export const errorAction = (error) => ({ type: ERROR, error });
export const countryAction = (data) => ({ type: FETCHED_COUNTRIES, data });
export const filterAction = (filter) => ({ type: FILTER, filter });
export const datingAction = () => ({ type: DATING });

const myHeaders = new Headers();
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const fetchData = (date = yesterday) => (dispatch) => {
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

export const initialState = {
  data: {},
  total: {},
  date: '',
  countries: [],
  population: {},
  filter: '',
  loading: false,
  error: '',
  changeDate: false,
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
    case FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }
    case DATING: {
      return {
        ...state,
        changeDate: !state.changeDate,
      };
    }
    default:
      return state;
  }
};
export default reducer;
