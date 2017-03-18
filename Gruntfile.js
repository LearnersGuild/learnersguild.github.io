module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: [
          'scripts/carousel.js',
          'scripts/movie-community.js',
          'scripts/video-play.js',
        ],
        dest: 'scripts/app.js'
      },
      css: {
        src: [
          'stylesheets/default.css',
          'stylesheets/nav.css',
          'stylesheets/footer.css',
          'stylesheets/index.css',
          'stylesheets/index-responsive.css',
          'stylesheets/faq.css',
          'stylesheets/impact.css',
          'stylesheets/howitworks.css',
          'stylesheets/howitworks-responsive.css',
          'stylesheets/different.css',
          'stylesheets/different-responsive.css',
          'stylesheets/community.css',
          'stylesheets/community-responsive.css',
          'stylesheets/about-responsive.css',
          'stylesheets/about.css',
          'stylesheets/hamburger.css',
        ],
        dest: 'style.min.css'
      },
    },
    uglify: {
      app: {
        files: {
          'scripts/app.js': ['scripts/app.js']
        }
      }
    },
    cssmin: {
      app: {
        files: {
          'style.min.css': ['style.min.css']
        }
      }
    },
    imagemin: {
      core: {
        expand: true,
        src: ['images/*.{png,jpg,gif,jpeg}']
      }
    },
    watch: {
      scripts: {
        files: ['scripts/*.js','stylesheets/*.css'],
        tasks: ['concat', 'cssmin', 'uglify'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('build', ['concat', 'cssmin', 'uglify']);
  grunt.registerTask('default', ['build']);
};