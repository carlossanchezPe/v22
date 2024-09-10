# Proxy

## Por **Carlos Sánchez**

---

### 🎯 **Objetivo**:

Explicar el patrón de diseño **Proxy**, que proporciona un intermediario o marcador de posición para controlar el acceso a un objeto.

---

### 📄 **Descripción**:

El patrón Proxy es un **patrón de diseño estructural** que permite crear un intermediario que controla el acceso a un objeto original. Este intermediario puede realizar acciones adicionales, como validaciones, control de acceso o registro de actividades, antes o después de interactuar con el objeto original.

---
# Problema: Control de Acceso a Objetos

---

### 🚨 **¿Por qué es importante controlar el acceso a un objeto?**

A veces, trabajamos con objetos que consumen **muchos recursos del sistema**. Estos objetos no siempre son necesarios, pero cuando los usamos, pueden causar **retrasos** o **problemas de rendimiento**.

---

### 🛑 **Ejemplo común**:

Las consultas a bases de datos pueden ser muy lentas. Sería ideal **crear el objeto solo cuando realmente lo necesitemos** para evitar usar recursos innecesarios.

---

### 💡 **Solución tradicional**:

Podemos implementar una **inicialización diferida**: crear el objeto solo cuando sea necesario. Sin embargo, esta solución a menudo genera **código duplicado** y complicado para todos los clientes que necesiten ese objeto.

---

### 🤔 **¿Por qué no es siempre ideal?**

- **Limitaciones de clases externas**: A veces no podemos modificar la clase del objeto porque pertenece a una **biblioteca de terceros** que no podemos alterar.
- **Complejidad en el manejo de código repetido**: Colocar el código de inicialización en cada cliente del objeto añade complejidad y redundancia.

---

### 🔍 **El patrón Proxy como solución**:

El patrón Proxy resuelve este problema al controlar cuándo y cómo se crea el objeto, mejorando la eficiencia sin duplicar código.

# Analogía del Patrón Proxy en el Mundo Real

---

### 💳 **Tarjeta de crédito como Proxy**:

Imagina que utilizas una **tarjeta de crédito** para hacer un pago. Aunque puedes pagar con efectivo, la tarjeta actúa como un **proxy** de tu cuenta bancaria, que a su vez es un proxy del dinero en efectivo.

---

### 📌 **¿Cómo funciona?**

- **Tarjeta de crédito = Proxy**: La tarjeta y el efectivo funcionan de manera similar para realizar pagos porque ambos implementan la misma "interfaz".
- **Ventajas para el consumidor**: No es necesario llevar efectivo en grandes cantidades.
- **Ventajas para el comerciante**: Los ingresos se transfieren de manera segura a su cuenta bancaria, reduciendo el riesgo de pérdida o robo.

---

### 🔄 **Beneficio mutuo**:

- **Para el cliente**: Comodidad y seguridad al no llevar efectivo.
- **Para el dueño de la tienda**: Ingresos protegidos y transferencias electrónicas seguras.
---
# Pseudocódigo
![image](https://github.com/user-attachments/assets/7b9596c9-e8a5-4c65-b880-6e7937a96631)

-----
