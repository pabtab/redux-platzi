import { createStore } from 'redux';
import data from '../api.json';
import reducer from '../reducers/Reducer.js';

const initialState = {
  data: {
    ...data
  },
  search: []
}

const Store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default Store;