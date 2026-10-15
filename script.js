
const telefonoEscuela = "529871021891";

document.getElementById("anio").textContent =
  new Date().getFullYear();

document.getElementById("formulario").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const texto =
    "Hola, me comunico desde la página web de la escuela.\n\n" +
    "Nombre: " + nombre + "\n" +
    "Correo: " + (correo || "No proporcionado") + "\n" +
    "Consulta: " + mensaje;

  const enlace =
    "https://wa.me/" + telefonoEscuela +
    "?text=" + encodeURIComponent(texto);

  window.open(enlace, "_blank");
});
