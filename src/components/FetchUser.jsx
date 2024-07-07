"use server";
import React, { useEffect, useState } from "react";

export const FetchUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/teacher/info")
      .then((res) => {
        if (!res.ok) {
          throw new Error("something got wrong");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
};
