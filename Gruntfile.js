module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dev: {
        files: {
          'build/dev/output.js': ['src/File1.js', 'src/File2.js']  
        },
        options: {
          preserveComments: false,
          compress : {
            drop_console : false
          },
          beautify : true
        }
      },
      prod: {
        files: {
          'build/prod/output.js': ['src/File1.js', 'src/File2.js']  
        },
        options: {
          preserveComments: 'all',
          compress : {
            drop_console : false
          },
          beautify : false
        }
      }
    },
    clean: {
      js: ['build/dev/output.js', 'build/prod/output.js']
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //Loading grunt clean module
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['uglify:dev']);
  grunt.registerTask('prod', ['clean', 'uglify:prod']);
}; 