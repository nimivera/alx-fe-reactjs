module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleFileExtensions: ["js","jsx","json","node"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
  };
  