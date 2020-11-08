import { AnyAction } from 'redux';
import {
  UserState,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER,
  DELETE_USER,
} from './types';

const initialState: UserState = {
  data: [],
  error: '',
  pending: false,
};

const reducer = (state = initialState, action: AnyAction): UserState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS_REQUEST:
      return { ...state, error: '', pending: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, data: payload, pending: false };
    case FETCH_USERS_FAILURE:
      return { ...state, error: payload, pending: false };
    case ADD_USER: {
      const id = state.data.length ? Math.max(...(state.data.map((user) => user.id) ?? 0)) + 1 : 1;
      return { ...state, data: [...state.data, { id, ...payload }] };
    }
    case DELETE_USER:
      return { ...state, data: state.data.filter(({ id }) => id !== payload) };
    default:
      return state;
  }
};

export default reducer;
