# 🎉 Mini Event Management & RSVP Platform

A full-stack event management application where users can create events, RSVP to events, manage attendance, and track participation — built with real-world UX patterns, secure authentication, and scalable architecture.

This project is designed to reflect industry-level frontend and backend practices, focusing on user experience, clean API design, and recruiter-ready architecture.

---

# 🚀 Live Features Overview

## 👤 User Authentication

* Secure Login & Registration
* JWT-based Authentication
* Protected Routes (Frontend & Backend)
* Session Persistence using Cookies

---

## 📅 Event Management

* Create, Edit, and Delete Events
* Upload Event Images
* Set Event Capacity and Date/Time
* Owner-only Access for Edit/Delete Operations

---

## ✅ RSVP System (Core Feature)

* Users can RSVP to Events
* Cancel RSVP at any Time
* Backend-enforced Capacity Limits
* Duplicate RSVP Prevention

---

## ⚡ Smart UX Enhancements

* Seat Urgency Warning when seats are ≤ 5
* Confirmation Dialog for Last-Seat RSVP
* Disabled RSVP when Event is Full
* Disabled RSVP when Event Time is Over

---

## ⏳ Time-Aware Events

### Automatically Detects

* Upcoming Events
* Ongoing Events
* Past Events

### Additional Features

* Countdown Timer (Days/Hours Remaining)
* Displays **⛔ Event Time Over** for Expired Events
* Disables RSVP for Past Events

---

## 👥 Attendees Management

* View List of Event Attendees
* Owner-only Access
* Modal-based UI for Better User Experience

---

## 👤 User Profile Dashboard

* View Personal Information
* Total Events Conducted
* Total Events Attended
* Statistics fetched securely from Backend APIs

---

# 🧠 Why This Project Is Different

This is not just a CRUD application.

The project demonstrates:

* Real-world RSVP Workflows
* Optimistic vs Confirmed UI Decisions
* Time-based Business Logic
* Role-based Access Control (RBAC)
* Clean Separation of Concerns
* Scalable Folder Structure and API Design

---

# 🛠️ Tech Stack & Why It's Used

## 🌐 Frontend (Client)

| Technology     | Why It's Used                                         |
| -------------- | ----------------------------------------------------- |
| React (Vite)   | Fast SPA development and component-based architecture |
| React Router   | Navigation and Protected Routes                       |
| Redux Toolkit  | Centralized Authentication State and Scalability      |
| Axios Instance | Clean and Reusable API Layer                          |
| React Toastify | Modern Non-blocking Notifications                     |
| CSS Modules    | Scoped and Maintainable Styling                       |

### 🧩 Frontend Patterns Used

* Conditional Rendering
* Business Rule-based UI States
* Component Reusability
* API Abstraction Layer
* Centralized State Management

---

## 🖥️ Backend (Server)

| Technology  | Why It's Used                      |
| ----------- | ---------------------------------- |
| Node.js     | Non-blocking and Scalable Runtime  |
| Express.js  | Flexible REST API Framework        |
| MongoDB     | Flexible NoSQL Database            |
| Mongoose    | Schema Modeling and Validation     |
| JWT         | Secure Authentication              |
| Middleware  | Authorization and Route Protection |
| MVC Pattern | Clean Project Organization         |

### 🧩 Backend Patterns Used

* Controller-based Architecture
* Protected Routes
* Ownership Verification
* Centralized Error Handling
* Modular API Design

---

# 🧱 Project Architecture

```text
Mini-Event-Project/
│
├── client/
│   ├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   └── redux/
│
├── server/
│   ├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── config/
│
└── README.md
```

---

# 🔐 Authentication & Authorization Flow

1. User Logs In
2. Backend Generates JWT Token
3. Token Stored Securely in Cookies
4. Protected Routes validated through Middleware
5. Ownership Checks performed for Event Actions

---

# 🧪 RSVP Logic (Important Design Decision)

## ❌ No Blind Optimistic UI

### Reason

* RSVP affects Seat Availability
* Requires Backend Confirmation
* Prevents Race Conditions and Inconsistent State

---

## ✅ Confirmed UI Update Pattern

1. Backend validates seat availability.
2. Backend confirms RSVP.
3. Frontend updates state only after success.
4. Rollback handled safely during RSVP cancellation.

This mirrors how production-grade reservation systems work.

---

# 📊 Profile Statistics Logic

## Backend Calculates

* Total Events Created
* Total Events Attended

## Frontend

* Calls `/profile-stats` API
* Displays Statistics Dashboard
* Avoids Heavy Client-side Computation

---

# ▶️ How To Run The Project

## 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd Mini-Event-Project
```

---

## 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

### Create `.env`

```env
PORT=5000
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
```

---

## 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔮 Future Enhancements

## 1️⃣ Email Notifications using Nodemailer

### Objective

Ensure both attendees and event owners receive reliable email notifications.

### Planned Features

* RSVP Confirmation Emails
* Event Owner Notifications
* RSVP Cancellation Notifications

### Email Content

* Event Name
* Date & Time
* Location
* RSVP Status

### Why Email?

* Works even when Users are Offline
* Reliable Communication Channel
* Industry-standard Transactional Notifications

---

## 2️⃣ Real-Time Notifications using Socket.IO

### Objective

Deliver Instant Notifications without Page Refresh.

---

### 🔌 Socket Connection Lifecycle

#### On Login

* Establish Socket.IO Handshake
* Associate Socket ID with User ID

#### On Logout

* Disconnect Socket Cleanly
* Prevent Ghost Connections
* Maintain Accurate User Presence

---

### 📢 Event Creation Notifications

When a User Creates an Event:

* Backend emits Socket Event
* All Connected Users receive Notification

Example:

> New Event "Tech Meetup" has been created near you.

---

### 🔔 RSVP Owner Notifications

When a User:

* Joins an Event
* Cancels RSVP

The Event Owner receives a Real-time Notification.

---

### 🧠 Notification State Management

#### Initial Load

* Fetch Notifications through REST API

#### Real-time Updates

* Listen using `socket.on()`
* Merge Notifications into Unified State

---

### 🔢 Notification Counter

* Badge Counter in Navbar
* Increment on New Notification
* Reset when User Opens Notification Page

---

# 🧩 Why This Design Is Scalable

* Email = Guaranteed Delivery
* Socket.IO = Instant Feedback
* Backend Controls Notification Logic
* Frontend Only Renders State

### Future Expansion

* Push Notifications
* Mobile Applications
* Admin-level Alerts
* Notification Preferences

---

# 👨‍💻 Author

**Yashwanth**

B.E Information Technology (2025)
Aspiring Full Stack Developer

📧 [567yashwanth@gmail.com](mailto:567yashwanth@gmail.com)
