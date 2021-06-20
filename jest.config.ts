export default {
    roots: ['<rootDir>/test'],
    testMatch: ['**/?(*.)+(spec|test).+(ts)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
