# HomeHub

**HomeHub** is a full-stack web application designed for property owners to list their homes for rent or sale, and for users to easily browse and find properties that fit their needs.
It is built using the MERN stack (MongoDB, Express, React, and Node.js), focusing on providing a seamless, intuitive experience for both property owners and house seekers.

---

## **Table of Contents**

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)

---

### **Features**

- **User Authentication**: Secure login and signup using email and password or Google OAuth.
- **Property Listings**: Users can create, update, and delete property listings for sale or rent.
- **Search, Filter and Sort**: Property seekers can search, filter and sort listings by criteria like price, type, parking availability and more.
- **Responsive Design**: Fully responsive user interface designed with Tailwind CSS.
- **Secure JWT Authentication**: JSON Web Tokens (JWT) are used for user authentication and authorization.
- **Manage User Account**: Users can update and delete their account also update their profile picture

---

### **Technologies**

1. **Frontend**:

- [React](https://react.dev/)
- [Redux (State Management)]('https://react-redux.js.org/)
- [Tailwind CSS (UI Styling)]('https://tailwindcss.com/)

2. **Backend**:

- [Node.js](https://nodejs.org/en)
- [Express.js(to build our API)](https://expressjs.com/)
- [MongoDB(Database)](https://www.mongodb.com/)
- [Mongoose(modeling data)](https://mongoosejs.com/)

3. **Authentication**:

- [JWT (JSON Web Tokens)](https://jwt.io/)
- [Google OAuth](https://developers.google.com/identity)

4. **Others**:

- [bcryptjs (Password Hashing)](https://www.npmjs.com/package/bcryptjs)

---

### **Installation**

#### **Prerequisites**

Make sure you have the following installed on your system:

- Node.js (v14 or higher)
- MongoDB (Local or MongoDB Atlas)
- Nodemon

#### **Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/fentahunM/home-hub.git
   ```
2. Navigate into the project directory:

```bash
cd home-hub
```

3. Install the backend dependencies:

```bash
npm install
```

4. Install the frontend dependencies:

```bash
cd client
npm install
cd ..
```

5. Create .env files

```bash
# 1. In the root directory
#head over to mongodb atlas create project and put MongoDB Driver connection string here
MONGO_ATLAS=[MongoDB Driver connection string]
JWT_SECRET=[your jwt secret]

# 2. In client directory
#head over to firebase create project get api key
VITE_FIREBASE_API_KEY=[Your API Key]
```

6. Start the development servers:

**Backend**

```bash
# change directory to root directory
npm run dev
```

**Frontend**

```bash
cd client
npm run dev
```

7. Open the application in your browser:

```bash
http://localhost:5173/
```

### **API Endpoints**

#### **Authentication Routes (`/api/auth`)**

- `POST /signup`: Create a new user
- `POST /signin`: Log in an existing user
- `POST /google`: Google OAuth login
- `GET /signout`: Log out the user

#### **User Routes (`/api/user`)**

- `GET /:id`: Get user details by ID
- `POST /update/:id`: Update user details
- `DELETE /delete/:id`: Delete user account

#### **Listing Routes (`/api/listing`)**

- `POST /create`: Create a new property listing
- `GET /get/:id`: Get a single listing by ID
- `GET /get`: Get all listings with filters (offer, type, price)
- `POST /update/:id`: Update a listing
- `DELETE /delete/:id`: Delete a listing

#### Contact

For any questions or inquiries, please contact me at:
[Email](mailto:fantahun360@gmail.com)
[Linkedin](https://www.linkedin.com/in/fentahun-mengie-1820bb301/)
