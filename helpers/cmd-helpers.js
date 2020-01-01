const fs = require('fs');

let add_grade = (course, grade, weight, a_name) => {
    fs.readFile('./data/course-grade.json', (err, data) => {
        if (err) throw err;
        let grade_data = JSON.parse(data);
        console.log(grade_data[0].course)
        for (i = 0 ; i < grade_data.length ; i++){
            console.log('ds')
            if (grade_data[i].course == course){
                console.log(grade_data[i]);
                let grade_id = grade_data[i].grades.length + 1;
                let input = {
                    id: grade_id, 
                    assignment_name: a_name,
                    average: grade,
                    weight: weight
                }
                grade_data[i].grades.push(input)
            }
        }
        json = JSON.stringify(grade_data); //convert it back to json
        fs.writeFile('./data/course-grade.json', json, 'utf8', (err) => {
            if (err) throw err;
            console.log('Data written to file');
        }); 
    });
   
};

module.exports = {
	add_grade
};
