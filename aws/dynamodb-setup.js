// Este código se ejecutaría en AWS Lambda o localmente con AWS CLI
const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB()

const params = {
  TableName: "UserProgress",
  KeySchema: [
    { AttributeName: "userId", KeyType: "HASH" }, // Clave de partición
    { AttributeName: "timestamp", KeyType: "RANGE" }, // Clave de ordenación
  ],
  AttributeDefinitions: [
    { AttributeName: "userId", AttributeType: "S" },
    { AttributeName: "timestamp", AttributeType: "S" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
}

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error("Error al crear la tabla:", err)
  } else {
    console.log("Tabla creada exitosamente:", data)
  }
})

