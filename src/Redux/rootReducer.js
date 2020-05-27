import { combineReducers } from 'redux'

//summary reducer
import covidSummary from './reducers/covidSummary'

const rootReducer = combineReducers({
    covidSummary
})

export default rootReducer;