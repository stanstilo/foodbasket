import {
  ADD_ITEMS_TO_CART,
  REMOVE_CART_ITEMS,
  CLEAR_CART_ITEMS,
  FETCH_ALL_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILS
} from "../../actions/cart/types";

import shortid from 'shortid'
import _ from 'lodash'

const cartReducer = (state=[], action={}) => {
    switch (action.type) {
        case ADD_ITEMS_TO_CART:
            if (_.filter(state, (obj) => obj.product.item === action.payload.product.item).length > 0) {
                let newState = state.slice()
                for (let i=0; i<newState.length; i++) {
                    if (newState[i].product.item === action.payload.product.item) {
                        newState[i].quantity += action.payload.quantity
                    }
                 }

                return newState
            }

            return [
                ...state,
                {
                    id: shortid.generate(),
                    product: action.payload.product,
                    quantity: action.payload.quantity
                }
            ]

        case REMOVE_CART_ITEMS:
            let idx = _.findIndex(state, { id: action.payload.id })
            if (idx >= 0) {
                return [
                    ...state.slice(0, idx),
                    ...state.slice(idx + 1)
                ]
            }

            return state

        case CLEAR_CART_ITEMS:
            return []

        default:
            return state
    }
}


export default cartReducer
