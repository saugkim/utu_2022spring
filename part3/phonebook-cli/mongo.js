
const mongoose = require('mongoose')

if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}
  
const url = process.env.MONGODB_URI

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  number: String
})

const args = process.argv.slice(2);

if (args.length === 0) {  
  Person
    .find({})
    .then(result => {
      console.log('puhelinluettelo:')
      result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
    })
} else {
  const person = new Person({
    name: process.argv[2],
    number: process.argv[3]
  })

  person
    .save()
    .then(response => {
      console.log(`adding person ${process.argv[2]} number ${process.argv[3]} to the directory`)
      mongoose.connection.close()
    })
}
