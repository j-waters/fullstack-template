import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@/gql": resolve(__dirname, "./src/generated/gql"),
            "@/schema": resolve(__dirname, "./src/generated/graphql"),
            "@": resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 8080,
    },
});
