// import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript2";
import typescript from "@rollup/plugin-typescript";
import svg from "rollup-plugin-svg";

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

const globals = {
  ...packageJson.devDependencies,
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs", // commonJS
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm", // ES Modules
      sourcemap: true,
    },
    // {
    //   // path to your declaration files root
    //   input: "./lib/dts/index.d.ts",
    //   output: [{ file: "lib/index.d.ts", format: "es" }],
    //   plugins: [dts()],
    // },
  ],
  plugins: [
    // peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      // useTsconfigDeclarationDir: false,
      // tsconfigOverride: {
      //   exclude: ["**/*.stories.*"],
      // },
    }),
    svg(),
    commonjs({
      exclude: "node_modules",
      ignoreGlobal: true,
    }),
  ],
  // external: Object.keys(globals),
  external: ["styled-components", "react", "react-dom", "@mui/material"],
};
