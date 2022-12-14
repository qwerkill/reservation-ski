const express = require('express');
const app = express();
require('dotenv').config()
const connectMongo = require('./config/mongo');
const PostRouter = require('./src/routers/post.router');
const CommentRouter = require('./src/routers/comment.router')
const BookingRouter = require('./src/routers/booking.router')
const cors = require('cors');



connectMongo();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(8000, () => {
    console.log('Server running on port 8000')
})

app.use('/api',PostRouter );
app.use('/api',CommentRouter);
app.use('/api',BookingRouter);