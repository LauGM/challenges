import { useContext } from "react"
import { UsersContext } from "../context/UsersContext"
import UserCard from "./UserCard";

export default function BookList() {
    const [users]=useContext(UsersContext);
    console.log(users);
  return (
    <section>
        <h2>UsersList</h2>
        {users.map(user => <UserCard key={user.id} user={user}/>)}
    </section>
  )
}