//Url to connect with the database
const DBCredentials = require('./DBCredentials') ; 

let srv_Connection_URL = "postgres://<USERNAME>:<PASSWORD>@localhost:5432/AgroFriend";

const DB_Connection_URL = srv_Connection_URL.replace("<USERNAME>", DBCredentials.obj.username)
                            .replace("<PASSWORD>", DBCredentials.obj.password);

exports.dbURL = DB_Connection_URL;