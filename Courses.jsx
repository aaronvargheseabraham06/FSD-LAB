import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        return response.json();
      })
      .then((data) => {
        const courseNames = [
          "Web Development",
          "Data Structures",
          "Database Management",
          "Computer Networks",
          "Operating Systems",
          "Artificial Intelligence"
        ];

        const courseData = data.slice(0, 6).map((item, index) => ({
          name: courseNames[index],
          code: `CSE${101 + index}`,
          credits: 3
        }));

        setCourses(courseData);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load courses. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="center">Loading courses...</h2>;
  }

  if (error) {
    return <h2 className="center error">{error}</h2>;
  }

  return (
    <div className="container">
      <h1>Available Courses</h1>

      <div className="course-container">
        {courses.map((course) => (
          <CourseCard
            key={course.code}
            course={course}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;