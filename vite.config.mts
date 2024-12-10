import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default ({ mode }: { mode: any }) => {
  // Load app-level env vars to node-level env vars. Expose process.env to build scripts
  const env = loadEnv(mode, process.cwd());
  // https://vitejs.dev/config/
  return defineConfig({
    base: "https://danplubell.github.io/react-datepicker-poc-external/",
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
    },
    server: {
      port: 3000,
    },
    build: {
      rollupOptions: {
        maxParallelFileOps: 2,
        cache: false,
        output: {
          inlineDynamicImports: false,
        },
      },
    },
  });
};
