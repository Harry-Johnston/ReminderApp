const reminderController = require('../Controllers/ReminderController')

function routes(app){
    // get all reminders & get reminders by done
    app.get('/reminders', reminderController.getReminders)

    // create reminder
    app.post('/reminders', reminderController.createReminder)

    // change reminder status
    app.put('/reminders/:id', reminderController.changeReminder)

    // delete reminder
    app.delete('/reminders/:id', reminderController.deleteReminder)
}

module.exports = routes
