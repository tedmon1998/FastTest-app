const defaultState = []

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return [...state, action.payload]
        case 'DEL_NAME':
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}