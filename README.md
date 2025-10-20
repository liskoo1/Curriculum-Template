# 📄 Currículum Digital - Luis Requena Mellado

Sistema web de currículum profesional con múltiples versiones y funcionalidad de descarga en PDF.

## 🚀 Características

- **Múltiples versiones de CV**: Dos diseños diferentes (clásico y moderno)
- **Página de navegación**: Landing page profesional para elegir entre versiones
- **Descarga en PDF**: Convierte cada currículum a PDF con un clic
- **Función de impresión**: Impresión optimizada para formato A4
- **Responsive Design**: Adaptable a diferentes dispositivos (especialmente CV V2)
- **Diseño profesional**: Usando fuentes Poppins y paleta de colores moderna

## 📁 Estructura del Proyecto

```
curriculum/
├── index.html              # Página principal de navegación
├── curriculum1.html        # CV Versión 1 - Diseño Clásico
├── curriculum2.html        # CV Versión 2 - Diseño Moderno
├── package.json           # Configuración NPM
└── public/
    ├── css/              # Archivos CSS
    │   ├── navigation.css
    │   ├── style.css
    │   └── style2-compact.css
    ├── js/               # Archivos JavaScript
    │   ├── pdf-download.js
    │   └── main.js
    ├── fonts/            # Fuentes Poppins (todos los pesos)
    └── img/              # Imágenes
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Grid y Flexbox
- **JavaScript**: Funcionalidad interactiva
- **Vite**: Build tool y desarrollo
- **html2pdf.js**: Librería para generación de PDF (CDN)
- **Fuentes**: Poppins de Google Fonts

## 📦 Instalación y Uso

### Requisitos Previos

- Node.js (v14 o superior)
- NPM (v6 o superior)

### Instalación

```bash
# Navegar al directorio del proyecto
cd curriculum

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en: `http://localhost:5173`

### Comandos Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo con hot reload
npm run build    # Crea build de producción en /dist
npm run preview  # Vista previa del build de producción
```

## 🎨 Estructura de Páginas

### 1. Página Principal (index.html)
- Landing page con navegación
- 3 tarjetas: CV V1, CV V2, CV V3 (próximamente)
- Información rápida del candidato
- Enlaces a redes sociales y portfolio

### 2. Currículum V1 (curriculum1.html)
- Diseño clásico de dos columnas
- Panel izquierdo oscuro con foto, contacto, skills y estudios
- Panel derecho con experiencia profesional
- Formato A4 optimizado para impresión

### 3. Currículum V2 (curriculum2.html)
- Diseño moderno con secciones numeradas (5-8)
- Sidebar con: Datos personales, Formación, Idiomas, Soft Skills
- Contenido principal con:
  - **Sección 5**: Introducción
  - **Sección 6**: Habilidades Técnicas (Frontend, Backend, BD, Herramientas)
  - **Sección 7**: Información Académica
  - **Sección 8**: Experiencia Profesional (Proyectos + Laboral)

## 📥 Funcionalidad de Descarga PDF

Cada currículum incluye dos botones flotantes en la esquina superior derecha:

### Botón "Descargar PDF" 📥
- Convierte el currículum a PDF usando html2pdf.js
- Genera archivo optimizado para visualización
- Nombres de archivos: `Luis_Requena_Curriculum_V1.pdf` / `Luis_Requena_Curriculum_V2.pdf`
- Calidad de imagen: 98%
- Formato: A4

### Botón "Imprimir" 🖨️
- Abre el diálogo de impresión del navegador
- Estilos optimizados para impresión (@media print)
- Oculta automáticamente los botones de descarga
- Formato A4 con márgenes adecuados

## 🎯 Proyectos Destacados Incluidos

1. **HelpMeAgro** - Plataforma multiplataforma (Web, iOS, Android)
   - Stack: Blazor, .NET MAUI, C#, MySQL
   - URL: www.helpmeagro.com

2. **Plataforma Aspirantes a Policía** - Sistema educativo
   - Stack: .NET, Blazor, TypeScript, SQL Server
   - URL: www.ia-pol.es

3. **Gestión CrossFit Box** - App multiplataforma
   - Stack: C#, .NET MAUI, ASP.NET
   - URL: www.vanguardcrossandfit.com

## 🔧 Personalización

### Cambiar Colores Principales
Edita las variables en `navigation.css`, `style.css` y `style2.css`:
```css
/* Color principal: #4a90e2 */
/* Color hover: #3182ce */
/* Fondo oscuro: #2d3748 */
```

### Añadir Nueva Versión de CV
1. Crea `curriculum3.html` con tu diseño
2. Crea `style3.css` con los estilos
3. Añade una nueva tarjeta en `index.html`
4. Actualiza `pdf-download.js` con configuración v3

### Modificar Configuración PDF
Edita `pdf-download.js` en la sección `configs`:
```javascript
v1: {
  element: document.body,
  filename: 'nombre_archivo.pdf',
  opt: { /* opciones html2pdf */ }
}
```

## 🌐 Despliegue

### Build de Producción
```bash
npm run build
```

Esto genera una carpeta `/dist` con todos los archivos optimizados.

### Opciones de Hosting
- **Netlify**: Arrastra la carpeta /dist o conecta el repositorio
- **Vercel**: Importa el proyecto desde GitHub
- **GitHub Pages**: Sube el contenido de /dist
- **Servidor propio**: Sube los archivos a tu hosting

## 📝 Notas Importantes

1. **Rutas de Imágenes**: Vite sirve archivos de `/public` desde la raíz
   - Correcto: `/img/yo2.png`
   - Incorrecto: `/public/img/yo2.png`

2. **Fuentes**: La familia Poppins incluye múltiples pesos (Regular, Bold, ExtraBold)

3. **Compatibilidad**: Probado en Chrome, Firefox, Safari y Edge

4. **Performance**: html2pdf.js puede tardar unos segundos en generar PDFs grandes

## 🐛 Solución de Problemas

### El PDF no se genera
- Verifica que html2pdf.js se cargó correctamente desde el CDN
- Abre la consola del navegador para ver errores
- Intenta con el botón "Imprimir" como alternativa

### Las imágenes no se ven
- Verifica que las rutas no incluyan `/public/`
- Asegúrate de que las imágenes existen en `/public/img/`

### Los estilos no se aplican
- Ejecuta `npm run dev` para verificar errores de compilación
- Limpia caché del navegador (Ctrl + Shift + R)

## 👨‍💻 Autor

**Luis Francisco Requena Mellado**
- Email: luiss.requena.89@gmail.com
- LinkedIn: [linkedin.com/in/luis-requena-mellado-b59123265/](https://linkedin.com/in/luis-requena-mellado-b59123265/)
- Portfolio: [www.luisrequenadev.com](https://www.luisrequenadev.com)
- Ubicación: Almería, España

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados © 2024 Luis Requena Mellado.

---

**Última actualización**: Octubre 2024
