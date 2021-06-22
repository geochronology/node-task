
// CRUD
const mongodb = require('mongodb')
const { MongoClient } = mongodb
const { ObjectID } = mongodb

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())


MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      // use 'return' to stop the connection if there's an error
      return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteOne({
      age: 69 // uwu
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    // db.collection('users').deleteMany({
    //   age: 42
    // }).then((result) => {
    //   console.log(result)
    // }).catch((error) => {
    //   console.log(error)
    // })

    // ObjectId("60c53f26e9cf370d7cf62b5f")

    // db.collection('users').updateOne({
    //   _id: new ObjectID("60c53f26e9cf370d7cf62b5f")
    // }, {
    //   $inc: {
    //     age: 1
    //   }
    // }).then((result) => {
    //   console.log(result)
    // }).catch((err) => {
    //   console.log(err)
    // })

    // db.collection('tasks').updateMany({
    //   completed: false
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }).then((res) => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // })

  })


