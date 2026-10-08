import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>College Course Registration Portal</h1>

      <p>
        Welcome to our online course registration portal.
        Students can view available courses and register
        for their preferred course.
      </p>

      <div className="home-buttons">
        <Link to="/courses">
          <button>View Courses</button>
        </Link>

        <Link to="/register">
          <button>Register Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;