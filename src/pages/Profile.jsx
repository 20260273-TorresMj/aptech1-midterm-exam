import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  const users = [
    { username: "john_doe", name: "John Doe", email: "john@gmail.com" },
    { username: "jane123", name: "Jane Smith", email: "jane@gmail.com" },
  ];

  const user = users.find((u) => u.username === username);

  if (!user) {
    return (
      <div className="container">
        <h2>User Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container profile-card">
      <h2>👤 Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;