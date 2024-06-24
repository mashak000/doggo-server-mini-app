require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/usersRouter');
const dogRouter = require('./routes/dogRouter');
const authMiddleware = require('./middleware/authMiddleware');
// const showInitDataMiddleware = require('./middleware/showInitDataMiddleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(authMiddleware);
// app.get('/', showInitDataMiddleware);
app.use('/api/users', userRouter);
app.use('/api/dogs', dogRouter);

const { PORT } = process.env;

app.listen(PORT, () => console.log(` Server started on port ${PORT}`));
