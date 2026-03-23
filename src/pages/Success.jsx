import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>🎉 Success!</h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>
        Your account has been created successfully.
      </p>

      <Link to="/signup">
        <button>Create Another Account</button>
      </Link>
    </div>
  );
}

export default Success;