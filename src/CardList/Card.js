
export default class Card extends React.Component {
  constructor(props) {
    super(props)

    this.style = {
      width: '5in',
      height: '3in',
    }
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
