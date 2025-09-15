# 🎉 Amigo Secreto - Challenge

Una aplicación web interactiva para realizar sorteos de amigo secreto de manera fácil y divertida.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Demo](#demo)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
- [Funcionalidades](#funcionalidades)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 📖 Descripción

**Amigo Secreto** es una aplicación web desarrollada como parte de un challenge de programación. Permite a los usuarios agregar nombres de amigos y realizar un sorteo aleatorio para determinar quién será el amigo secreto. La aplicación cuenta con una interfaz moderna y responsive, perfecta para organizar intercambios de regalos o juegos entre amigos.

## ✨ Características

- 🎯 **Sorteo Aleatorio**: Selección completamente aleatoria del amigo secreto
- 📝 **Lista Interactiva**: Visualización en tiempo real de los amigos agregados
- ✅ **Validaciones**: Previene nombres vacíos y duplicados
- ⌨️ **Atajos de Teclado**: Presiona Enter para agregar nombres rápidamente
- 📱 **Responsive**: Funciona perfectamente en dispositivos móviles y desktop
- 🎨 **Diseño Moderno**: Interfaz atractiva y fácil de usar

## 🚀 Demo

Para ver la aplicación en funcionamiento:

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Empieza a agregar nombres y sortear!

## 🔧 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/ghost22r/challenge-amigo-secreto.git
   ```

2. **Navega al directorio**
   ```bash
   cd challenge-amigo-secreto
   ```

3. **Abre el proyecto**
   - Abre `index.html` directamente en tu navegador
   - O usa un servidor local como Live Server en VS Code

## 📖 Uso

### Agregar Amigos
1. Escribe el nombre de un amigo en el campo de texto
2. Haz clic en "Añadir" o presiona **Enter**
3. El nombre aparecerá en la lista debajo del campo
4. Repite el proceso para agregar más amigos

### Realizar el Sorteo
1. Una vez que hayas agregado al menos un amigo
2. Haz clic en el botón "Sortear amigo"
3. ¡El amigo secreto será seleccionado y mostrado!

### Funciones Adicionales
- **Validación de nombres**: No se pueden agregar nombres vacíos o duplicados
- **Limpieza automática**: El resultado se limpia al agregar nuevos amigos
- **Focus automático**: El cursor se posiciona automáticamente en el campo de texto

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── app.js              # Lógica JavaScript
├── README.md           # Documentación
└── assets/             # Recursos (imágenes, iconos)
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y Flexbox
- **JavaScript (ES6+)**: Lógica de la aplicación con funciones modernas
- **Google Fonts**: Tipografías Inter y Merriweather

## ⚡ Funcionalidades

### JavaScript

#### Variables Globales
```javascript
let amigos = []; // Array para almacenar los nombres de los amigos
```

#### Funciones Principales

- **`agregarAmigo()`**: Agrega un nuevo amigo con validaciones
- **`mostrarAmigos()`**: Actualiza la lista visual de amigos
- **`sortearAmigo()`**: Realiza el sorteo aleatorio
- **`limpiarResultado()`**: Limpia los resultados anteriores

#### Event Listeners

- Tecla **Enter** para agregar amigos rápidamente
- **DOMContentLoaded** para enfocar el input automáticamente

### CSS Features

- **CSS Variables**: Para mantenimiento fácil de colores
- **Flexbox**: Para layout responsive
- **Hover Effects**: Para mejor experiencia de usuario
- **Box Shadow**: Para efectos visuales modernos

## 🎨 Paleta de Colores

```css
:root {
    --color-primary: #4B69FD;    /* Azul principal */
    --color-secondary: #FFF9EB;  /* Crema de fondo */
    --color-tertiary: #C4C4C4;   /* Gris para botones */
    --color-button: #fe652b;     /* Naranja para sortear */
    --color-button-hover: #e55720; /* Naranja hover */
    --color-text: #444444;       /* Texto principal */
    --color-white: #FFFFFF;      /* Blanco */
}
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Ideas para Contribuir

- 🔄 Botón para limpiar toda la lista
- 💾 Guardar listas en localStorage
- 🎨 Más temas de colores
- 🌍 Internacionalización
- 📊 Historial de sorteos
- 🔀 Modo de sorteo por parejas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**contacto**
- GitHub: [@ghost22r](https://github.com/ghost22r)
- LinkedIn: [ruth pacheco](https://linkedin.com/in/ruth-pacheco)

## 🙏 Agradecimientos

- Challenge proporcionado por [Oracle Next Education](https://www.oracle.com/mx/education/oracle-next-education/)
- Iconos de [Material Design](https://material.io/design)
- Fuentes de [Google Fonts](https://fonts.google.com)

---

⭐ ¡Si te gustó este proyecto, dale una estrella en GitHub! ⭐

## 📱 Screenshots

### Vista Principal
*Interfaz principal donde se agregan los nombres de los amigos*

### Lista de Amigos
*Visualización de todos los amigos agregados*

### Resultado del Sorteo
*Pantalla que muestra el amigo secreto sorteado*

---

**¿Encontraste un bug o tienes una sugerencia? ¡Abre un [issue](https://github.com/ghost22r/challenge-amigo-secreto/issues)!**