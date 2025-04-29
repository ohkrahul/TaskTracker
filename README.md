# TaskTracker

A full-stack MERN application for managing and tracking tasks with user authentication, filtering, search functionality, and comprehensive status management.

## 🚀 Features

- **User Authentication**: Secure login and registration with JWT
- **Task Management**: Create, read, update, and delete tasks
- **Status Tracking**: Mark tasks as pending, in-progress, or completed
- **Search Functionality**: Filter tasks by title in real-time
- **Task Filtering**: Filter tasks by their status
- **Client-Side Routing**: Seamless navigation between views
- **Detailed Task Views**: Dedicated pages for viewing and editing task details
- **Responsive Design**: Works on mobile, tablet, and desktop

## 🛠️ Tech Stack

### Frontend
- **React.js**: UI components and state management
- **React Router**: Client-side routing and navigation
- **Tailwind CSS**: Styling and responsive design
- **Axios**: API requests to the backend

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **JWT**: Authentication and authorization
- **Bcrypt.js**: Password hashing

### Testing
- **Jest**: Testing framework for both frontend and backend
- **React Testing Library**: Component testing
- **Supertest**: API endpoint testing

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB installation)
- npm or yarn package manager

## 🔧 Installation and Setup

### Clone the repository
```bash
git clone https://github.com/ohkrahul/TaskTracker.git
cd TaskTracker
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file in the server directory with the following:
# MONGO_URI=your_mongodb_connection_string
# PORT=5000
# JWT_SECRET=your_jwt_secret_key

# Start the server
npm run dev
```

### Frontend Setup
```bash
# Navigate to the client directory
cd ..

# Install dependencies
npm install

# Start the React application
npm start
```

## 🧪 Running Tests

### Backend Tests
```bash
# Navigate to server directory
cd server

# Run tests
npm test
```

### Frontend Tests
```bash
# In the project root
npm test
```

## 📁 Project Structure

```
TaskTracker/             # Root directory
│
├── public/              # Static files
│   └── ...
│
├── src/                 # React frontend
│   ├── components/      # React components
│   │   ├── __tests__/   # Component tests
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TaskDashboard.jsx
│   │   ├── TaskDetails.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskFilter.jsx
│   ├── App.js           # Main application component
│   └── index.js         # Entry point
│
├── server/              # Node.js backend
│   ├── __tests__/       # API tests
│   │   ├── tasks.test.js
│   │   └── testDbSetup.js
│   ├── config/          # Configuration files
│   │   └── db.js
│   ├── middleware/      # Custom middleware
│   │   └── auth.js
│   ├── models/          # Mongoose models
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/          # API routes
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── .env             # Environment variables
│   ├── .env.test        # Test environment variables
│   ├── server.js        # Server entry point
│   └── package.json
│
└── package.json
```

## 🔄 API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login a user
- **GET** `/api/auth/user` - Get authenticated user data

### Tasks
- **GET** `/api/tasks` - Get all tasks for a user
- **GET** `/api/tasks/filter/:status` - Get filtered tasks
- **GET** `/api/tasks/:id` - Get a specific task
- **POST** `/api/tasks` - Create a new task
- **PUT** `/api/tasks/:id` - Update a task
- **DELETE** `/api/tasks/:id` - Delete a task

## 🧩 Key Features Implementation

### Search Functionality
- Real-time search filtering without additional API calls
- Clear button for easy search reset
- Visual feedback for search results

### Client-Side Routing
- Bookmark-friendly URLs for tasks and filtered views
- Detailed task pages with dedicated URLs
- URL-based filtering (e.g., `/tasks/filter/completed`)

### Comprehensive Testing
- Frontend component testing with React Testing Library
- Backend API testing with Supertest
- Test database isolation with MongoDB Memory Server

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/ohkrahul/TaskTracker/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Rahul**
- GitHub: [@ohkrahul](https://github.com/ohkrahul)
