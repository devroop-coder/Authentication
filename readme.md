# Authentication Backend

A robust authentication backend service built with Express.js, MongoDB, and JWT. This project provides user registration and authentication functionality with secure password handling and token-based authentication.

## Features

- 🔐 User registration with email and username
- 🎫 JWT-based authentication tokens
- 🍪 Secure cookie storage for tokens
- 🗄️ MongoDB integration with Mongoose
- 📝 Environment variable configuration
- ⚡ Express.js server with middleware support

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js (v5.2.1)
- **Database:** MongoDB with Mongoose (v9.2.1)
- **Authentication:** JSON Web Tokens (jsonwebtoken v9.0.3)
- **Middleware:** Cookie Parser (v1.4.7), dotenv (v17.3.1)

## Project Structure

```
.
├── package.json              # Project dependencies and metadata
├── readme.md                 # This file
├── server.js                 # Server entry point
└── src/
    ├── app.js                # Express application setup
    ├── controllers/
    │   └── auth.controller.js    # Authentication logic
    ├── db/
    │   └── db.js             # MongoDB connection
    ├── models/
    │   └── user.model.js         # User schema definition
    └── routes/
        └── auth.routes.js        # Authentication routes
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Authentication
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
JWT_SECRET_KEY=your_secret_key_here
MONGODB_URI=mongodb://localhost:27017/authentication
```

4. Start the server:
```bash
node server.js
```

The server will run on `http://localhost:3000`

## API Endpoints

### Health Check
- **GET** `/`
  - Returns: `{ "message": "Hi I am running" }`

### Authentication Routes (`/api/auth`)

#### Register User
- **POST** `/api/auth/register`
  - **Request Body:**
    ```json
    {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "secure_password"
    }
    ```
  - **Success Response (200):**
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "_id": "user_id",
        "username": "john_doe",
        "email": "john@example.com"
      }
    }
    ```
  - **Error Response (409):**
    ```json
    {
      "message": "User already exists"
    }
    ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `JWT_SECRET_KEY` | Secret key for JWT signing | `your_secret_key_here` |
| `MONGODB_URI` | MongoDB connection URI | `mongodb://localhost:27017/authentication` |

## Usage Example

Using curl to register a new user:

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "secure_password"
  }'
```

Using JavaScript/Fetch:

```javascript
fetch('http://localhost:3000/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'john_doe',
    email: 'john@example.com',
    password: 'secure_password'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Dependencies

```json
{
  "cookie-parser": "^1.4.7",
  "dotenv": "^17.3.1",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.2.1"
}
```

## Getting Started

1. Ensure MongoDB is running on your machine
2. Install dependencies: `npm install`
3. Configure `.env` file with your JWT secret and MongoDB URI
4. Start the server: `node server.js`
5. Test the API using curl or Postman

## Future Enhancements

- Add login endpoint with credential verification
- Implement password hashing (bcryptjs)
- Add email verification
- Add refresh token mechanism
- Implement role-based access control (RBAC)
- Add request validation middleware
- Create comprehensive error handling

## Author

**Devroop**

## License

ISC

---

**© 2026 Devroop. All rights reserved.**