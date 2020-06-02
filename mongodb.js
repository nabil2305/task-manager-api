const {MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName='task_manager' 

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error,client)=>{
    if(error)
        return console.log('unable to connect to the databse')


        const db=client.db(databaseName)

        // const updatePromise = db.collection('users').updateOne({
        //     _id: new ObjectID("5e91b73ef9e928423004d020")
        // },{
        //     $set: {
        //         name: 'Mike'
        //     }
        // })
        
        // updatePromise.then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })


        db.collection('task').updateMany({
            status: false
        },{
            $set: {
                status: true
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })

        

        
       
})

