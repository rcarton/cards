
export const FORMAT_SELECT = 'FORMAT_SELECT'
export function formatSelect(format) {
  return {
    type: FORMAT_SELECT,
    format
  }
}

export const TEMPLATE_SELECT = 'TEMPLATE_SELECT'
export function templateSelect(templateId) {
  return {
    type: TEMPLATE_SELECT,
    id: templateId
  }
}
