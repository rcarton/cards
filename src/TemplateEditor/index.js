import { connect } from 'react-redux'

import TemplateText from './TemplateText'

class TemplateEditor extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="template-editor">
        TemplateEditor

        <TemplateText />
      </div>
    )
  }
}

export default connect(() => ({}), {})(TemplateEditor)
