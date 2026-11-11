import { MongoClient } from "mongodb";
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://upendranathakula761_db_user:${password}@cluster0.oqtiklv.mongodb.net/`; // clustore url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("upendranathakula761_db_user");
export default db;