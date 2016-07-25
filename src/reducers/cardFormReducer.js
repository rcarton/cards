import { CARD_FORM_UPDATE, CARD_FORM_RESET } from 'src/actions'

const defaultCardFormState = {
  text: ''
}
export default function cardForm(state=defaultCardFormState, action) {
  switch (action.type) {
    case CARD_FORM_UPDATE:
      return {
        ...state,
        [action.field]: action.value
      }
    case CARD_FORM_RESET:
      return defaultCardFormState
    default:
      return state
  }
}
