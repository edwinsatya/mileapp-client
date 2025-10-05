# MileApp Frontend

This is the frontend for **MileApp Task Management**, built with **Nuxt 4**, **Tailwind CSS**, and **Pinia** for state management. It communicates with the MileApp backend for user authentication and task management.

## Features

- User registration and login
- JWT-based authentication with route guards using cookie
- Task CRUD (Create, Read, Update, Delete)
- Task filtering, sorting, and pagination
- Authorization: users can only edit/delete their own tasks
- Responsive design with Tailwind CSS
- State management with Pinia

## Technologies

- [Nuxt 4](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- Cookie authentication

## Pages

| Page       | Path       | Description                                      |
|------------|------------|--------------------------------------------------|
| Login      | `/login`   | User login page                                  |
| Register   | `/register`| User registration page                           |
| Tasks      | `/`        | Display all tasks with filter, sort, pagination |
| Create Task| `/create`  | Form to create a new task                        |
| Update Task| `/:id`     | Form to update a task (user can only edit own)  |

## Features Details

### Authentication & Route Guard

- Only logged-in users can access `/`, `/create`, and `/:id`.
- Users are redirected to `/login` if not authenticated.
- JWT token is stored in **Pinia store** or **cookies** for session persistence.

### Task Management

- **CRUD Operations:** Users can create, read, update, and delete tasks.
- **Authorization:** Only the creator of a task can edit or delete it.
- **Filter & Sort:** Tasks can be filtered by title or other properties and sorted by date or status.
- **Pagination:** Tasks are displayed with pagination to handle large lists.

### State Management

- **Pinia** is used to manage global state for:
  - User authentication
  - Task list
  - Filters, sorting, and pagination settings