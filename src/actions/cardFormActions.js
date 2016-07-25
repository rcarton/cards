
export const CARD_FORM_UPDATE = 'CARD_FORM_UPDATE'
export function cardFormUpdate(field, value) {
  return {
    type: CARD_FORM_UPDATE,
    field,
    value,
  }
}

export const CARD_FORM_RESET = 'CARD_FORM_RESET'
export function cardFormReset() {
  return {
    type: CARD_FORM_RESET
  }
}
