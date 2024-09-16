# Challenge Amalgama

## 1. Enunciar todos problemas o posibilidades de mejoras para este componente. Mencionar cuáles de los problemas o posibilidades de mejoras enunciados son los más relevantes ✅

### 👉 Problemas encontrados: el componente dado tiene errores y es muy extenso pudiendo re-crearlo en  componentes mas pequeños:

* Falta export default del componente

* Faltan las funciones truncate, findById 

* El siguiente div necesita una key:
```
{contactsToDisplay.map(contact => (<div> ...
```

* La siguiente ul necesita una key:
```
{contact.addresses.map(address => (<ul> ...
```

* Si la funcion findById devuelve un objeto literal con atributos, en estas lineas es necesario agregar exactamente el atributo a renderizar:  
```
<li>{address.city}</li>
<li>{address.state}</li>
```

* por ejemplo cambiarlos por:
```
<li>{address.city.name}</li>
<li>{address.state.name}</li>
```

* Modificar estructura de ContactsScreen.jsx y componentizar algunas porciones de codigo: 
    - NavBar.jsx: extraer codigo, crear componente e importarlo a App.jsx
    - ContactCard.jsx: extraer codigo, crear componente e importarlo a ContactsScreen.jsx
    - AddressItem.jsx: extraer codigo, crear componente e importarlo a ContactCard.jsx

* Agregar estilos

> [🚨]
> En mi opinion los errores más relevantes son los errores que impiden el renderizado y la arquitectura interna del componente


## 2. Refactorizar el código y adjuntar cómo quedaría la solución luego de la refactorización. ✅

## 3. Justificar lo realizado en el punto 2 explicando qué mejoras aporta y por qué soluciona lo comentado en el punto 1.

La solucion planteada propone:
- Crear un archivo de funciones.js que contenga aquellas funciones que puedan llegar a reutilizarse en otros componentes o que no son privativas del mismo como truncate() y findById().

- Componentizar planteando responsabilidades mas acotadas a componentes mas pequeños, siendo asi mas faciles de entender y testear eventualmente.

- Solucionar los errores de sintaxis y agregar las keys faltantes para poder visualizar correctamente los componentes y facilitar a React el mantenimiento de cada item renderizado.

- Dar estilos basicos al menos para visualizar adecuadamente lo realizado en desktop.

## 4.Se pide agregar una vista del perfil del usuario, suponiendo que los datos del usuario son avatar , first_name , last_name , company , email y address . Adjuntar la solución propuesta.

He realizado ContactCard.jsx que proporciona un card con los detalles del usuario tal como los describe el array contactsToDisplay, no es exactamente lo que se pide pero creo que es la idea solicitada, que podria mostrarse sola en otra vista.
Además he planteado en la carpeta views, ProfileView.jsx que recibe por props un objeto user y muestra lo solicitado.