export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const globalSetup = './test/setup.js';
export const moduleFileExtensions = ['js', 'ts'];
export const testMatch = ['**/*.spec.ts'];
export const collectCoverageFrom = ['**/*.(t|j)s'];
export const coverageDirectory = '../coverage';
