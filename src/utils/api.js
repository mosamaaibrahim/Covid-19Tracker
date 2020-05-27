import { apiUrl } from './constants';
import axios from 'axios';
//get summary
export const _getSummary = () => {
    return axios({
        method: 'get',
        url: '/summary',
        baseURL: apiUrl,
        headers:
        {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        }
    })
}
//get country details
export const _getDetails = (code) => {
    return axios({
        method: 'get',
        url: `/total/dayone/country/${code}`,
        baseURL: apiUrl,
        headers:
        {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        }
    })
}
