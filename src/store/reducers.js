// src/store/reducers.js
import { FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from './actions';

const initialState = {
  jobs: [],
  filterJobRole: [],
  filterJobType: ['Remote', 'Hybrid', 'In-office'],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        error: null,
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        jobs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
