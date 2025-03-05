import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
app.use(express.json());
app.use("/api", usuarioRoutes);
app.listen(1509);
