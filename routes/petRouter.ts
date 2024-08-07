import express from "express";
import PetController from "../PetController";

const router = express.Router();

const petController = new PetController();

router.post("/", petController.createPet);

export default router;