const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
const MONGO_URL = "mongodb://admin:qwerty@mongo:27017";
const DB_NAME = "apnacollege-db";
const client = new MongoClient(MONGO_URL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

async function startServer() {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const db = client.db(DB_NAME);

    // GET all users
    app.get("/getUsers", async (req, res) => {
        try {
            const data = await db.collection("users").find({}).toArray();
            res.send(data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
            res.status(500).send("Unable to fetch users.");
        }
    });

    // POST new user
    app.post("/addUser", async (req, res) => {
        try {
            const userObj = {
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            };

            if (!userObj.email || !userObj.username || !userObj.password) {
                return res.status(400).send("Email, username, and password are required.");
            }

            const result = await db.collection("users").insertOne(userObj);
            console.log("Data inserted with id:", result.insertedId);
            res.status(201).send("User added successfully.");
        } catch (error) {
            console.error("Failed to add user:", error);
            res.status(500).send("Unable to add user.");
        }
    });

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
}

startServer().catch((error) => {
    console.error("Failed to start server:", error);
});
