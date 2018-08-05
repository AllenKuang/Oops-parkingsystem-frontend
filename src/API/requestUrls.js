<<<<<<< HEAD
const globalUrl = "https://parkinglot-backend.herokuapp.com/api/v1/" //dev
// const globalUrl = "http://10.222.232.147:8080/api/v1/" //test
=======
// const globalUrl = "https://parkinglot-backend.herokuapp.com/api/v1/" //dev
const globalUrl = "http://localhost:8080/api/v1/" //test
>>>>>>> combined_search_vague'
//  const globalUrl = "http://10.222.232.148:8080/api/v1/" // carol test

export default {
    "login":globalUrl + "login",
    "employees":globalUrl + "users",
    "parkingLots":globalUrl + "parkinglots",
    "orders":globalUrl + "orders",
    "parkingLotsDashboard":globalUrl+"parkinglots/dashboard",
    "parkingLotCombineSearch":globalUrl+"parkinglots/combineSearch",
}