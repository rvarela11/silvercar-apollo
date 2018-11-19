const initialState = {
    apiDataAll: [],
    apiDataAllFiltered: [],
    bookingFooterNavLabels: ['CITY', 'PICK UP', 'DROP OFF', 'VEHICLE', 'COVERAGE']
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_DATA':
            const apiDataNoQ5NoA5C = action.payload.filter(({ name }) => !name.match(/(Q5|A5C)/));
            return {
                ...state,
                apiDataAll: apiDataNoQ5NoA5C,
                apiDataAllFiltered: apiDataNoQ5NoA5C,
                bookingFooterNavLabels: state.bookingFooterNavLabels
            };
        case 'SEARCH_INPUT_VALUE':
            const lowerCaseValue = action.payload.toLowerCase();
            /*eslint-disable */
            const searchResults = state.apiDataAll.filter(({ airport_code, name }) => {
                const airportCode = airport_code || '';
                return airportCode.toLowerCase().includes(lowerCaseValue) || name.toLowerCase().includes(lowerCaseValue);
            });
            /* eslint-enable */

            return {
                ...state,
                apiDataAllFiltered: searchResults
            };
        default:
            return state;
    }
}
