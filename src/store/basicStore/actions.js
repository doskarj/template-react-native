import types from './types';

export const fetchBasicPending = () => ({
  type: types.GET_BASIC_PENDING,
  isLoading: true
});
export const fetchBasicFulfilled = (basic) => ({
  type: types.GET_BASIC_FULFILLED,
  isLoading: false,
  basic
});
export const fetchBasicRejected = (errorMessage) => ({
  type: types.GET_BASIC_REJECTED,
  isLoading: false,
  errorMessage
});
