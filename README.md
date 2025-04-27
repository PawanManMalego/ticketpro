# TicketPro - Event Management App

## 📌 Overview

TicketPro is a simple event management app that helps event managers to manage their events and users to find and book events. The app is designed to be user-friendly and efficient, allowing users to easily navigate through the event listings, view details, and their pricings.

## TicketPro

A full-stack event management application built with React, TypeScript, Supabase, and PostgreSQL. It allows users to create, manage, and book events seamlessly.

## Features

- **Event Management**
  - Create, update, delete events
  - Add dynmaic categories and tags
  - Upload event images
- **Responsive Design**
  - Mobile-friendly UI using Tailwind CSS

---

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase
- **Database**: PostgreSQL
- **Deployment**: Netlify

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- npm or yarn

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/PawanManMalego/ticketpro.git
cd ticketpro
```

### 2. Set up environment variables

Create `.env` files in the root folder and enter these variables.

VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY

```bash
Note: Replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY with your actual Supabase credentials.
You can find the credentials in your Supabase project settings once you sign up to Supabase.
```

---

### 3. Install dependencies

```bash
cd ticketpro
npm install
```

---

## Running the App

### Start the development server

```bash
cd ticketpro
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Folder Structure

```
ticketpro/
├── src/
│   ├── assets/         # Static assets like images, logos, fonts
│   ├── features/       # Contains features-specific code (e.g., events, users)
│   ├── layouts/        # Layout components such as header, footer, sidebar
│   ├── pages/          # Page components
│   ├── shared/         # Reusable and shared components, utils, hooks, etc that are used across the app
│   ├── App.tsx         # Main App component that wraps the entire app
│   └── AppRouter.tsx   # Router component that handles all the routes
├── public/             # Public assets
├── .env                # Environment variables
└── README.md
```

---

## Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/PawanManMalego/ticketpro/issues).

---

## License

This project is licensed under the MIT License.
