import * as types from '../constants/ActionTypes'
export default (state = [], action) => {
    switch (action.type) {
        case types.EMPLOYEELIST: {
            let newState = [...action.employeesList]
            return newState;
        }
        case types.ADDEMPLOYEE: {
            let newState = [...state, action.employeeItem]
            return newState;
        }

        case types.ACCOUNTSTATUS: {
            let newState = [...state]
            return newState.map(i => {
                if(i.id == action.employeeItem.id){
                    return action.employeeItem
                }
                return i;
            })
        }
        case types.UPDATEEMPLOYEE: {
            let newState = [...state]
            return newState.map(i => {
                if (i.id === action.employeeItem.id) {
                    return action.employeeItem
                } else {
                    return i
                }
            })
        }
        case types.SEARCHEMPLOYEE: {
            let newState = [...action.employeesList]
            return newState
        }
        default:
            return state
    }
}