import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BooksMarks/BookMarks";
import Header from "./components/header/header";
function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const hendelAddBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks)
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex w-11/12 mx-auto">
        <Blogs hendelAddBookMarks={hendelAddBookMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
