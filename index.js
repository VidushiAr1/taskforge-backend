const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./src/routes/v1/auth.routes');
const taskRoutes = require('./src/routes/v1/task.routes');
const userRoutes = require('./src/routes/v1/user.routes');
const { errorHandler } = require('./src/middleware/error.middleware');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => res.json({ message: 'TaskForge API v1 running ✅' }));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
