import { defineConfig } from 'vite';
import path from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                restricted: path.resolve(__dirname, 'restricted.html'),
            },
        },
    },
    plugins: [
        ViteMinifyPlugin({
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            minifyCSS: true,
            minifyJS: true,
        }),
    ],
});
