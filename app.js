// TODO
var GroceryList = () => (
  <div>
    <ul>
      <Tacos />
      <Bacon />
    </ul>
  </div>
);

var Tacos = () => (
  <li>Tacos</li>
);

var Bacon = () => (
  <li>Bacon</li>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));