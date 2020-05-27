import { _getSummary, _getDetails } from '../../utils/api'

export const ADD_SUMMARY = 'ADD_SUMMARY';
export const SET_SEARCH = 'SET_SEARCH'
export const SET_SELECTED_COUNTRY = 'SET_SELECTED_COUNTRY'
export const SET_COUNTRY_DETAILS = 'SET_COUNTRY_DETAILS'
const addSummary = (data) => {
    return {
        type: ADD_SUMMARY,
        data
    }
}
export const setSearch = data => {
    return {
        type: SET_SEARCH,
        data
    }
}
export const setSelectedCountry = selectedCountry => {
    return {
        type: SET_SELECTED_COUNTRY,
        selectedCountry
    }
}
const setCountryDetails = data => {
    return {
        type: SET_COUNTRY_DETAILS,
        data
    }
}
export const getSummary = () => {
    return disptach => {
        _getSummary().then(responseText => {
            disptach(addSummary(responseText.data))
        }).catch(err => {
            console.log('Error ==>', err)
            disptach(setCountryDetails([]))
        })
    }
}
export const getDetails = code => {
    return disptach => {
        _getDetails(code).then(responseText => {
            disptach(setCountryDetails(responseText.data))
        }).catch(err => {
            console.log('Error ==>', err)
        })
    }
}