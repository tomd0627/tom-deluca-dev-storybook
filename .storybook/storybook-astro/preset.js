const framework = require('storybook-astro');

module.exports = framework.default ?? framework;
module.exports.storybookDevToolbar = framework.storybookDevToolbar;
module.exports.transformSource = framework.transformSource;
