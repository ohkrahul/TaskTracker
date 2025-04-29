module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    testTimeout: 30000, // Increase timeout for database operations
    clearMocks: true,
    forceExit: true, // Force Jest to exit after all tests complete
    testPathIgnorePatterns: ['/node_modules/']
  };