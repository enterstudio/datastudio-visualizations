const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // this is our main js code
  entry: {
    app: './src/' + process.env.npm_package_config_js_file
  },
  output: {
    // this is our main processed js code (along with dependent libraries)
    filename: process.env.npm_package_config_js_file,
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        // just copy these files over since we aren't processing them.
        { from: './src/' + process.env.npm_package_config_manifest_file, to: '.' },
        { from: './src/' + process.env.npm_package_config_json_file, to: '.' },
        { from: './src/' + process.env.npm_package_config_css_file, to: '.' }
      ]
    )
  ]
};
