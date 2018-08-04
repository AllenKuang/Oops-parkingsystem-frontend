import { combineReducers } from 'redux'
import employeeReducers from "./employee"
import parkingLotReducers from "./parkinglot"
import orderReducers from "./order"
import parkingLotInDashboardReducers from "./parkinglotInDashboard"
import parkingboyReducers from "./parkingboy"
const parkingLotApp = combineReducers({
    employeeReducers,
    parkingLotReducers,
    orderReducers,
    parkingLotInDashboardReducers,
    parkingboyReducers,
  })
  export default parkingLotApp