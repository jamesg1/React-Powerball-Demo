module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  roots: ['<rootDir>/src/'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/build', '/dist/', '/examples/', '/node_modules/'],
  roots: ['<rootDir>', './src'],
  modulePaths: ['<rootDir>', './src']
};
