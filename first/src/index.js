import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />

      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author></Author>
    </article>
  );
};

const Image = () => <img src="./images/first.JPEG" alt="first" />;
const Title = () => <h2> You Can't Joke About That</h2>;
const Author = () => (
  <h2 style={{ color: "red", marginTop: "0.5rem", fontSize: "4rem" }}>
    Kat Timpf
  </h2>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
