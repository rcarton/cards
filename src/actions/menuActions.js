
export const FORMAT_CHANGE = 'FORMAT_CHANGE'
export function formatChange(format) {
  return {
    type: FORMAT_CHANGE,
    format: format
  }
}
