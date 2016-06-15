module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n',
            },
            dist: {
                src: ['app/**/*.js'],
                dest: 'dist/scripts/built.js',
            },
        },
        uglify: {
            js: {
                files: {
                    'dist/scripts/built.min.js': ['dist/scripts/built.js']
                }
            },
            template: {
                files: {
                    'dist/scripts/templates/templates-min.js': ['dist/scripts/templates/templates.js']
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/assets/css/style.min.css': ['app/assets/css/*.css']
                }
            }
        },
        less: {
            development: {
                files: {
                    "app/assets/css/result.css": "app/assets/css/less/result.less"
                }
            },
            prod: {
                files: {
                    "dist/assets/css/result.css": "app/assets/css/less/result.less"
                }
            }
        },
        clean: {
            prod: {
                dist: ['dist/**/*']
            }
        },
        copy: {
            prod: {
                files: [
                    {expand: true, cwd: 'app/templates/', src: ['**'], dest: 'dist/templates/'},
                    {expand: true, cwd: 'app/assets/images/', src: ['**/*'], dest: 'dist/assets/images/'},
                    {expand: true, cwd: 'app/assets/css/css/', src: ['**/*'], dest: 'dist/assets/css/'},
                    {expand: true, flatten: true, cwd: 'app/', src: ['*'], dest: 'dist/', filter: 'isFile'},
                ]
            }
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['dist/index.html']
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },
        html2js: {
            main: {
                src: ['app/templates/**/*.html'],
                dest: 'app/scripts/templates/templates.js'
            },
        },
        //  Server Configuration
        express: {
            server: {
                options: {
                    port: 4200,
                    // hostname: '127.0.0.1',
                    hostname: '10.0.0.184',
                    bases: './',
                    open: true,
                    livereload: false,
                    reload: true
                }
            },
            prod: {
                options: {
                    port: 4400,
                    // hostname: '127.0.0.1',
                    hostname: '10.0.0.184',
                    bases: ['dist'],
                    open: true,
                    'express-keepalive': true
                }
            }
        },
        watch:{ //  For live Reload
            options: {livereload: true},
            scripts: {
                files: [
                    'app/**/*.html',
                    'app/**/*.js',
                    'app/**/style.css',
                    'app/**/*.less',
                    'app/**/*.json',
                ],
                tasks: ['less']
            }
        }
    });

    //  Loading grunt plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //  Defining development server taks
    grunt.registerTask('serve', ['express:server', 'watch']);
    grunt.registerTask('prod', ['clean:prod', 'concat', 'uglify', 'less:prod', 'cssmin', 'copy:prod', 'processhtml', 'htmlmin']);
    grunt.registerTask('prod-serve', ['prod', 'express:prod', 'express-keepalive']);

    //  Defining Default Task
    grunt.registerTask('default', ['serve']);

};