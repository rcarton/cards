
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default class TemplateSelect extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e, i, value) {
    this.props.onChange(value)
  }

  render() {
    const availableTemplates = this.props.templates
    const templates = Object.keys(availableTemplates)
      .map(k => availableTemplates[k])
      .sort((a, b) => a.name.localeCompare(b.name))

    return (
      <div className="template-select">
        <SelectField value={this.props.value} floatingLabelText="Select a template"
          onChange={this.onChange}>
          {templates.map(t =>
            <MenuItem key={t.id} value={t.id} primaryText={t.name} />
          )}
        </SelectField>
      </div>
    )
  }
}
