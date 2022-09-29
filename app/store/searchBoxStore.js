import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import searchBoxReducer from '../reducers/SearchBox/searchBoxReducer'

const searchBoxStore = railsProps => (
  createStore(searchBoxReducer, railsProps, applyMiddleware(thunk))
);

export default searchBoxStore;
