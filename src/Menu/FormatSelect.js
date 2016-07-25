
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export const INDEX_CARD = 'INDEX_CARD'

const FORMATS = {
  [INDEX_CARD]: {
    label: 'Index Card',
    dimensions: { width: 5, height: 3, unit: 'in' },
  },
}

export default class FormatSelect extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e, i, value) {
    this.props.onChange(value)
  }

  getFormatText(format) {
    const f = FORMATS[this.props.value]
    return `${f.label} (${f.dimensions.height}×${f.dimensions.width} ${f.dimensions.unit})`
  }

  render() {
    return (
      <div className="format">
        <SelectField value={this.props.value} floatingLabelText="Select a format"
          onChange={this.onChange}>
          <MenuItem
            value={INDEX_CARD}
            primaryText={this.getFormatText(INDEX_CARD)}
          />
        </SelectField>
      </div>
    )
  }
}

FormatSelect.defaultProps = {
  value: INDEX_CARD,
  onChange: () => {}
}
