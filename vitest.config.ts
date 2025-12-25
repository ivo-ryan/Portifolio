import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./test/vitest.setup.ts",
        clearMocks: true,
        restoreMocks: true,
        coverage: {
            provider: "v8",
        }
    }
})