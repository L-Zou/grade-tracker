const fs = require('fs');
const columnify = require('columnify')

let add_grade = (course, grade, weight, a_name) => {
    let data = fs.readFileSync('./data/course-grade.json','utf8');
    let grade_data = JSON.parse(data);
    if (grade_data[course] == undefined){
        console.log("Course does not exist!");
    }
    else{
        let grade_id = grade_data[course].length + 1;
        let input = {
            id: grade_id, 
            assignment_name: a_name,
            average: grade,
            weight: weight
        };
        grade_data[course].push(input);
        json = JSON.stringify(grade_data); 
        fs.writeFile('./data/course-grade.json', json, 'utf8', (err) => {
            if (err)
                console.log ('error', err.message, err.stack);
            else
                console.log('Grade successfully added');
        }); 
    }
};

let list_grades = () => {
    let s_data = fs.readFileSync('./data/subject-course.json','utf8');
    let g_data = fs.readFileSync('./data/course-grade.json','utf8');

    let subject_data = JSON.parse(s_data);
    let grade_data = JSON.parse(g_data);
    //console.log(Object.keys(subject_data[0]).length)
    console.log("\n===================== GRADES =====================\n");
    for(i = 0 ; i < subject_data.length ; i++ ){
        console.log(subject_data[i].subject.toUpperCase());
        console.log("--------------------------------------------------\n");
        for(j = 0 ; j < subject_data[i].courses.length ; j++){
            console.log(subject_data[i].courses[j]);
            console.log("..........................................\n");
            let data = grade_data[subject_data[i].courses[j]];
            let columns = columnify(data);
            console.log(columns +"\n");
        }
    }    
};

module.exports = {
    add_grade,
    list_grades
};
