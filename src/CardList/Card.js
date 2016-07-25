
export default class Card extends React.Component {
  constructor(props) {
    super(props)

    const { width, height, unit } = props.format.dimensions
    const dimensions = {
      width: `${width}${unit}`,
      height: `${height}${unit}`,
    }

    this.style = Object.assign({}, props.template.style, dimensions)
  }

  render() {
    const { text } = this.props

    return (
      <div className="card" style={this.style}>
        <div className="text">{text}</div>
      </div>
    )
  }
}
