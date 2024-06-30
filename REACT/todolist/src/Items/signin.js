import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  // Initializing formData with keys for all form fields
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    dateOfBirth: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      id="form"
      className="containerSign"
      style={{
        margin: "auto",
        padding: "40px",
        borderRadius: "50px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        borderColor: "black",
        boxSizing: "border-box",
        border: "1px solid black",
        flexWrap: "wrap",
        backgroundColor: "white",
        width: "600px",
      }}
    >
      <h1 className="log-in" style={{ textAlign: "left", marginBottom: "20px" }}>
        Sign Up:
      </h1>
      <label style={{ textAlign: "left", marginBottom: "0px" }}>
        Name:
        <input
          id="name"
          name="name" // Added name attribute
          type="text"
          value={formData.name}
          onChange={handleChange}
          style={{
            borderRadius: "8px",
            width: "100%",
            padding: "5px",
            borderColor: "black",
            boxSizing: "border-box",
          }}
        />
      </label>
      <p style={{ textAlign: "left", marginBottom: "0px" }}>Surname:</p>
      <input
        type="text"
        name="surname" // Added name attribute
        value={formData.surname}
        onChange={handleChange}
        style={{
          borderRadius: "8px",
          width: "100%",
          padding: "5px",
          borderColor: "black",
          boxSizing: "border-box",
        }}
      />
      <p style={{ textAlign: "left", marginBottom: "0px" }}>Username:</p>
      <input
        type="text"
        name="username" // Added name attribute
        value={formData.username}
        onChange={handleChange}
        style={{
          borderRadius: "8px",
          width: "100%",
          padding: "5px",
          borderColor: "black",
          boxSizing: "border-box",
        }}
      />
      <p style={{ textAlign: "left", marginBottom: "0px" }}>E-mail:</p>
      <input
        type="text"
        name="email" // Added name attribute
        value={formData.email}
        onChange={handleChange}
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "5px",
          borderColor: "black",
          boxSizing: "border-box",
        }}
      />
      <p style={{ textAlign: "left", marginBottom: "0px" }}>Password:</p>
      <input
        type="password"
        name="password" // Added name attribute
        value={formData.password}
        onChange={handleChange}
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "5px",
          borderColor: "black",
          boxSizing: "border-box",
        }}
      />
      <p style={{ textAlign: "left", marginBottom: "0px" }}>Repeat Password:</p>
      <input
        type="password"
        name="repeatPassword" // Added name attribute
        value={formData.repeatPassword}
        onChange={handleChange}
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "5px",
          borderColor: "black",
          boxSizing: "border-box",
        }}
      />
      <p style={{ textAlign: "left", marginBottom: "0px" }}>Date of Birth:</p>
      <input
        type="date"
        name="dateOfBirth" // Added name attribute
        value={formData.dateOfBirth}
        onChange={handleChange}
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "5px",
          borderColor: "black",
          boxSizing: "border-box",
        }}
      />
      <div className="SignUpButtonDiv">
        <button className="SignUpButton" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <p
        className="DontHaveAcc"
        style={{
          textAlign: "center",
          marginLeft: "40px",
          marginRight: "40px",
          marginBottom: "0px",
          marginTop: "40px",
        }}
      >
        Already have an account?
      </p>
      <div
        style={{
          marginBottom: "40px",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        <Link to="/" className="RegHere">
          Register Here!
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
