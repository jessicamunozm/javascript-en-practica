## **APUNTES**:

**1. Expresiones regulares (regExp)**: para validar solo números:

let validacion = **/^[0-9]*$/;**

- Se declaran entre /
- ^ marca el comienzo de la cadena.
- $ marca el final de la cadena.
- [0-9] indica un caracter numérico.
- el * indica que se cumpla 0 o más veces.

------------

**2. El método test:** ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.

La siguiente línea busca si los inputs tienen un contenido vacío o si los inputs cumplen con la validación de solo números al aplicar test a la validación con RegExp:

if (inp1 === "" || **!validacion.test(inp1**)) 

.test revisó los resultados de cada input y comparó con la expresión regular.

------------


**El operador lógico !**: devuelve true cuando la expresión a la izquierda da como resultado false o falso, o invierte el comportamiento del if.

if (inp1 === "" ||** !**validacion.test(inp1)) 

En este caso se usó porque estoy buscando lo que NO quiero usar: espacios vacíos u otro contenido que no sean números, entonces en la segunda parte del if, si no aplico el !, tomaría los valores sí validados (números), al aplicar ! se invierte y toma "lo no validado o no numérico".


------------

**Propiedad .textContent v/s innerText v/s inner.HTML**:
En el ejercicio funcionan los 3 de igual manera al ser un *<.p>*
 sin estilos ni contenido.

**textContent**: contenido de texto puro de un elemento HTML (sin etiquetas ni formato adicional).

**innerText**: tiene en cuenta la visualización del elemento en la página y aplica estilos CSS. Es útil cuando se necesita el texto visible para el usuario en la página.

**innerHTML**. devuelve el contenido HTML completo del elemento, incluyendo tanto el texto como las etiquetas. Útil para acceder o modificar el contenido HTML del elemento, incluyendo su estructura y estilo.