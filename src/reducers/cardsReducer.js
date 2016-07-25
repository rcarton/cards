import { combineReducers } from 'redux'

import { ADD_CARD } from 'src/actions'

const defaultCardsState = {}
export function cards(state=defaultCardsState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.card.id]: action.card
      }
    default:
      return state
  }
}

export function order(state=[], action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.card.id]
    default:
      return state
  }
}
export const getCards = state => state.cards.order.map(id => state.cards.data[id])

export default combineReducers({
  data: cards,
  order
})
