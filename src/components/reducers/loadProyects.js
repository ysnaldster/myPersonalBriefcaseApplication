import {types} from '../types/types'


const loadProyects = (state = {}, action) => {
    switch (action.type) {
        case types.uiProyectsLoad:
            return {
                ...state,
                proyects: [...action.payload]
            }
        default:
        return state;
    }
}

export default loadProyects