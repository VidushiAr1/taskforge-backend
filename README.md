# TaskForge – Full Stack Task Management App

## Overview
TaskForge is a full-stack task management application that supports user authentication, role-based access control, and task CRUD operations. It demonstrates a scalable backend system along with a simple frontend UI.

---

## Project Structure
backend/
  ├── backend/   (Node.js + Express API)
  ├── frontend/  (React UI)
  ├── swagger.yaml
  ├── README.md

---

## Features

### Backend
- JWT Authentication (Register/Login)
- Role-Based Access Control (User/Admin)
- Task CRUD APIs
- PostgreSQL Database Integration
- Input Validation & Error Handling
- API Versioning (/api/v1)
- Swagger API Documentation

### Frontend
- React-based UI
- User Registration & Login
- Protected Dashboard (JWT-based)
- Create and view tasks
- Displays API responses

---

## Tech Stack
- Backend: Node.js, Express, PostgreSQL
- Frontend: React.js
- Authentication: JWT
- API Documentation: Swagger

---

## Setup Instructions

### Backend
cd backend  
npm install  
npm run dev  

### Frontend
cd frontend  
npm install  
npm start  

---

## API Endpoints

### Authentication
POST /api/v1/auth/register  
POST /api/v1/auth/login  

### Tasks
GET /api/v1/tasks  
POST /api/v1/tasks  
PUT /api/v1/tasks/:id  
DELETE /api/v1/tasks/:id  

---

## API Documentation
Swagger available at:  
http://localhost:5000/api/docs  

---

## Security Features
- Password hashing using bcrypt  
- JWT-based authentication  
- Protected routes using middleware  
- Input validation  

---

## Scalability Notes
- Modular architecture for microservices expansion  
- Redis caching for improved performance  
- Load balancing using NGINX  
- Horizontal scaling using Docker/Kubernetes  
- Database indexing for faster queries  

---

## Future Improvements
- Add Redis caching  
- Dockerize application  
- Add logging & monitoring  
- Improve frontend UI/UX  

---

## Author
Vidushi Arora
