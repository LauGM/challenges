# Amalgama challenge 3

## 1. Crear una pantalla de login con email y password.

* Handlear el caso de error.

Desarrolle LoginView.jsx como la vista predeterminada en la ruta '/'
En caso de error, redirige a '/error' por unos segundos y luego vuelve a '/'

## 2. Una vez hecho login, se accede a las pantallas privadas de la app.

* Si uno no está logueado, sólo puede ver la pantalla de login.

Guardo el token en el localStorage y ese dato valida que el login fue correcto.  Si no hay token entonces no está logueado. Por lo tanto no se puede ir a la ruta '/home' y en caso de intentar acceder manualmente, redirige a '/'.

* Si uno está logueado e intenta ir a la pantalla de login, debe redirigir a alguna de las pantallas privadas que se considere como la principal.

Al haber token se redirige automaticamente a '/home' y en caso de intentar volver a '/' manualmente desde la url del navegador o con la flecha de 'atras', redirige a '/home'