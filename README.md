# 🏕️ The Wild Oasis — Employee Dashboard

**The Wild Oasis (Employee App)** is a full-stack web application designed for resort staff to **manage cabins, bookings, and guests** efficiently.  
It provides an internal dashboard for employees to track operations, view analytics, and maintain an optimized booking workflow — built with **React 18 + React Query** and powered by **Supabase** as the backend.

> “Where calm management meets seamless performance.” 🌿

---

## 🚀 Tech Stack

### 🖥️ Frontend
- ⚛️ **React 18 + Vite** — fast, modern React setup  
- 🎨 **Styled-Components / Tailwind CSS** — responsive UI and consistent design system  
- 🔁 **React Query v5** — real-time data synchronization and cache invalidation  
- ⚙️ **React Router v6** — protected routes and nested navigation  
- 🧭 **Recharts** — dashboard analytics visualization  
- 🔔 **React Hot Toast** — clean toast notifications  

### 🗄️ Backend / Database
- 🧠 **Supabase (PostgreSQL + Auth + Storage)** — serverless backend  
- 🔐 **Supabase Auth** — email-based authentication and access control  
- 🗂️ **Row-Level Security (RLS)** — data safety per user  
- ☁️ **Supabase Storage** — image uploads for cabins and avatars  

---

## 🧩 Core Features

### 👤 Authentication & Security
- Email + Password login for staff  
- Protected routes and session persistence  
- Role-based access for employees and admins  

### 🏠 Cabin Management
- Add, edit, or remove cabins with images and pricing  
- Toggle availability and manage occupancy limits  
- Instant sync with Supabase database  

### 📅 Booking Management
- View and filter bookings by status (checked in/out, pending)  
- Check-in and check-out workflows  
- Dynamic updates via React Query mutations  

### 🧑‍🤝‍🧑 Guest Profiles
- Manage guest information and booking history  
- Auto-formatted dates and real-time state updates  

### 📊 Analytics & Dashboard
- Monthly revenue and occupancy insights  
- Top cabins and performance overview charts  

---

## ⚙️ Environment Variables (`.env`)

> Never commit real credentials.  
> Create a safe `.env.example` with variable names only.

```env
VITE_SUPABASE_URL=<your Supabase project URL>
VITE_SUPABASE_KEY=<your Supabase anon key>

