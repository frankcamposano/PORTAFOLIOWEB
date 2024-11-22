/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto indica que se generará una aplicación estática
  distDir: 'dist', // El directorio donde se almacenarán los archivos construidos
  trailingSlash: true, // Agrega una barra diagonal al final de las rutas
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes (útil si manejas imágenes manualmente)
  },
};

module.exports = nextConfig;