import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		exclude: ["lucide-react"],
		include: ["@stripe/react-stripe-js", "@stripe/stripe-js"],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		chunkSizeWarningLimit: 1200,
		rollupOptions: {
			external: ["@stripe/react-stripe-js", "@stripe/stripe-js"],
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
					vendor: ["lodash", "axios"],
					stripe: ["@stripe/react-stripe-js", "@stripe/stripe-js"],
				},
			},
		},
	},
});
