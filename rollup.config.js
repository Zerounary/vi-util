import filesize from "rollup-plugin-filesize";
import {uglify} from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "umd",
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "es",
    },
  ],
  plugins: [
    // terser()
    uglify({
      compress: {
        drop_console: true,
      },
    }),
    filesize()
  ],
};
