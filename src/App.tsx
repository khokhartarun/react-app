import { useState, useEffect } from "react";
import NavBar from "./Component/NavBar";
import CounterAndGreeting from "./Component/new";
import axios from "axios";




interface User {
  id: number;
  name: string;
  username: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [updatedUsers, setUpdatedUsers] = useState<{ [key: number]: boolean }>({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", username: "" });

  // Fetch users
  const fetchUsers = () => {
    setLoading(true);
    setError("");

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Toggle update status
  const handleUpdate = (id: number) => {
    setUpdatedUsers((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle update message for each user
    }));
  };

  // Delete user
  const handleDelete = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

    // Remove from updatedUsers state
    setUpdatedUsers((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  };

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Add new user
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.name.trim() && newUser.username.trim()) {
      const newUserData: User = {
        id: users.length + 1, // Assigning an incremental ID
        name: newUser.name,
        username: newUser.username,
      };

      setUsers((prevUsers) => [...prevUsers, newUserData]);
      setNewUser({ name: "", username: "" });
      setShowForm(false); // Hide form after submission
    }
  };

  return (
    <div>
      <h2>Users Table</h2>

      {/* Add User Button */}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add User"}
      </button>

      {/* Add User Form */}
      {showForm && (
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={newUser.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={newUser.username}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {/* Loading Indicator */}
      {isLoading && <p>Loading...</p>}

      {/* Error Handling */}
      {error && (
        <div>
          <p className="text-danger">{error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      {/* User Table */}
      {!isLoading && !error && users.length > 0 && (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  {user.username} {updatedUsers[user.id] && <span>- Updated</span>}
                </td>
                <td>
                  <button onClick={() => handleUpdate(user.id)}>Update</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;




