
import { combineReducers } from 'redux'

import cardFormReducer from './cardFormReducer'
import cardsReducer from './cardsReducer'
import formatReducer from './formatReducer'
import templateReducer from './templateReducer'

export default combineReducers({
  format: formatReducer,
  cardForm: cardFormReducer,
  cards: cardsReducer,
  template: templateReducer,
})

export * from './cardsReducer'
export * from './formatReducer'
export * from './templateReducer'
