# Team Management

A full-stack team and hackathon management system for organizing teams, tracking progress, and giving admins centralized visibility.

## Project Structure

- `Team Management/Hackathon-Tracker/frontend` — React + Vite web app
- `Team Management/Hackathon-Tracker/backend` — Node.js + Express API

## Features

- Team registration and authentication
- Team dashboard for project updates
- Admin dashboard for monitoring teams
- Progress tracking services
- AWS-ready backend configuration

## Tech Stack

- **Frontend:** React, Vite, React Router, Axios, Tailwind
- **Backend:** Node.js, Express, JWT, AWS SDK, MongoDB/Mongoose

## Setup & Installation

### Prerequisites

- Node.js 18+
- npm 9+

### 1) Clone and enter the repository

```bash
git clone https://github.com/MOTURUUTTEJ/Team-Management.git
cd Team-Management
```

### 2) Install backend dependencies

```bash
cd "Team Management/Hackathon-Tracker/backend"
npm install
```

### 3) Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4) Configure environment variables

Create a `.env` file in the backend directory and set required values (for example database, JWT, and AWS credentials/settings as needed by your environment).

### 5) Run the application

Backend (from `backend`):

```bash
npm run dev
```

Frontend (from `frontend`, separate terminal):

```bash
npm run dev
```

## Available Scripts

### Frontend

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run lint` — run ESLint

### Backend

- `npm run dev` — start backend server
- `npm run start` — start backend server

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for development workflow and pull request guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
