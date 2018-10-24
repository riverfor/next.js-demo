import { combineReducers } from 'redux'
import {mainReducer} from './pages/main/reducer'

const reducer = combineReducers({
    main: mainReducer
})

export default reducer
