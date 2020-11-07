import { Dispatch } from 'redux';
import User from '@/interfaces/user.interface';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_USER,
  DELETE_USER,
} from './types';

export const fetchUsers = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await response.json();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
};

export const addUser = (user: Omit<User, 'id'>) => ({ type: ADD_USER, payload: user });

export const deleteUser = (id: number) => ({ type: DELETE_USER, payload: id });
