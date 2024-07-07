import React, { useEffect, useState } from "react";
import { Course } from "./components/Course";
import "./Courses.css";

export default function Courses(props) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const resp = await fetch("http://localhost:3000/test");
      const data = await resp.json();
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      return err;
    }
  }

  useEffect(() => {
    console.log("useeffect run");
    fetchData()
      .then((data) => {
        setCourses(data);
        return;
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div id="courses">
      {courses.map((course) => {
        const {
          title,
          about,
          teacher,
          coursePic,
          courseCode,
          courseTags,
          courseFees,
        } = course;
        title ? title : "";
        about ? about : "";
        teacher ? teacher : "";
        courseTags ? courseTags : "";

        return (
          <>
            <Course
              key={courseCode}
              info={about}
              courseLink={coursePic}
              heading={title}
              courseCode={courseCode}
              tags={courseTags}
              fees={courseFees}
            />
          </>
        );
      })}
    </div>
  );
}
