import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "react/aqua-ui.tsx",
    "dashboard-example": "react/dashboard-example.tsx",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["react"],
  outDir: "dist",
});