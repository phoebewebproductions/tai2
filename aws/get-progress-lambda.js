// Función Lambda para obtener el progreso del usuario
const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
  try {
    // Verificar autenticación (en una implementación real, verificaríamos el token JWT)
    // const token = event.headers.Authorization.split(' ')[1];
    // const verifiedUser = await verifyToken(token);

    // Para este ejemplo, asumimos que la autenticación ya se ha verificado
    const userId = event.pathParameters.userId

    if (!userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "ID de usuario requerido" }),
      }
    }

    // Consultar DynamoDB para obtener el registro más reciente
    const params = {
      TableName: "UserProgress",
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": userId,
      },
      Limit: 1,
      ScanIndexForward: false, // Ordenar por timestamp descendente (más reciente primero)
    }

    const result = await dynamodb.query(params).promise()

    if (result.Items && result.Items.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify(result.Items[0]),
      }
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "No se encontraron datos para este usuario" }),
      }
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" }),
    }
  }
}

