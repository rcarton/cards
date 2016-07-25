
import { combineReducers } from 'react-redux'

const defaultFormatState = {
  'INDEX_CARD'
}
function available(state=defaultFormatState, action) {
  switch (action.type) {
    case FORMAT_CHANGE:
      return {
        ...state,
        format: action.format
      }
    default:
      return state
  }
}


export default combineReducers({
  selected,
  available,
})
