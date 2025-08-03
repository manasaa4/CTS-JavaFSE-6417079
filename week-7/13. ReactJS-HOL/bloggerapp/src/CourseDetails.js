import React from "react";

function CourseDetails({ courses }) {
  return (
    <div className="section">
      <h1>Course Details</h1>
      {courses &&
        courses.map((course) => (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.date}</p>
          </div>
        ))}
    </div>
  );
}

export default CourseDetails;
