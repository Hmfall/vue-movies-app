import vue from '@vitejs/plugin-vue';
import { defineConfig, type PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            open: true,
            template: 'network',
        }) as PluginOption,
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            },
        ],
    },
    define: {
        API_URL: JSON.stringify('http://localhost:4000'),
        DEV: JSON.stringify(true),
    },
    publicDir: '../../public',
});
