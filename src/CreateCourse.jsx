import React, { useState } from "react";
import "./CreateCourse.scss";
import { toast, ToastContainer } from "react-toastify";
import { useOutletContext } from "react-router-dom";

const CreateCours = (props) => {
  const context = useOutletContext();
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
    courseStartDate: "",
    courseEndDate: "",
    courseSpecialties: [""],
    coursePhoto: null,
    coursePhotoURL: null,
    courseFees: "",
    courseTags: [""],
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [transitionDirection, setTransitionDirection] = useState("");

  const handleChange = (e, index, type) => {
    const { name, value, files } = e.target;
    if (type === "specialty") {
      const updatedSpecialties = [...formData.courseSpecialties];
      updatedSpecialties[index] = value;
      setFormData({
        ...formData,
        courseSpecialties: updatedSpecialties,
      });
    } else if (type === "tag") {
      const updatedTags = [...formData.courseTags];
      updatedTags[index] = value;
      setFormData({
        ...formData,
        courseTags: updatedTags,
      });
    } else if (name === "coursePhoto") {
      const photo = files[0];
      const photoURL = URL.createObjectURL(photo);
      setFormData({
        ...formData,
        coursePhoto: photo,
        coursePhotoURL: photoURL,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddSpecialty = () => {
    setFormData({
      ...formData,
      courseSpecialties: [...formData.courseSpecialties, ""],
    });
  };

  const handleRemoveSpecialty = (index) => {
    const updatedSpecialties = formData.courseSpecialties.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      courseSpecialties: updatedSpecialties,
    });
  };

  const handleAddTag = () => {
    setFormData({
      ...formData,
      courseTags: [...formData.courseTags, ""],
    });
  };

  const handleRemoveTag = (index) => {
    const updatedTags = formData.courseTags.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      courseTags: updatedTags,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/create/course", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create course");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast.success("Course created successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Course creation failed");
      });

    console.log("Form Data Submitted:", formData);
  };

  const nextStep = () => {
    setTransitionDirection("slide-out");
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      setTransitionDirection("slide-in");
    }, 300);
  };

  const prevStep = () => {
    setTransitionDirection("slide-out-back");
    setTimeout(() => {
      setCurrentStep(currentStep - 1);
      setTransitionDirection("slide-in");
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => {
          props.setClick(false);
        }}
      >
        back
      </button>
      <div className="create-course-jsx">
        <div className="create-course-container">
          <h1>Create a New Course</h1>
          <form>
            {currentStep === 1 && (
              <div className="form-step">
                <div className="form-group">
                  <label>Course Name:</label>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Course Description:</label>
                  <textarea
                    name="courseDescription"
                    value={formData.courseDescription}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="courseStartDate"
                    value={formData.courseStartDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>End Date:</label>
                  <input
                    type="date"
                    name="courseEndDate"
                    value={formData.courseEndDate}
                    onChange={handleChange}
                  />
                </div>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            )}
            {currentStep === 2 && (
              <div className="form-step">
                <div className="form-group">
                  <label>Course Fees:</label>
                  <input
                    type="number"
                    name="courseFees"
                    value={formData.courseFees}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Course Tags:</label>
                  {formData.courseTags.map((tag, index) => (
                    <div key={index} className="tag-input">
                      <input
                        type="text"
                        name={`courseTag-${index}`}
                        value={tag}
                        onChange={(e) => handleChange(e, index, "tag")}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={handleAddTag}>
                    Add Tag
                  </button>
                </div>
                <div className="form-group">
                  <label>Course Specialties:</label>
                  {formData.courseSpecialties.map((specialty, index) => (
                    <div key={index} className="specialty-input">
                      <input
                        type="text"
                        required
                        name={`courseSpecialty-${index}`}
                        value={specialty}
                        onChange={(e) => handleChange(e, index, "specialty")}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveSpecialty(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={handleAddSpecialty}>
                    Add Specialty
                  </button>
                </div>
                <button type="button" onClick={prevStep}>
                  Previous
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            )}
            {currentStep === 3 && (
              <div className="form-step">
                <div className="form-group">
                  <label>Course Photo:</label>
                  <input
                    type="file"
                    name="coursePhoto"
                    onChange={handleChange}
                  />
                  {formData.coursePhotoURL && (
                    <img
                      src={formData.coursePhotoURL}
                      alt="Course"
                      className="photo-preview"
                    />
                  )}
                </div>
                <button type="button" onClick={prevStep}>
                  Previous
                </button>
                <button
                  type="button"
                  className="btn-submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            )}
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

const CreateCourse = () => {
  const [click, setClick] = useState(false);
  if (click) {
    return <CreateCours setClick={setClick} />;
  }
  return (
    <>
      <button
        onClick={() => {
          setClick(true);
        }}
      >
        Add Course
      </button>
    </>
  );
};

export default CreateCourse;
