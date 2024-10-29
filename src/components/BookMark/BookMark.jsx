import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div className="p-4 m-4 bg-slate-300 rounded-lg ">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};
BookMark.propTypes = {
  bookMark: PropTypes.array,
};

export default BookMark;
