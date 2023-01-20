const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];
const js = [];
const htmlCss = [];
const pedro = [];
const maria = [];
const courseEnrollments = enrollments.map((e) => {
  const course = courses.find((course) => course._id === e.course_id);

  const student = students.find((student) => student._id === e.student_id);

  if (course.title === "JavaScript I") {
    js.push(student.name);
  }
  if (course.title === "HTML y CSS I") {
    htmlCss.push(student.name);
  }
  if (student.name === "Pedro Perez") {
    pedro.push(course.title);
  }
  if (student.name === "Maria Gomez") {
    maria.push(course.title);
  }
  return;
});

console.log(`- JavaScript I\n* ${js}`);
console.log(`- HTML y CSS I\n* ${htmlCss.join("\n* ")}`);
console.log("")
console.log(`- Pedro Perez\n* ${pedro.join("\n* ")}`);
console.log(`- Maria Gomez\n* ${maria.join("\n* ")}`);

