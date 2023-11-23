import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  esbuild: false,
  plugins: [
    typescript({
      check: false, // Otherwise breaks build with lint errors
      tsconfig: "tsconfig.json", // To throw error if no local tsconfig.json found
      include: ["../../**/*.ts+(|x)"], // Mandatoty to import TS modules from the monorepo
      exclude: ["../../**/node_modules/**/*"], // To ensure good perf
    }),
    sveltekit(),
  ],
});
