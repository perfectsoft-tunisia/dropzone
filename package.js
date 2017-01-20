Package.describe({
    name: 'enyo:dropzone',
    version: '4.3.0',
    summary: 'Handles drag and drop of files for you.',
    git: 'https://github.com/enyo/dropzone',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('jquery', 'client', {weak: true});

    api.addAssets('dist/dropzone.css', 'client');
    api.addFiles('dist/basic.css', 'client');
    api.addFiles('dist/dropzone.js', 'client', {bare: true});
});
