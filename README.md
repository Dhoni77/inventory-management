# Grocery Inventory Management

This repository contains a grocery inventory management system. It consists of a frontend and a backend.

## Repository structure

---

```
inventory-management
├── frontend
└── backend
```

## Installation

---

### Frontend

```
cd frontend
npm install
```

### Backend

```
cd backend
npm install
```

## Frontend

---

The frontend is built with React, TypeScript, and Vite.

### Local Development

```
npm run dev
```

### Production Build

To build the frontend for production, run:

```
npm run build
npm run preview
```

## Backend

---

The backend is built with Express, MongoDB, and Nodemon.

### Local Development

Before running the backend server, make sure you establish a connection to the database.

To start the server locally, run:

```
npm run dev
```

### Production Build

To build and run the backend server in production, use these commands:

```
npm run build
npm run start
```

## Connecting to the Database

---

### Local Database connection

To connect to a local MongoDB database:

- Make sure MongoDB is installed on your system.
- Create a collection using MongoDB Compass.
- Configure the environment variable DATABASE_URL, located in the backend/.env path, with the MongoDB connection URL.
- Run the mongod command in the terminal to establish a connection to the database.

### MongoDb Atlas Cloud

To connect to a MongoDB Atlas cloud database:

- Create an account on MongoDB Atlas.
- Choose the Free tier subscription.
- Configure the username and password.
- Create a MongoDB instance with NodeJS as the connection driver.
- Update the DATABASE_URL in the backend/.env file with the MongoDB Atlas connection URL.

## Api Testing

---

Api Url: `http://localhost:${PORT}/api`

## Items

### Get all items

**`GET /items`**

Returns a list of items from the inventory. |

**Status codes**
| Status code | Description |
|-----------------|-----------------------------------------------------|
| 200 OK | Indicates a successful response. |
| 500 Internal Server Error | Indicates that server has encountered an error. |

Example response:

```
[
    {
        "_id": "651fda7e14a661825ccd67fa",
        "id": "babf61f0-c032-49be-a3a7-1ba1069ebe3e",
        "name": "Tomato",
        "category": "grocery",
        "description": "",
        "price": 30,
        "createdAt": "2023-10-06T09:59:26.404Z",
        "updatedAt": "2023-10-06T09:59:26.404Z",
        "__v": 0,
        "quantity": 100
    },
]
```

### Create a new item

Adds a new item to the items collection.

**`POST /items`**

**Status codes**

| Status code               | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| 201 Created               | Indicates that the cart has been created successfully. |
| 400 Bad Request           | Indicates that the parameters provided are invalid.    |
| 500 Internal Server Error | Indicates that server has encountered an error.        |

Example Body:

```
{
    "id": "babf61f0-c032-49be-a3a7-1ba1069ebe3e",
    "name": "Orange",
    "category": "grocery",
    "description": "",
    "price": 40,
    "quanity": 70
}
```
