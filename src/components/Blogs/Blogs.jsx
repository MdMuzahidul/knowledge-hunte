import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ hendelAddBookMarks }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          hendelAddBookMarks={hendelAddBookMarks}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  // blog: PropTypes.object.isRequired,
  hendelAddBookMarks: PropTypes.func,
};

export default Blogs;
