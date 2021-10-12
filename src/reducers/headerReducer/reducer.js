import {
    TOGGLE_CART_HIDDEN,
    TOGGLE_USER_DROP_DOWN_HIDDEN

} from '../../actions/header/types';

const INIT_STATE = {
    cartHidden: true,
    userDropDown: true
}

export default (state=INIT_STATE, action) =>{
    switch(action.type){
        case TOGGLE_CART_HIDDEN:
            return{
                ...state, cartHidden: !state.cartHidden
            }
        case TOGGLE_USER_DROP_DOWN_HIDDEN:
            return{
                ...state, userDropDown: !state.userDropDown
            }
        default:
            return state
    }
}