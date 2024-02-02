import type {Config} from 'jest';

const config: Config = {
   verbose: true,
   testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom'],
    transform: {
       '^.+\\.tsx?$': 'ts-jest',
    },
   testPathIgnorePatterns: ['node_modules'],
    testMatch: [
      '<rootDir>/src/**/*.test.ts',
      '<rootDir>/src/**/*.test.tsx',
  ],
};

export default config;