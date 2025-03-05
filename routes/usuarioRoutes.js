import {
  getUsuarios,
  setUsuarios,
  updateUsuarios,
  deleteUsuarios,
} from "../controllers/usuarioController.js";
import express from "express";

const router = express.Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios", setUsuarios);
router.put("/usuarios/:email", updateUsuarios);
router.delete("/usuarios/:email", deleteUsuarios);

export default router;
