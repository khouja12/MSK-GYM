import {combineReducers} from "redux"
import memberReducer from "./memberReducer"
import coachReducer from "./coachReducer"


const rootReducer = combineReducers({memberReducer , coachReducer}) 

export default rootReducer