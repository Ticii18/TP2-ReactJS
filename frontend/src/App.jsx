import { useState, useEffect } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [otroNombre, setOtroNombre] = useState("");
  const [saludo, setSaludo] = useState("");
  const [validacion, setValidacion] = useState("");
  const [respuestaPost, setRespuestaPost] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  // cargar y verificar nombres
  useEffect(() => {
    if (nombre !== "") {
      fetch(`http://localhost:3000/saludar/saludo/${nombre}`)
        .then((res) => res.json())
        .then((data) => setSaludo(data.message));

      fetch(`http://localhost:3000/saludar/validar/${nombre}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Nombre no válido");
          }
          return res.json();
        })
        .then((data) => setValidacion(data.message))
        .catch(() => setValidacion("Nombre no válido"));
    }
  }, [nombre]);
  // agregar un nuevo nombre
const handleSubmit = () => {
  fetch("http://localhost:3000/saludar/saludo/agregar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre: otroNombre }),
  })
    .then((res) => res.json())
    .then((data) => {
      setRespuestaPost(data.message);

      // Solo agregar al estado si el nombre fue aceptado
      if (data.message.includes("correctamente")) {
        setUsuarios((prev) => [...prev, { nombre: otroNombre.trim().toLowerCase() }]);
        setOtroNombre("");
      }
    })
    .catch((err) => {
      console.error("Error al guardar:", err);
    });
};
  // mostrar todos los nombres
  useEffect(() => {
    fetch("http://localhost:3000/saludar/nombres")
      .then((res) => res.json())
      .then((data) => setUsuarios(data.usuarios))
      .catch((err) => console.error("Error al obtener los usuarios:", err));
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-600 to-slate-900 min-h-screen flex flex-col items-center justify-center gap-10 p-10">
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            Trabajo Práctico 2
          </h1>
      <div className="flex flex-row gap-10">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-80">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-center text-slate-800 mb-4">
            Verificar nombre
          </h1>
            <label className="text-lg text-slate-700 font-medium">
              Ingrese su nombre:
            </label>
            <input
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              type="text"
              placeholder="Ticiano"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {saludo && <p className="text-slate-600 text-center">{saludo}</p>}
            {validacion && (
              <p
                className={`text-center ${
                  validacion.includes("no válido")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {validacion}
              </p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-10 w-80">
          <h1 className="text-2xl font-bold text-center text-slate-800 mb-4">
            Almacenar nombre
          </h1>
          <div className="flex flex-col gap-4">
            <label className="text-lg text-slate-700 font-medium">
              Ingrese el nombre que desea cargar:
            </label>
            <input
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
              type="text"
              placeholder="Martin"
              value={otroNombre}
              onChange={(e) => setOtroNombre(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Enviar nombre
            </button>
            {respuestaPost && (
              <p className="text-green-600 text-center">{respuestaPost}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[26rem] text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Lista de nombres válidos
        </h2>
        <ul className="divide-y divide-slate-200">
          {usuarios.map((usuario, index) => (
            <li
              key={index}
              className="py-2 text-slate-700 hover:bg-slate-100 transition-colors rounded"
            >
              {usuario.nombre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
