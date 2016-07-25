

export const ADD_CARD = 'ADD_CARD'
export function addCard(card) {
  card = {
    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6),
    text: '',
    ...card,
  }

  return {
    type: ADD_CARD,
    card,
  }
}
