import { useEffect, useState } from "react";

function App() {
  const api = process.env === "production" ? "" : "http://localhost:5000";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("api", api);
    fetch("https://deployment-8x3u.onrender.com/api")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [api]);

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

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EricChukoltyansky/reactDeployToNetlifyWithBackend.git
// git push -u origin main
