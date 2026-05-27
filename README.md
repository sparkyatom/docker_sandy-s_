# Docker Test App

A simple Dockerized Node.js + MongoDB application with Mongo Express.

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongo Express
- Docker
- Docker Compose

---

# Project Structure

```bash
docker-testapp/
│
├── public/
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Prerequisites

Make sure these are installed:

- Docker
- Docker Compose

Check installation:

```bash
docker --version
docker compose version
```

---

# Run the Application

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into project directory:

```bash
cd docker-testapp
```

Start all services:

```bash
docker compose up --build
```

---

# Services

| Service | Port |
|---|---|
| Node.js App | 5050 |
| MongoDB | 27017 |
| Mongo Express | 8081 |

---

# Access URLs

## Application

```bash
http://localhost:5050
```

## API Endpoint

```bash
http://localhost:5050/getUsers
```

## Mongo Express

```bash
http://localhost:8081
```

Login credentials:

```bash
username: admin
password: pass
```

---

# Docker Commands

## Check running containers

```bash
docker ps
```

## Stop containers

```bash
docker compose down
```

## Rebuild containers

```bash
docker compose up --build
```

---

# MongoDB Commands

Enter MongoDB shell:

```bash
docker exec -it mongo mongosh -u admin -p qwerty
```

Show databases:

```javascript
show dbs
```

Use database:

```javascript
use apnacollege-db
```

Show collections:

```javascript
show collections
```

Show data:

```javascript
db.users.find().pretty()
```

---

# Notes

- MongoDB runs inside Docker container.
- Containers communicate through Docker bridge network.
- Express backend connects to MongoDB using container hostname:

```javascript
mongodb://admin:qwerty@mongo:27017
```

- `localhost` inside containers refers to the container itself.

---

# Author

Sandeepan Podder

