import { useEffect, useState } from "react";

function App() {
  // const api = process.env === "production" ? "" : "http://localhost:5000";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.log("api", api);
    fetch("https://chartreuse-green-starfish-cuff.cyclic.app/api")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

