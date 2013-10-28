module.exports = function(grunt){
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
				clean: {
			clean:['distribution']
		}, 
		
			copy: {
			main:{
				src:'Projektname/**',
				dest:'distribution',
				flatten: false,
				expand: true
			}
		}, 
		
		uglify: {
			files: {
				src: ['distribution/**/*.js'],
				dest: '',
				flatten: false,
				expand: true
			},
			options: {
				mangle: true,
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			}
		},
	});
	
	//load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	//Run these tasks with the grunt command -> all tasks are executed in the order listed below
	//you can run them separately by executing grunt copy (grunt uglify, grunt clean) in the node.js command prompt
	 grunt.registerTask('default', ['clean', 'copy', 'uglify']);
};
