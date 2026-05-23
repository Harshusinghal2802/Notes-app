<div align="center">

<!-- Animated Header Banner -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Harsh%20Notes%20App&fontSize=60&fontColor=fff&animation=twinkling&fontAlignY=35&desc=A%20Modern%20Full%20Stack%20MERN%20Notes%20Application&descAlignY=55&descSize=18" />

<!-- Badges Row 1 -->
[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://harshnotes-app.netlify.app)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=github&logoColor=white)](CONTRIBUTING.md)
[![Made With Love](https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge)](https://github.com/harshsinghal)

<!-- Badges Row 2 -->
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

<br/>

> **Harsh Notes App** is a sleek, secure, and blazing-fast full-stack notes application built with the **MERN stack**. It offers JWT-based authentication, private note management, password-protected sections, and a stunning responsive UI — designed for power users and developers alike.

<br/>

[🌐 Live Demo](https://harshnotes-app.netlify.app) • [📖 Documentation](#-installation--setup) • [🐛 Report Bug](https://github.com/harshsinghal/harsh-notes-app/issues) • [✨ Request Feature](https://github.com/harshsinghal/harsh-notes-app/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [⚡ Installation & Setup](#-installation--setup)
- [🔐 Environment Variables](#-environment-variables)
- [📸 Screenshots](#-screenshots)
- [📡 API Documentation](#-api-documentation)
- [🔒 Security](#-security)
- [🚢 Deployment Guide](#-deployment-guide)
- [🔮 Future Improvements](#-future-improvements)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)
- [📜 License](#-license)

---

## ✨ Features

<div align="center">

| 🔐 Authentication | 📝 Notes Management | 🎨 UI/UX |
|:---:|:---:|:---:|
| JWT-based Auth | Create Notes | Fully Responsive |
| Login & Signup | Edit Notes | Modern Design |
| Protected Routes | Delete Notes | Smooth Animations |
| Session Persistence | Private Notes | Dark-Friendly Theme |
| Secure Middleware | Password-Protected Sections | Framer Motion FX |

</div>

<br/>

<details>
<summary><b>🔎 View All Features in Detail</b></summary>

<br/>

### 🔑 Authentication & Security
- ✅ **JWT Authentication** — Secure token-based sessions with expiry management
- ✅ **User Registration & Login** — Seamless signup/login flow with validation
- ✅ **Protected Routes** — Auth-guarded pages; unauthenticated access is blocked
- ✅ **Password Hashing** — All passwords encrypted with `bcryptjs` (salted hashing)

### 📓 Notes Features
- ✅ **Create Notes** — Instantly add new notes with title & content
- ✅ **Edit Notes** — Modify existing notes in real time
- ✅ **Delete Notes** — Remove notes with a single click
- ✅ **Private Notes** — Keep your personal notes hidden and secure
- ✅ **Password-Protected Sections** — Lock sensitive note collections behind a password

### 🎯 Performance & UX
- ✅ **Blazing Fast** — Powered by Vite for near-instant development and build times
- ✅ **Responsive Design** — Pixel-perfect on mobile, tablet, and desktop
- ✅ **Smooth Animations** — Framer Motion-powered transitions and micro-interactions
- ✅ **REST API** — Clean, documented, secure RESTful endpoints
- ✅ **Context API** — Lightweight global state management without Redux overhead

</details>

---

## 🛠️ Tech Stack

<div align="center">

### 🖥️ Frontend
| Technology | Version | Purpose |
|:---|:---:|:---|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat-square) React.js | `^18.x` | UI Library |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) Vite | `^5.x` | Build Tool & Dev Server |
| ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square) Tailwind CSS | `^3.x` | Utility-First Styling |
| ![Router](https://img.shields.io/badge/-React_Router-CA4245?logo=reactrouter&logoColor=white&style=flat-square) React Router DOM | `^6.x` | Client-Side Routing |
| ![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white&style=flat-square) Axios | `^1.x` | HTTP Client |
| ![Framer](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white&style=flat-square) Framer Motion | `^11.x` | Animations & Transitions |

### ⚙️ Backend
| Technology | Version | Purpose |
|:---|:---:|:---|
| ![Node](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white&style=flat-square) Node.js | `^18.x` | Runtime Environment |
| ![Express](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=flat-square) Express.js | `^4.x` | Web Framework |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square) MongoDB | `^7.x` | NoSQL Database |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white&style=flat-square) Mongoose | `^8.x` | ODM for MongoDB |
| ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white&style=flat-square) JSON Web Tokens | `^9.x` | Authentication |
| ![Bcrypt](https://img.shields.io/badge/-bcryptjs-003366?style=flat-square) bcryptjs | `^2.x` | Password Hashing |
| ![Dotenv](https://img.shields.io/badge/-dotenv-ECD53F?logo=dotenv&logoColor=black&style=flat-square) dotenv | `^16.x` | Environment Variables |
| ![CORS](https://img.shields.io/badge/-CORS-FF6C37?style=flat-square) cors | `^2.x` | Cross-Origin Requests |

</div>

---

## 📁 Folder Structure

<details>
<summary><b>📂 Click to expand Full Folder Structure</b></summary>

```
harsh-notes-app/
│
├── 📁 client/                          # React Frontend (Vite)
│   ├── 📁 public/
│   │   └── favicon.ico
│   ├── 📁 src/
│   │   ├── 📁 assets/                  # Images, icons, static files
│   │   ├── 📁 components/              # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NoteModal.jsx
│   │   │   ├── PrivateSection.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── 📁 context/                 # Global State (Context API)
│   │   │   ├── AuthContext.jsx
│   │   │   └── NotesContext.jsx
│   │   ├── 📁 hooks/                   # Custom React Hooks
│   │   │   ├── useAuth.js
│   │   │   └── useNotes.js
│   │   ├── 📁 pages/                   # Route-level Pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Notes.jsx
│   │   ├── 📁 services/                # Axios API calls
│   │   │   ├── authService.js
│   │   │   └── notesService.js
│   │   ├── 📁 utils/                   # Helper functions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.local
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── 📁 server/                          # Node.js / Express Backend
│   ├── 📁 config/
│   │   └── db.js                       # MongoDB connection
│   ├── 📁 controllers/                 # Route Controllers
│   │   ├── authController.js
│   │   └── notesController.js
│   ├── 📁 middleware/                  # Custom Middleware
│   │   └── authMiddleware.js           # JWT verification
│   ├── 📁 models/                      # Mongoose Schemas
│   │   ├── User.js
│   │   └── Note.js
│   ├── 📁 routes/                      # Express Route Definitions
│   │   ├── authRoutes.js
│   │   └── notesRoutes.js
│   ├── .env
│   ├── server.js                       # Entry point
│   └── package.json
│
├── .gitignore
├── LICENSE
└── README.md
```

</details>

---

## ⚡ Installation & Setup

> **Prerequisites:** Make sure you have the following installed:
> - [Node.js](https://nodejs.org/) `v18+`
> - [MongoDB](https://www.mongodb.com/) (local) or a [MongoDB Atlas](https://cloud.mongodb.com/) cluster
> - [Git](https://git-scm.com/)

<br/>

### Step 1 — Clone the Repository

```bash
git clone https://github.com/harshsinghal/harsh-notes-app.git
cd harsh-notes-app
```

### Step 2 — Install Backend Dependencies

```bash
cd server
npm install
```

### Step 3 — Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Step 4 — Configure Environment Variables

Create a `.env` file in the `server/` directory (see [Environment Variables](#-environment-variables) section below).

Create a `.env.local` file in the `client/` directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### Step 5 — Start the Backend Server

```bash
cd server
npm run dev
```

> 🟢 Server running at `http://localhost:5000`

### Step 6 — Start the Frontend Server

```bash
cd client
npm run dev
```

> 🟢 App running at `http://localhost:5173`

---

## 🔐 Environment Variables

### ⚙️ Backend — `server/.env`

```env
# Server Configuration
PORT=5000

# MongoDB Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/harsh-notes-db

# JWT Secret Key (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here

# JWT Expiry
JWT_EXPIRES_IN=7d

# Node Environment
NODE_ENV=development
```

### 🖥️ Frontend — `client/.env.local`

```env
# API Base URL
VITE_API_BASE_URL=http://localhost:5000

# App Name (optional)
VITE_APP_NAME=Harsh Notes App
```

> ⚠️ **Never commit `.env` files to version control.** They are included in `.gitignore` by default.

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](https://via.placeholder.com/900x500/0f172a/6366f1?text=🏠+Home+Page)

### 🔐 Login Page
![Login Page](https://via.placeholder.com/900x500/0f172a/6366f1?text=🔐+Login+Page)

### 📝 Signup Page
![Signup Page](https://via.placeholder.com/900x500/0f172a/6366f1?text=📝+Signup+Page)

### 📊 Dashboard
![Dashboard](https://via.placeholder.com/900x500/0f172a/6366f1?text=📊+Dashboard)

### 🗒️ Notes Page
![Notes Page](https://via.placeholder.com/900x500/0f172a/6366f1?text=🗒️+Notes+Page)

### 📱 Mobile Responsive View
![Mobile View](https://via.placeholder.com/400x750/0f172a/6366f1?text=📱+Mobile+View)

</div>

> 💡 *Replace placeholder images with real screenshots before publishing.*

---

## 📡 API Documentation

Base URL: `http://localhost:5000/api`

### 🔑 Auth Routes

| Method | Endpoint | Description | Auth Required |
|:---:|:---|:---|:---:|
| `POST` | `/auth/signup` | Register a new user | ❌ |
| `POST` | `/auth/login` | Login with credentials | ❌ |

**POST** `/api/auth/signup`
```json
// Request Body
{
  "name": "Harsh Singhal",
  "email": "harsh@example.com",
  "password": "securePassword123"
}

// Response 201
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

**POST** `/api/auth/login`
```json
// Request Body
{
  "email": "harsh@example.com",
  "password": "securePassword123"
}

// Response 200
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "user": { "id": "...", "name": "Harsh Singhal", "email": "harsh@example.com" }
}
```

---

### 📝 Notes Routes

> All notes routes require `Authorization: Bearer <token>` header.

| Method | Endpoint | Description | Auth Required |
|:---:|:---|:---|:---:|
| `GET` | `/notes` | Fetch all notes for the logged-in user | ✅ |
| `POST` | `/notes` | Create a new note | ✅ |
| `PUT` | `/notes/:id` | Update an existing note | ✅ |
| `DELETE` | `/notes/:id` | Delete a note | ✅ |

**POST** `/api/notes`
```json
// Request Body
{
  "title": "My First Note",
  "content": "This is the note content.",
  "isPrivate": false
}

// Response 201
{
  "success": true,
  "note": {
    "_id": "64f...",
    "title": "My First Note",
    "content": "This is the note content.",
    "isPrivate": false,
    "user": "64e...",
    "createdAt": "2024-12-01T10:00:00.000Z"
  }
}
```

---

## 🔒 Security

<div align="center">

| Security Feature | Implementation | Status |
|:---|:---|:---:|
| JWT Authentication | `jsonwebtoken` — signed tokens with expiry | ✅ Active |
| Password Hashing | `bcryptjs` — salted hash rounds (10+) | ✅ Active |
| Protected API Routes | Custom `authMiddleware.js` verification | ✅ Active |
| Environment Secrets | `dotenv` — secrets out of source code | ✅ Active |
| CORS Policy | Whitelisted frontend origin only | ✅ Active |
| Input Validation | Server-side validation on all inputs | ✅ Active |

</div>

<details>
<summary><b>🔐 How JWT Authentication Works</b></summary>

```
1. User sends credentials (email + password)
           ↓
2. Server verifies credentials against DB
           ↓
3. bcryptjs compares hashed password
           ↓
4. If valid → Server signs a JWT with user ID + secret
           ↓
5. Token returned to client, stored in localStorage
           ↓
6. Every protected request sends token in Authorization header
           ↓
7. authMiddleware verifies token on every API call
           ↓
8. Verified → Request proceeds | Invalid → 401 Unauthorized
```

</details>

---

## 🚢 Deployment Guide

### 🌐 Frontend — Netlify

```bash
# Build the frontend
cd client
npm run build

# Deploy dist/ folder to Netlify
# Or connect your GitHub repo for auto-deploy
```

1. Go to [netlify.com](https://netlify.com) → **New Site from Git**
2. Connect your GitHub repository
3. Set **Build Command**: `npm run build`
4. Set **Publish Directory**: `dist`
5. Add environment variables under **Site Settings → Environment**
6. Deploy 🚀

---

### ⚙️ Backend — Render / Railway

**Render:**
1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect your GitHub repo
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `node server.js`
5. Add all environment variables from `.env`
6. Deploy 🚀

**Railway:**
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

---

### 🍃 Database — MongoDB Atlas

1. Create a free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a database user with password
3. Whitelist `0.0.0.0/0` for all IPs (or specific deployment IPs)
4. Copy the connection string:
   ```
   mongodb+srv://<user>:<password>@cluster.mongodb.net/harsh-notes-db
   ```
5. Paste it as `MONGO_URI` in your backend environment variables

---

## 🔮 Future Improvements

<div align="center">

| # | Feature | Priority | Status |
|:---:|:---|:---:|:---:|
| 1 | 🌙 Dark Mode Toggle | High | 🔜 Planned |
| 2 | 📱 PWA Support (Offline Mode) | High | 🔜 Planned |
| 3 | 🤖 AI Notes Summarizer (OpenAI API) | Medium | 💡 Idea |
| 4 | 📝 Rich Text Editor (WYSIWYG) | Medium | 🔜 Planned |
| 5 | 🏷️ Categories & Tags System | Medium | 🔜 Planned |
| 6 | 🔗 Note Sharing System | Low | 💡 Idea |
| 7 | ☁️ Cloud File Uploads (Images) | Low | 💡 Idea |
| 8 | 🔍 Full-Text Search | High | 🔜 Planned |
| 9 | 📧 Email Verification | Medium | 🔜 Planned |
| 10 | 🌐 Multi-language Support (i18n) | Low | 💡 Idea |

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place! Any contribution you make is **greatly appreciated**. 🙌

<details>
<summary><b>📖 Contribution Guidelines</b></summary>

### How to Contribute

1. **Fork** the repository
   ```bash
   # Click the Fork button at the top-right on GitHub
   ```

2. **Clone** your fork
   ```bash
   git clone https://github.com/YOUR_USERNAME/harsh-notes-app.git
   cd harsh-notes-app
   ```

3. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Commit** your changes with a descriptive message
   ```bash
   git commit -m "feat: add amazing new feature"
   ```
   > Follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`)

5. **Push** to your branch
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request** on GitHub and describe your changes

### 📋 Code of Conduct
- Be respectful and inclusive
- Write clean, documented code
- Add tests for new features when possible
- Update the README if needed

</details>

---

## 👨‍💻 Author

<div align="center">

<img src="https://avatars.githubusercontent.com/harshsinghal" width="100px" style="border-radius:50%"/>

### Harsh Singhal

*Full Stack Developer | MERN Stack Enthusiast*

[![GitHub](https://img.shields.io/badge/GitHub-harshsinghal-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harshsinghal)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Harsh_Singhal-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/harshsinghal)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit_Site-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://harshsinghal.dev)

</div>

---

## 📜 License

```
MIT License

Copyright (c) 2024 Harsh Singhal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

See the full [LICENSE](LICENSE) file for details.

---

<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer" />

### ⭐ Star this repository if you found it helpful!

**If this project helped you, please consider giving it a ⭐ on GitHub — it means the world!**

<br/>

![Visitor Count](https://komarev.com/ghpvc/?username=harshsinghal&label=Profile%20Views&color=6366f1&style=flat-square)

<br/>

```
Made with ❤️ by Harsh Singhal
```

*"Code is like humor. When you have to explain it, it's bad." — Cory House*

</div>
