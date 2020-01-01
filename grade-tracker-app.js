const yargs = require('yargs');
const course_grade = require('./helpers/cmd-helpers.js');

const argv = yargs
    .usage('Usage: $0 <command> [options]')
    .example('$0 add -c MATH135 -g 60 -w 25', 'Record an assignment grade')
    .command('add', 'Record an assignment grade', {
        course: {
            describe: 'name of course',
            alias: 'c',
            demand: true, 
            type: 'string'
        }, 
        grade: {
            describe: 'assignment grade (percent)',
            alias: 'g',
            demand: true, 
            type: 'number'
        },
        weight: {
            describe: 'weight of the assignment (percent)',
            alias: 'w',
            demand: true, 
            type: 'number'
        }, 
        a_name: {
            describe: 'name of assignment',
            alias: 'n',
            demand: false, 
            type: 'string'
        }
    })
    .command ('rm', 'Remove an assignment grade', {
        id: {
            describe: 'assignment grade id',
            demand: true, 
            type: 'number'
        }
    })
    .command ('rm-all', 'Remove all recorded grades', {
        course: {
            describe: 'name of course',
            alias: 'c',
            demand: false, 
            type: 'string'
        }
    })
    .command ('list', 'List all recorded grades')
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);
var cmd = argv._[0];

if(cmd == 'add'){
    if(argv.a_name == undefined){
        argv.a_name = "Assignment"
    }
    course_grade.add_grade(argv.course, argv.grade, argv.weight, argv.a_name);
}