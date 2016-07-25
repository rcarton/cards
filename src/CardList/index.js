
import { connect } from 'react-redux'

import Card from './Card'
import { getCards, getFormat } from 'src/reducers'


class CardList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cards } = this.props
    return (
      <div className="card-list">
        {cards.map(c => <Card key={c.id} {...c} format={format} />)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cards: getCards(state),
    format: getFormat(state),
  }
}
function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
