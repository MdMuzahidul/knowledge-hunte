import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks }) => {
  return (
    <div className="w-1/3 bg-gray-500 rounded-2xl mt-8 ml-4">
      <h3 className="text-3xl p-4 text-center text-white font-bold ">BooksMarks:{bookMarks.length}</h3>

      {bookMarks.map((bookMark) => (
        <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.object,
};
export default BookMarks;
