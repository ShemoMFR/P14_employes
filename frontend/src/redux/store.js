import {createStore} from 'redux';
import reducerEmployee from './employee/reducerEmployee';

const store = createStore(reducerEmployee);

export default store;
