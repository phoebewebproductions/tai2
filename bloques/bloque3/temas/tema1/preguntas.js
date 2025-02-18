export const preguntas = {
    "3010101000e": {
      preguntas: [
        {
          id: "3010101001",
          pregunta: "¿Cuál es el primer paso en el diseño de una base de datos?",
          opciones: [
            "Diseño físico",
            "Diseño lógico",
            "Representación del problema a través del Modelo de Entidad Relación",
            "Implementación en un SGBD específico"
          ],
          correcta: 2,
          preguntaId: "3010101001",
        },
        {
          id: "3010101002",
          pregunta: "¿En qué se puede implementar el modelo conceptual de datos?",
          opciones: [
            "Solo en bases de datos relacionales",
            "Solo en sistemas de archivo simple",
            "En cualquier base de datos o sistema de archivo simple",
            "Solo en bases de datos orientadas a objetos"
          ],
          correcta: 2,
          preguntaId: "3010101002",
        },
        {
          id: "3010101003",
          pregunta: "¿Qué es el diseño lógico de una base de datos?",
          opciones: [
            "El proceso de implementación física de la base de datos",
            "El proceso de trasladar el diseño conceptual a un diseño ajustado al modelo de base de datos elegido",
            "La representación del problema a través del Modelo de Entidad Relación",
            "La descripción de las estructuras de almacenamiento"
          ],
          correcta: 1,
          preguntaId: "3010101003",
        },
        {
          id: "3010101004",
          pregunta: "¿Qué implica el diseño físico de una base de datos?",
          opciones: [
            "La creación del esquema conceptual",
            "La elección del modelo de base de datos",
            "La descripción de la implementación en memoria secundaria",
            "La definición de los requisitos de datos"
          ],
          correcta: 2,
          preguntaId: "3010101004",
        },
        {
          id: "3010101005",
          pregunta: "¿Cuál es el objetivo del diseño conceptual?",
          opciones: [
            "Implementar la base de datos en un SGBD específico",
            "Crear un esquema conceptual consistente con los requisitos y restricciones",
            "Definir las estructuras de almacenamiento",
            "Elegir el lenguaje de implementación de la base de datos"
          ],
          correcta: 1,
          preguntaId: "3010101005",
        },
        {
          id: "3010101001",
          pregunta: "¿Qué modelos específicos se mencionan como destino de la transformación del Modelo de Entidad Relación?",
          opciones: [
            "Relacional, orientado a objetos, de objetos-relacional",
            "Jerárquico, red, relacional, objetos",
            "Conceptual, lógico, físico",
            "SQL, NoSQL, NewSQL"
          ],
          correcta: 1,
          preguntaId: "3010101006",
        },
        {
          id: "3010101007",
          pregunta: "En la etapa de diseño conceptual, ¿qué aspectos NO se consideran?",
          opciones: [
            "La estructura de la información",
            "Los requisitos de datos",
            "El tipo de base de datos a utilizar",
            "Las restricciones impuestas por la problemática"
          ],
          correcta: 2,
          preguntaId: "3010101007",
        },
        {
          id: "3010101006",
          pregunta: "¿Qué es un esquema conceptual?",
          opciones: [
            "Una descripción detallada de la implementación física",
            "Un modelo de datos de bajo nivel",
            "Una descripción concisa de los requisitos de datos expresada mediante conceptos de alto nivel",
            "Un conjunto de instrucciones SQL"
          ],
          correcta: 2,
          preguntaId: "3010101008",
        },
        {
          id: "3010101003",
          pregunta: "¿De qué es independiente el diseño lógico de una base de datos?",
          opciones: [
            "Del modelo de datos elegido",
            "De los requisitos de la organización",
            "Del SGBD y consideraciones físicas",
            "De la estructura de la información"
          ],
          correcta: 2,
          preguntaId: "3010101009",
        },
        {
          id: "3010101004",
          pregunta: "¿Qué debe garantizar el diseño físico de una base de datos?",
          opciones: [
            "La independencia del SGBD",
            "La consistencia con los requisitos",
            "Un acceso eficiente a los datos",
            "La abstracción del hardware"
          ],
          correcta: 2,
          preguntaId: "3010101010",
        }
      ],
      minimoParaAprobar: 8,
    },
    "3010102000e": {
    preguntas: [
      {
        id: "3010102000",
        pregunta: "¿Cuántos niveles propone la arquitectura ANSI/X3/SPARC para la construcción de bases de datos?",
        opciones: ["Dos", "Tres", "Cuatro", "Cinco"],
        correcta: 1,
        preguntaId: "3010102001",
      },
      {
        id: "3010102000",
        pregunta: "¿Cuáles son los niveles propuestos por la arquitectura ANSI/X3/SPARC?",
        opciones: [
          "Externo, conceptual y físico",
          "Lógico, físico y de usuario",
          "Conceptual, lógico y de aplicación",
          "Interno, externo y de datos"
        ],
        correcta: 0,
        preguntaId: "3010102002",
      },
      {
        id: "3010102001",
        pregunta: "¿Qué se especifica en el nivel físico?",
        opciones: [
          "Las vistas de usuario",
          "El modelo lógico de datos",
          "Qué, cómo y dónde se almacenan los datos físicamente",
          "Las relaciones entre los datos del mundo real"
        ],
        correcta: 2,
        preguntaId: "3010102003",
      },
      {
        id: "3010102002",
        pregunta: "¿Qué incluye la capa física?",
        opciones: [
          "Las vistas de usuario",
          "El esquema conceptual",
          "Los archivos con toda la información de la base de datos",
          "Las consultas de los usuarios"
        ],
        correcta: 2,
        preguntaId: "3010102004",
      },
      {
        id: "3010102003",
        pregunta: "¿Por qué es importante que el diseñador conozca la implementación concreta del SGBD?",
        opciones: [
          "Para crear mejores vistas de usuario",
          "Para implementar de manera más eficiente el diseño físico",
          "Para definir mejor el modelo lógico",
          "Para crear más tablas en la base de datos"
        ],
        correcta: 1,
        preguntaId: "3010102005",
      },
      {
        id: "3010102005",
        pregunta: "¿Qué refleja el nivel conceptual?",
        opciones: [
          "El almacenamiento físico de los datos",
          "Las vistas de usuario",
          "La estructura y relaciones entre los datos del mundo real",
          "Las consultas de la base de datos"
        ],
        correcta: 2,
        preguntaId: "3010102006",
      },
      {
        id: "3010102006",
        pregunta: "¿Qué es el modelo lógico de datos?",
        opciones: [
          "Un conjunto de archivos físicos",
          "Un conjunto de vistas de usuario",
          "Un conjunto de consultas SQL",
          "Un conjunto de conceptos, reglas y convenciones para describir un modelo conceptual"
        ],
        correcta: 3,
        preguntaId: "3010102007",
      },
      {
        id: "3010102008",
        pregunta: "¿Qué representa el nivel externo?",
        opciones: [
          "El almacenamiento físico de los datos",
          "Las vistas parciales de la base de datos para usuarios y aplicaciones",
          "El esquema conceptual completo",
          "Las relaciones entre tablas"
        ],
        correcta: 1,
        preguntaId: "3010102008",
      },
      {
        id: "3010102009",
        pregunta: "¿Cómo se conoce también al nivel externo?",
        opciones: [
          "Nivel físico",
          "Nivel conceptual",
          "Nivel lógico de usuario",
          "Nivel de almacenamiento"
        ],
        correcta: 2,
        preguntaId: "3010102009",
      },
      {
        id: "3010102011",
        pregunta: "¿Qué controla el DBMS en la capa externa?",
        opciones: [
          "El almacenamiento físico de los datos",
          "La creación del esquema conceptual",
          "La transformación de elementos para formar la vista de cada usuario",
          "La definición del modelo lógico"
        ],
        correcta: 2,
        preguntaId: "3010102010",
      }
    ],
    minimoParaAprobar: 8
  },
  "3010201000e": {
    preguntas: [
      {
        id: "3010201001",
        pregunta: "¿En qué se basa el modelo relacional?",
        opciones: [
          "En el concepto matemático de función",
          "En el concepto matemático de relación",
          "En el concepto de entidad",
          "En el concepto de atributo"
        ],
        correcta: 1,
        preguntaId: 3010201001
      },
      {
        id: "3010201002",
        pregunta: "¿Cuáles son los dos elementos principales del modelo entidad/relación?",
        opciones: [
          "Tablas y columnas",
          "Filas y columnas",
          "Entidades y relaciones",
          "Atributos y jerarquías"
        ],
        correcta: 2,
        preguntaId: 3010201002
      },
      {
        id: "3010201003",
        pregunta: "¿Qué permite el modelo relacional a los usuarios?",
        opciones: [
          "Crear tablas predefinidas",
          "Relacionar los registros según se requiera",
          "Almacenar datos solo en forma tabular",
          "Trabajar solo con un registro a la vez"
        ],
        correcta: 1,
        preguntaId: 3010201003
      },
      {
        id: "3010201004",
        pregunta: "¿Cómo presenta los datos el modelo relacional?",
        opciones: [
          "En listas unidimensionales",
          "En tablas bidimensionales",
          "En estructuras tridimensionales",
          "En gráficos circulares"
        ],
        correcta: 1,
        preguntaId: 3010201004
      },
      {
        id: "3010201004",
        pregunta: "¿Qué tipo de independencia aporta el modelo relacional siguiendo el modelo ANSI/SPARC?",
        opciones: [
          "Solo independencia física",
          "Solo independencia lógica",
          "Independencia física y lógica",
          "Ninguna independencia"
        ],
        correcta: 2,
        preguntaId: 3010201005
      },
      {
        id: "3010201006",
        pregunta: "¿Cuál es uno de los beneficios de aplicar el modelo de datos en una organización?",
        opciones: [
          "Aumentar la complejidad del sistema",
          "Reducir la comunicación entre usuarios",
          "Compartir la definición de los datos entre todos los usuarios",
          "Limitar el acceso a los datos"
        ],
        correcta: 2,
        preguntaId: 3010201006
      },
      {
        id: "3010201007",
        pregunta: "¿Cuál de las siguientes NO es una ventaja de realizar un modelo de datos?",
        opciones: [
          "Comprensión de los datos de una organización",
          "Obtención de estructuras de datos dependientes del entorno físico",
          "Control de los posibles errores desde el principio",
          "Mejora del mantenimiento"
        ],
        correcta: 1,
        preguntaId: 3010201007
      },
      {
        id: "3010201008",
        pregunta: "¿Qué característica tiene la estructura de datos en comparación con la estructura de procesos?",
        opciones: [
          "Es más inestable",
          "Es más cambiante",
          "Es más estable",
          "Es más dinámica"
        ],
        correcta: 2,
        preguntaId: 3010201008
      },
      {
        id: "3010201009",
        pregunta: "¿En qué se centra el diagrama del modelo de datos?",
        opciones: [
          "En la eficiencia del procesamiento",
          "En los datos, independientemente del procesamiento",
          "En la tecnología existente",
          "En las restricciones del sistema"
        ],
        correcta: 1,
        preguntaId: 3010201009
      },
      {
        id: "3010201010",
        pregunta: "¿Cuáles son los elementos fundamentales del modelo mencionados en el texto?",
        opciones: [
          "Tablas, filas y columnas",
          "Entidades, relaciones y atributos",
          "Claves, índices y restricciones",
          "Consultas, formularios e informes"
        ],
        correcta: 1,
        preguntaId: 3010201010
      }
    ],
    minimoParaAprobar: 8
  },
"3010202000e": {
    preguntas: [
      {
        id: "3010202001",
        pregunta: "¿Qué es una entidad en el contexto de bases de datos?",
        opciones: [
          "Un tipo de dato",
          "Un objeto del mundo real sobre el que se recopilan datos",
          "Una tabla en la base de datos",
          "Un atributo de una tabla"
        ],
        correcta: 1,
        preguntaId: 3010202001
      },
      {
        id: "3010202002",
        pregunta: "¿Cómo deben poder identificarse las entidades?",
        opciones: [
          "Por su nombre",
          "Por su posición en la base de datos",
          "Unívocamente mediante uno o varios atributos",
          "Por su relación con otras entidades"
        ],
        correcta: 2,
        preguntaId: 3010202002
      },
      {
        id: "3010202003",
        pregunta: "¿Cómo se representa una entidad en un diagrama?",
        opciones: [
          "Como un círculo",
          "Como un rectángulo",
          "Como un triángulo",
          "Como una línea"
        ],
        correcta: 1,
        preguntaId: 3010202003
      },
      {
        id: "3010202004",
        pregunta: "¿Qué es un tipo de entidad?",
        opciones: [
          "Un objeto concreto del mundo real",
          "Una abstracción que define un conjunto de objetos con propiedades comunes",
          "Un atributo de una entidad",
          "Una relación entre entidades"
        ],
        correcta: 1,
        preguntaId: 3010202004
      },
      {
        id: "3010202005",
        pregunta: "¿Cómo se denomina el proceso para pasar de un conjunto de entidades a un tipo de entidad?",
        opciones: [
          "Concreción",
          "Abstracción",
          "Relación",
          "Identificación"
        ],
        correcta: 1,
        preguntaId: 3010202005
      },
      {
        id: "3010202006",
        pregunta: "¿Cuál de las siguientes NO es una regla que deben cumplir las entidades?",
        opciones: [
          "Tener existencia propia",
          "Cada ocurrencia debe poder distinguirse de las demás",
          "Todas las ocurrencias deben tener los mismos atributos",
          "Deben estar relacionadas con al menos otra entidad"
        ],
        correcta: 3,
        preguntaId: 3010202006
      },
      {
        id: "3010202007",
        pregunta: "¿Cuál de los siguientes es un ejemplo de entidad no tangible?",
        opciones: [
          "Una manzana",
          "Un coche",
          "Una persona",
          "Un pedido a un proveedor"
        ],
        correcta: 3,
        preguntaId: 3010202007
      },
      {
        id: "3010202008",
        pregunta: "¿Qué es una instancia de una entidad?",
        opciones: [
          "Un tipo de entidad",
          "Un conjunto de entidades",
          "Un objeto concreto de un tipo de entidad",
          "Una relación entre entidades"
        ],
        correcta: 2,
        preguntaId: 3010202008
      },
      {
        id: "3010202009",
        pregunta: "¿Cuáles son los dos tipos principales de entidades?",
        opciones: [
          "Fuertes y débiles",
          "Primarias y secundarias",
          "Concretas y abstractas",
          "Simples y compuestas"
        ],
        correcta: 0,
        preguntaId: 3010202009
      },
      {
        id: "3010202010",
        pregunta: "En el ejemplo dado, ¿qué tipo de entidad es 'Mes' respecto a 'Año'?",
        opciones: [
          "Fuerte",
          "Débil",
          "Independiente",
          "Abstracta"
        ],
        correcta: 1,
        preguntaId: 3010202010
      },
      {
        id: "3010202011",
        pregunta: "¿Cómo se representa gráficamente un tipo de entidad regular o fuerte?",
        opciones: [
          "Con un círculo",
          "Con un rectángulo",
          "Con un triángulo",
          "Con una línea punteada"
        ],
        correcta: 1,
        preguntaId: 3010202011
      },
      {
        id: "3010202012",
        pregunta: "¿Cómo se representa gráficamente un tipo de entidad débil?",
        opciones: [
          "Con un rectángulo simple",
          "Con dos rectángulos concéntricos",
          "Con un círculo",
          "Con un rectángulo y un círculo"
        ],
        correcta: 1,
        preguntaId: 3010202012
      }
    ],
    minimoParaAprobar: 9
  },
  "3010203000e": {
    preguntas: [
      {
        id: "3010203001",
        pregunta: "¿Qué es un atributo en el contexto de bases de datos?",
        opciones: [
          "Una tabla en la base de datos",
          "Una propiedad o característica que describe a una entidad",
          "Una relación entre entidades",
          "Un tipo de dato"
        ],
        correcta: 1,
        preguntaId: 3010203001
      },
      {
        id: "3010203002",
        pregunta: "¿Sobre qué se define un atributo?",
        opciones: [
          "Sobre una entidad",
          "Sobre una relación",
          "Sobre un dominio",
          "Sobre otro atributo"
        ],
        correcta: 2,
        preguntaId: 3010203002
      },
      {
        id: "3010203003",
        pregunta: "En un diagrama de modelo conceptual, ¿cómo se representan los atributos?",
        opciones: [
          "Como círculos independientes",
          "Como nombres dentro de un rectángulo que representa la entidad",
          "Como líneas conectando entidades",
          "Como triángulos fuera de la entidad"
        ],
        correcta: 1,
        preguntaId: 3010203003
      },
      {
        id: "3010203004",
        pregunta: "¿Qué es una Clave Primaria?",
        opciones: [
          "Un atributo que puede tomar múltiples valores",
          "Un atributo que hace único el acceso a cada ocurrencia de entidad",
          "Un atributo que describe pero no distingue una entidad",
          "Un atributo derivado de otros atributos"
        ],
        correcta: 1,
        preguntaId: 3010203004
      },
      {
        id: "3010203005",
        pregunta: "¿Qué caracteriza a un Atributo Descriptor?",
        opciones: [
          "Identifica unívocamente cada ocurrencia de la entidad",
          "Puede tomar múltiples valores",
          "Caracteriza una ocurrencia pero no la distingue del resto",
          "Se deriva de otros atributos"
        ],
        correcta: 2,
        preguntaId: 3010203005
      },
      {
        id: "3010203006",
        pregunta: "¿Cuál de los siguientes NO es un tipo de restricción sobre los atributos?",
        opciones: [
          "Simple",
          "Compuesto",
          "Univaluado",
          "Relacional"
        ],
        correcta: 3,
        preguntaId: 3010203006
      },
      {
        id: "3010203006",
        pregunta: "¿Qué es un atributo multivaluado?",
        opciones: [
          "Un atributo que solo puede tomar un valor",
          "Un atributo que puede tomar más de un valor",
          "Un atributo que se deriva de otros",
          "Un atributo que identifica unívocamente la entidad"
        ],
        correcta: 1,
        preguntaId: 3010203007
      },
      {
        id: "3010203006",
        pregunta: "¿Qué es un atributo derivado?",
        opciones: [
          "Un atributo que solo puede tomar un valor",
          "Un atributo que puede tomar más de un valor",
          "Un atributo cuyo valor se obtiene a partir de otros atributos",
          "Un atributo que identifica unívocamente la entidad"
        ],
        correcta: 2,
        preguntaId: 3010203008
      },
      {
        id: "3010203007",
        pregunta: "¿Cómo se representa generalmente un atributo en un diagrama?",
        opciones: [
          "Mediante un rectángulo",
          "Mediante un triángulo",
          "Mediante una elipse",
          "Mediante una línea"
        ],
        correcta: 2,
        preguntaId: 3010203009
      },
      {
        id: "3010203008",
        pregunta: "¿Cómo se representa el identificador en la notación de atributos?",
        opciones: [
          "Con un círculo más grande",
          "Con el nombre en cursiva",
          "Con el nombre marcado o subrayado, o con su círculo en negro",
          "Con un triángulo en lugar de un círculo"
        ],
        correcta: 2,
        preguntaId: 3010203010
      }
    ],
    minimoParaAprobar: 8
  },
  "3010204000e": {
    preguntas: [
      {
        id: "3010204001",
        pregunta: "¿Qué es una relación en el contexto de bases de datos?",
        opciones: [
          "Una tabla en la base de datos",
          "Una asociación entre las ocurrencias de las entidades vinculadas",
          "Un atributo de una entidad",
          "Un tipo de dato"
        ],
        correcta: 1,
        preguntaId: 3010204001
      },
      {
        id: "3010204002",
        pregunta: "¿Cuándo se considera que una relación es débil?",
        opciones: [
          "Cuando asocia dos tipos de entidad regulares",
          "Cuando asocia un tipo de entidad débil con un tipo de entidad regular",
          "Cuando asocia dos tipos de entidad débiles",
          "Cuando no tiene atributos propios"
        ],
        correcta: 1,
        preguntaId: 3010204002
      },
      {
        id: "3010204003",
        pregunta: "¿Qué significa que una relación tenga dependencia en existencia?",
        opciones: [
          "Las ocurrencias de la entidad débil pueden existir sin la entidad regular",
          "Las ocurrencias de la entidad débil no pueden existir sin la ocurrencia de la entidad regular",
          "Las entidades no están relacionadas",
          "La relación no tiene atributos propios"
        ],
        correcta: 1,
        preguntaId: 3010204003
      },
      {
        id: "3010204004",
        pregunta: "¿Cuándo se dice que una relación tiene dependencia en identificación?",
        opciones: [
          "Cuando la entidad débil se puede identificar solo con sus propios atributos",
          "Cuando la entidad débil no necesita identificadores",
          "Cuando se necesita añadir el identificador de la entidad regular para identificar la entidad débil",
          "Cuando la relación no tiene nombre propio"
        ],
        correcta: 2,
        preguntaId: 3010204004
      },
      {
        id: "3010204005",
        pregunta: "¿Qué caracteriza a una relación exclusiva?",
        opciones: [
          "Puede existir junto con otras relaciones",
          "Solo puede existir entre entidades fuertes",
          "La existencia de esta relación implica la no existencia de otras relaciones",
          "Siempre es una relación 1:1"
        ],
        correcta: 2,
        preguntaId: 3010204005
      },
      {
        id: "3010204006",
        pregunta: "¿Qué es el tipo de correspondencia en una relación?",
        opciones: [
          "El nombre de la relación",
          "El número de entidades involucradas",
          "El número máximo de ocurrencias de cada tipo de entidad en la relación",
          "Los atributos de la relación"
        ],
        correcta: 2,
        preguntaId: 3010204006
      },
      {
        id: "3010204007",
        pregunta: "¿Cuál de las siguientes NO es una clase de relación según su tipo de correspondencia?",
        opciones: [
          "1:1",
          "1:N",
          "M:N",
          "N:N"
        ],
        correcta: 3,
        preguntaId: 3010204007
      },
      {
        id: "3010204007",
        pregunta: "En una relación 1:N, ¿qué es cierto?",
        opciones: [
          "Cada ocurrencia de ambas entidades se relaciona con una y solo una ocurrencia de la otra",
          "Cada ocurrencia de una entidad se relaciona con múltiples ocurrencias de la otra, pero no viceversa",
          "Cada ocurrencia de ambas entidades puede relacionarse con múltiples ocurrencias de la otra",
          "No hay relación entre las entidades"
        ],
        correcta: 1,
        preguntaId: 3010204008
      },
      {
        id: "3010204008",
        pregunta: "¿Qué es el grado de una relación?",
        opciones: [
          "El número de atributos en la relación",
          "El número de tipos de entidad sobre las que se establece la relación",
          "La cardinalidad de la relación",
          "El número de ocurrencias en la relación"
        ],
        correcta: 1,
        preguntaId: 3010204009
      },
      {
        id: "3010204008",
        pregunta: "¿Qué tipo de relación es aquella en la que una entidad se relaciona consigo misma?",
        opciones: [
          "Binaria",
          "Ternaria",
          "Unaria",
          "Múltiple"
        ],
        correcta: 2,
        preguntaId: 3010204010
      },
      {
        id: "3010204009",
        pregunta: "¿Cómo se representa gráficamente una relación en un diagrama entidad-relación?",
        opciones: [
          "Por un rectángulo",
          "Por un círculo",
          "Por un rombo",
          "Por un triángulo"
        ],
        correcta: 2,
        preguntaId: 3010204011
      },
      {
        id: "3010204009",
        pregunta: "¿Cómo se representa el tipo de correspondencia en un diagrama entidad-relación?",
        opciones: [
          "Con colores diferentes",
          "Con etiquetas como 1:1, 1:N o M:N cerca del rombo o de las entidades",
          "Con el tamaño del rombo",
          "No se representa gráficamente"
        ],
        correcta: 1,
        preguntaId: 3010204012
      }
    ],
    minimoParaAprobar: 9
  },
  "3010301000e": {
    preguntas: [
      {
        id: "3010301001",
        pregunta: "¿Qué permite representar un diagrama de flujo de datos?",
        opciones: [
          "Solo los datos almacenados en el sistema",
          "Los límites del sistema y la lógica de los procesos",
          "Únicamente las entidades externas del sistema",
          "La estructura física del sistema de información"
        ],
        correcta: 1,
        preguntaId: 3010301001
      },
      {
        id: "3010301002",
        pregunta: "¿En qué consiste la técnica de los diagramas de flujo de datos?",
        opciones: [
          "En la representación de datos en tablas",
          "En la descomposición sucesiva de los procesos",
          "En la creación de bases de datos relacionales",
          "En la programación de algoritmos complejos"
        ],
        correcta: 1,
        preguntaId: 3010301002
      },
      {
        id: "3010301003",
        pregunta: "¿Cuál es el objetivo principal de un diagrama de flujo de datos?",
        opciones: [
          "Diseñar la interfaz de usuario",
          "Programar el sistema de información",
          "Obtener un modelo lógico de procesos que represente el sistema",
          "Definir la estructura física de la base de datos"
        ],
        correcta: 2,
        preguntaId: 3010301003
      },
      {
        id: "3010301004",
        pregunta: "¿Cuál de los siguientes NO es un objetivo de dividir el sistema en distintos niveles de detalle?",
        opciones: [
          "Simplificar la complejidad del sistema",
          "Facilitar el mantenimiento del sistema",
          "Representar los diferentes procesos",
          "Aumentar la velocidad de ejecución del sistema"
        ],
        correcta: 3,
        preguntaId: 3010301004
      },
      {
        id: "3010301006",
        pregunta: "¿Qué representa una entidad externa en un diagrama de flujo de datos?",
        opciones: [
          "Un proceso interno del sistema",
          "Un almacén de datos",
          "Un ente ajeno al sistema que proporciona o recibe información",
          "Un flujo de datos entre procesos"
        ],
        correcta: 2,
        preguntaId: 3010301005
      },
      {
        id: "3010301007",
        pregunta: "¿Cuál de las siguientes NO es una regla de construcción para las entidades externas?",
        opciones: [
          "Representa personas, organizaciones, o sistemas que no pertenecen al sistema",
          "Puede aparecer en los distintos niveles de DFD",
          "Suministra información acerca de la conexión del sistema con el mundo exterior",
          "Representa las relaciones entre entidades externas en el diagrama"
        ],
        correcta: 3,
        preguntaId: 3010301006
      },
      {
        id: "3010301008",
        pregunta: "¿Cómo se representa una entidad externa que aparece varias veces en un mismo diagrama?",
        opciones: [
          "Con un rectángulo",
          "Con una elipse con una línea inclinada en el ángulo superior izquierdo",
          "Con un círculo",
          "Con un triángulo"
        ],
        correcta: 1,
        preguntaId: 3010301007
      },
      {
        id: "3010301009",
        pregunta: "¿Qué representa un proceso en un diagrama de flujo de datos?",
        opciones: [
          "Un almacén de datos",
          "Una entidad externa",
          "Una funcionalidad que transforma o manipula datos",
          "Un flujo de datos"
        ],
        correcta: 2,
        preguntaId: 3010301008
      },
      {
        id: "3010301010",
        pregunta: "¿Cuál de las siguientes afirmaciones sobre los procesos es FALSA?",
        opciones: [
          "El proceso nunca es el origen ni el final de los datos",
          "Puede transformar un flujo de datos de entrada en varios de salida",
          "Es necesario como intermediario entre una entidad externa y un almacén de datos",
          "Puede ser el origen o el final de los datos"
        ],
        correcta: 3,
        preguntaId: 3010301009
      },
      {
        id: "3010301011",
        pregunta: "¿Cómo se representa un proceso en un diagrama de flujo de datos?",
        opciones: [
          "Con una elipse",
          "Con un rectángulo subdividido en tres casillas",
          "Con un círculo",
          "Con un rombo"
        ],
        correcta: 1,
        preguntaId: 3010301010
      },
      {
        id: "3010301012",
        pregunta: "¿Cómo se numera el proceso del diagrama de contexto?",
        opciones: [
          "Como uno",
          "Como cero",
          "No se numera",
          "Con una letra"
        ],
        correcta: 1,
        preguntaId: 3010301011
      },
      {
        id: "3010301012",
        pregunta: "En los niveles inferiores, ¿cómo se forma el número que identifica el proceso?",
        opciones: [
          "Con un número aleatorio",
          "Con el número del proceso en el que está incluido seguido de un número que lo identifica en ese contexto",
          "Siempre con números consecutivos",
          "Con letras en lugar de números"
        ],
        correcta: 1,
        preguntaId: 3010301012
      }
    ],
    minimoParaAprobar: 9
  },
  "3010302000e": {
    preguntas: [
      {
        id: "3010302001",
        pregunta: "¿En qué principio se basa la construcción de los diagramas de flujo de datos?",
        opciones: [
          "Principio de agregación",
          "Principio de descomposición o explosión en distintos niveles de detalle",
          "Principio de unificación",
          "Principio de simplificación"
        ],
        correcta: 1,
        preguntaId: 3010302001
      },
      {
        id: "3010302002",
        pregunta: "¿Cómo se realiza la descomposición por niveles en los DFD?",
        opciones: [
          "De abajo arriba (bottom-up)",
          "De arriba abajo (top-down)",
          "De izquierda a derecha",
          "De manera aleatoria"
        ],
        correcta: 1,
        preguntaId: 3010302002
      },
      {
        id: "3010302003",
        pregunta: "¿Qué es necesario comprobar en la descomposición de cada proceso de un DFD?",
        opciones: [
          "La velocidad de ejecución",
          "El número de entidades externas",
          "La consistencia de información entre los DFD",
          "El tamaño de los almacenes de datos"
        ],
        correcta: 2,
        preguntaId: 3010302003
      },
      {
        id: "3010302004",
        pregunta: "¿Cómo se denomina un proceso que no necesita descomposición?",
        opciones: [
          "Proceso complejo",
          "Proceso primitivo",
          "Proceso final",
          "Proceso intermedio"
        ],
        correcta: 1,
        preguntaId: 3010302004
      },
      {
        id: "3010302005",
        pregunta: "¿Cuál de los siguientes NO es un elemento que debe contener el modelo de procesos?",
        opciones: [
          "Un diagrama de contexto (Nivel 0)",
          "Un diagrama 0 (Nivel 1)",
          "Varios DFD en el último nivel de detalle",
          "Un diagrama de clases"
        ],
        correcta: 3,
        preguntaId: 3010302005
      },
      {
        id: "3010302006",
        pregunta: "¿Qué representa el Nivel 1 en la descomposición de DFD?",
        opciones: [
          "Diagrama de Contexto",
          "Diagrama de Subsistemas",
          "Diagrama de Funciones",
          "Diagrama de Procesos"
        ],
        correcta: 1,
        preguntaId: 3010302006
      },
      {
        id: "3010302007",
        pregunta: "¿Cuál es el objetivo del diagrama de contexto?",
        opciones: [
          "Representar los procesos internos del sistema",
          "Delimitar el ámbito del sistema con el mundo exterior",
          "Detallar los flujos de datos entre subsistemas",
          "Especificar los almacenes de datos"
        ],
        correcta: 1,
        preguntaId: 3010302007
      },
      {
        id: "3010302007",
        pregunta: "¿Qué es un subsistema en el contexto de los DFD?",
        opciones: [
          "Un proceso primitivo",
          "Un conjunto de procesos cuyas funcionalidades tienen algo en común",
          "Una entidad externa",
          "Un almacén de datos"
        ],
        correcta: 1,
        preguntaId: 3010302008
      },
      {
        id: "3010302008",
        pregunta: "¿Qué se obtiene como resultado de la descomposición en niveles?",
        opciones: [
          "Un único diagrama de flujo de datos",
          "Un modelo de datos relacional",
          "Un conjunto de diagramas de flujo de datos de diferentes niveles de abstracción",
          "Un diagrama de clases"
        ],
        correcta: 2,
        preguntaId: 3010302009
      },
      {
        id: "3010302009",
        pregunta: "Además de los DFD, ¿qué más incluye el modelo de procesos?",
        opciones: [
          "Solo la especificación de los flujos de datos",
          "La especificación de los flujos de datos, los almacenes de datos y los procesos primitivos",
          "Únicamente la especificación de los almacenes de datos",
          "La implementación del código fuente"
        ],
        correcta: 1,
        preguntaId: 3010302010
      },
      {
        id: "3010302010",
        pregunta: "¿Qué herramientas se pueden utilizar para describir el procedimiento asociado a un proceso primitivo?",
        opciones: [
          "Solo diagramas de flujo",
          "Únicamente código fuente en un lenguaje de programación específico",
          "Lenguaje estructurado, pseudocódigo, tablas de decisión o árboles de decisión",
          "Exclusivamente modelos de datos"
        ],
        correcta: 2,
        preguntaId: 3010302011
      }
    ],
    minimoParaAprobar: 9
  },
  "3010303000e": {
    preguntas: [
      {
        id: "3010303001",
        pregunta: "¿Qué se debe comprobar al estudiar cada diagrama de flujo de datos?",
        opciones: [
          "Solo su complejidad",
          "Únicamente su legibilidad",
          "Su legibilidad, complejidad y si los nombres asignados ayudan a su comprensión sin ambigüedades",
          "Solo los nombres de los procesos"
        ],
        correcta: 2,
        preguntaId: 3010303001
      },
      {
        id: "3010303002",
        pregunta: "¿Qué NO se debe comprobar en un DFD resultado de una explosión o descomposición?",
        opciones: [
          "Que no falten flujos de datos de entrada o salida del nivel superior",
          "Que no aparezcan flujos no asociados al proceso de nivel superior",
          "Que todos los elementos estén conectados con los flujos del proceso origen",
          "Que todos los procesos tengan el mismo nivel de detalle"
        ],
        correcta: 3,
        preguntaId: 3010303002
      },
      {
        id: "3010303003",
        pregunta: "¿Desde qué perspectiva se deben conceptualizar los flujos de datos?",
        opciones: [
          "De abajo-arriba (bottom-up)",
          "De arriba-abajo (top-down)",
          "De izquierda a derecha",
          "De manera aleatoria"
        ],
        correcta: 1,
        preguntaId: 3010303003
      },
      {
        id: "3010303004",
        pregunta: "¿Qué se debe hacer antes de empezar a dibujar un diagrama de contexto?",
        opciones: [
          "Implementar el sistema",
          "Compilar una lista básica de elementos de datos",
          "Diseñar la base de datos",
          "Programar los procesos"
        ],
        correcta: 1,
        preguntaId: 3010303004
      },
      {
        id: "3010303005",
        pregunta: "¿Cuál de las siguientes NO es una regla básica para los diagramas de flujo de datos?",
        opciones: [
          "Debe tener por lo menos un proceso",
          "Un proceso debe recibir al menos un flujo de datos entrante y crear uno saliente",
          "Un almacén de datos debe estar conectado con al menos un proceso",
          "Las entidades externas deben conectarse entre sí"
        ],
        correcta: 3,
        preguntaId: 3010303005
      },
      {
        id: "3010303007",
        pregunta: "¿Cuál es la principal diferencia entre un DFD lógico y un DFD físico?",
        opciones: [
          "El DFD lógico se enfoca en la implementación, mientras que el físico en la operación",
          "El DFD lógico se enfoca en la organización, mientras que el físico en la implementación del sistema",
          "No hay diferencia entre ambos",
          "El DFD lógico muestra el hardware, mientras que el físico muestra el software"
        ],
        correcta: 1,
        preguntaId: 3010303007
      },
      {
        id: "3010303008",
        pregunta: "¿Qué refleja el modelo lógico en un DFD?",
        opciones: [
          "El sistema",
          "La organización o empresa",
          "El hardware",
          "El software"
        ],
        correcta: 1,
        preguntaId: 3010303008
      },
      {
        id: "3010303009",
        pregunta: "¿Cuál es el orden ideal para desarrollar los DFD en un sistema?",
        opciones: [
          "DFD físico, DFD lógico actual, DFD lógico propuesto",
          "DFD lógico actual, DFD lógico propuesto, DFD físico",
          "DFD lógico propuesto, DFD físico, DFD lógico actual",
          "DFD físico, DFD lógico propuesto, DFD lógico actual"
        ],
        correcta: 1,
        preguntaId: 3010303009
      },
      {
        id: "3010303010",
        pregunta: "En un DFD físico, ¿qué representan los procesos?",
        opciones: [
          "Actividades de la empresa",
          "Colecciones de datos",
          "Programas, módulos de programas y procedimientos manuales",
          "Controles de la empresa"
        ],
        correcta: 2,
        preguntaId: 3010303010
      },
      {
        id: "3010303010",
        pregunta: "¿Qué tipo de controles muestra un DFD físico?",
        opciones: [
          "Solo los controles de la empresa",
          "No muestra controles",
          "Controles para validar datos de entrada, obtener registros, asegurar la completitud de procesos y la seguridad del sistema",
          "Solo controles de seguridad"
        ],
        correcta: 2,
        preguntaId: 3010303011
      }
    ],
    minimoParaAprobar: 8
  },
  "3010304000e": {
    preguntas: [
      {
        id: "3010304001",
        pregunta: "¿Qué es un diccionario de datos (DD)?",
        opciones: [
          "Una base de datos relacional",
          "Un elemento de consulta con información sobre los datos (metadatos)",
          "Un diagrama de flujo de datos",
          "Un lenguaje de programación"
        ],
        correcta: 1,
        preguntaId: 3010304001
      },
      {
        id: "3010304002",
        pregunta: "¿Cuál es una razón importante para tener un diccionario de datos?",
        opciones: [
          "Para aumentar la velocidad de procesamiento de datos",
          "Para mantener los datos limpios y consistentes",
          "Para reducir el tamaño de la base de datos",
          "Para encriptar los datos sensibles"
        ],
        correcta: 1,
        preguntaId: 3010304002
      },
      {
        id: "3010304004",
        pregunta: "¿Qué ventaja ofrecen los diccionarios de datos automatizados?",
        opciones: [
          "Reducen el consumo de energía",
          "Aumentan la velocidad de la red",
          "Permiten realizar referencias cruzadas con los elementos de datos",
          "Mejoran la interfaz de usuario"
        ],
        correcta: 2,
        preguntaId: 3010304003
      },
      {
        id: "3010304005",
        pregunta: "¿Qué notación se emplea para describir brevemente los datos utilizados en un DFD?",
        opciones: [
          "SQL",
          "XML",
          "BNF (Backus-Naier Form)",
          "JSON"
        ],
        correcta: 2,
        preguntaId: 3010304004
      },
      {
        id: "3010304006",
        pregunta: "¿Cuál de las siguientes NO es una característica principal de los diccionarios de datos?",
        opciones: [
          "Actúan como unión entre diferentes modelos",
          "Definen todo elemento",
          "Describen los flujos de datos entre entidades",
          "Almacenan físicamente los datos de la base de datos"
        ],
        correcta: 3,
        preguntaId: 3010304005
      },
      {
        id: "3010304009",
        pregunta: "¿Qué son las herramientas CASE?",
        opciones: [
          "Un tipo de base de datos",
          "Un lenguaje de programación",
          "Un conjunto de programas y ayudas para el desarrollo de software",
          "Un sistema operativo"
        ],
        correcta: 2,
        preguntaId: 3010304006
      },
      {
        id: "3010304011",
        pregunta: "¿Cómo se puede ver al CASE?",
        opciones: [
          "Como un tipo de base de datos",
          "Como un lenguaje de programación",
          "Como la unión de herramientas automáticas de software y metodologías de desarrollo formal",
          "Como un sistema de gestión de proyectos"
        ],
        correcta: 2,
        preguntaId: 3010304007
      },
      {
        id: "3010304012",
        pregunta: "¿Qué hace una herramienta CASE con cada entrada insertada en un diccionario de datos?",
        opciones: [
          "La elimina automáticamente",
          "La duplica en todos los DFDs",
          "Inspecciona los DFDs y demás componentes para determinar cómo usan el dato los procesos",
          "La encripta para mayor seguridad"
        ],
        correcta: 2,
        preguntaId: 3010304008
      },
      {
        id: "3010304013",
        pregunta: "¿Cuál de las siguientes NO es una capacidad de las herramientas CASE?",
        opciones: [
          "Automatizar aspectos principales del proceso de desarrollo",
          "Desarrollar el modelo de datos corporativo",
          "Desarrollar prototipos de aplicaciones",
          "Reemplazar completamente a los desarrolladores humanos"
        ],
        correcta: 3,
        preguntaId: 3010304009
      },
      {
        id: "3010304014",
        pregunta: "¿Qué tipo de herramienta CASE automatiza las fases iniciales del ciclo de vida de desarrollo de sistemas?",
        opciones: [
          "CASE de bajo nivel",
          "CASE de alto nivel",
          "CASE de ciclo de vida",
          "CASE de nivel medio"
        ],
        correcta: 1,
        preguntaId: 3010304010
      },
      {
        id: "3010304014",
        pregunta: "¿Qué actividades cubre el CASE de ciclo de vida?",
        opciones: [
          "Fase de planificación y análisis de sistemas",
          "Fase de diseño detallado e implantación de sistemas",
          "Gestión y estimación de proyectos",
          "Desarrollo de prototipos y generación de código"
        ],
        correcta: 2,
        preguntaId: 3010304011
      }
    ],
    minimoParaAprobar: 9
  },
  "3010305000e": {
    preguntas: [
      {
        id: "3010305001",
        pregunta: "¿A qué tipo de sistemas se adapta principalmente la ampliación de Ward y Mellor?",
        opciones: [
          "Sistemas de bases de datos",
          "Sistemas de tiempo real",
          "Sistemas de gestión de documentos",
          "Sistemas de comercio electrónico"
        ],
        correcta: 1,
        preguntaId: 3010305001
      },
      {
        id: "3010305001",
        pregunta: "¿Cuál de los siguientes NO es un aspecto que aborda la ampliación de Ward y Mellor?",
        opciones: [
          "Flujo de información continuo en el tiempo",
          "Información de control que pasa por el sistema",
          "Ocurrencias múltiples de la misma transformación",
          "Diseño de interfaces de usuario"
        ],
        correcta: 3,
        preguntaId: 3010305002
      },
      {
        id: "3010305003",
        pregunta: "¿Qué representan los procesos de control en la ampliación de Ward y Mellor?",
        opciones: [
          "Solo el almacenamiento de datos",
          "Procesamiento de señales de control y coordinación de actividades",
          "Únicamente la entrada de datos al sistema",
          "La interfaz de usuario"
        ],
        correcta: 1,
        preguntaId: 3010305003
      },
      {
        id: "3010305003",
        pregunta: "¿Qué característica tienen los flujos de control según Ward y Mellor?",
        opciones: [
          "Son equivalentes a los flujos de datos",
          "Representan el almacenamiento de información",
          "Son equivalentes a eventos",
          "Solo se utilizan en sistemas no automatizados"
        ],
        correcta: 2,
        preguntaId: 3010305004
      },
      {
        id: "3010305003",
        pregunta: "¿Qué representan los flujos de datos continuos en la ampliación de Ward y Mellor?",
        opciones: [
          "Datos que solo entran al sistema",
          "Datos que solo salen del sistema",
          "Datos que entran o salen de un proceso de forma constante o continua",
          "Datos que se almacenan permanentemente"
        ],
        correcta: 2,
        preguntaId: 3010305005
      },
      {
        id: "3010305004",
        pregunta: "¿Qué significa SRD en el contexto de las técnicas alternativas al DFD?",
        opciones: [
          "System Requirements Design",
          "Structured Requirement Definition",
          "Software Requirement Diagram",
          "System Representation Diagram"
        ],
        correcta: 1,
        preguntaId: 3010305006
      },
      {
        id: "3010305004",
        pregunta: "¿Cuál es el primer paso en el procedimiento de la técnica SRD?",
        opciones: [
          "Definir el DFD de nivel de aplicación",
          "Definir el DFD de nivel de usuario",
          "Verificar el modelo con el cliente",
          "Definir alternativas de automatización"
        ],
        correcta: 1,
        preguntaId: 3010305007
      },
      {
        id: "3010305004",
        pregunta: "¿Qué característica tiene la técnica SADT?",
        opciones: [
          "Se enfoca solo en el diseño de bases de datos",
          "Utiliza una notación gráfica y está compuesta por una jerarquía de diagramas",
          "Solo se utiliza para sistemas de tiempo real",
          "No incluye diagramas de contexto"
        ],
        correcta: 1,
        preguntaId: 3010305008
      },
      {
        id: "3010305004",
        pregunta: "En la técnica SASS, ¿qué se obtiene primero?",
        opciones: [
          "El DFD lógico",
          "El DFD físico actual",
          "Las alternativas de automatización",
          "La verificación del modelo por el cliente"
        ],
        correcta: 1,
        preguntaId: 3010305009
      },
      {
        id: "3010305004",
        pregunta: "¿Cuál es el último paso en el procedimiento de la técnica SASS?",
        opciones: [
          "Obtener equivalentes lógicos",
          "Verificar el modelo con el cliente",
          "Analizar alternativas de automatización",
          "Seleccionar uno de los DFD físicos para su implementación"
        ],
        correcta: 3,
        preguntaId: 3010305010
      }
    ],
    minimoParaAprobar: 8
  },
  "3010306000e": {
    preguntas: [
      {
        id: "3010306001",
        pregunta: "¿Qué es un flujograma o diagrama de flujo?",
        opciones: [
          "Un tipo de base de datos",
          "Un lenguaje de programación",
          "Una representación gráfica de alto nivel de hechos, situaciones, movimientos o relaciones",
          "Un sistema operativo"
        ],
        correcta: 2,
        preguntaId: 3010306001
      },
      {
        id: "3010306002",
        pregunta: "¿Cuál es el objetivo principal de un flujograma?",
        opciones: [
          "Crear bases de datos",
          "Ayudar a la definición, análisis y solución del problema y representación del algoritmo del programa",
          "Diseñar interfaces de usuario",
          "Optimizar el rendimiento del hardware"
        ],
        correcta: 1,
        preguntaId: 3010306002
      },
      {
        id: "3010306004",
        pregunta: "¿Cuál de los siguientes NO es un tipo de flujograma mencionado en el texto?",
        opciones: [
          "De formato vertical",
          "De formato horizontal",
          "De bloques",
          "De círculos"
        ],
        correcta: 3,
        preguntaId: 3010306003
      },
      {
        id: "3010306005",
        pregunta: "¿Qué símbolo se utiliza para representar una decisión en un flujograma?",
        opciones: [
          "Un rectángulo",
          "Un óvalo",
          "Un diamante (rombo)",
          "Un círculo"
        ],
        correcta: 2,
        preguntaId: 3010306004
      },
      {
        id: "3010306005",
        pregunta: "¿Qué representa el símbolo de terminal en un flujograma?",
        opciones: [
          "Un proceso",
          "Una decisión",
          "El comienzo y el final de un programa o subproceso",
          "Un conector entre páginas"
        ],
        correcta: 2,
        preguntaId: 3010306005
      },
      {
        id: "3010306006",
        pregunta: "¿Cómo se llaman también los flujogramas de sistema?",
        opciones: [
          "Diagramas de flujo",
          "Organigramas",
          "Ordinogramas",
          "Diagramas de bloque"
        ],
        correcta: 1,
        preguntaId: 3010306006
      },
      {
        id: "3010306007",
        pregunta: "¿Qué debe reflejar un organigrama según el texto?",
        opciones: [
          "Solo las entradas del sistema",
          "Solo las salidas del sistema",
          "Las distintas áreas o programas, entradas y salidas, y el flujo de los datos",
          "Únicamente el flujo de los datos"
        ],
        correcta: 2,
        preguntaId: 3010306007
      },
      {
        id: "3010306009",
        pregunta: "Según las normas para organigramas, ¿dónde deben ubicarse los dispositivos de entrada?",
        opciones: [
          "Arriba",
          "A la izquierda",
          "A la derecha",
          "Abajo"
        ],
        correcta: 0,
        preguntaId: 3010306008
      },
      {
        id: "3010306010",
        pregunta: "¿Cómo se llaman también los flujogramas de programa?",
        opciones: [
          "Diagramas de flujo",
          "Organigramas",
          "Ordinogramas",
          "Diagramas de bloque"
        ],
        correcta: 2,
        preguntaId: 3010306009
      },
      {
        id: "3010306011",
        pregunta: "¿Qué debe reflejar el diseño de un ordinograma?",
        opciones: [
          "Solo el inicio del programa",
          "Solo el final del programa",
          "El inicio, la secuencia de operaciones y el final del programa",
          "Únicamente la secuencia de operaciones"
        ],
        correcta: 2,
        preguntaId: 3010306010
      },
      {
        id: "3010306012",
        pregunta: "¿Cuál de las siguientes NO es una norma para los ordinogramas según el texto?",
        opciones: [
          "Debe existir un principio y un final",
          "La secuencia detallada de operaciones se realiza de arriba abajo",
          "Todos los elementos están conectados por líneas de flujo de datos",
          "Las líneas de flujo deben cruzarse entre sí para mostrar complejidad"
        ],
        correcta: 3,
        preguntaId: 3010306011
      }
    ],
    minimoParaAprobar: 9
  }
  };