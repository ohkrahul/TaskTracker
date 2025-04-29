const request = require('supertest');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { app } = require('../server'); // Import only the app, not startServer
const User = require('../models/User');
const Task = require('../models/Task');
const dbHandler = require('./testDbSetup');

describe('Tasks API', () => {
  let token;
  let testUser;
  let testTaskId;

  // Connect to a test database before running any tests
  beforeAll(async () => {
    jest.setTimeout(30000); // Increase timeout for database operations
    await dbHandler.connect();
    
    // Create a test user
    testUser = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123' // In a real test, you'd use bcrypt to hash this
    });
    
    await testUser.save();
    
    // Generate a JWT token for authentication
    token = jwt.sign(
      { id: testUser._id },
      process.env.JWT_SECRET || 'testsecret',
      { expiresIn: '1h' }
    );
  });

  // Clear all test data after each test
  afterEach(async () => {
    await Task.deleteMany({});
  });

  // Disconnect from the database after all tests
  afterAll(async () => {
    await dbHandler.clearDatabase();
    await dbHandler.closeDatabase();
    await mongoose.disconnect();
  });

  // Test GET /api/tasks endpoint
  describe('GET /api/tasks', () => {
    beforeEach(async () => {
      // Create some test tasks
      await Task.create([
        {
          title: 'Task 1',
          description: 'Description for task 1',
          status: 'pending',
          completed: false,
          user: testUser._id
        },
        {
          title: 'Task 2',
          description: 'Description for task 2',
          status: 'in-progress',
          completed: false,
          user: testUser._id
        },
        {
          title: 'Task 3',
          description: 'Description for task 3',
          status: 'completed',
          completed: true,
          user: testUser._id
        }
      ]);
    });

    it('should fetch all tasks for authenticated user', async () => {
      const response = await request(app)
        .get('/api/tasks')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBe(3);
      expect(response.body[0]).toHaveProperty('title');
      expect(response.body[0]).toHaveProperty('description');
      expect(response.body[0]).toHaveProperty('status');
    });

    it('should return 401 if user is not authenticated', async () => {
      const response = await request(app)
        .get('/api/tasks');

      expect(response.status).toBe(401);
    });
  });

  // Rest of your test cases remain the same...
  
  // Example of another test case for completion
  describe('GET /api/tasks/filter/:status', () => {
    beforeEach(async () => {
      // Create test tasks with different statuses
      await Task.create([
        {
          title: 'Pending Task',
          description: 'This is pending',
          status: 'pending',
          completed: false,
          user: testUser._id
        },
        {
          title: 'In Progress Task',
          description: 'This is in progress',
          status: 'in-progress',
          completed: false,
          user: testUser._id
        },
        {
          title: 'Completed Task',
          description: 'This is completed',
          status: 'completed',
          completed: true,
          user: testUser._id
        }
      ]);
    });

    it('should filter tasks by status', async () => {
      const response = await request(app)
        .get('/api/tasks/filter/pending')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBe(1);
      expect(response.body[0].status).toBe('pending');
    });
  });
});