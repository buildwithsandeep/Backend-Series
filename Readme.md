# 🎬 YouTube Backend Project (JavaScript Backend Series)

## 📌 Description

This project is a **YouTube-like backend API** built using **Node.js, Express, and MongoDB**.
It is part of a **JavaScript Backend Series** where we build real-world backend applications step-by-step.

- [Model Link] (https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

---

## 🚀 Features

* 🔐 User Authentication (Signup)
* 👤 User Data Management
* 📂 REST API Structure
* 🗄️ MongoDB Database Integration
* ⚡ Error Handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript (ES6+)

---

## 📁 Project Structure

```
project/
│
├── models/        
├── routes/        
├── db.js          
├── index.js       
├── package.json   
└── README.md      
```

---

## ⚙️ Installation

1. Clone the repository:

```
git clone https://github.com/buildwithsandeep
```

2. Go to project folder:

```
cd Backend-Series
```

3. Install dependencies:

```
npm install
```

4. Start server:

```
nodemon index.js
```

---

## 🔗 API Endpoints

### 🟢 Create User (Signup)

```
POST /person
```

### 🔵 Get All Users

```
GET /person
```

---

## 📌 Example Request (POST)

```
{
  "name": "Sandeep",
  "email": "sandeep123@gmail.com",
  "password": "123456"
}
```

---

## ⚠️ Important Notes

* Email must be unique
* Do not send duplicate email
* Always send data in JSON body (not in URL)

---

## 🚧 Future Improvements

* 🔐 Password Hashing (bcrypt)
* 🔑 JWT Authentication
* 🎥 Video Upload Feature
* ❤️ Like, Comment, Subscribe System

---

## 👨‍💻 Author

Sandeep
Aspiring Full Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
