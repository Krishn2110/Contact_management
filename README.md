# 📇 ContactHub – Secure Contact Management App (MERN Stack)

ContactHub is a **full-stack MERN application** that allows users to securely manage their personal contacts.  
Each user has a **private dashboard**, protected by authentication, ensuring that contacts are visible **only to their owner**.

The project is fully deployed with a **React + Vite frontend on Vercel** and a **Node.js + Express backend on Render**, backed by **MongoDB Atlas**.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://contact-management-hub.vercel.app  
- **Backend (Render):** https://contact-management-wnk2.onrender.com  

---

## ✨ Features

### 🔐 Authentication & Security
- User Signup & Login (JWT based)
- Protected routes (Dashboard accessible only after login)
- Each contact is linked to a specific user
- Users cannot access or modify other users’ contacts

### 📇 Contact Management
- Add new contacts
- View contacts in real time (no page reload)
- Delete contacts
- Search contacts by name, email, or phone
- Contacts sorted by latest first

### 🎨 UI & UX
- Fully responsive design (mobile + desktop)
- Modern Tailwind CSS styling
- Gradient navbar with mobile hamburger menu
- Clean dashboard layout
- Smooth animations and transitions

### 🌍 Production Ready
- Environment-based API configuration
- Secure `.env` handling (no secrets in GitHub)
- Deployed frontend & backend
- SPA routing fixed for refresh & deep links

---

## 🛠️ Tech Stack

### Frontend
- React (with Vite)
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs (password hashing)

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **MongoDB Atlas**

---

## 📁 Project Structure

contact-management/
├── backend/                 # Node.js + Express API
│   ├── models/              # Mongoose schemas (User, Contact)
│   ├── routes/              # API route definitions
│   ├── middleware/          # Auth & route protection
│   ├── server.js            # App entry point
│   └── .env.example         # Environment variables template
│
├── frontend/                # React + Vite application
│   ├── src/
│   │   ├── api/             # Centralized Axios instance
│   │   ├── components/      # Reusable UI components
│   │   ├── App.jsx          # App routes & layout
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Tailwind styles
│   │
│   ├── public/              # Static assets
│   ├── vite.config.js       # Vite configuration
│   ├── vercel.json          # SPA routing config
│   └── package.json
│
└── README.md


---

### Clone Repo
- git clone https://github.com/your-username/contact-management.git
- cd contact-management
