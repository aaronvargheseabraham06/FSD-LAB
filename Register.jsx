import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import InputField from "../components/InputField";

function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedCourse = searchParams.get("course") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNumber: "",
    phone: "",
    course: selectedCourse
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const courses = [
    { name: "Web Development", code: "CSE101" },
    { name: "Data Structures", code: "CSE102" },
    { name: "Database Management", code: "CSE103" },
    { name: "Computer Networks", code: "CSE104" },
    { name: "Operating Systems", code: "CSE105" },
    { name: "Artificial Intelligence", code: "CSE106" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Student name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = "Roll number is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      navigate("/success", {
        state: {
          name: formData.name,
          rollNumber: formData.rollNumber,
          course: formData.course
        }
      });
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Course Registration</h1>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Student Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Student Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Roll Number"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          error={errors.rollNumber}
        />

        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <div className="form-group">
          <label>Course Selection</label>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">-- Select Course --</option>

            {courses.map((course) => (
              <option key={course.code} value={course.code}>
                {course.name} ({course.code})
              </option>
            ))}
          </select>

          {errors.course && (
            <p className="error">{errors.course}</p>
          )}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;