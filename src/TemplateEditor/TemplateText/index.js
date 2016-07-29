
import TextSize from './TextSize'

export default class TemplateText extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="template-text">
        <div className="template-text-label">Font</div>
        <TextSize />
      </div>
    )
  }
}
