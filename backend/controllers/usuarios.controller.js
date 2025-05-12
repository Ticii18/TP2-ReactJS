import { usuariosValidos } from "../db/usuarios.js"

export const Usuarios = (req, res) => {
    res.json({ usuarios: usuariosValidos })
}


export const saludo = (req, res) => {
    const nombre = req.params.nombre;
    res.json({ message: `Hola ${nombre}` });
}

export const validarSaludo = (req, res) => {
    const nombre = req.params.nombre.toLowerCase();
    const existe = usuariosValidos.some(
        (usuario) => usuario.nombre.toLowerCase() === nombre
    );
    if (existe) {
        res.json({ message: `El nombre ${req.params.nombre} es válido` });
    } else {
        res.status(404).json({ message: `El nombre ${req.params.nombre} no está autorizado` });
    }
}


export const agregarUsuario = (req, res) => {
    let { nombre } = req.body;

    if (!nombre || typeof nombre !== 'string') {
        return res.status(400).json({ message: "Falta el nombre o es inválido." });
    }

    nombre = nombre.trim().toLowerCase(); 

    if (nombre.length === 0) {
        return res.status(400).json({ message: "El nombre no puede estar vacío o tener solo espacios." });
    }

    const yaExiste = usuariosValidos.some(u => u.nombre.toLowerCase() === nombre);
    if (yaExiste) {
        return res.json({ message: "El nombre ingresado ya está cargado." });
    }

    usuariosValidos.push({ nombre });
    console.log("Nuevo usuario agregado:", nombre);
    res.json({ message: "Se cargó el nombre correctamente." });
};

