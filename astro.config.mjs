// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'github-dark-default',
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Ubuntu',
			cssVariable: '--font-ubuntu',
			weights: [300, 400, 500, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['sans-serif'],
		},
	],
});
