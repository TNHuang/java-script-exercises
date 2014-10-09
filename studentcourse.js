var Student = function (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];

  this.name = function() {
    return (this.fname +" "+ this.lname )
  };
};


var Course = function (coursename, department, credit) {
  this.coursename = coursename;
  this.department = department;
  this.credit = credit;
  this.students = [];
};

Student.prototype.enroll = function (course) {
  this.courses.push( course );

  course.enroll_student(this);
};

Course.prototype.enroll_student = function (student) {
  this.students.push( student );
};

Student.prototype.courses_list = function () {
  return this.courses.map(function(course) {
    return course.coursename;
  });
};

Course.prototype.students_list = function () {
  return this.students.map(function(student) {
    return student.name();
  });
};

Student.prototype.course_load = function () {
  var h = {};
  this.courses.forEach(
    function (course) {
      if ( h[course.department] ) {
        h[course.department] += course.credit;
      }else{
        h[course.department] = course.credit;
      }
  })

  return h;
};

var m = new Student( "mike", "w");
var h = new Course("Rome History", "History", 3);
var h1 = new Course("Ancient History", "History", 3);
var h2 = new Course("Applied Math", "Math", 3);
m.enroll(h1);
m.enroll(h2);

m.enroll(h);
console.log(m.courses_list());
console.log(h.students_list());
