## `Proyecto creado con Create React App`
Documentación para empezar en React:  
https://create-react-app.dev/docs/getting-started

### Git clone
Abrir GitBash.  
Elegir la dirección donde deseas clonarlo.  
Escribir:  
`git clone https://github.com/gonzaloramosf/reactProject.git`  
Y presionando enter dentro de tu GitBash se clonara.

### Scripts disponibles
Dentro del proyecto, puedes correr:  
`npm start` para correr el proyectos

Capaz debas instalar los scripts necesarios del proyecto:  
https://docs.npmjs.com/cli/v8/using-npm/scripts

### Variable de entorno env.example
Podemos acceder a las mismas dentro de `env.example`

### Sobre el proyecto

El siguiente proyecto sirve como ejemplo de desarrollo de una App web con ReactJS y utilizando Firebase como base de datos. Se construyó un e-commerce de tecnología y productos relacionadas que cuenta con las siguientes características:

El manejo de productos dentro de la App permite la función de agregar al carrito.  
Carrito interactivo: el usuario puede agregar varias unidades de un mismo producto al mismo tiempo y no perder la cuenta gracias a la incorporación de un contador en el cart widget.  
También se implementó el uso de localStorage para que el carrito sea persistente y no se pierdan los productos por algún refresh no deseado de la página.  
Los productos están presentes en el Home de la App y pueden filtrarse por categorías.  
Para la navegación de las diferentes rutas de la App se utilizó react-router-dom.  

Como ya fue mencionado, se utilizó Firebase como base de datos para alojar los diferentes productos con su información, ID y stock disponible. Tambien se utilizaron las funcionalidades de 
Firebase Auth para el manejo de usuarios dentro de la App, es posible:  
Registrarse con email, iniciar sesión y cerrar sesión cuando el usuario lo desee, también la posibilidad de iniciar sesiós con Google (gmail).  
Si no estas registrado no es posible realizar compras, esto es para evitar compras falsas y poder tener un mejor control.  
Es posible también recuperar la cuenta vía email, en la pantalla de Log In aparece la opción de Forgot password? que al clickearla te explica como recuperar la misma.  
Los usuarios registrados tienen acceso a su perfil donde se muestran sus datos personales.  

Diseño responsive para una correcta visualización en distintos dispositivos, utilizando diferentes tipos de adaptaciones para cada pantalla.

Librerías extra:  
Se implemento una herramienta extra al proyecto para obtener iconos que fueron utilizados en el NavBar:

React Icons:  
Para el manejo de los iconos, React Icons recopila una gran variedad de iconos de diferentes librerías. (https://react-icons.github.io/react-icons/)
