Task Tracker Application
A full-stack MERN application for tracking tasks with user authentication.
Tech Stack

Frontend:

React.js
React Router for navigation
Tailwind CSS for styling
Axios for API calls


Backend:

Node.js with Express.js
MongoDB (MongoDB Atlas) for database storage
JSON Web Tokens (JWT) for authentication
bcrypt.js for password hashing



Features

User registration and login
Token-based authentication
Create, read, update, and delete tasks
Task filtering (All, Pending, In-progress, Completed)
Responsive design with Tailwind CSS

Setup Instructions
Prerequisites

Node.js (v14 or higher)
MongoDB Atlas account (or local MongoDB installation)
NPM or Yarn package manager

Backend Setup

Clone the repository
Copygit clone <repository-url>
cd my-app/server

Install dependencies
Copynpm install

Create a .env file in the server directory with the following variables:
CopyMONGO_URI=<your-mongodb-connection-string>
PORT=5000
JWT_SECRET=<your-jwt-secret-key>

Start the server
Copynpm run dev


Frontend Setup

Navigate to the client directory
Copycd ../client

Install dependencies
Copynpm install

Start the React application
Copynpm start


Folder Structure
my-app               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Main application component
│   │   └── index.js      # Entry point
│   └── package.json
│
├── server/               # Node.js backend
│   ├── config/           # Configuration files
│   ├── middleware/       # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── .env              # Environment variables
│   ├── server.js         # Server entry point
│   └── package.json
│
└── README.md
API Endpoints

Authentication

POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
GET /api/auth/user - Get authenticated user data


Tasks

GET /api/tasks - Get all tasks for a user
GET /api/tasks/filter/:status - Get filtered tasks
GET /api/tasks/:id - Get a specific task
POST /api/tasks - Create a new task
PUT /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task



Development Time

Backend development: ~8 hours
Frontend development: ~12 hours
Styling and responsive design: ~4 hours
Testing and debugging: ~6 hours
Total: ~30 hours

Future Enhancements

Task due dates and reminders
Task categories/tags
Team collaboration features
Drag and drop interface
Task prioritization
Dark mode support
