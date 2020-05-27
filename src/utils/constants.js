export const apiUrl = 'https://api.covid19api.com/';
export const flagsUrl = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg';

export const getFlag = (code) => {
    return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${code.toLowerCase()}.svg`;
}

export const tableColumns = [
    'Country',
    'Total Confirmed',
    'Total Recovered',
    'Total Deaths',]

export const navItems = {
    home: {
        id: 'home',
        title: 'Over view',
        icon: 'icons/nav/home.svg',
        route: '/'
    },
    symptoms: {
        id: 'symptoms',
        title: 'Symptoms',
        icon: 'icons/nav/symp.svg',
        route: '/symptoms'
    },
    journal: {
        id: 'journal',
        title: 'Journal',
        icon: 'icons/nav/test.svg',
        route: '/journal'
    }
}

export const chartTypes = {
    line: {
        id: 'line',
        title: 'Line'
    },
    bar: {
        id: 'bar',
        title: 'Bar'
    },
    donut: {
        id: 'donut',
        title: 'Donut'
    },
    all: {
        id: 'all',
        title: 'All'
    }
}