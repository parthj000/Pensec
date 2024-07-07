import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

export const Sidebar = () => {
  const list = [
    {
      imgLink: "../notebook.svg",
      data: "Courses",
      endpoint: "http://localhost:5173/dash/courses",
    },

    {
      imgLink: "../notebook.svg",
      data: "Notifications",
      endpoint: "http://localhost:5173/dash/notifications",
    },

    {
      imgLink: "../notebook.svg",
      data: "Create Courses",
      endpoint: "http://localhost:5173/dash/create",
    },
    {
      imgLink: "../notebook.svg",
      data: "Meet",
      endpoint: "http://localhost:5173/dash/meet",
    },
  ];
  return (
    <>
      <div className="aside">
        <div id="logo">
          <img src="http://localhost:5173/logo.svg" alt="" />
        </div>

        <ul>
          {list.map((list) => {
            return (
              <Link to={list.endpoint}>
                <li>
                  <img src={list.imgLink} alt="" />

                  <div className="newClass">{list.data}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};
