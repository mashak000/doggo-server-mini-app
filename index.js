require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/usersRouter');
const dogsRouter = require('./routes/dogsRouter');
const questionsRouter = require('./routes/questionsRouter');
const sittersRouter = require('./routes/sittersRouter');
const ordersRouter = require('./routes/ordersRouter');
// const authMiddleware = require('./middleware/authMiddleware');
const bot = require('./bot');

const app = express();

app.use(express.json());
app.use(express.static('uploads'));
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(authMiddleware);
app.use('/api/users', userRouter);
app.use('/api/dogs', dogsRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/sitters', sittersRouter);
app.use('/api/orders', ordersRouter);

const { PORT } = process.env;

app.listen(PORT, () => console.log(` Server started on port ${PORT}`));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
