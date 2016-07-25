import TextField from 'material-ui/TextField'
import CardFormMenu from './CardFormMenu'
import { cardFormUpdate, addCard, cardFormReset } from 'src/actions'

import { connect } from 'react-redux'

class CardForm extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const { name, value } = e.currentTarget
    this.props.onFieldChange(name, value)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.props.cardForm)
  }

  render() {
    const { cardForm: { text } } = this.props

    return (
      <form className="card-form" onSubmit={this.onSubmit}>
        <h2>New card</h2>
        <div className="card-form-content">
          <TextField
            hintText="Text"
            name="text"
            value={text}
            floatingLabelText="Type text to show in the card"
            onChange={this.onChange}
          />
        </div>
        <CardFormMenu onSubmit={this.onSubmit} />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    cardForm: state.cardForm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: card => {
      dispatch(addCard(card))
      dispatch(cardFormReset())
    },
    onFieldChange: (field, value) => dispatch(cardFormUpdate(field, value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm)
