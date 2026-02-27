const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const cors = require('cors');
// Cloud-Only mode enabled (AWS DynamoDB)
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const teamRoutes = require('./routes/teamRoutes');
const adminRoutes = require('./routes/adminRoutes');
console.log('AWS Cloud persistence active.');

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files for PDF reports
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
