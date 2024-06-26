const mysql = require('mysql2');
const dotenv = require('dotenv')
var instance = null;

//We create now the connection with our dockerized database
dotenv.config()

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password:'secret',
    database: 'first_schema',
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

    insertUser(id, name, surname, birth, email, password){
        try{
            const query = `INSERT INTO USER(id, name, surname, birth, email, password)
            VALUES (${id}, '${name}', '${surname}', ${birth}, '${email}', '${password}')` 
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
db.insertUser(0,'yassin','pellicer',null,"yassinpellicerlamla@gmail.com","holaquetal");

