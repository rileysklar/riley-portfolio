import React, { useState } from "react";
import "../styles/form.css";
import { supabase } from "../../supabaseClient";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("form_submissions").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error(error);
      return;
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setSubmissionSuccess(true);
    setTimeout(() => setSubmissionSuccess(false), 5000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
        {submissionSuccess && (
          <p className="success">Thanks for your message! 🤝</p>
        )}
      </form>
    </>
  );
};

export default ContactForm;
