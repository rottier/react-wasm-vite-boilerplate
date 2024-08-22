import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import wasm from "vite-plugin-wasm";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    target: "esnext",
  },
  plugins: [react(), wasm()],
  resolve: {
    alias: {
      "@wasm": path.resolve(__dirname, "./dist/wasm"),
    }
  }
})
