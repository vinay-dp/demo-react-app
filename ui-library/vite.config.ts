import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
// Configuration for building a library (not a standalone app)
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      // Entry point for the library - exports all components
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UILibrary',
      // Output file names for different formats
      fileName: (format) => `ui-library.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables for externalized deps in UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
