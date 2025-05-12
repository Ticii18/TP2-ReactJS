import express from "express";
import cors from "cors";
import { usuarioRouter } from "./routes/usuarios.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.use("/saludar",usuarioRouter)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
