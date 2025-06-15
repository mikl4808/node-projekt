const path = require('path');

module.exports = {
  entry: './src/index.js', // Passe den Pfad zu deinem Code an
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // oder 'development'
};