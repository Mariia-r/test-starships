export const GET_STARSHIPS = "GET_STARSHIPS";
const SET_STARSHIPS = "SET_STARSHIPS";
const SAVE_STARSHIPS = "SAVE_STARSHIPS";

let initialState = {
    starships: [],
    savedStarships: []
}

const starshipsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_STARSHIPS: {
            return {
                ...state, 
                starships: action.starships
            }
        }
        case SAVE_STARSHIPS: {
            return {
                ...state, 
                savedStarships: [...state.savedStarships, action.starship]
            }
        }
        default:
            return state;
    }
};

export const acGetStarships = () => {
    return { type: GET_STARSHIPS }
};

export const acSetStarships = (starships) => {
    return { type: SET_STARSHIPS, starships }
};

export const acSaveStarships = (starship) => {
    return { type: SAVE_STARSHIPS, starship }
};

export default starshipsReducer;