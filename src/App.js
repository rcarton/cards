
import Menu from './Menu'
import CardForm from './CardForm'
import TemplateEditor from './TemplateEditor'
import CardList from './CardList'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <CardForm />
        <TemplateEditor />
        <CardList />
      </div>
    );
  }
}
