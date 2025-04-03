# TaskTracker

A full-stack MERN application for managing and tracking tasks with user authentication, filtering, and status management.

![Task Tracker App](https://raw.githubusercontent.com/ohkrahul/TaskTracker/main/screenshots/task-dashboard.png)

## 🚀 Features

- **User Authentication**: Secure login and registration with JWT
- **Task Management**: Create, read, update, and delete tasks
- **Status Tracking**: Mark tasks as pending, in-progress, or completed
- **Task Filtering**: Filter tasks by their status
- **Responsive Design**: Works on mobile, tablet, and desktop

## 🛠️ Tech Stack

### Frontend
- **React.js**: UI components and state management
- **React Router**: Navigation and routing
- **Tailwind CSS**: Styling and responsive design
- **Axios**: API requests to the backend

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **JWT**: Authentication and authorization
- **Bcrypt.js**: Password hashing

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
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Start the React application
npm start
```

## 🖼️ Screenshots

![Login Screen](https://raw.githubusercontent.com/ohkrahul/TaskTracker/main/screenshots/login.png)
![Task Dashboard](https://raw.githubusercontent.com/ohkrahul/TaskTracker/main/screenshots/task-dashboard.png)

## 📁 Project Structure

```
TaskTracker/             # React frontend
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

## 🌟 Future Enhancements

- Task due dates and reminders
- Task priority levels
- User profile management
- Team collaboration features
- Mobile application version
- Data visualization and reports

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

