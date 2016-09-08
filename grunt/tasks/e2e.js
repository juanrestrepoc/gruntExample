'use strict';

module.exports = function(grunt) {
    grunt.registerTask('e2e', [
        'selenium_start',
        'protractor',
        'selenium_stop'
    ]);

    grunt.registerTask('protractor', [
        'shell:protractor'
    ]);
};