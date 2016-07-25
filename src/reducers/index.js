
import { combineReducers } from 'redux'
import { FORMAT_CHANGE } from 'src/actions'

import { INDEX_CARD } from 'src/menu/Format'
import cardForm from './cardFormReducer'
import cards from './cardsReducer'



export default combineReducers({
  format,
  cardForm,
  cards,
})
export * from './cardsReducer'
