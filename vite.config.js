import { defineConfig } from "vite";
import react from '@vite/plugin-react'

//https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/Portfolio",
})