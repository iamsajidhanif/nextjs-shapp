// import { authReducer } from './reducers'
import {combineReducers} from 'redux'
import * as AllReducers from './reducers'


// export default authReducer
export default combineReducers(AllReducers)
// export default combineReducers({authReducer, })
