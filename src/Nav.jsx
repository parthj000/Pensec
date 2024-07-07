import React from "react";
import "./nav.css";
export const Nav = (props) => {
  return (
    <div className="nav">
      <div className="classofauthor">12th class</div>
      <button
        onClick={() => {
          fetch("http://localhost:3000/logout", {
            credentials: "include",
          })
            .then((data) => {
              if (data.ok) {
                window.location("/login");
              }
              return data.json();
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Logout
      </button>
      <div className="profile">
        <span>hello {props.name} </span>
        {props.photo && <img src={props.photo} alt="" />}
      </div>
    </div>
  );
};
