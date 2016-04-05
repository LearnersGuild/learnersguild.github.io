module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			js: {
				src: [
					'js/jquery.js',
					'js/plugins.js',
					'js/jquery.gmap.js',
					'js/velocity.min.js',
					'js/velocity.ui.min.js',
					'js/jquery.matchHeight-min.js',
					'js/owl.carousel.min.js',
					'js/typed.js',
					'js/remodal.min.js',
					'js/functions.js'
				],
				dest: 'js/app.js'
			},
			css: {
				src: [
					'css/animate.css',
					'css/bootstrap.css',
					'css/colors.css',
					'css/dark.css',
					'css/hamburgers.min.css',
					'css/magnific-popup.css',
					'css/owl.carousel.css',
					'css/remodal.css',
					'css/remodal-default-theme.css',
					'style.css',
					'css/responsive.css'
				],
				dest: 'style.min.css'
			},
		},
		uglify: {
			app: {
				files: {
					'js/app.js': ['js/app.js']
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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('build', ['concat', 'cssmin', 'uglify']);
	grunt.registerTask('default', ['build']);
};