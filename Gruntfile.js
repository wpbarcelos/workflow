module.exports = function(grunt){
    'use strict';

    grunt.initConfig({
        autoprefixer:{
            dist:{
                files:{
                    'deploy/css/main.css': 'source/sass/main.css',
                }
            }

        },
        copy:{
            
        },
        clean:{

        },
        cssmin:{
            dist:{
                files:{
                    'deploy/css/main.css':'deploy/css/main.css'
                }
            }

        },
        uglify:{
            options:{
                mangle:true
            },
            dist:{
                files: {
                    'deploy/javascript/app.min.js':[
                        'source/javascript/incrementButton.js',
                        'source/javascript/date.js'
                    ]
                }
            }

        },
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
}

