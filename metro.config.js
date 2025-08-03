const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  '@': path.resolve(__dirname, '.'),
};

// Ensure resolver recognizes the alias
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;