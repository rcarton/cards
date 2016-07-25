
import { combineReducers } from 'redux'
import { FORMAT_SELECT } from 'src/actions'

const INDEX_CARD = 'INDEX_CARD'
const defaultFormatState = {
  [INDEX_CARD]: {
    id: INDEX_CARD,
    label: 'Index Card',
    dimensions: { width: 5, height: 3, unit: 'in' }
  }
}
function available(state=defaultFormatState) {
  return state
}

function selected(state=INDEX_CARD, action) {
  switch (action.type) {
    case FORMAT_SELECT:
      return action.format
    default:
      return state
  }
}

export const getFormat = state => state.format.available[state.format.selected]

export default combineReducers({
  selected,
  available,
})
