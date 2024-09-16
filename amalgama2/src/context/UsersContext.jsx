import { createContext, useEffect, useState } from 'react';
import { getUsers } from '../asyncMock';

export const UsersContext = createContext(false);

// eslint-disable-next-line react/prop-types
export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUsers().then(data => {
        const optimizedUsers = data.response.map(user => {
            return {
                id:user.id,
                email:user.email,
                nickname:user.nickname,
                favorite_books: user.favorite_books.map(book => book.id)
            }
        });
        setUsers(optimizedUsers);
    })
  },[])

  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {children}
    </UsersContext.Provider>
  );
}