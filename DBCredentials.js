// login credentials for the database access

const user = 'postgres';
const password = 'prerna';
const host = 'localhost';
const port = 5432;
const database = 'AgroFriend';

var obj ={}
obj["user"] = user;
obj["password"] =  password;
obj["host"] = host;
obj["port"] = port ;
obj["database"] = database;

exports.obj = obj ;