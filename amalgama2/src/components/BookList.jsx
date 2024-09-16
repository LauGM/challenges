import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"

export default function BookList() {
    const [books]=useContext(BooksContext);
    console.log(books);
  return (
    <div>BookList</div>
  )
}
