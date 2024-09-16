const books = {
    response: [
        {
            id: 1,
            title: 'Clean Code',
            author: {
                id: 1,
                name: 'Uncle Bob'
            }
        },
        {
            id: 2,
            title: 'Clean Architecture',
            author: {
                id: 1,
                name: 'Uncle Bob'
            }
        }
    ]
}

const users = {
    response: [
        {
            id: 1,
            email: 'chano@amalgama.co',
            nickname: 'Chano',
            favorite_books: [
                {
                    id: 1,
                    title: 'Clean Code',
                    author: {
                        id: 1,
                        name: 'Uncle Bob'
                    }
                }
            ]
        },
        {
            id: 2,
            email: 'sebastian@amalgama.co',
            nickname: 'Biche',
            favorite_books: [
                {
                    id: 1,
                    title: 'Clean Code',
                    author: {
                        id: 1,
                        name: 'Uncle Bob'
                    }
                },
                {
                    id: 2,
                    title: 'Clean Architecture',
                    author: {
                        id: 1,
                        name: 'Uncle Bob'
                    }
                }
            ]
        }
    ]
}



function getBooks(){
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(books);
        }, 1000);
      });
}

function getUsers(){
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(users);
        }, 1000);
      });
}

export {getBooks, getUsers}