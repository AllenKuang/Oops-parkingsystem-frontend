import { connect } from 'react-redux'
import ParkingLotMangement from "../compoments/parkingLot-management"
import Api from "../API/parkingLotAPI"
const mapStateToProps = (state, ownProps) => {
    return {
        parkinglotsList: state.parkingLotReducers
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
   
    return {
        onGetAllParkingLots:()=>{
            Api.getAllParkingLots(dispatch)
        },

        changeStatus:(id, status)=>{
            Api.changeParkingLotStatus(id, status, dispatch)
        },

        onAddParkinglot:(value)=>{
            Api.addParkinglot(dispatch, value);
        },

        onModifyParkinglot:(id, car, value)=>{
            Api.modifyParkinglot(id, car, value, dispatch);
        },

        onSearch:(value, searchType)=>{
            Api.searchParkinglot(value, searchType, dispatch);
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotMangement)