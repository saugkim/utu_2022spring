const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const logger = (request, response, next) => {
  console.log('Method:',request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(logger)

const cors = require('cors')
app.use(cors())

app.use(express.static('build'))

const Person = require('./models/person')


const formatPerson = (person) => {
  const formattedPerson = { ...person._doc, id: person._id }
  delete formattedPerson._id
  delete formattedPerson.__v

  return formattedPerson
}

app.get('/api/persons', (request, response) => {
  Person
    .find({})
    .then(persons => 
      response.json(persons.map(formatPerson)))
})

app.get('/api/persons/:id', (request, response) => {
  Person
    .findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(formatPerson(person))
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).end()
    })
})

app.delete('/api/persons/:id', (request, response) =>{
  Person
    .findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => {
      response.status(400).send({error: 'not matching id'})
    })
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined  ) {
    return response.status(400).json({error: 'name missing'})
  } 
  if (body.number === undefined) {
    return response.status(400).json({error: 'number missing'})
  }

  Person
    .find( {name: body.name} )
    .then(result => {
      if (result.length !== 0) {
        console.log('person found')
        response.status(400).json({error: 'name must be unique'})
      } else {
        console.log('NOT found')
        const person = new Person({
          name: body.name,
          number: body.number
        })
        person
          .save()
          .then(savedPerson => {
            response.json(formatPerson(savedPerson))
          })
      }
    })
})

const error = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(error)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
