
import TextField from 'material-ui/TextField'

export default class TextSize extends React.Component {
  constructor(props) {
    super(props)

    this.style = {
      width: '50px'
    }
  }

  render() {
    return (
      <div className="text-size">
        <TextField
          style={this.style}
          floatingLabelText="Size"
          type="number"
        />
      </div>
    )
  }
}
