const { request, response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

/**
 * TODO:
 * 1. Create a list of students - let value
 * 2. Find student based on id number - GET
 * 3. Add student - POST
 */

let students = [
  {
    name: 'Asta',
    id: 1,
  },
  {
    name: 'Yuno',
    id: 2,
  },
  {
    name: 'Noelle',
    id: 3,
  },
  {
    name: 'Yami',
    id: 4,
  },
]

app.get('/', (req, res) => {
  res.send('Im freaking learn Backend!')
})

app.get('/second', (req, res) => {
  res.send('Now I think I can control the system jkjk')
})

/**
 * 2 ways of finding students
 * a. Query Params
 * b. Path Params - REST
 */

app.get('/find-student', (req, res) => {

  const id = req.query.id

  const getStudent = students.find((each) => each.id == id)

  //TODO: Handle not found

  // console.log({getStudent})
  res.send(getStudent);
})

app.get('/find-students/:id', (req, res) => {
  
  const id2 = req.params.id

  const getStudent2 = students.find((each) => each.id == id2)

  if(getStudent2) {
    res.send(getStudent2);
  } else {
    res.status(400).send({
      msg: `No student found`,
      your_input: id2
    })
  }

})

app.post('/add-students', (req, res) => {

  // TODO:
  // 1. Get data from body
  // 2. save to list
  // 3. Display the added record in a whole list
  
  const body = req.body

  students.push(body)

  res.send({
    msg: "New student added",
    studentsList: students
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})