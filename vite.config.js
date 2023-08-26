import { resolve } from 'path';
import { defineConfig } from 'vite';
import cleanPlugin from 'vite-plugin-clean';
import checker from 'vite-plugin-checker';
import handlebars from './vite-plugin-handlebars-precompile';
// import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    publicDir: resolve(__dirname, 'static'),
    build: {
        outDir: resolve(__dirname, 'dist'),
    },
    plugins: [
        handlebars(),
        cleanPlugin(),
        checker({
            typescript: true,
        }),
        // stylelint(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "./src/scss/_vars.scss";
                    @import "./src/scss/base/_fonts.scss";
                    @import "./src/scss/base/_generic.scss";
                    @import "./src/scss/utils/_functions.scss";
                    @import "./src/scss/utils/_mixins.scss";
                `,
            },
        },
    },
});
