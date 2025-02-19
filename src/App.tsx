import button from "./Component/button";
import ListGroup from "./Component/ListGroup";
import List_Group from "./Component/render";
import Alert from "./Component/alert";
function App() {
  let items = [' Delhi ',' Mumbai ', ' Kolkata']
  return (
    <div>
      <Alert> My alert </Alert>
      <button color=" primary" onClick ={() => console.log('Clicked')}> Login </button>
      <ListGroup/>
      <List_Group items={items} heading="Cities"/>

    </div>
  );
}

export default App;
