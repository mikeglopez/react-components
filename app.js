// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
      <li>{this.props.groceryItem}</li>
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