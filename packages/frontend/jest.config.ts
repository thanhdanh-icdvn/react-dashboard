import type { Config } from 'jest';

const config: Config = {
  // preset: 'ts-jest',
  rootDir: process.cwd(),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  modulePaths: ['<rootDir>'],
  transform: {
    '.*\\.(tsx?|jsx?)$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2017',
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: false,
            dynamicImport: false,
          },
          transform: {
            react: {
              pragma: 'React.createElement',
              pragmaFrag: 'React.Fragment',
              throwIfNamespace: true,
              development: false,
              useBuiltins: false,
              runtime: 'automatic',
            },
            hidden: {
              jest: true,
            },
          },
        },
        module: {
          type: 'commonjs',
          strict: false,
          strictMode: true,
          lazy: false,
          noInterop: false,
        },
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: ['.*__snapshots__/.*'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
};
export default config;
