import * as actionType from '../../actionTypes'

const initialState = {
    coverList:[],
    page: 0
}

const mainReducer = (state=initialState, action)=>{
    switch (action.type){
        case actionType.HANDLE_COVER_LIST:
            return Object.assign({},state,action.payload)
            break;
        case actionType.HANDLE_PAGE:
            return Object.assign({},state,action.payload)
            break;
        default:
            return state
    }
}

export  {mainReducer}
