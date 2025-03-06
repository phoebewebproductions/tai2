// Configuración de AWS
export const AWS_CONFIG = {
  region: "eu-north-1", // Tu región (eu-north-1)
  identityPoolId: "eu-north-1:98f256cd-bfe4-4ea6-997f-caf54c0ff4c5", // Tu Identity Pool ID
  googleClientId: "871056487357-h4pa41u49pqig30d491c15q5pui6evc8.apps.googleusercontent.com", // Tu ID de cliente de Google
  dynamoDBTable: "UserProgress", // Nombre de la tabla DynamoDB

  // Configuración para modo de desarrollo
  isDevelopmentMode: false, // Cambiar a true para activar el modo de desarrollo

  // Función para verificar si estamos en modo de desarrollo
  get inDevelopmentMode() {
    // Verificar si estamos en localhost o si se ha forzado el modo de desarrollo
    return (
      this.isDevelopmentMode || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    )
  },
}

// Inicializar AWS SDK si está disponible
if (typeof window.AWS !== "undefined") {
  console.log("Configurando AWS SDK...")

  // Configuración básica
  window.AWS.config.region = AWS_CONFIG.region

  // Configuración adicional para desarrollo
  if (AWS_CONFIG.inDevelopmentMode) {
    console.log("Modo de desarrollo de AWS activado")

    // Configurar para permitir solicitudes de origen cruzado
    window.AWS.config.httpOptions = {
      cors: true,
    }
  }

  console.log("AWS SDK configurado correctamente")
} else {
  console.error("AWS SDK no está disponible. Asegúrate de incluir el script de AWS SDK.")
}

