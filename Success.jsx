import { Link, useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="center">
        <h2>No registration data found.</h2>

        <Link to="/register">
          Register Now
        </Link>
      </div>
    );
  }

  return (
    <div className="success">
      <h1>Registration Successful!</h1>

      <p>
        Your course registration has been completed successfully.
      </p>

      <div className="details">
        <p>
          <strong>Student Name:</strong> {data.name}
        </p>

        <p>
          <strong>Roll Number:</strong> {data.rollNumber}
        </p>

        <p>
          <strong>Selected Course:</strong> {data.course}
        </p>
      </div>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Success;