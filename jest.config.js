export default {
  roots: ['<rootDir>'],
  testMatch: ['**/?(*.)+(test).+(ts)'],
  setupFiles: ['./test/loadMongoose.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
}
