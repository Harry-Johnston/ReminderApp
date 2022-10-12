const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://root:password@localhost:27017'

async function connectToDb() {
    const connection = await MongoClient.connect(url)
    return connection.db('reminderdb').collection('reminders')
}

module.exports = {connectToDb}
