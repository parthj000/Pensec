import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import BoardingForm from "./Onboarding";

export default function Protected() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/verify", {
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

        if (data.success === true) {
          setLoading(false);
          setUser(true);
        }
        setLoading(false);

        return data;
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
}
