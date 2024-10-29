import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, hendelAddBookMarks }) => {
  const {
    title,
    cover,
    author_img,
    author_name,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div>
      <img className="w-full rounded-2xl my-8" src={cover} alt="" />
      <h4 className="text-5xl font-bold mb-4">{title}</h4>
      <div className="flex justify-between mb-4">
        <div className="flex justify-between items-center gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3>{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span>{reading_time} min read</span>
          <button onClick={() => hendelAddBookMarks(blog)}>
            {" "}
            <CiBookmark></CiBookmark>{" "}
          </button>
        </div>
      </div>
      <div className="space-x-3">
        {hashtags.map((item, ind) => (
          <span key={ind}>
            <a href="#" className="underline">
              {" "}
              {item}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  hendelAddBookMarks: PropTypes.func,
};
export default Blog;
