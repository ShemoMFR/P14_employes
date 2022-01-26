import { types } from './type';

export const createEmployee = (data) => {
    return {
        type: types.CREATE_EMPLOYEE,
        payload: data
    }
}