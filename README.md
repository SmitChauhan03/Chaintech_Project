# 🧑‍💻 React Project App

A simple React (v18+) application built using **Vite** and **Tailwind CSS** that allows users to **register**, **log in**, and **manage their profile information**.  
Users can **edit** their profile and **log out**.

---

## 🚀 Features

- 📝 **User Registration** – Create an account with name, username, and email.  
- 🔐 **Login System** – Log in using saved credentials.  
- 👤 **Profile Management** – View and edit your personal information.  
- 💾 **LocalStorage Persistence** – Keeps you logged in even after reload.  
- ↩️ **Instant Logout** – Clears data and redirects to the login page.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ **React (Vite)** | Frontend framework |
| 🎨 **Tailwind CSS** | Styling & layout |
| 🌐 **React Router DOM** | Routing between pages |
| 💾 **LocalStorage API** | Persist user data |
| 🧠 **Context API** | Manage user state globally |

---

## ⚙️ Project Setup 

Follow these steps to create and run the project locally:

### 1️⃣ Create Vite + React App
```bash
npm create vite@latest appname
cd appname
````

### 2️⃣ Install Dependencies

```bash
npm install
npm install react-router-dom
```

### 3️⃣ Setup Tailwind CSS

```bash
npm install -D tailwindcss 
```

## 📁 Project Structure

```
appname/
│
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Profile.jsx
│   │
│   ├── UserContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css

```

---

## ▶️ Run the Application

```bash
npm run dev
```

Then open your browser at **[http://localhost:5173](http://localhost:5173)**

---

## 🖥️ Pages Overview

### 🔹 **Login Page**

* Log in using existing credentials.
* Redirects to the Profile page on success.

### 🔹 **Signup Page**

* Register a new account.
* Saves user info in `localStorage`.

### 🔹 **Profile Page**

* Displays **Name**, **Username**, and **Email** with labels.
* Editable form with “Save” button.
* Logout instantly redirects to Login page.

---

### 🏁 Quick Summary

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm install`   | Install all dependencies          |
| `npm run dev`   | Run the app in development mode   |
| `npm run build` | Create optimized production build |

---
