var db = require('./db/index');
var Sequelize = require('sequelize');
var Campus = require('./db/models/index').Campus;
var Student = require('./db/models/index').Student;
var Promise = require('bluebird');

var students = [
  {name: 'Aatish Varma', email: "aatish.varma@fullstackacademy.com", image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/103.png", campusId:1},
  {name: 'Sid Reddy', email: "sid.reddy@fullstackacademy.com", image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/55.png",  campusId:1},
  {name: 'Yu Lin',email: "yu.lin@fullstackacademy.com", image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/2.png",  campusId:1},
  {name: 'Stanley Tie',email: "stanley.tie@fullstackacademy.com", image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/41.png", campusId:1},
  {name: 'Nancy Velasquez', email: "nancy.Velasquez@fullstackacademy.com", image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/36.png", campusId:2},
  {name: 'Truman Purnell',email: "Truman.Purnell@fullstackacademy.com",image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/99.png", campusId:2},
  {name: 'Mikhail Quader', email: "Mikhail.Quader@fullstackacademy.com", image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/17.png", campusId:3},
  {name: 'Matthew Snow', email: "Matthew.Snow@fullstackacademy.com",image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/106.png", campusId:3},
  {name: 'One June Kang',email: "One.June@fullstackacademy.com",image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/88.png", campusId:4},
  {name: 'Edward Yao',email: "Edward.Yao@fullstackacademy.com", image: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/37.png", campusId:4},
  ];

var campuses = [
  {name: 'Fullstack Academy', image: "https://i.stack.imgur.com/7cBUc.jpg",},
  {name: 'Grace Hopper Academy', image: "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2015/10/14/grace-hopper-academy.jpg"},
  {name: 'Flatiron School', image: "http://www.flatironhotnews.com/wp-content/uploads/2015/03/Flatiron-School-Logo.jpg"},
  {name: 'App Academy', image: "https://cdn.evbuc.com/eventlogos/33308251/appacademylogo.png"}
]

const seed = () => {
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() => {
    Promise.all(students.map(student =>
    Student.create(student)))
  })
}

//var builtUsers = users.map(user => User.save(user))

db.sync({force: true})
.then(() => {
  return Campus.sync({force: true})
})
.then(() => {
  //return Student.sync({force: true})
})
.then(() => {
  return Promise.map(campuses, (campus) => {
    return Campus.create(campus);
  })
})
.then(() => {
  return Promise.map(students, (student) => {
    return Student.create(student);
  })
})
.then(() => {
  console.log('Seeding complete!');
})
.catch(err => {
  console.log('There was an error: ', err);
})
.finally(() => {
  db.close();
  console.log('DB now closed!');
  return null;
})