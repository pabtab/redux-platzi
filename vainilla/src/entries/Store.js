import { createStore } from 'redux';
//import data from '../api.json';
import data from '../schemas/index.js';
import reducer from '../reducers/Reducer.js';

const initialState = {
  data: {
    //...data,
    entities: data.entities,
    categories: data.result.categories
  },
  search: []
}

const Store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default Store;