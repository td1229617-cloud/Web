// ====== ANIMACIÓN DE CARGA ======
const progressBar = document.querySelector(".progress-bar");
let progreso = 0;

function cargarBarra() {
  const intervalo = setInterval(() => {
    if (progreso >= 100) {
      clearInterval(intervalo);
    } else {
      progreso += 1;
      progressBar.style.width = progreso + "%";
    }
  }, 50); // velocidad de carga (ajusta si quieres más lenta o rápida)
}

cargarBarra();

// ====== TIEMPO DE DESARROLLO ======
const tiempoTexto = document.getElementById("tiempo");
const inicioProyecto = new Date("2025-10-25T00:00:00"); // Cambia esta fecha por cuando empezaste tu web

function actualizarTiempo() {
  const ahora = new Date();
  const diff = ahora - inicioProyecto;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  tiempoTexto.textContent = `He tardado ${dias} días, ${horas} horas y ${minutos} minutos en crear esta página 😄`;
}

actualizarTiempo();
setInterval(actualizarTiempo, 60000); // se actualiza cada minuto

// ====== MODO OSCURO ======
const botonModo = document.getElementById("modoOscuroBtn");

botonModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  botonModo.textContent = document.body.classList.contains("dark")
    ? "☀️ Modo Claro"
    : "🌙 Modo Oscuro";
});
