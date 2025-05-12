# TP2 - React + Node.js (Validación de Usuario y Saludo)

Este proyecto es una aplicación simple que valida un nombre ingresado por el usuario mediante un backend en Node.js, a la vez le permite cargar nuevos nombres a una lista y luego mostrarla, si el nombre esta dentro de la lista le dira nombre valido, sino le saludara y le dirá nombre invalido Se divide en dos partes: **frontend (ReactJS)** y **backend (Node.js + Express)**.

---

## 📁 Estructura del Proyecto

```
TP2/
├── backend/
│   ├── controllers/
|   |   └── usuarios.controller.js
│   ├── db/
|   |   └── usuarios.js
│   ├── routes/
|   |   └── usuarios.routes.js
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   └── App.css
│   │   └── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
```

---


## 🔧 Instalación y Ejecución

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Ticii18/TP2-ReactJS.git
cd TP2-ReactJS
```

### 2. Iniciar el Backend

```bash
cd backend
npm install
npm run dev
```

> El servidor backend se ejecutará en `http://localhost:3000`

### 3. Iniciar el Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

> El frontend se ejecutará en `http://localhost:5173`

---

## 🔄 ¿Cómo funciona?

1. El usuario ingresa su nombre en el campo de texto.
2. Al escribir su nombre:
   - Se valida el nombre con `GET /saludar/validar/:nombre`.
   - Si es válido, se muestra un saludo con `GET /saludar/saludo/:nombre`.
3. El mensaje aparece en pantalla.
4. Tambien puede cargar un nombre:
   -Escribe el nombre que desa cargar y envia a la ruta `/saludar/saludo/agregar`
   -Se verifica si el nombre es correcto y se guarda
5. Mustra los nombres almacenados y guardados
   -Se muestran los nombres que el usuario cargo y los que estaban cargados previamente con la ruta `/saludar/nombres`
---

## 📦 Dependencias

### Backend
- express
- cors

### Frontend
- react
- tailwindcss
- react-dom
- vite

---

## 👨💻 Autor

- Nombre: Vera Ticiano

---
