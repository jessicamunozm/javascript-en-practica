## APUNTES EJERCICIO 1

**1. event.preventDefault()**
previene el comportamiento por defecto que trae consigo el evento. (ej: en los formularios, el comportamiento por defecto del botón submit es redirigir la página hacia la dirección del submit, sino por defecto la actualiza).
Me pasó que al hacer click en enviar mensaje, la página de actualizaba.

------------
**2. trim()**: elimina los espacios en blanco en ambos extremos del string

------------
RegExp solo letras y espacios 
let patronN =  **/^[a-zA-Z\s]+$/**

- Se declaran entre (/).
- ^ marca el comienzo de la cadena.
- $ marca el final de la cadena.
- [0-9] indica un caracter numérico.
- (*) indica que se cumpla 0 o más veces.
------------

**3. método .test**: ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.

La siguiente línea busca si el input nombre tiene un contenido que cumpla con la validación de la RegExp (solo letras), .test revisa los contenidos, compara con la RegExp y valida, en este caso devuelve true.

**3.1 operador lógico (!)** cambia el true por false y la línea entonces se ejecuta para los resultados que no sean letras.

**else if (!patronN.test(valorN))**
nameE.textContent = "El nombre debe contener solo letras y espacios";

------------

**4. Propiedad .textContent v/s innerText v/s inner.HTML**:
En el ejercicio funcionan los 3 de igual manera al ser un *<.p>*
 sin estilos ni contenido.

**textContent**: contenido de texto puro de un elemento HTML (sin etiquetas ni formato adicional).

**innerText**: tiene en cuenta la visualización del elemento en la página y aplica estilos CSS. Es útil cuando se necesita el texto visible para el usuario en la página.

**innerHTML**. devuelve el contenido HTML completo del elemento, incluyendo tanto el texto como las etiquetas. Útil para acceder o modificar el contenido HTML del elemento, incluyendo su estructura y estilo.

