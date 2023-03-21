import React, { useState } from 'react';
import "../assets/css/registration.css";


function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    dob: '',
    gender: '',
    country: '',
    city: '',
    phone: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit form data to server
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className='container-fluid back-user'>
      <div className="row">
        <div className='formulario m-5'>
          <h2>User Registration Form</h2>
          <form className='form gap-2' onSubmit={handleSubmit}>
              <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" required value={formData.fullname} onChange={handleChange} />
              </div>
              <div>
                <label>Email Address:</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password" required value={formData.password} onChange={handleChange} />
              </div>
              <div>
                <label>Confirm Password:</label>
                <input type="password" name="confirmpassword" required value={formData.confirmpassword} onChange={handleChange} />
              </div>

              <div>
                <label>Date of Birth:</label>
                <input type="date" name="dob" required value={formData.dob} onChange={handleChange} />
                
              </div>
              <div>
                  <label className=''>Gender:</label>
                  <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
                  <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
                  <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} /> Other
              </div>
              <div>
                <label>Country:</label>
                <input type="text" name="country" required value={formData.country} onChange={handleChange} />
              </div>
              <div>
                <label>City:</label>
                <input type="text" name="city" required value={formData.city} onChange={handleChange} />
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
              </div>
              <div>            
               <input type="submit" value="Register" />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
