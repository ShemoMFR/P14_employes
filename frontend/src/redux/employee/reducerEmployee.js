import { types } from './type';

let initialState = [];

const reducerEmployee = (state = initialState, action) => {

    switch (action.type) {
        case types.CREATE_EMPLOYEE:
            state = [...state, action.payload];
            console.log(state.length);
            return state;
        default:
            return state;
    }
}

export default reducerEmployee;