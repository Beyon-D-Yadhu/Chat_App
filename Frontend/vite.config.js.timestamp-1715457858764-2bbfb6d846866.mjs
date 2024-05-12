// vite.config.js
import { defineConfig } from "file:///home/berthold/Desktop/brototype/week_20/CHATAPP/Frontend/node_modules/vite/dist/node/index.js";
import react from "file:///home/berthold/Desktop/brototype/week_20/CHATAPP/Frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        // Adjust the URL as needed
        changeOrigin: true
        // rewrite: (path) =>{
        //   console.log('Rewriting path:', path); // Add this logging
        //   return path.replace(/^\/api/, '');
        // } 
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9iZXJ0aG9sZC9EZXNrdG9wL2Jyb3RvdHlwZS93ZWVrXzIwL0NIQVRBUFAvRnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2JlcnRob2xkL0Rlc2t0b3AvYnJvdG90eXBlL3dlZWtfMjAvQ0hBVEFQUC9Gcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9iZXJ0aG9sZC9EZXNrdG9wL2Jyb3RvdHlwZS93ZWVrXzIwL0NIQVRBUFAvRnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnLCAvLyBBZGp1c3QgdGhlIFVSTCBhcyBuZWVkZWRcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAvLyByZXdyaXRlOiAocGF0aCkgPT57XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ1Jld3JpdGluZyBwYXRoOicsIHBhdGgpOyAvLyBBZGQgdGhpcyBsb2dnaW5nXG4gICAgICAgIC8vICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKTtcbiAgICAgICAgLy8gfSBcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBUyxvQkFBb0I7QUFDMVgsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUE7QUFBQSxRQUNSLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
