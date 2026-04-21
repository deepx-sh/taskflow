# TaskFlow (Task Management System)

A responsive and interactive task management dashboard built with **React** and **Tailwind CSS**. It features role-based access (Admin + Employees), task status transitions, and persistent data using `localStorage`.

## Features

### Role-based Login

- **Admin** can view all employees and assign tasks.
- **Employees** can view only their tasks and update task status.

### Task States

Each task goes through one of the following states:

- `New Task` → `Active` → `Completed` / `Failed`

### Local Persistence

- All employee data and tasks are saved in browser `localStorage`.
- Works offline; no backend required.
- Data persists across page reloads.

### UI/UX

- Fully responsive
- Clear task categories and progress stats
- Modern React patterns (hooks + context API)
- Styled with Tailwind CSS for a clean look

## Live Demo

Check out the live demo [here](https://taskflow-task-management.vercel.app/).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/deepx-sh/taskflow.git
cd taskflow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## Tech Stack

- React (Vite)
- Tailwind CSS
- LocalStorage for persistence
- React Context API for state management

If you like this project, feel free to ⭐ star the repository and share it with others!
