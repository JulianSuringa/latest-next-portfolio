/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "@testing-library/jest-dom"],
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx)",
    "<rootDir>/__tests__/**/*.(spec|test).[jt]s?(x)",
    "<rootDir>/src/**/*.(spec|test).[jt]s?(x)",
  ],
  moduleNameMapper: {
    // Handle CSS Modules and global styles
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy",

    // Handle static assets (e.g. images or svgs)
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|svg)$":
      "<rootDir>/__mocks__/fileMock.ts",

    // Handle @ alias (same as in tsconfig.json)
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default createJestConfig(config);
