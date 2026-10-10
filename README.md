# Rancho de Gorras — sitio web inicial

## Contenido
- `index.html`: página principal.
- `styles.css`: diseño adaptable a computadora y celular.
- `script.js`: catálogo inicial de muestra y enlaces de contacto.
- `images/`: carpeta para las fotos reales de tus productos.

## Antes de compartir la tienda
1. Reemplaza las ilustraciones temporales por las fotos reales de las gorras.
2. Edita `script.js` para poner el enlace real de Instagram de Rancho de Gorras.
3. Actualiza nombres, precios, colores y descripciones de `products`.
4. Prueba la web en celular y computadora.

## Publicar en Netlify
Este es un sitio estático: no requiere comando de compilación. Cuando subas estos archivos a GitHub y conectes el repositorio con Netlify, usa:
- Build command: dejar vacío.
- Publish directory: `.` (raíz del repositorio).

## Importante sobre las actualizaciones
Los cambios de código subidos a GitHub se pueden publicar automáticamente con Netlify. Este paquete todavía NO incluye un panel de administración con autenticación ni una base de datos compartida; eso se configura en una fase posterior. No introduzcas contraseñas ni datos privados en los archivos públicos del sitio.

## Fotos de producto
Guarda tus fotos en `images/`, por ejemplo `images/ariat-negra.jpg`, y en el producto correspondiente de `script.js` escribe `image: "images/ariat-negra.jpg"`. Conserva las fotos originales sin recortarlas si ese es el aspecto que deseas mostrar.


## Fotos ARIAT añadidas
- `images/ariat-negra-beige.png`
- `images/ariat-negra-escudo.png`
- `images/ariat-camuflaje-bandera.png`

Las fotografías originales se muestran completas, con su fondo intacto. Los precios siguen como “Consultar precio” porque no se proporcionaron precios definitivos. Actualiza `INSTAGRAM_URL` en `script.js` con el enlace correcto de la cuenta de la tienda antes de anunciarla.
