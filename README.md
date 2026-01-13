# Personal Portfolio CMS – Examensarbete

## Project Description
This project is a full-stack **Personal Portfolio Content Management System (CMS)** developed as a final thesis project.  
The system allows an administrator to manage portfolio projects, skills, and personal information through an admin panel, while visitors can view the content through a modern, responsive frontend.

## Purpose
The purpose of this project is to demonstrate my ability to plan, design, and implement a complete web application using modern web development practices.  
The project showcases skills in frontend development (React/TypeScript), backend/API development (PHP), database design, authentication, UI/UX, and deployment.

## Technologies
- **Frontend:** React + TypeScript
- **Backend:** PHP (REST API)
- **Database:** MySQL
- **Authentication:** Admin login (session/JWT)
- **Design:** Figma wireframes
- **Version Control:** Git & GitHub

## System Architecture
- **React frontend** consuming a REST API
- **PHP backend** handling business logic and database access
- **MySQL database** for persistent storage
- **JSON** used for all communication between frontend and backend

## Database Design
The database is custom-designed and normalized. Main tables include:
- `users` – admin authentication
- `projects` – portfolio projects
- `skills` – technical skills
- `site_info` – personal information

## API Endpoints (Examples)
- `POST /api/login`
- `GET /api/projects`
- `POST /api/projects`
- `PUT /api/projects/{id}`
- `DELETE /api/projects/{id}`
- `GET /api/skills`

## Agile Workflow
The project follows an agile methodology with sprint planning, backlog management, and iterative development.  
Sprints:
- **Sprint 1:** Planning & Setup  
- **Sprint 2:** Backend Development  
- **Sprint 3:** Frontend Development  
- **Sprint 4:** Admin Panel & Integration  
- **Sprint 5:** Testing, Polishing & Documentation

## Selected Mandatory Course Requirements
The following requirements are fulfilled by this project:
1. **REST API communication** – JSON-based endpoints
2. **Custom-designed database** – normalized MySQL tables
3. **User management and roles** – Admin login and role-based access

## Platform Requirements & Limitations
- PHP 8.0+
- MySQL 8.0+
- Modern browsers: Chrome, Firefox, Edge
- Node.js 18+ for frontend

## How to Run the Project
1. Clone the repository
2. Import the database schema
3. Configure database credentials
4. Start backend server
5. Start frontend with:
   ```bash
   npm install
   npm start

## The admin site and projects is done
- Admin is done
- Projects are fine works great
- Some changes (From 27th December until 8th of January)