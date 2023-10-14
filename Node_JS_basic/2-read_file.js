const fs = require('fs');

function countStudents(path) {
  try {

    const data = fs.readFileSync(path, 'utf8');


    const lines = data.split('\n').filter((line) => line.trim() !== '');


    const studentCounts = {};


    let totalStudents = 0;


    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');
      const field = fields[3].trim();

      if (!studentCounts[field]) {
        studentCounts[field] = [];
      }

      studentCounts[field].push(fields[0]);
      totalStudents += 1;
    }


    console.log(`Number of students: ${totalStudents}`);


    Object.keys(studentCounts).forEach((field) => {
      const students = studentCounts[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
