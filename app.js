// TODO
var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>
    <li>{props.groceryItems[3]}</li>
    <li>{props.groceryItems[4]}</li>
  </ul>
);

var GroceryList = () => (
  <GroceryListItem groceryItems={['Tacos', 'Bacon', 'Lettuce', 'Tomato', 'Dressing']}/>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));