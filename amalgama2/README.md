# Amalgama challenge 2

## 1.Pensar cómo sería la forma más óptima de guardar esta información en el estado local. Codear la solución usando alguna estrategia de state management. Adjuntar el código.

El codigo se encuentra en el proyecto


## 2.Adjuntar en formato JSON cómo quedaría el estado, según lo que se planteó en el punto anterior.

```
[
    {
        id: 1,
        email: 'chano@amalgama.co',
        nickname: 'Chano',
        favorite_books: [1], 
    },
    {
        id: 2,
        email: 'sebastian@amalgama.co',
        nickname: 'Biche',
        favorite_books: [1,2]
    }
]
```
> ☝️ Asi queda el array de usuarios en el contexto 👨‍💻

```
[
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
```
> ☝️ Asi queda el array de libros en el contexto 📚

## 3.Explicar las ventajas que tiene la solución propuesta.

Me hubiese gustado saber un poco mas del proyecto en cuestión y de su envergadura para proponer pero en principio React provee su propio mecanismo de manejo de estados globales que es el contexto y esa es la estrategia que uso ya que no se aclara el tamaño del set de datos real y el alcance final.

Con los datos brindados cree una archivo llamado asyncMock.js que simula la asincronia de las peticiones y exporta dos funciones con las promesas que retornan con exito ambos arrays.

Utilizo dos contextos:

1. BooksContext
2. UsersContext

Observo que el array de usuarios tiene un atributo llamado favorite_books que incorpora objetos completos de los libros que ya tenemos en el array books, por lo tanto decidí realizar una pequeña transformación en el array original y en vez de traer todo el objeto de cada libro, traigo solo el id.  Esto es porque sé que puedo obtener el objeto facilmente del otro array y la ventaja es que puedo optimizar el consumo de memoria reduciendo el tamaño de los datos y no repitiendo objetos, lo cual mejora la legibilidad y la eficiencia.
Obviamente todo depende de cuan a menudo se acceda a los datos y si solo se realizaran consultas o mas bien se realizaran altas, bajas y modificaciones.

Más alla de lo dicho creo que si el proyecto es de pequeño porte es una ventaja no tener que agregar una dependencia nueva como Redux o Zustand para manejo de estados ya que con el contexto podemos trabajar perfectamente logrando el objetivo de evitar props drilling. 