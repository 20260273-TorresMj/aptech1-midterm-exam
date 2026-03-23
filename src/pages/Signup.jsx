import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation rules
  const validate = () => {
    let err = {};

    // First Name & Surname (letters only, min 2)
    const nameRegex = /^[A-Za-z]{2,}$/;
    if (!nameRegex.test(form.firstName)) {
      err.firstName = "First name must be letters only (min 2)";
    }

    if (!nameRegex.test(form.surname)) {
      err.surname = "Surname must be letters only (min 2)";
    }

    // Username
    const userRegex = /^[A-Za-z0-9._-]+$/;
    if (!userRegex.test(form.username)) {
      err.username = "Invalid username format";
    }

    // Password (8–16 chars, upper, lower, number, special)
    const passRegex =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{8,16}$/;
    if (!passRegex.test(form.password)) {
      err.password =
        "Password must be 8-16 chars with uppercase, lowercase, number, special char";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      err.email = "Invalid email format";
    }

    return err;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      navigate("/success");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <p>{errors.firstName}</p>

        <input
          type="text"
          name="surname"
          placeholder="Surname"
          onChange={handleChange}
        />
        <p>{errors.surname}</p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <p>{errors.username}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;