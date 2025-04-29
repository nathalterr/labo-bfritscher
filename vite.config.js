import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools()],
    base: process.env.NODE_ENV === "production" ? "/labo-nathalterr/" : "/",
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("https://github.com/heg-web/labo-nathalterr.git", import.meta.url))
        }
    }
});