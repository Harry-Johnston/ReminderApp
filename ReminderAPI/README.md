So you want to use the Reminder API?

Requires a mongoDb database called 'reminderdb' and a collection called 'reminders'
Run npm i from this folder to install all packages

Use the below routes when you what get get going!

------------------------------------------------------------------------
Retrieve all reminders (GET /reminders)
    
    Method: GET

    SUCCESS RESPONSE:
    Status: 200
    Body:
    {
        "message": "Successfully retrieved all reminders",
        "data": [
            {
               "title": "get a job",
               "done": false,
               "id": "633ee57a2586cb85209df887"
            },
            {...},
            {...}
        ]
    }

------------------------------------------------------------------------
Retrieve all undone reminders (GET /reminders?done=(boolean))

    Method: GET

    SUCCESS RESPONSE:
    Status: 200
    Body:
    {
        "message": "Successfully retrieved all reminders",
        "data": [
            {
               "title": "get a job",
               "done": false,
               "id": "633ee57a2586cb85209df887"
            },
                {...},
                {...}
        ]
    }

    FAILURE RESPONSE:
    Status: 400
    Body:
    {
        "message": "Failed to retrieve reminders due to incorrect input",
        "data": [
            {}
        ]
    }
    
------------------------------------------------------------------------
Create reminder (POST /reminders)
(title must be less than 500 chars)

    Method: POST
    Body:
    {
        "message": "",
        "data": 
        {
            "title": "foo",
            "done": true
        }
    }

    SUCCESS RESPONSE:
    Status: 200
    Body:
    {
        "message": "Successfully created reminder",
        "data": 
        [
            {}
        ]
    }

FAILURE RESPONSE:

    Status: 400
    Body:
    {
        "message": "Failed to create reminder due to incorrect input",
        "data": [
        
            {}
        ]
    }

------------------------------------------------------------------------
Change reminders' done status (PUT /reminders/(id))

    Method: PUT

    Body:
    {
        "message": "",
        "data": 
        {
            "done": true
        }
    }

    SUCCESS RESPONSE:
    Status: 200
    Body:
    {
        "message": "Successfully changed reminder status",
        "data": [
            {}
        ]
    }

    FAILURE RESPONSE:
    Status: 400
    Body:
    {
        "message": "Failed to change reminder status due to incorrect input",
        "data": [
            {}
        ]
    }

------------------------------------------------------------------------
Delete reminder (DELETE /reminders/(id))
method: DELETE

    SUCCESS RESPONSE:
    Status: 200
    Body:
    {
        "message": "Successfully deleted reminder",
        "data": [
            {}
        ]
    }

    FAILURE RESPONSE:
    Status: 400
    Body:
    {
        "message": "Failed to delete reminder due to incorrect input",
        "data": [
            {}
        ]
    }

------------------------------------------------------------------------
