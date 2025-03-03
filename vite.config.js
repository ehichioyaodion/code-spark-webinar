import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // removes console.* calls
        drop_debugger: true, // removes debugger statements
        pure_funcs: ["console.log"], // removes specific functions
      },
      format: {
        comments: false, // removes comments
      },
      mangle: {
        safari10: true, // for Safari 10 support
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
