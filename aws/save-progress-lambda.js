// Función Lambda para guardar el progreso del usuario
const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
  try {
    // Verificar autenticación (en una implementación real, verificaríamos el token JWT)
    // const token = event.headers.Authorization.split(' ')[1];
    // const verifiedUser = await verifyToken(token);

    // Para este ejemplo, asumimos que la autenticación ya se ha verificado
    const body = JSON.parse(event.body)
    const { userId, timestamp, progressData } = body

    if (!userId || !timestamp || !progressData) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Faltan datos requeridos" }),
      }
    }

    // Guardar en DynamoDB
    const params = {
      TableName: "UserProgress",
      Item: {
        userId,
        timestamp,
        progressData,
      },
    }

    await dynamodb.put(params).promise()

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Progreso guardado exitosamente",
        timestamp,
      }),
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" }),
    }
  }
}

