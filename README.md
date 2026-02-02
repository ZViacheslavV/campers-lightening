# 🚐 [TravelTrucks — Campers Lightening](https://campers-lightening.vercel.app/)

## 📖 Project Overview

**TravelTrucks (Campers Lightening)** is a frontend web application for a company that sells and rents campers.
The app allows users to browse a catalog of available campers, filter them by multiple parameters, add items to favorites, and view detailed camper information including reviews and a booking form.

The project is implemented according to the technical requirements and focuses on clean architecture, scalability, and correct integration with a backend API.

---

## ✨ Key Features

- 🏠 **Home page** with a hero banner and a call-to-action button leading to the catalog
- 📋 **Campers catalog**
  - filtering by location, body type, transmission, equipment, etc.
  - filtering is performed **on the backend**
  - pagination via **Load More**, respecting active filters

- ❤️ **Favorites**
  - add / remove campers to favorites
  - favorites persist after page reload

- 🔍 **Single camper page**
  - detailed specifications and description
  - image gallery
  - **Features / Reviews** tabs (Features tab is active by default)
  - reviews with a 5-star rating system

- 📝 **Booking form**
  - booking form submission
  - success notification after submission

- ⏳ **Loader** for all asynchronous requests

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Zustand** — global state management (campers, filters, favorites)
- **Axios** — API communication
- **SCSS / CSS Modules** — styling
- **MockAPI** — backend API

---

## 🌐 API

The project uses a ready-to-use backend API:

- `GET /campers` — fetch campers list (with filtering and pagination)
- `GET /campers/:id` — fetch single camper details

Filtering and pagination are handled **on the backend**.

---

## 🚀 Running the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/ZViacheslavV/campers-lightening
cd campers-lightening
```

2. Install dependencies:

```bash
npm install
# або
yarn install
```

3. Start the development server:

```bash
npm run dev
# або
yarn dev
```

4. Open in your browser:

```
http://localhost:3000
```

---

## 🧭 Routes Structure

- `/` — Home page
- `/catalog` — Campers catalog
- `/catalog/[id]` — Single camper page

---

## ⚙️ Implementation Details

- Global state is managed using **Zustand**
- Filters persist during navigation between pages
- When filters change:
  - previous results are cleared
  - pagination state is reset

- Favorites persist across sessions
- No console errors
- Codebase follows DRY principles, well-structured and formatted

---

## 🌍 Deployment

The project is deployed and available at:

🔗 **Live demo:** https://campers-lightening.vercel.app/

---

## 👤 Author

**Viacheslav Zykov**
Frontend / Fullstack Developer

- GitHub: https://github.com/ZViacheslavV
- LinkedIn: https://www.linkedin.com/in/viacheslav-zykov/

---

## 📌 Note

This project was completed as part of a technical assignment and fully meets all stated requirements, including critical evaluation criteria.
