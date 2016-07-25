
import { connect } from 'react-redux'

import Card from './Card'
import { getCards, getFormat, getTemplate } from 'src/reducers'


class CardList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cards, format, template } = this.props
    
    return (
      <div className="card-list">
        {cards.map(c => (
          <Card key={c.id} {...c} format={format} template={template} />
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cards: getCards(state),
    format: getFormat(state),
    template: getTemplate(state),
  }
}
function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
