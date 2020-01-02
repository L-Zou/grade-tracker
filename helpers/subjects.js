const fs = require('fs');

let rm_subject = (subject_name) => {
    let s_data = fs.readFileSync('./data/subject-course.json','utf8');
    let subject_data = JSON.parse(s_data);
    
    for (let m = 0 ; m < subject_data.length ; m++){
        if (subject_data[m].subject == subject_name){
            subject_data.splice(m, 1)
            break;
        } 
    }
    json = JSON.stringify(subject_data); 
    fs.writeFile('./data/subject-course.json', json, 'utf8', (err) => {
        if (err)
            console.log ('error', err.message, err.stack);
        else
            console.log('Subject successfully deleted');
    }); 
};

let add_subject = (subject_name) =>{
    let s_data = fs.readFileSync('./data/subject-course.json','utf8');
    let subject_data = JSON.parse(s_data);
    let input = {
        subject: subject_name,
        courses: []
    };
    subject_data.push(input);
    json = JSON.stringify(subject_data); 
    fs.writeFile('./data/subject-course.json', json, 'utf8', (err) => {
        if (err)
            console.log ('error', err.message, err.stack);
        else
            console.log('Subject successfully added');
    }); 
};
module.exports = {
    rm_subject,
    add_subject
};
