
import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import { courses } from "./courses";
import { blogs } from "./blogs";
import { books } from "./books";
import "./App.css";

function App() {
  // State to toggle components
  const [showCourses] = useState(true);
  const [showBlogs] = useState(true);
  const [showBooks] = useState(true);

  // Conditional rendering using variable assignment
  let courseSection;
  if (showCourses) {
    courseSection = <CourseDetails courses={courses} />;
  }

  return (
    <div className="container">
      {/* Variable assignment */}
      {courseSection}

      {/* Ternary operator */}
      {showBooks ? <BookDetails books={books} /> : <p>No Books to display</p>}

      {/* Logical && operator */}
      {showBlogs && <BlogDetails blogs={blogs} />}

      {/* Buttons to toggle sections
      <div className="toggle-btns">
        <button onClick={() => setShowBooks((b) => !b)}>Toggle Books</button>
        <button onClick={() => setShowBlogs((b) => !b)}>Toggle Blogs</button>
        <button onClick={() => setShowCourses((b) => !b)}>Toggle Courses</button>
      </div> */}
    </div>
  );
}

export default App;
