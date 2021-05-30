import types from './types';

const INITIAL_STATE = {};

const basicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_BASIC_PENDING:
      return { ...state, isLoading: action.isLoading };
    case types.GET_BASIC_FULFILLED:
      return { ...state, isLoading: action.isLoading, basic: action.basic };
    case types.GET_BASIC_REJECTED:
      return {
        ...state,
        isLoading: action.isLoading,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};

export default basicReducer;
