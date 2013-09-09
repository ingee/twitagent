module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js'],
    },
    
    connect: {
      debug: {
        options: { port: 9001, base: '.' }
      },
      release: {
        options: { port: 9002, base: 'dist/' }
      }
    },
    
    clean: ['dist'],
    
    copy: {
      release: {
        files: [
          { expand: true, src: ['cornerstonefw/**'], dest: 'dist/' },
          { expand: true, src: ['app/styles/**'], dest: 'dist/' },
          { expand: true, src: ['app/templates/**'], dest: 'dist/' },
          { expand: true, src: ['app/img/**'], dest: 'dist/' },
          { expand: true, src: ['data/**'], dest: 'dist/' },
          {
            src: ['index.html', 'favicon.ico', 'twit_icon.jpg'],
            dest: 'dist/'
          }
        ]
      },
    },
    
    uglify: {
      release: {
        files: [
          {
            expand: true,
            src: ['app/**/*.js'],
            dest: 'dist/',
            ext: '.js'
          },
        ],
        options: {
          banner: '/*! <%= pkg.name %> by <%= pkg.author %> @<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          report: 'min'
        }
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('debug', ['jshint', 'connect:debug:keepalive']);
  grunt.registerTask('release', ['jshint', 'clean', 'copy', 'uglify']);
  grunt.registerTask('default', ['debug']);

};
