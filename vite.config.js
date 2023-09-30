import { resolve } from 'path';
import { defineConfig } from 'vite';
import cleanPlugin from 'vite-plugin-clean';
import checker from 'vite-plugin-checker';
import handlebars from './vite-plugin-handlebars-precompile';

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
            eslint: {
                lintCommand: 'eslint "**/*.ts"',
            },
        }),
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
