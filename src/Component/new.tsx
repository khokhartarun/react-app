import { useState } from "react";

const CounterAndGreeting: React.FC = () => {
  // State for counter and username
  const [count, setCount] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", maxWidth: "300px", margin: "auto" }}>
      
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Counter: {count}</h2>
        <div style={{ marginTop: "10px" }}>
          <button 
            style={{ padding: "10px", margin: "5px", backgroundColor: "blue", color: "white", borderRadius: "5px", cursor: "pointer" }} 
            onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button 
            style={{ padding: "10px", margin: "5px", backgroundColor: count === 0 ? "gray" : "red", color: "white", borderRadius: "5px", cursor: count === 0 ? "not-allowed" : "pointer" }} 
            onClick={() => setCount(count - 1)} 
            disabled={count === 0}>
            Decrement
          </button>
          <button 
            style={{ padding: "10px", margin: "5px", backgroundColor: "gray", color: "white", borderRadius: "5px", cursor: "pointer" }} 
            onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>

      
      <div style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          style={{ padding: "10px", width: "100%", border: "1px solid #ccc", borderRadius: "5px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2 style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
          Hello, {username.trim() ? username : "Buddy..."}!
        </h2>
      </div>
    </div>
  );
};

export default CounterAndGreeting;
