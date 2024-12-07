# Todo-Zusty 📝

A simple and elegant To-Do application built with  **Next.js** ,  **TypeScript** ,  **Zustand** , and  **Tailwind CSS** . This app allows you to manage your tasks day-by-day with features such as adding, editing, deleting, and organizing tasks, while persisting data locally in your browser's storage.

## 🚀 Features

* **Add To-Do Items** : Quickly add tasks to your list.
* **View Tasks by Date** : Tasks are organized day by day; by default, you see today's tasks.
* **Edit To-Do Items** : Modify task titles and other details with ease.
* **Delete To-Do Items** : Remove tasks when they are no longer needed.
* **Completion Status** : Mark tasks as completed; completed tasks are visually differentiated (e.g., with strikethrough text).
* **Persistent Data** : All tasks are saved in the browser's local storage for seamless use across sessions.
* **Functional Components and Hooks** : Built with React functional components and hooks for a clean, modern codebase.

## 🛠️ Tech Stack

* **Framework** : [Next.js](https://nextjs.org/)
* **Language** : [TypeScript](https://www.typescriptlang.org/)
* **State Management** : [Zustand](https://zustand-demo.pmnd.rs/)
* **Styling** : [Tailwind CSS](https://tailwindcss.com/)
* **Data Persistence** : Local Storage

## 📂 Project Structure

```bash
├── components
│   ├── CalendarHeader.tsx      # Displays tasks organized by date
│   ├── Navbar.tsx              # Navigation bar for task views (Today, Completed, Ongoing)
│   ├── TaskItem.tsx            # Component to render individual tasks
├── hooks
│   ├── useTasks.ts             # Zustand store for managing task state
├── pages
│   ├── index.tsx               # Home page (shows today's tasks)
│   ├── today.tsx               # Tasks for the current day
│   ├── completed.tsx           # Completed tasks
│   ├── ongoing.tsx             # Ongoing tasks
├── styles
│   ├── globals.css             # Global Tailwind CSS styles
├── utils
│   ├── dateHelpers.ts          # Helper functions for date manipulation
├── public                      # Static assets
├── package.json                # Project dependencies
```

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tejanshsachdeva/todo-zusty.git
   cd todo-zusty
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## 🛠️ Usage

### Adding a Task

1. Use the input box to add a new task.
2. Set the due date if needed; by default, tasks are assigned to "Today."

### Managing Tasks

* **Edit** : Click on a task to modify its details.
* **Delete** : Remove unnecessary tasks with the delete option.
* **Completion** : Toggle the completion status to mark tasks as done or ongoing.

### Navigating Tasks

* Use the **Navbar** to switch between "Today," "Completed," and "Ongoing" views.
* Tasks automatically group by their due dates for better organization.

---
