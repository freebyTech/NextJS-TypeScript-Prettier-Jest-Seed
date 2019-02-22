module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
