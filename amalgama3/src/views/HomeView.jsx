import { useEffect, useState } from "react";
import { fetchWithAuth } from "../api";
import { useNavigate } from "react-router-dom";

export default function BooksView() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const URL =
      "https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/books";
    localStorage.getItem("token")
      ? fetchWithAuth(URL, "GET").then((data) => setBooks(data))
      : navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  return (
    <section>
      <nav style={{ display: "flex", gap: 20 }}>
        <h2>Home</h2>
        <button onClick={handleClick}>Logout</button>
      </nav>
      <h3>Books information</h3>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </section>
  );
}
