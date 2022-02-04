import reducer, {
  initialState,
  dataAction,
  errorAction,
  countryAction,
  ERROR,
  FETCHED_DATA,
  FETCHED_COUNTRIES,
} from './home';

describe('Test Reducer', () => {
  it('should return initial state', () => {
    const action = { type: '' };
    const result = reducer(initialState, action);
    expect(result).toEqual(initialState);
  });
  it('should return error', () => {
    const state = { ...initialState, error: 'error' };
    const action = { type: 'api/ERROR', error: 'error' };
    const result = reducer(initialState, action);
    expect(result).toEqual(state);
  });
  it('should return loading', () => {
    const state = { ...initialState, loading: true };
    const action = { type: 'api/data/LOAD' };
    const result = reducer(initialState, action);
    expect(result).toEqual(state);
  });
  it('should return fetched data', () => {
    const state = {
      ...initialState,
      date: 'now',
      data: { country: 'country' },
      total: 0,
    };
    const action = {
      type: 'api/data/FETCHED',
      date: 'now',
      data: { dates: { now: { countries: { country: 'country' } } }, total: 0 },
    };
    const result = reducer(initialState, action);
    expect(result).toStrictEqual(state);
  });
  it('should return fetched countries', () => {
    const state = { ...initialState, countries: [] };
    const action = {
      type: 'api/countries/FETCHED',
      data: { _links: { 'country:items': [] } },
    };
    const result = reducer(initialState, action);
    expect(result).toEqual(state);
  });
});

describe('Test Actions', () => {
  it('should return dataAction', () => {
    expect(dataAction('test', 'now')).toStrictEqual({
      type: FETCHED_DATA,
      data: 'test',
      date: 'now',
    });
  });
  it('should return errorAction', () => {
    expect(errorAction('error')).toStrictEqual({ type: ERROR, error: 'error' });
  });
  it('should return countryAction', () => {
    expect(countryAction('countries')).toStrictEqual({
      type: FETCHED_COUNTRIES,
      data: 'countries',
    });
  });
});
