module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };
  