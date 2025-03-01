import { useState } from "react";
import NavBar from "./Component/NavBar";
import CounterAndGreeting from "./Component/new";
import Cart from "./Component/cart";


function App() {
  const [cartItems, setCartItems] = useState(["product 1", "product 2"]);
  const [customer, setCustomer] = useState({
    name: " Tarun ",
    address: {
      city: "Rohtak",
      zipcode: 124406,
    },
  });

  const [bugs, setBugs] = useState([
    { id: 1, title: "This is a warning", fixed: false },
    { id: 2, title: "This is a bug", fixed: false },
  ]);

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 124001 },
      name: "Mohit", // update property
    });

    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (

    <div>
      <div className="app-container">
        <h1> Counter & Greeting</h1>
      <CounterAndGreeting />
    </div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems ([])} /> 
      <h2>{customer.name}</h2>
      <p>
        {customer.address.city}, {customer.address.zipcode}
      </p>
      <button onClick={handleClick}>Update</button>

      <h3>Bugs:</h3>
      <ul>
        {bugs.map((bug) => (
          <li key={bug.id}>
            {bug.title} - {bug.fixed ? "Fixed ✅" : "Not Fixed ❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
