const fs = require('fs');
const columnify = require('columnify')

let add_grade = (course, grade, weight, a_name) => {
    let data = fs.readFileSync('./data/course-grade.json','utf8');
    let grade_data = JSON.parse(data);
    if (grade_data[course] == undefined){
        console.log("Course does not exist!");
    }
    else{
        let input = {
            id: undefined,
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
    for(let i = 0 ; i < subject_data.length ; i++ )
    {
        console.log(subject_data[i].subject.toUpperCase());
        console.log("-----------------------------------------------\n");
        for(let j = 0 ; j < subject_data[i].courses.length ; j++){
            console.log(subject_data[i].courses[j]);
            console.log("...................................\n");
            let data = grade_data[subject_data[i].courses[j]];
            for (let k = 0 ; k < data.length ; k++){
                data[k].id = (k + 1);
            }
            let columns = columnify(data);
            console.log(columns);
            
            let avg = calc_average(data);

            if (isNaN(avg))
                avg = 0;

            console.log("...................................");
            console.log("Current Average:   \t   " +avg + "\n");
        }
    }    
};

let calc_average = (grade_data) => {
    var total = 0;
    var weight_total = 0;
    for (let l = 0 ; l < grade_data.length ; l++){
        total += (grade_data[l].average/100) * grade_data[l].weight
        weight_total += grade_data[l].weight
    }
    return Math.round((total/weight_total) *100)
};

let rm_grade = (course, id) => {
    let data = fs.readFileSync('./data/course-grade.json','utf8');
    let grade_data = JSON.parse(data);
    if (grade_data[course] == undefined){
        console.log("Course does not exist!");
    }
    else if (grade_data[course].length < id || id < 0){
        console.log("ID number does not exist!")
    }
    else{
        grade_data[course].splice((id-1), 1);
        json = JSON.stringify(grade_data); 
        fs.writeFile('./data/course-grade.json', json, 'utf8', (err) => {
            if (err)
                console.log ('error', err.message, err.stack);
            else
                console.log('Grade successfully deleted');
        }); 
    }
};

let rm_all_grade = () => {
    let s_data = fs.readFileSync('./data/subject-course.json','utf8');
    let g_data = fs.readFileSync('./data/course-grade.json','utf8');

    let subject_data = JSON.parse(s_data);
    let grade_data = JSON.parse(g_data);
    for (let m = 0 ; m < subject_data.length ; m++){
        for (let n = 0 ; n < subject_data[m].courses.length ; n++){
            console.log(grade_data[subject_data[m].courses[n]])
            grade_data[subject_data[m].courses[n]] = []
        }
    }
    json = JSON.stringify(grade_data); 
    fs.writeFile('./data/course-grade.json', json, 'utf8', (err) => {
        if (err)
            console.log ('error', err.message, err.stack);
        else
            console.log('Grades successfully deleted');
    }); 
};

let rm_all_grade_course = (course_name) => {
    let g_data = fs.readFileSync('./data/course-grade.json','utf8');

    let grade_data = JSON.parse(g_data);
    grade_data[course_name] = []
    json = JSON.stringify(grade_data); 
    fs.writeFile('./data/course-grade.json', json, 'utf8', (err) => {
        if (err)
            console.log ('error', err.message, err.stack);
        else
            console.log('Grades successfully deleted');
    }); 
};


module.exports = {
    add_grade,
    list_grades,
    rm_grade,
    rm_all_grade,
    rm_all_grade_course
};
