const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('invalid email')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [7, "longer password pls"],
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) throw new Error("bad")
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
})

// const me = new User({
//   name: 'Bobbert',
//   age: 9000,
//   email: 'bobbert@MCMUFFIN.NET   ',
//   password: 'hiiiiiiiiii'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((err) => {
//   console.log("Error", err)
// })

const nom = new Task({
  description: 'nom things',
  completed: false
})

nom.save().then(() => console.log(nom)).catch((err) => console.log(err))
