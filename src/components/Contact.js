import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <>
    <h1>Let's work together.  Contact me below.</h1>
    
    <form onSubmit={handleSubmit}>
          <div>
              <label>Name:</label>
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required />
          </div>
          <div>
              <label>Email:</label>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
          </div>
          <div>
              <label>Message:</label>
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
              ></textarea>
          </div>
          <button type="submit">Submit</button>
      </form></>
  );
};

export default ContactForm;