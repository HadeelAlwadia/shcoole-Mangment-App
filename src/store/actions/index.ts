import { Irequest, Iuser ,Iproduct} from "../../@types"
import CONSTANTS from "../constants"

const actions={
userInfo:{
    start:()=>({type:CONSTANTS.START_GET_USER_INFO}),
    success:(payload:Iuser)=>({type:CONSTANTS.SUCCESS_GET_USER_INFO,payload}),
    failed:(payload:string)=>({type:CONSTANTS.FAILED_GET_USER_INFO,payload})
},
requestsUser:{
    start:()=>({type:CONSTANTS.START_GET_REQUESTS_USER}),
    success:(payload:Irequest[])=>({type:CONSTANTS.SUCCESS_GET_REQUESTS_USER,payload}),
    failed:(payload:string)=>({type:CONSTANTS.FAILED_GET_REQUESTS_USER,payload})
},
usersAdmin:{
    start:()=>({type:CONSTANTS.START_GET_USERS_ADMIN}),
    success:(payload:Iuser[])=>({type:CONSTANTS.SUCCESS_GET_USERS_ADMIN,payload}),
    failed:(payload:string)=>({type:CONSTANTS.FAILED_GET_USERS_ADMIN,payload})
},
productsAdmin:{
    start:()=>({type:CONSTANTS.START_GET_PRODUCTS_ADMIN}),
    success:(payload:Iproduct[])=>({type:CONSTANTS.SUCCESS_GET_PRODUCTS_ADMIN,payload}),
    failed:(payload:string)=>({type:CONSTANTS.FAILED_GET_PRODUCTS_ADMIN,payload})
}
}
export default actions

