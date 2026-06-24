import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/openai": {
          target: "https://generativelanguage.googleapis.com/v1beta/openai",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/openai/, ""),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              if (env.VITE_GEMINI_API_KEY) {
                proxyReq.setHeader(
                  "Authorization",
                  `Bearer ${env.VITE_GEMINI_API_KEY}`
                );
              }
            });
          },
        },
      },
    },
  };
});
