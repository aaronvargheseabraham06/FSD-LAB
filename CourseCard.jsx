import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(`/register?course=${course.code}`);
  };

  return (
    <div className="course-card">
      <h3>{course.name}</h3>

      <p>
        <strong>Course Code:</strong> {course.code}
      </p>

      <p>
        <strong>Credits:</strong> {course.credits}
      </p>

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default CourseCard;