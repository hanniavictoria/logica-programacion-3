# Lógica de Programación: Calculadora de Factorial

Una aplicación web interactiva, moderna y minimalista que permite a los usuarios calcular el factorial de cualquier número entero de forma rápida. Este proyecto fue desarrollado para practicar la manipulación del DOM, lógica de programación con bucles en JavaScript y diseño con CSS.

## 🚀 Características

- *Cálculo instantáneo:* Procesa la lógica de factorizado mediante un bucle eficiente en JavaScript.
- *Diseño moderno:* Interfaz limpia estilo tarjeta con micro-interacciones (efectos de hover y active en botones).
- *Validación de tipos:* Utiliza campos de entrada numéricos nativos de HTML5 para una mejor experiencia de usuario.

## 🛠️ Tecnologías utilizadas

- *HTML5:* Estructura semántica de la aplicación.
- *CSS3:* Estilos personalizados, centrado con Flexbox y diseño de interfaz de usuario (UI).
- *JavaScript (ES6):* Manipulación del DOM, escucha de eventos (addEventListener) y algoritmo de cálculo analítico.

## 📦 Estructura del Proyecto

text
├── index.html   # Estructura principal y maquetación web
├── style.css    # Estilos visuales y diseño responsivo
└── main.js      # Lógica de programación y cálculo de factorial


## 💻 Instrucciones de Instalación y Uso

1. *Clona este repositorio* en tu máquina local:
   bash
   git clone https://github.com
   
2. *Navega a la carpeta* del proyecto:
   bash
   cd TU_REPOSITORIO
   
3. *Abre el archivo index.html* en tu navegador web favorito (puedes hacer doble clic sobre él o usar extensiones como Live Server en VS Code).

## 🧠 Lógica del Algoritmo

El núcleo del proyecto utiliza una función con un bucle while que multiplica de forma descendente los números:
- Si el usuario ingresa 0 o 1, el sistema retorna inmediatamente 1.
- Para números mayores, multiplica el acumulador por el valor actual y decrementa el número en cada iteración hasta llegar a 1.
