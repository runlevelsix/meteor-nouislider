Package.describe({
  name: 'rl6:nouislider',
  version: '8.3.0',
  // Brief, one-line summary of the package.
  summary: 'Wrapper package for noUiSlider 8.3.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/runlevelsix/meteor-nouislider.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('nouislider.min.js','client');
  api.addFiles('nouislider.min.css');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rl6:nouislider');
  api.addFiles('nouislider-tests.js');

});
