import "./Course.scss";
import { Link } from "react-router-dom";

export function Course(props) {
  return (
    <>
      <Link
        to={`/dash/courses/${props.courseCode}`}
        state={{
          courseLink: props.courseLink,
          tags: props.tags,
          heading: props.heading,
          fees: props.fees,
        }}
      >
        <div className="course-jsx">
          <div className="course">
            <div className="course-start">
              <div className="course-pic">
                <img src={props.courseLink} alt="" />
              </div>
              <div className="course-info">
                <div className="course-tags">
                  <ul>
                    {props.tags.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="course-heading">{props.heading}</div>
                <p>Rs. {props.fees}</p>
              </div>
            </div>
            <div className="course-end">
              <div>
                <div className="text-box">
                  <button>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
