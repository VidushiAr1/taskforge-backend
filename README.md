# TaskForge – Full Stack Task Management App

## 🚀 Overview
This is a full-stack task management application with authentication, role-based access, and CRUD operations.

---

## 📁 Project Structure
backend/
  ├── backend/   (Node.js + Express API)
  ├── frontend/  (React UI)

---

## ⚙️ Features

### Backend
- JWT Authentication (Login/Register)
- Role-Based Access (User/Admin)
- Task CRUD APIs
- PostgreSQL Database
- Validation & Error Handling
- API Versioning (/api/v1)

### Frontend
- React-based UI
- User Registration & Login
- Protected Dashboard (JWT-based)
- Create and view tasks

---

## 🛠 Tech Stack
- Backend: Node.js, Express, PostgreSQL
- Frontend: React.js
- Auth: JWT
- API Docs: Swagger

---

## ⚙️ Setup Instructions

### Backend
cd backend  
npm install  
npm run dev  

### Frontend
cd frontend  
npm install  
npm start  

---

## 🔗 API Endpoints

### Auth
POST /api/v1/auth/register  
POST /api/v1/auth/login  

### Tasks
GET /api/v1/tasks  
POST /api/v1/tasks  
PUT /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id  

---

## 📄 API Documentation
Swagger available at:  
http://localhost:5000/api/docs

---

## 📈 Scalability Notes
- Modular architecture for microservices expansion  
- Redis caching for faster responses  
- Load balancing using NGINX  
- Horizontal scaling using Docker/Kubernetes  
- Database indexing for optimized queries  
