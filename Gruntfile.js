module.exports = function(grunt) {
    'use strict';

    var config = {
        pkg             : grunt.file.readJSON('package.json'),
        name            : grunt.file.readJSON('package.json').name,
        bundle_version  : grunt.option('bundle_version')
    };

    // Load all grunt modules
    require('load-grunt-tasks')(grunt);

    // Build config object and init
    grunt.util._.extend(config, loadConfig('./grunt/options/'));
    grunt.initConfig(config);

    // Load all custom tasks
    grunt.loadTasks('grunt/tasks');


    // ========== TASKS ==========
    grunt.registerTask('continuous', [
        'e2e'
    ]);
    // =========== END ===========

    // Helper Functions
    // Load task options from tasks/options/
    function loadConfig(path) {
        var glob = require('glob');
        var key;
        var obj = {};

        glob.sync('*', { cwd: path }).forEach(function(option) {
            var key = option.replace(/\.js$/, '');
            obj[key] = require(path + option);
        });

        return obj;
    }
};