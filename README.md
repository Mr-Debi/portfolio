# 💗 Portfolio Website with Donation Management System

A modern **React + FastAPI Portfolio Website** featuring a secure donation system, admin dashboard, email notifications, cloud image storage, and PostgreSQL database integration.

---

# 🌐 Live Demo

### Portfolio

https://portfolio-debidutta.vercel.app

### Backend API

https://portfolio-s8zx.onrender.com

---

# 📖 Project Overview

This project is a personal portfolio website developed using **React (Vite)** as the frontend and **FastAPI** as the backend.

The project includes a complete donation management system where visitors can:

* Donate using UPI QR Code
* Upload payment proof
* Submit transaction details
* Wait for admin verification
* Receive a thank-you email after approval

The Admin Dashboard allows administrators to manage donations securely using JWT authentication.

---

# ✨ Features

## Portfolio

* Responsive React UI
* Animated sections
* Skills
* Projects
* Experience
* Contact Form
* Resume Download
* Social Links

---

## Donation System

* Donate via UPI QR Code
* Multiple predefined amounts
* Custom amount support
* Upload payment screenshot
* Transaction ID verification
* Donation stored in PostgreSQL
* Pending / Approved / Rejected status

---

## Admin Dashboard

* Secure Login
* JWT Authentication
* Dashboard Analytics
* Donation Search
* Approve Donation
* Reject Donation
* Delete Donation
* Screenshot Preview
* Auto Statistics

---

## Email Notifications

After approving a donation, the donor receives an automatic HTML email containing:

* Thank You message
* Donation Amount
* Transaction ID
* Personalized greeting

---

## Cloud Storage

Payment screenshots are uploaded to **Cloudinary**, eliminating the need for local storage and making deployment easier.

---

# 🛠 Tech Stack

## Frontend

* React
* Vite
* React Router
* Axios
* SweetAlert2
* React QR Code
* CSS3

---

## Backend

* FastAPI
* Uvicorn
* SQLAlchemy
* JWT Authentication
* Passlib (bcrypt)
* Cloudinary SDK
* Requests
* Python-dotenv

---

## Database

Supabase PostgreSQL

---

## Hosting

Frontend

* Vercel

Backend

* Render

Database

* Supabase

Images

* Cloudinary

Email

* Brevo API

---

# 📂 Folder Structure

```text
portfolio/

│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── app/
│   │
│   ├── routers/
│   │     admin.py
│   │     donation.py
│   │
│   ├── models.py
│   ├── auth.py
│   ├── database.py
│   ├── config.py
│   ├── mail.py
│   ├── main.py
│   │
│   ├── requirements.txt
│   ├── .env
│
└── README.md
```

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Mr-Debi/portfolio.git

cd portfolio
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

# Backend Setup

Create Virtual Environment

```bash
cd backend

python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux/Mac

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run FastAPI

```bash
uvicorn app.main:app --reload
```

Runs on

```
http://localhost:8000
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```env
DATABASE_URL=your_supabase_database_url

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60

MAIL_USERNAME=your_email

MAIL_PASSWORD=your_password

MAIL_FROM=your_email

BREVO_API_KEY=your_brevo_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

# Database Setup

Create the following tables.

## admins

| Column   | Type    |
| -------- | ------- |
| id       | Integer |
| username | Text    |
| password | Text    |

---

## donation

| Column         | Type                          |
| -------------- | ----------------------------- |
| id             | Integer                       |
| name           | Text                          |
| email          | Text                          |
| amount         | Decimal                       |
| transaction_id | Text                          |
| screenshot     | Text                          |
| status         | Pending / Approved / Rejected |
| created_at     | Timestamp                     |

---

# Create Admin

Run

```bash
python create_admin.py
```

or manually insert an admin user into the `admins` table with a hashed password.

---

# API Endpoints

## Donation

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /api/donations |

---

## Admin

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /admin/login        |
| GET    | /admin/dashboard    |
| GET    | /admin/donations    |
| PUT    | /admin/approve/{id} |
| PUT    | /admin/reject/{id}  |
| DELETE | /admin/delete/{id}  |

---

# Deployment

## Frontend

Deploy using

* Vercel

---

## Backend

Deploy using

* Render

---

## Database

Use

* Supabase PostgreSQL

---

## Images

Use

* Cloudinary

---

## Email Service

Use

* Brevo API

---

# Why FastAPI Instead of PHP?

The original donation system was developed using PHP.

The backend was migrated to FastAPI because it offers:

* Better performance
* Modern Python ecosystem
* Automatic API documentation
* Built-in validation
* Easier JWT authentication
* Better scalability
* Cleaner project architecture
* SQLAlchemy ORM support
* Easy deployment on Render

---

# Why Cloudinary?

Initially, screenshots were stored locally.

This created deployment issues because:

* Render removes local files after redeployment.
* Uploaded images disappear.
* Local storage is not persistent.

Cloudinary solves these issues by providing:

* Permanent cloud storage
* Fast CDN delivery
* Automatic optimization
* Secure image URLs

---

# Why Brevo Instead of Gmail SMTP?

Initially, Gmail SMTP was used.

Problems encountered:

* SMTP ports (587/465) may be blocked on free hosting services.
* Gmail security restrictions.
* Frequent authentication issues.

Brevo Email API provides:

* Reliable API-based email delivery
* No SMTP dependency
* Better deliverability
* Suitable for cloud deployment

---

# Future Improvements

* Payment Gateway Integration
* Razorpay
* Stripe
* PayPal
* Email Templates
* Admin Profile
* Monthly Reports
* Dark Mode Dashboard
* Export Donations to Excel
* Charts and Analytics
* User Authentication
* Pagination
* Search Filters
* Multi-language Support

---

# Common Issues

## Images Not Displaying

Check:

* Cloudinary configuration
* Upload API
* CORS

---

## Backend Not Running

Verify:

* `.env`
* DATABASE_URL
* Python dependencies

---

## Cannot Login

Ensure:

* Admin exists
* Password is hashed
* JWT secret is configured

---

## Database Connection Failed

Check:

* Supabase credentials
* DATABASE_URL
* Internet connection

---

# Screenshots

You can add screenshots inside a `screenshots/` folder.

Example:

```
screenshots/

home.png

projects.png

donation.png

dashboard.png

analytics.png
```

Then include:

```md
![Home](screenshots/home.png)

![Dashboard](screenshots/dashboard.png)
```

---

# Author

**Debidutta Behera**

* Full Stack Python Developer
* React Developer
* FastAPI Developer

GitHub

https://github.com/Mr-Debi

LinkedIn

(Add your LinkedIn profile)

Portfolio

https://portfolio-debidutta.vercel.app

---

# License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project:

⭐ Star the repository

🍴 Fork it

🐛 Report issues

💡 Suggest new features

Happy Coding! 🚀
