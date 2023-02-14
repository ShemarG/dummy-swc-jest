module.exports = {
  preset: 'ts-jest',
  transform: {
    // '^.+\\.[jt]sx?$': '@swc/jest' 
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    // '^.+\\.jsx?$': ['@swc/jest', swcJsConfig],
    // '^.+\\.tsx?$': '@swc/jest',
    // // '^.+\\.tsx?$': 'ts-jest',
  },
  displayName: 'dummy-swc-jest',
};