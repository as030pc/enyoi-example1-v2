// Mostrar un mensaje de éxito en el formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validación simple
  if (nombre && email && mensaje) {
    document.getElementById("formMensaje").textContent = "¡Gracias por tu mensaje, " + nombre + "! Te responderé pronto.";
    document.getElementById("contactForm").reset(); // Limpiar el formulario
  } else {
    document.getElementById("formMensaje").textContent = "Por favor, completa todos los campos.";
    document.getElementById("formMensaje").style.color = "red";
  }
});

// Interacción para la sección de proyectos
document.getElementById("verProyectos").addEventListener("click", function() {
  document.getElementById("proyectos").scrollIntoView({ behavior: "smooth" });
});
