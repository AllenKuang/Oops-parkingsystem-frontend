import * as types from '../constants/ActionTypes'
export default (state=[], action) => {
    switch (action.type) {
       case types.PARKINGBOYLIST:{
            let newState = [...action.parkingboysList]
            // newState = action.employeesList
           console.log(newState)
            return newState;
        }
        case types.ADDPARKINGBOY:{
            let newState = [...state,action.employeeItem]
            return newState;
        } 
        case types.UPDATEPARKINGBOY:{
            let newState = [...state]
            return newState.map(i=>{
                if(i.id === action.employeeItem.id){
                    return action.employeeItem
                } else {
                    return i
                }
            })
        }
        case types.SEARCHPARKINGBOY:{
            console.log(action.employeesList)
            let newState = [...action.employeesList]
            return newState
        }
        default:
            return state
    }
}