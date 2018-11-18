export const GET_ALL_DATA = 'GET_ALL_DATA';
export function getAllData(apiData) {
    return {
        type: GET_ALL_DATA,
        payload: apiData
    };
}

export const SEARCH_INPUT_VALUE = 'SEARCH_INPUT_VALUE';
export function searchInputValue(value) {
    return {
        type: SEARCH_INPUT_VALUE,
        payload: value
    };
}
