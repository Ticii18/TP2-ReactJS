import { Router } from "express";
import { agregarUsuario, saludo, Usuarios, validarSaludo } from "../controllers/usuarios.controller.js";

const usuarioRouter= Router()

usuarioRouter.get("/nombres", Usuarios)
usuarioRouter.get("/saludo/:nombre", saludo)
usuarioRouter.get("/validar/:nombre", validarSaludo )
usuarioRouter.post("/saludo/agregar", agregarUsuario )


export {usuarioRouter}