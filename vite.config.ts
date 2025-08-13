import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from "houdini/vite";
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "konstankino-dev",
            project: "coworking-frontend"
        }
    }), 
    houdini(), 
    sveltekit()]
});