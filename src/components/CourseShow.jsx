import React from "react";
import { useLocation } from "react-router-dom";

export default function CourseShow() {
  const location = useLocation();
  const { courseLink, tags, heading, fees } = location.state;

  return (
    <div className="course-details">
      <div className="course-info">
        <div className="course-tags">
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="course-heading">{heading}</div>
        <p>Rs. {fees}</p>
      </div>
    </div>
  );
}
