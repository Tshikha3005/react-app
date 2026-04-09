import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Use SWC for speed

export default defineConfig({
  plugins: [react()],
});
