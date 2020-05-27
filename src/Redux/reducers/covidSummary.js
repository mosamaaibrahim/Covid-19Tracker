import { ADD_SUMMARY, SET_SEARCH, SET_SELECTED_COUNTRY, SET_COUNTRY_DETAILS } from '../actions/covidSummary'
const initState = {
    Global: {},
    Countries: [],
    searchTxt: '',
    selectedCountry: null,
    countryDetails: []
}
const covidSummary = (state = initState, action) => {
    switch (action.type) {
        case ADD_SUMMARY:
            return {
                ...state,
                ...action.data
            }
        case SET_SEARCH: return { ...state, searchTxt: action.data }
        case SET_SELECTED_COUNTRY: return { ...state, selectedCountry: action.selectedCountry }
        case SET_COUNTRY_DETAILS: return { ...state, countryDetails: action.data }
        default: return state;
    }
}
export default covidSummary;