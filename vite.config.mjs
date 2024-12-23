/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/

export default () => {
  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
      strictPort: true,
      port: 3000
    }
  })
}
