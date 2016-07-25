
const DEFAULT_TPL = {
  id: '@@default_tpl',
  name: 'Default',
}
const defaultAvailableTemplates = {
  [DEFAULT_TPL]: ...DEFAULT_TPL
}
function available(state=defaultAvailableTemplates, action) {
  switch (action.type) {
    default:
      return state
  }
}
