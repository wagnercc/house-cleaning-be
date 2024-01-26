import { Router } from "express";
import customers from "./customers.js";

const customersRouter = Router();

customersRouter.post('/', async (req, res) => {
    const result = await customers.create(req.body);

    res.status(201).json(result);
})

customersRouter.get('/', async (req, res) => {
    const result = await customers.list();

    res.json(result);
})

export default customersRouter;