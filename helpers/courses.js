const fs = require('fs');

let rm_course = (subject_name, course_name) => {
    let c_data = fs.readFileSync('./data/subject-course.json','utf8');
    let course_data = JSON.parse(c_data);

    for (let m = 0 ; m < course_data.length ; m++){
        if (course_data[m].subject == subject_name){
            course_data[m].courses.splice(course_data[m].courses.indexOf(course_name), 1)
            break;
        } 
    }

    json = JSON.stringify(course_data); 
    fs.writeFile('./data/subject-course.json', json, 'utf8', (err) => {
        if (err)
            console.log ('error', err.message, err.stack);
        else
            console.log('Course successfully deleted');
    }); 
};

let add_course = (subject_name, course_name) =>{
    let c_data = fs.readFileSync('./data/subject-course.json','utf8');
    let course_data = JSON.parse(c_data);

    for (let m = 0 ; m < course_data.length ; m++){
        if (course_data[m].subject == subject_name){
            course_data[m].courses.push(course_name)
            break;
        } 
    }

    json = JSON.stringify(course_data); 
    fs.writeFile('./data/subject-course.json', json, 'utf8', (err) => {
        if (err)
            console.log ('error', err.message, err.stack);
        else
            console.log('Course successfully added');
    }); 
};
module.exports = {
    rm_course,
    add_course
};