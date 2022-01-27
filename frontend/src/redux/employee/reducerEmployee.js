import { types } from './type';

let initialState = [];

const reducerEmployee = (state = initialState, action) => {

    if (localStorage.getItem('employes')) {
        state = JSON.parse(localStorage.getItem('employes'))
    };

    switch (action.type) {
        case types.CREATE_EMPLOYEE:
            console.log(state);
            state.push({...action.payload});
            localStorage.setItem('employes', JSON.stringify(state));
            return state;
        default:
            return state;
    }
}

export default reducerEmployee;