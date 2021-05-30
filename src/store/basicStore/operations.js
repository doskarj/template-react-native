import {
  fetchBasicPending,
  fetchBasicFulfilled,
  fetchBasicRejected
} from './actions';

const fetchBasic = () => async (dispatch) => {
  try {
    dispatch(fetchBasicPending());
    const { basic } = { basic: 'basic' };
    dispatch(fetchBasicFulfilled(basic));
  } catch (error) {
    navigator.navigate('Error');
    dispatch(fetchBasicRejected(error));
  }
};

export default {
  fetchBasic
};
