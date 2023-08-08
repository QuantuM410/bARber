import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    location: '',
    phone: '',
    gender: 'Male', // Default value
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the registration logic here
    console.log(formData);
  };

  return (
    <div>
      <h1>Barber Shop Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleInputChange} required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleInputChange} required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} required />
        <br />
        <label>Location:</label>
        <input type="text" name="location" onChange={handleInputChange} required />
        <br />
        <label>Phone:</label>
        <input type="tel" name="phone" onChange={handleInputChange} required />
        <br />
        <label>Gender:</label>
        <select name="gender" onChange={handleInputChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
