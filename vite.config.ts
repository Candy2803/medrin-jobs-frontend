/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: [
			"@reduxjs/toolkit",
			"@stripe/react-stripe-js",
			"@stripe/stripe-js",
		],
		exclude: ["lucide-react"],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			path: "path-browserify",
		},
	},
	build: {
		rollupOptions: {
			external: ["@stripe/react-stripe-js", "@stripe/stripe-js"],
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
					redux: ["@reduxjs/toolkit", "react-redux", "redux-persist"],
					axios: ["axios"],
					clsx: ["clsx"],
					datefns: ["date-fns"],
					framer: ["framer-motion"],
					inputotp: ["input-otp"],
					lucide: ["lucide-react"],
					radix: [
						"@radix-ui/react-dialog",
						"@radix-ui/react-label",
						"@radix-ui/react-select",
						"@radix-ui/react-slot",
					],
					swiper: ["swiper"],
					recharts: ["recharts"],
					zod: ["zod"],
					tailwindmerge: ["tailwind-merge"],
					zustand: ["zustand"],
				},
			},
		},
	},
});
