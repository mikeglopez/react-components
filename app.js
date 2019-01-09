// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
    <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
};

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
      )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Tacos', 'Bacon', 'Lettuce', 'Tomato', 'Dressing']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));