import RaisedButton from 'material-ui/RaisedButton'
import { addCard, cardFormReset } from 'src/actions'

export default class CardFormMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card-form-menu">
        <RaisedButton
          label="Add Card"
          primary={true}
          onClick={this.props.onSubmit}
        />
      </div>
    )
  }
}
