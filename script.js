document.addEventListener("DOMContentLoaded", function () {
  const lirios = ['lirio1.png', 'lirio2.png', 'lirio3.png'];
  const contenedorFlores = document.getElementById('flores');

  for (let i = 0; i < 30; i++) {
    const flor = document.createElement('img');
    flor.src = lirios[Math.floor(Math.random() * lirios.length)];
    flor.className = 'flor';

    const tamaño = Math.random() * 80 + 80;
    flor.style.width = `${tamaño}px`;
    flor.style.left = `${Math.random() * 100}%`;
    flor.style.top = `${Math.random() * window.innerHeight}px`;
    flor.style.animationDuration = `${12 + Math.random() * 6}s`;
    flor.style.animationDelay = `${Math.random() * 10}s`;

    flor.onerror = () => flor.remove();
    contenedorFlores.appendChild(flor);
  }

  const texto = [
    "Cuando escuché tu risa, lo supe.",
    "Cuando hablamos horas sin parar, lo sentí.",
    "Y cuando te pienso, lo confirmo:",
    "Mi corazón te eligió a ti, Milena.",
    "",
    "Te regalo esta experiencia para recordarte",
    "lo especial que eres. 🌸✨",
    "Gracias por estar en mi vida."
  ];
  const destino = document.getElementById("texto-maquina");
  let linea = 0, caracter = 0;

  function escribirLinea() {
    if (linea < texto.length) {
      if (caracter < texto[linea].length) {
        destino.innerHTML += texto[linea].charAt(caracter);
        caracter++;
        setTimeout(escribirLinea, 60);
      } else {
        destino.innerHTML += "<br/>";
        linea++;
        caracter = 0;
        setTimeout(escribirLinea, 500);
      }
    }
  }
  escribirLinea();

  const audio = document.getElementById("musica");
  const boton = document.getElementById("boton-musica");

  boton.onclick = () => {
    if (audio.paused) {
      audio.play();
      boton.textContent = '⏸️ Pausar música';
    } else {
      audio.pause();
      boton.textContent = '🎵 Reproducir música';
    }
  };

  document.getElementById("download-pdf").onclick = () => {
    window.location.href = "carta.pdf";
  };
});
