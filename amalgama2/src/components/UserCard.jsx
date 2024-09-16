/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export default function UserCard({ user }) {
  const [, , findById] = useContext(BooksContext);

  return (
    <article>
      <h3>{user.nickname}</h3>
      <p>{user.email}</p>
      <ul>
        {user.favorite_books.map((id) => <li key={id}>{findById(id).title}</li>)}
      </ul>
      <hr />
    </article>
  );
}
