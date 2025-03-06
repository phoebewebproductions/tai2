// Archivo para depurar problemas de autenticación
console.log("Iniciando depuración de autenticación...")

// Verificar origen actual
console.log("Origen actual:", window.location.origin)

// Verificar Client ID configurado
const gsiElement = document.getElementById("g_id_onload")
if (gsiElement) {
  console.log("Client ID configurado:", gsiElement.getAttribute("data-client_id"))
} else {
  console.log("Elemento g_id_onload no encontrado")
}

// Verificar si la función de callback está definida
console.log("Función handleCredentialResponse definida:", typeof window.handleCredentialResponse === "function")

// Verificar si hay errores en la carga del script de Google
window.addEventListener("error", (event) => {
  if (event.filename && event.filename.includes("accounts.google.com")) {
    console.error("Error en script de Google:", event)
  }
})

