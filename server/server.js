// // // const express = require('express');
// // // const cors = require('cors');
// // // const connectDB = require('./config/db');
// // // require('dotenv').config();

// // // // Connect to MongoDB
// // // connectDB();

// // // const app = express();

// // // // Middleware
// // // app.use(cors());
// // // app.use(express.json());

// // // // Routes
// // // app.use('/api/tasks', require('./routes/tasks'));

// // // const PORT = process.env.PORT || 5000;
// // // console.log('MongoDB URI:', process.env.MONGO_URI);

// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });
// // const express = require('express');
// // const cors = require('cors');
// // const connectDB = require('./config/db');
// // require('dotenv').config();

// // // Connect to MongoDB
// // connectDB();

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use('/api/tasks', require('./routes/tasks'));

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// require('dotenv').config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/tasks', require('./routes/tasks'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// module.exports = app;
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// Define a function to start the server
const startServer = async () => {
  // Connect to MongoDB
  await connectDB();
  
  const PORT = process.env.PORT || 5000;
  
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  return server;
};

// Start the server if this file is run directly (not imported)
if (require.main === module) {
  startServer();
}

// Export the app and startServer function for testing
module.exports = { app, startServer };