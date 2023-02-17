import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: 'true' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: 'true' }));
app.use(cors());

//connect to mongo db
const CONNECT_URL =
  'mongodb+srv://recollect:recollect123@cluster0.kgf6lkh.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose
  .connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `))
  )
  .catch((error) => console.log(error.message));
