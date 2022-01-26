import { types } from './type';

const initialState = localStorage.getItem('employes') ? JSON.parse(localStorage.getItem('employee')) : [];

const reducerEmployee = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_EMPLOYEE:
            state.length = 0 ? state = action.payload : state.push(action.payload);
            localStorage.setItem('employes', JSON.stringify(state));
            return state;
        default:
            return state;
    }
}

export default reducerEmployee;