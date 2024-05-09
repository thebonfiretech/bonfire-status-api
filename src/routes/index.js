import { Router } from "express";

import PingController from "../resources/ping/ping.controllers.js";

const pingController = new PingController();
export const router = Router();

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

router.delete('/ping/delete', pingController.deletePing);
router.post('/ping/create', pingController.createPing);
router.get('/ping/get', pingController.getHistoric);
router.post('/ping/post', pingController.post);