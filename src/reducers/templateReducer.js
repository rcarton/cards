
import { combineReducers } from 'redux'

const DEFAULT_TPL = {
  id: 'DEFAULT_TPL',
  name: 'Default',
  style: {
    fontFamily: 'sans-serif',
    fontSize: '0.7in'
  }
}
const defaultAvailableTemplates = {
  [DEFAULT_TPL.id]: {...DEFAULT_TPL}
}
function available(state=defaultAvailableTemplates, action) {
  switch (action.type) {
    default:
      return state
  }
}

function selected(state=DEFAULT_TPL.id) {
  return state
}

export default combineReducers({
  available,
  selected
})

export const getTemplate = state => state.template.available[state.template.selected]
export const getTemplatesAvailable = state => state.template.available
