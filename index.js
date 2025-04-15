let visitas = localStorage.getItem("visitas");

if (visitas === null) {
  visitas = Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  localStorage.setItem("visitas", visitas);
} else {
  const incremento = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
  visitas = parseInt(visitas) + incremento;
  localStorage.setItem("visitas", visitas);
}

document.addEventListener("DOMContentLoaded", function () {
  const numeroElemento = document.getElementById("numero-visitas");
  let numeroActual = 0;
  const final = parseInt(visitas);
  const velocidad = 20;

  // Animar subida inicial
  const animar = () => {
    if (numeroActual < final) {
      numeroActual += Math.ceil((final - numeroActual) / 15);
      numeroElemento.textContent = "Visitas: " + numeroActual;
      setTimeout(animar, velocidad);
    } else {
      numeroElemento.textContent = "Visitas: " + final;
    }
  };

  animar();

  // Agrega animadamente visitas nuevas
  function sumarVisitasAnimado(cantidad) {
    let i = 0;
    const intervalo = setInterval(() => {
      visitas++;
      localStorage.setItem("visitas", visitas);
      numeroElemento.textContent = "Visitas: " + visitas;
      mostrarFlotante("+1");
      i++;
      if (i >= cantidad) clearInterval(intervalo);
    }, 300);
  }

  // Flotante verde
  function mostrarFlotante(texto) {
    const flotante = document.createElement("div");
    flotante.className = "flotante-visita";
    flotante.textContent = texto;
    document.body.appendChild(flotante);
    setTimeout(() => flotante.remove(), 2000);
  }

});

// Función para mostrar comentario
function showComment(comment) {
  commentText.textContent = comment;
  commentBox.style.opacity = 1;
  commentBox.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    commentBox.style.opacity = 0;
  }, 3000); // El comentario desaparece después de 3 segundos
}

// Agregar eventos de hover a las redes sociales
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('mouseenter', function () {
    const comment = icon.getAttribute('data-comment');
    showComment(comment);
  });
});
