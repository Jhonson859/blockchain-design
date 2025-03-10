import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    emptyOutDir: true, // Clean the output directory before building
    rollupOptions: {
      output: {
        // Place CSS files in the css folder
        assetFileNames: assetInfo => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash][extname]'
          }
          // Place image files in the images folder
          if (assetInfo.name && /\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
            return 'images/[name]-[hash][extname]'
          }
          // Place font files in the fonts folder
          if (assetInfo.name && /\.(woff2?|ttf|eot|otf)$/.test(assetInfo.name)) {
            return 'fonts/[name]-[hash][extname]'
          }
          // Other assets go to the assets folder
          return 'assets/[name]-[hash][extname]'
        },
        // Direct JavaScript chunks and entry files into the js folder
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 8080
  }
}
