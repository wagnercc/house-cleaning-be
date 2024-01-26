import { Router } from "express";
import getNearestCostumers from '../controllers/route-controller.js';

const routeTrack = Router();

routeTrack.get('/', async (req, res) => {
    const bestRoute = await getNearestCostumers();

    res.json(bestRoute);
})

export default routeTrack;