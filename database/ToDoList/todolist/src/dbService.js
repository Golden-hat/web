const mysql = require('mysql');
const dotenv = require('dotenv')
var instance = null;

//We create now the connection with our dockerized database
dotenv.config()

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'my-secret-pw',
    database: 'sys',
    port:'3306' 
})

connection.connect((err) => {
    if (err){
        console.log("An error has occurred: "+err+".")
    }
    else{
        console.log("Database connected successfully: The state is: " + connection.state)
    }
})

class DBService {
    static getDBServiceInstance(){
        return instance ? instance : new DBService()
    }

    async getAllData() {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM USER";
                connection.query(query, (err, result) =>{
                    if(err) reject(new Error(err.message))
                    resolve(result)
                })
            })
            return response
        }
        catch(error){
            console.log(error)
        }
    }

    async getUser(user) {
        try{
            const response = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM USER WHERE name = '${user}'`
                connection.query(query, (err, result) =>{
                    if(err) reject(new Error(err.message))
                    resolve(result)
                })
            })
            return response
        }
        catch(error){
            console.log(error)
        }
    }

    insertUser(id, name, surname, age, email, password){
        try{
            const query = `INSERT INTO USER(id, name, surname, age, email, password)
            VALUES (${id}, '${name}', '${surname}', ${age}, '${email}', '${password}')` 
            connection.query(query, (err, result) =>{
                if(err) throw new Error(err.message)
                else{
                    console.log(`User with name '${name}' has been successfully added to the DB`)
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }

    deleteUser(id, email){
        try{
            const query = `DELETE FROM USER WHERE (id = '${id}') and (email = '${email}')`
            connection.query(query, (err, result) =>{
                if(err) throw new Error(err.message)
                else{
                    console.log(`User with id '${id}' has been successfully removed from the DB`)
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }  
}

const db = DBService.getDBServiceInstance()
const result = db.getUser("Blanca");

result.then(data => console.log(data[0].name))
.catch(err => console.log(err))

db.deleteUser(1, 'yassinpellicerlamla@gmail.com')
