import express from 'express';
import customersRouter from './customers/customers-router.js';
import routeTrack from './nearest-customer/nearest-customer.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/customers', customersRouter);
app.use('/nearest-customers', routeTrack);

export default app;