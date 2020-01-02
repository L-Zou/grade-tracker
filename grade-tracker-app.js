const yargs = require('yargs');
const edit_grade = require('./helpers/grades.js');
const edit_course = require('./helpers/courses.js');
const edit_subject = require('./helpers/subjects.js');

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
            alias: 'i',
            type: 'number'
        },
        course: {
            describe: 'name of course',
            alias: 'c',
            demand: true, 
            type: 'string'
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
    .command ('rm-all', 'Remove all recorded grades', {
        course: {
            describe: 'name of course',
            alias: 'c',
            demand: false, 
            type: 'string'
        }
    })
    .command ('add-subject', 'Add a subject', {
        subject: {
            describe: 'name of subject',
            alias: 's',
            demand: true, 
            type: 'string'
        }
    })
    .command ('rm-subject', 'Remove a subject', {
        subject: {
            describe: 'name of subject',
            alias: 's',
            demand: true, 
            type: 'string'
        }
    })
    .command ('add-course', 'Add a course', {
        subject: {
            describe: 'name of subject',
            alias: 's',
            demand: true, 
            type: 'string'
        },
        course: {
            describe: 'name of course',
            alias: 'c',
            demand: true, 
            type: 'string'
        }
    })
    .command ('rm-course', 'Remove a course', {
        subject: {
            describe: 'name of subject',
            alias: 's',
            demand: true, 
            type: 'string'
        },
        course: {
            describe: 'name of course',
            alias: 'c',
            demand: true, 
            type: 'string'
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var cmd = argv._[0];

switch (cmd) {
    case 'add':
        if (argv.grade < 0 || argv.grade > 100 || argv.weight < 0 || argv.weight > 100){
            console.log("Invalid values.");
        }
        else{
            if (argv.a_name == undefined){
                argv.a_name = "Assignment";
            }
            
            edit_grade.add_grade(argv.course, argv.grade, argv.weight, argv.a_name);
        }
        break;
    case 'list':
        edit_grade.list_grades();
        break;
    case 'rm':
        edit_grade.rm_grade(argv.course, argv.id);
        break;
    case 'rm-all':
        if (argv.course == undefined){
            edit_grade.rm_all_grade();
        }
        else{
            edit_grade.rm_all_grade_course(argv.course);
        }
        break;
    case 'add-subject':
        edit_subject.add_subject(argv.subject)
        break;
    case 'rm-subject':
        edit_subject.rm_subject(argv.subject)
        break;
    case 'add-course':
        edit_course.add_course(argv.subject, argv.course)
        break;
    case 'rm-course':
        edit_course.rm_course(argv.subject, argv.course)
        break;
}