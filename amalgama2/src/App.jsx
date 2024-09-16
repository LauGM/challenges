import './App.css'
import BookList from './components/BookList'
import UsersList from './components/UsersList'
import { BooksProvider } from './context/BooksContext'
import { UsersProvider } from './context/UsersContext'

function App() {

  return (
    <>
      <BooksProvider>
        <BookList/>
        <UsersProvider>
          <UsersList/>
        </UsersProvider>
      </BooksProvider>

    </>
  )
}

export default App
