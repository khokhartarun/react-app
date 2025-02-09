import Message from "./message";
import List_Group from "./Component/render";
import ListGroup from "./Component/ListGroup";

function App() {
  let items = ["Delhi ", "Mumbai", "Kolkata", "Haryana", "Punjab", "Gurugram"];
  return (
    <div>
      <Message />;
      <List_Group items={items} heading="Cities" />;
      <ListGroup />;
    </div>
  );
}

export default App;
