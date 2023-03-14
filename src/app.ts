import express from 'express';
import productsRoute from './routes/productsRoute';
import userRouter from './routes/userRoute';
import orderRouter from './routes/orderRoute';

const app = express();

app.use(express.json());
app.use('/', productsRoute);
app.use('/', userRouter);
app.use('/', orderRouter);

export default app;
