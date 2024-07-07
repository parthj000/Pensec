import "./Dashboard.css";
import { Sidebar } from "./Sidebar";
import { Nav } from "./Nav";
import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import BoardingForm from "./Onboarding";

export default function Dashboard() {
  const [boarding, setBoarding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    fetchBoarding(setBoarding, setLoading);
    fetchUser(setUser);
    fetchCourses(setCourses);
    console.log("useeffect is called once and this is nice ");
    return;
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return <>{boarding ? <Dash {...user} {...courses} /> : <BoardingForm />}</>;
}

function fetchBoarding(setBoarding, setLoading) {
  fetch("http://localhost:3000/check/onboarded", {
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error("Bad Request");
          case 403:
            throw new Error("Not Authorized");
          default:
            throw new Error(
              `Something went wrong , please try again ${response.status}`
            );
        }
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      if (data.onboarded === true) {
        setLoading(false);
        setBoarding(true);
      }
      setLoading(false);

      return data;
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}

function fetchCourses(setCourses) {
  fetch("http://localhost:3000/teacher/courses", {
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error("Bad Request");
          case 403:
            throw new Error("Not Authorized");
          default:
            throw new Error(
              `Something went wrong , please try again ${response.status}`
            );
        }
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log("helllloe");

      if (data) {
        setCourses(data);
      }

      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function fetchUser(setUser) {
  fetch("http://localhost:3000/user/info", {
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        switch (response.status) {
          case 400:
            throw new Error("Bad Request");
          case 403:
            throw new Error("Not Authorized");
          default:
            throw new Error(
              `Something went wrong , please try again ${response.status}`
            );
        }
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setUser(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}

function Dash(data) {
  return (
    <div className="container">
      <Sidebar />

      <div className="main-container">
        <Nav name={data.name} email={data.email} photo={data.photo} />
        <div className="main-data">
          <Outlet context={data} />
        </div>
      </div>
    </div>
  );
}
