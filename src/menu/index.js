
import FormatSelect from './FormatSelect'
import TemplateSelect from './TemplateSelect'
import { connect } from 'react-redux'
import { formatSelect, templateSelect } from 'src/actions'
import { getFormat, getTemplate, getTemplatesAvailable } from 'src/reducers'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menu">
        <FormatSelect
          onChange={this.props.onFormatChange}
          value={this.props.format.selected}
        />
        <TemplateSelect
          onChange={this.props.onSelectTemplate}
          templates={this.props.templatesAvailable}
          value={this.props.template.id}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFormatChange: value => dispatch(formatSelect(value)),
    onSelectTemplate: tpl => dispatch(templateSelect(tpl)),
  }
}

function mapStateToProps(state) {
  return {
    format: getFormat(state),
    templatesAvailable: getTemplatesAvailable(state),
    template: getTemplate(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
