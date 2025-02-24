const preguntas = {
    "3020101000e": {
      minimoParaAprobar: 11,
      preguntas: [
        {
          id: "3020101002",
          pregunta: "¿Cuántas fases se definen en el diseño de una base de datos?",
          opciones: ["Dos", "Tres", "Cuatro", "Cinco"],
          correcta: 1,
          preguntaId: "3020101001"
        },
        {
          id: "3020101007",
          pregunta: "¿Cuántos niveles se señalan en la representación de bases de datos?",
          opciones: ["Uno", "Dos", "Tres", "Cuatro"],
          correcta: 2,
          preguntaId: "3020101002"
        },
        {
          id: "3020101008",
          pregunta: "¿Cuál es el nivel más cercano al almacenamiento físico?",
          opciones: ["Nivel externo", "Nivel conceptual", "Nivel interno o físico", "Nivel lógico"],
          correcta: 2,
          preguntaId: "3020101003"
        },
        {
          id: "3020101012",
          pregunta: "¿Qué nivel corresponde a la vista de la base de datos desde el mundo real?",
          opciones: ["Nivel interno", "Nivel conceptual", "Nivel externo", "Nivel físico"],
          correcta: 1,
          preguntaId: "3020101004"
        },
        {
          id: "3020101013",
          pregunta: "¿Cuál es el nivel más cercano al usuario?",
          opciones: ["Nivel interno", "Nivel conceptual", "Nivel externo", "Nivel físico"],
          correcta: 2,
          preguntaId: "3020101005"
        },
        {
          id: "3020101018",
          pregunta: "¿Qué característica de una base de datos bien diseñada se refiere a eliminar datos repetidos en distintos lugares?",
          opciones: ["Integridad", "Capacidad de adaptación", "Redundancia mínima", "Afinación"],
          correcta: 2,
          preguntaId: "3020101006"
        },
        {
          id: "3020101019",
          pregunta: "¿Qué característica asegura que los valores almacenados no se destruyan con los fallos del sistema?",
          opciones: ["Integridad", "Seguridad", "Redundancia mínima", "Versatilidad"],
          correcta: 0,
          preguntaId: "3020101007"
        },
        {
          id: "3020101022",
          pregunta: "¿Qué característica se refiere a que los datos sean accesibles solo para usuarios autorizados?",
          opciones: ["Integridad", "Seguridad y privacidad", "Capacidad de adaptación", "Afinación"],
          correcta: 1,
          preguntaId: "3020101008"
        },
        {
          id: "3020101024",
          pregunta: "¿Qué permite el modelo de datos de una aplicación informática?",
          opciones: ["Solo describir los elementos", "Solo describir las interacciones", "Describir elementos, interacciones y restricciones", "Ninguna de las anteriores"],
          correcta: 2,
          preguntaId: "3020101009"
        },
        {
          id: "3020101029",
          pregunta: "¿Cuál es el primer paso en el diseño de una base de datos?",
          opciones: ["Diseño físico", "Producción del modelo conceptual", "Identificación de relaciones", "Dibujo del diagrama entidad-relación"],
          correcta: 1,
          preguntaId: "3020101010"
        },
        {
          id: "3020101031",
          pregunta: "En la identificación de entidades, ¿qué se busca en las especificaciones?",
          opciones: ["Verbos", "Adjetivos", "Nombres o sintagmas nominales", "Adverbios"],
          correcta: 2,
          preguntaId: "3020101011"
        },
        {
          id: "3020101032",
          pregunta: "Para identificar las relaciones, ¿qué tipo de expresiones se suelen buscar?",
          opciones: ["Nominales", "Verbales", "Adjetivales", "Adverbiales"],
          correcta: 1,
          preguntaId: "3020101012"
        },
        {
          id: "3020101034",
          pregunta: "¿Qué es el dominio de un atributo?",
          opciones: ["El nombre del atributo", "La entidad a la que pertenece", "El conjunto de valores que puede tomar", "La relación en la que participa"],
          correcta: 2,
          preguntaId: "3020101013"
        },
        {
          id: "3020101035",
          pregunta: "¿Qué tipo de identificadores pueden tener las entidades?",
          opciones: ["Solo simples", "Solo compuestos", "Simples o compuestos", "Ninguno"],
          correcta: 2,
          preguntaId: "3020101014"
        },
        {
          id: "3020101036",
          pregunta: "¿Qué se obtiene al dibujar el diagrama entidad-relación?",
          opciones: ["Un esquema físico", "Un esquema lógico", "Un esquema conceptual", "Un esquema de red"],
          correcta: 2,
          preguntaId: "3020101015"
        }
      ]
    },
    "3020201000e": {
    minimoParaAprobar: 11,
    preguntas: [
      {
        id: "3020201001",
        pregunta: "¿Qué determina el diseño de bases de datos?",
        opciones: [
          "Solo la estructura de la base de datos",
          "Solo el contenido de la base de datos",
          "La organización, estructura, contenido y aplicaciones de la base de datos",
          "Solo las aplicaciones que se desarrollarán"
        ],
        correcta: 2,
        preguntaId: "3020201001"
      },
      {
        id: "3020201002",
        pregunta: "¿Cómo se describe el proceso de desarrollo del esquema lógico?",
        opciones: [
          "Lineal",
          "Iterativo",
          "Estático",
          "Aleatorio"
        ],
        correcta: 1,
        preguntaId: "3020201002"
      },
      {
        id: "3020201005",
        pregunta: "¿Cuál es el modelo de datos más usado en la actualidad?",
        opciones: [
          "Modelo jerárquico",
          "Modelo en red",
          "Modelo relacional",
          "Modelo orientado a objetos"
        ],
        correcta: 2,
        preguntaId: "3020201003"
      },
      {
        id: "3020201006",
        pregunta: "¿Cuál es el objetivo principal del diseño lógico?",
        opciones: [
          "Crear un esquema físico de la base de datos",
          "Conseguir un esquema lógico de la base de datos",
          "Desarrollar aplicaciones para la base de datos",
          "Validar los requisitos del usuario"
        ],
        correcta: 1,
        preguntaId: "3020201004"
      },
      {
        id: "3020201007",
        pregunta: "¿Qué posición ocupa el diseño lógico en el proceso de desarrollo de una base de datos?",
        opciones: [
          "Es la primera etapa",
          "Es la última etapa",
          "Es la etapa intermedia",
          "No es parte del proceso de desarrollo"
        ],
        correcta: 2,
        preguntaId: "3020201005"
      },
      {
        id: "3020201008",
        pregunta: "¿Qué incluye un modelo de base de datos en la fase de diseño lógico?",
        opciones: [
          "Solo la estructura física de los datos",
          "Solo las relaciones entre los datos",
          "La estructura lógica, relaciones y limitaciones de los datos",
          "Solo las aplicaciones que utilizarán la base de datos"
        ],
        correcta: 2,
        preguntaId: "3020201006"
      },
      {
        id: "3020201009",
        pregunta: "¿Quién presentó el modelo de base de datos relacional?",
        opciones: [
          "Bill Gates",
          "Steve Jobs",
          "Edgar F. Codd",
          "Larry Ellison"
        ],
        correcta: 2,
        preguntaId: "3020201007"
      },
      {
        id: "3020201010",
        pregunta: "¿Qué significa la independencia física en el modelo relacional?",
        opciones: [
          "Los datos están físicamente separados",
          "Los usuarios no modifican sus programas por cambios en el almacenamiento físico",
          "La base de datos está en un servidor físico separado",
          "Los datos no pueden ser modificados físicamente"
        ],
        correcta: 1,
        preguntaId: "3020201008"
      },
      {
        id: "3020201011",
        pregunta: "¿Qué implica la independencia lógica en el modelo relacional?",
        opciones: [
          "Los datos no pueden ser modificados",
          "Los programas y usuarios no se ven afectados por cambios en la estructura de la base de datos",
          "Los datos están lógicamente separados de las aplicaciones",
          "Cada usuario tiene su propia lógica de acceso a los datos"
        ],
        correcta: 1,
        preguntaId: "3020201009"
      },
      {
        id: "3020201012",
        pregunta: "¿Qué característica del modelo relacional permite ofrecer los datos de forma adecuada a cada aplicación?",
        opciones: [
          "Uniformidad",
          "Sencillez",
          "Flexibilidad",
          "Independencia física"
        ],
        correcta: 2,
        preguntaId: "3020201010"
      },
      {
        id: "3020201013",
        pregunta: "¿Cómo se presenta la uniformidad en el modelo relacional?",
        opciones: [
          "Todos los datos tienen el mismo formato",
          "Las estructuras lógicas de los datos presentan un aspecto uniforme (tablas)",
          "Todos los usuarios ven los datos de la misma manera",
          "Los datos se almacenan en un único lugar"
        ],
        correcta: 1,
        preguntaId: "3020201011"
      },
      {
        id: "3020201014",
        pregunta: "¿Cuál es una de las características principales del modelo de datos relacional?",
        opciones: [
          "Complejidad",
          "Rigidez",
          "Sencillez",
          "Inconsistencia"
        ],
        correcta: 2,
        preguntaId: "3020201012"
      },
      {
        id: "3020201015",
        pregunta: "¿Cómo ordena los datos el modelo lógico relacional?",
        opciones: [
          "En árboles",
          "En grafos",
          "En tablas (relaciones)",
          "En listas enlazadas"
        ],
        correcta: 2,
        preguntaId: "3020201013"
      },
      {
        id: "3020201016",
        pregunta: "¿Qué es un dominio en el contexto de las bases de datos relacionales?",
        opciones: [
          "El nombre de una tabla",
          "El conjunto de posibles valores de un atributo",
          "Una fila de la tabla",
          "Una relación entre tablas"
        ],
        correcta: 1,
        preguntaId: "3020201014"
      },
      {
        id: "3020201019",
        pregunta: "Según la regla de información de Codd, ¿cómo está representada la información en una base de datos relacional?",
        opciones: [
          "En forma de árboles",
          "En forma de grafos",
          "Explícitamente a nivel lógico mediante valores en tablas",
          "En forma de listas enlazadas"
        ],
        correcta: 2,
        preguntaId: "3020201015"
      }
    ]
  },
  "3020202000e": {
    minimoParaAprobar: 12,
    preguntas: [
      {
        id: "3020202001",
        pregunta: "¿Qué se define en la fase de diseño físico de una base de datos?",
        opciones: [
          "El modelo conceptual",
          "Las estructuras de almacenamiento de forma física",
          "Las reglas de negocio",
          "Los requisitos del usuario"
        ],
        correcta: 1,
        preguntaId: "3020202001"
      },
      {
        id: "3020202001",
        pregunta: "¿Qué tipo de código se escribe generalmente en la fase de diseño físico?",
        opciones: [
          "Java",
          "Python",
          "SQL",
          "C++"
        ],
        correcta: 2,
        preguntaId: "3020202002"
      },
      {
        id: "3020202002",
        pregunta: "¿Cuál es el objetivo general del diseño físico de una base de datos?",
        opciones: [
          "Definir el modelo conceptual",
          "Crear el esquema lógico",
          "Definir las estructuras de almacenamiento y acceso para un buen rendimiento",
          "Establecer las reglas de negocio"
        ],
        correcta: 2,
        preguntaId: "3020202003"
      },
      {
        id: "3020202002",
        pregunta: "¿Qué se busca minimizar en un buen diseño físico?",
        opciones: [
          "El número de tablas",
          "El tiempo de respuesta",
          "El número de usuarios",
          "La cantidad de datos almacenados"
        ],
        correcta: 1,
        preguntaId: "3020202004"
      },
      {
        id: "3020202002",
        pregunta: "¿Qué se busca maximizar en un buen diseño físico?",
        opciones: [
          "El espacio en disco",
          "El número de índices",
          "La productividad de las transacciones",
          "El número de tablas"
        ],
        correcta: 2,
        preguntaId: "3020202005"
      },
      {
        id: "3020202002",
        pregunta: "¿Qué aspecto se busca optimizar en relación al espacio en un buen diseño físico?",
        opciones: [
          "El número de usuarios concurrentes",
          "La velocidad de las consultas",
          "El aprovechamiento del espacio",
          "La cantidad de índices"
        ],
        correcta: 2,
        preguntaId: "3020202006"
      },
      {
        id: "3020202003",
        pregunta: "¿Qué debe hacerse con el esquema lógico global en el diseño físico?",
        opciones: [
          "Ignorarlo",
          "Traducirlo para el SGBD específico",
          "Eliminarlo",
          "Mantenerlo sin cambios"
        ],
        correcta: 1,
        preguntaId: "3020202007"
      },
      {
        id: "3020202003",
        pregunta: "¿Qué tipo de índices se deben desarrollar en el diseño físico?",
        opciones: [
          "Solo principales",
          "Solo secundarios",
          "Principales y secundarios",
          "Ninguno"
        ],
        correcta: 2,
        preguntaId: "3020202008"
      },
      {
        id: "3020202003",
        pregunta: "¿Cómo deben considerarse las redundancias en el diseño físico?",
        opciones: [
          "Deben evitarse completamente",
          "Deben introducirse sin control",
          "Pueden introducirse de forma controlada",
          "Son irrelevantes para el diseño"
        ],
        correcta: 2,
        preguntaId: "3020202009"
      },
      {
        id: "3020202003",
        pregunta: "¿Qué tipo de mecanismos deben crearse para los archivos en el diseño físico?",
        opciones: [
          "De compresión",
          "De seguridad",
          "De fragmentación",
          "De replicación"
        ],
        correcta: 1,
        preguntaId: "3020202010"
      },
      {
        id: "3020202003",
        pregunta: "¿Qué se debe realizar constantemente en el sistema según el diseño físico?",
        opciones: [
          "Actualizaciones",
          "Backups",
          "Chequeos para descubrir fallas y errores",
          "Cambios en la estructura"
        ],
        correcta: 2,
        preguntaId: "3020202011"
      },
      {
        id: "3020202004",
        pregunta: "¿Cuál es la primera fase del diseño lógico?",
        opciones: [
          "Diseñar la representación física",
          "Traducir el esquema lógico global para el SGBD específico",
          "Analizar las transacciones",
          "Diseñar los mecanismos de seguridad"
        ],
        correcta: 1,
        preguntaId: "3020202012"
      },
      {
        id: "3020202005",
        pregunta: "¿Qué tipo de información se necesita en las revisiones de las transacciones?",
        opciones: [
          "Solo información cuantitativa",
          "Solo información cualitativa",
          "Información cuantitativa y cualitativa",
          "Ninguna información específica"
        ],
        correcta: 2,
        preguntaId: "3020202013"
      },
      {
        id: "3020202005",
        pregunta: "¿Dónde debe documentarse la organización de ficheros seleccionada?",
        opciones: [
          "En el manual de usuario",
          "En el código fuente",
          "En el Diccionario de datos",
          "En un archivo separado"
        ],
        correcta: 2,
        preguntaId: "3020202014"
      },
      {
        id: "3020202005",
        pregunta: "¿Qué forma normal se recomienda alcanzar como mínimo en el diseño lógico?",
        opciones: [
          "Primera forma normal",
          "Segunda forma normal",
          "Tercera forma normal",
          "Cuarta forma normal"
        ],
        correcta: 2,
        preguntaId: "3020202015"
      },
      {
        id: "3020202006",
        pregunta: "¿Qué aspectos incluye el diseño de mecanismos de seguridad?",
        opciones: [
          "Solo las vistas de los usuarios",
          "Solo las reglas de acceso",
          "Las vistas de los usuarios y las reglas de acceso",
          "Ninguno de los anteriores"
        ],
        correcta: 2,
        preguntaId: "3020202016"
      }
    ]
  },
  "3020203000e": {
      minimoParaAprobar: 9,
      preguntas: [
        {
          id: "3020203001",
          pregunta: "¿Cuál es el principal objetivo de la normalización en el diseño de bases de datos?",
          opciones: [
            "Aumentar la redundancia de datos",
            "Reducir la redundancia y la dependencia de los datos",
            "Aumentar el tamaño de las tablas",
            "Eliminar todas las relaciones entre tablas"
          ],
          correcta: 1,
          preguntaId: "3020203001"
        },
        {
          id: "3020203002",
          pregunta: "¿Quién propuso la teoría de la normalización e introdujo la primera forma normal?",
          opciones: [
            "Raymond F. Boyce",
            "Edgar Codd",
            "Bill Gates",
            "Steve Jobs"
          ],
          correcta: 1,
          preguntaId: "3020203002"
        },
        {
          id: "3020203003",
          pregunta: "¿Qué es una dependencia funcional en el contexto de la normalización?",
          opciones: [
            "Cuando un atributo depende de otro atributo",
            "Cuando una tabla depende de otra tabla",
            "Cuando un registro depende de otro registro",
            "Cuando una base de datos depende de otra base de datos"
          ],
          correcta: 0,
          preguntaId: "3020203003"
        },
        {
          id: "3020203003",
          pregunta: "¿Qué es una dependencia funcional transitiva?",
          opciones: [
            "Cuando un atributo depende directamente de la clave primaria",
            "Cuando un atributo depende de otro atributo que a su vez depende de la clave primaria",
            "Cuando dos atributos dependen mutuamente uno del otro",
            "Cuando un atributo no depende de ningún otro atributo"
          ],
          correcta: 1,
          preguntaId: "3020203004"
        },
        {
          id: "3020203004",
          pregunta: "¿Cuál es el primer paso en el proceso de normalización?",
          opciones: [
            "Eliminar las relaciones con dependencias transitivas",
            "Descomponer todos los grupos de datos en registros bidimensionales",
            "Eliminar las relaciones donde los datos no son completamente dependientes de la clave primaria",
            "Crear índices para todas las tablas"
          ],
          correcta: 1,
          preguntaId: "3020203005"
        },
        {
          id: "3020203005",
          pregunta: "¿Cuál de los siguientes NO es un requisito de la Primera Forma Normal (1NF)?",
          opciones: [
            "Todos los atributos clave están definidos",
            "No hay registros con más de un valor por cada columna",
            "Todos los atributos son atómicos",
            "Todos los atributos son claves candidatas"
          ],
          correcta: 3,
          preguntaId: "3020203006"
        },
        {
          id: "3020203006",
          pregunta: "¿Qué requisito adicional tiene la Segunda Forma Normal (2NF) respecto a la 1NF?",
          opciones: [
            "Todos los atributos son atómicos",
            "No existe variación en el número de columnas para cada fila",
            "Los atributos no principales tienen dependencia funcional completa respecto de las claves candidatas",
            "Los atributos no principales no deben depender transitivamente de la clave"
          ],
          correcta: 2,
          preguntaId: "3020203007"
        },
        {
          id: "3020203007",
          pregunta: "¿Qué característica define principalmente a la Tercera Forma Normal (3NF)?",
          opciones: [
            "Elimina la redundancia de datos",
            "Elimina las dependencias parciales",
            "Elimina las dependencias transitivas",
            "Elimina las dependencias multivaluadas"
          ],
          correcta: 2,
          preguntaId: "3020203008"
        },
        {
          id: "3020203008",
          pregunta: "¿Qué requisito adicional tiene la Forma Normal de Boyce-Codd (BCNF) respecto a la 3NF?",
          opciones: [
            "Los atributos no determinantes son claves candidatas",
            "Elimina todas las dependencias funcionales",
            "Todos los atributos son atómicos",
            "No existen dependencias multivaluadas"
          ],
          correcta: 0,
          preguntaId: "3020203009"
        },
        {
          id: "3020203009",
          pregunta: "¿En qué se basa principalmente la Cuarta Forma Normal (4NF)?",
          opciones: [
            "Dependencias funcionales",
            "Dependencias parciales",
            "Dependencias transitivas",
            "Dependencias multivaluadas"
          ],
          correcta: 3,
          preguntaId: "3020203010"
        },
        {
          id: "3020203010",
          pregunta: "¿Qué tipo de relaciones aborda principalmente la Quinta Forma Normal (5NF)?",
          opciones: [
            "Muchos a muchos",
            "Uno a uno",
            "Uno a muchos",
            "Ninguna de las anteriores"
          ],
          correcta: 0,
          preguntaId: "3020203011"
        },
        {
          id: "3020203011",
          pregunta: "¿Cuál es el principio fundamental de la Sexta Forma Normal (6NF)?",
          opciones: [
            "Eliminar todas las dependencias funcionales",
            "Crear tablas para relacionar más de dos claves candidatas",
            "Eliminar todas las relaciones entre tablas",
            "Combinar todas las tablas en una sola"
          ],
          correcta: 1,
          preguntaId: "3020203012"
        }
      ]
    }
  
};