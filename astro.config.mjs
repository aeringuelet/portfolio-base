import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    experimental: {
        svg: {
            mode: 'sprite'
        }
    },

    vite: {
        plugins: [tailwindcss()]
    },

    adapter: netlify()
});
