import User from '@/interfaces/user.interface';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export interface UserState {
  data: User[];
  error: string;
  pending: boolean;
}
