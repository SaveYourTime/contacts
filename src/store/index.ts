import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import reducers from './reducers';
import { UserState } from './user/types';

export interface State {
  user: UserState;
}

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<State> = () => createStore(reducers, bindMiddleware([thunk]));

const wrapper = createWrapper<State>(makeStore, { debug: process.env.NODE_ENV !== 'production' });

export default wrapper;
