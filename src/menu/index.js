
import Format from './Format'
import TemplateSelect from './TemplateSelect'
import { connect } from 'react-redux'
import { formatChange } from 'src/actions/menuActions'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menu">

        <Format onChange={this.props.onFormatChange} />
        <TemplateSelect
          onChange={this.props.onTemplateChange}
          templates={{}}
          templateSelected={null}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFormatChange: value => dispatch(formatChange(value))
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
