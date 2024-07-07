import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Sidebar } from "./Sidebar";
import Courses from "./Courses";
import Test from "./Test";
import Notifications from "./components/Notifications";
import Protected from "./Protected";
import Login from "./Login";
import CreateCourse from "./CreateCourse";
import Meet from "./Meet";
import CourseShow from "./components/CourseShow";
import { CounterContext, CounterProvider } from "./context/First";
export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Home</h1>
            </>
          }
        />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Protected />}>
          <Route path="/dash" element={<Dashboard />}>
            <Route path="courses" element={<Courses />} />
            <Route path="create" element={<CreateCourse />} />
            <Route path="meet" element={<Meet />} />
            <Route
              path="notifications"
              element={
                <Notifications alertMessage="testing and this is cool" />
              }
            />
            <Route path="courses/:id" element={<CourseShow />} />
          </Route>
        </Route>

        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Sidebar />} />
      </Routes>
    </>
  );
}
