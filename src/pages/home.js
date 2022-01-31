import { DateTime } from 'luxon';

export const ERROR = 'api/ERROR';
export const LOAD_DATA = 'api/data/LOAD';
export const FETCHED_DATA = 'api/data/FETCHED';
export const FETCHED_CONTINENT = 'api/continent/FETCHED';
export const FETCHED_COUNTRIES = 'api/countries/FETCHED';

export const url = 'https://api.covid19tracking.narrativa.com/api/';
export const now = DateTime.now();
console.log(now);

const myHeaders = new Headers();
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const fetchdata =
  (date = now) =>
  (dispatch) => {
    dispatch({ type: LOAD_DATA });
    return fetch(
      `https://api.covid19tracking.narrativa.com/api/${date}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCHED_DATA, data }))
      .catch((error) => dispatch({ type: ERROR, error }));
  };

export const fetchContinent = () => (dispatch) => {
  return fetch('https://api.teleport.org/api/continents/', requestOptions)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCHED_CONTINENT, data }))
    .catch((error) => dispatch({ type: ERROR, error }));
};

export const fetchCountries = (href) => (dispatch) => {
  return fetch(href + '/countries/', requestOptions)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCHED_COUNTRIES, data }))
    .catch((error) => dispatch({ type: ERROR, error }));
};

const initialState = {
  data: [],
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
        data: [...action.data],
        loading: false,
      };
    }
    case FETCHED_CONTINENT: {
      return {
        ...state,
        continents: [...action.data],
        loading: false,
      };
    }
    case FETCHED_COUNTRIES: {
      return {
        ...state,
        countries: [...action.data],
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
