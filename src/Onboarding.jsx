import React, { useState } from "react";
import "./Onboarding.scss";

const BoardingForm = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="onboarding-jsx">
      <div className="form-container">
        <form
          className="form"
          method="POST"
          action="http://localhost:3000/createroles"
        >
          <h1 className="title">Role Selection Form</h1>
          <label className="label" htmlFor="role">
            Select Role:
          </label>
          <select className="select" id="role" name="role" required>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>

          <label className="label" htmlFor="name">
            Name:
          </label>
          <input className="input" type="text" id="name" name="name" required />

          <label className="label" htmlFor="languages">
            Languages Comfortable In:
          </label>
          <input
            className="input"
            type="text"
            id="languages"
            name="languages"
            required
          />

          <label className="label" htmlFor="address">
            Address:
          </label>
          <input
            className="input"
            type="text"
            id="address"
            name="address"
            required
          />

          <label className="label" htmlFor="phone">
            Phone Number:
          </label>
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            required
          />

          <label className="label" htmlFor="about-teacher">
            About Teacher:
          </label>
          <textarea
            className="textarea"
            id="about-teacher"
            name="about-teacher"
            rows="4"
          ></textarea>

          <label className="label" htmlFor="education">
            Education:
          </label>
          <input
            className="input"
            type="text"
            id="education"
            name="education"
            required
          />

          <label className="label" htmlFor="experience">
            Previous Teaching Experience:
          </label>
          <textarea
            className="textarea"
            id="experience"
            name="experience"
            rows="4"
          ></textarea>

          <button
            className={`button ${isHovered ? "button-hover" : ""}`}
            type="submit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BoardingForm;
