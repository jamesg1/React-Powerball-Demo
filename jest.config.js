module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/styling/GlobalStyle.ts',
    '!src/index.tsx'
  ],
  roots: ['<rootDir>/src/'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/build', '/dist/', '/examples/', '/node_modules/'],
  roots: ['<rootDir>', './src'],
  modulePaths: ['<rootDir>', './src'],
  setupFiles: ['./setupJest.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts']
};
