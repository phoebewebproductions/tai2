const preguntas = {
    "4020101000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020101002",
                pregunta: "¿En qué año publicó ANSI el informe sobre la arquitectura ANSI-SPARC?",
                opciones: [
                    "1970",
                    "1975",
                    "1980",
                    "1985"
                ],
                correcta: 1,
                preguntaId: "402010101"
            },
            {
                id: "4020101002",
                pregunta: "¿Cuál era el principal objetivo de la arquitectura ANSI-SPARC?",
                opciones: [
                    "Mejorar el rendimiento de las bases de datos",
                    "Conseguir independencia entre los datos y las aplicaciones que hacen uso de ellos",
                    "Estandarizar el lenguaje SQL",
                    "Reducir el tamaño de las bases de datos"
                ],
                correcta: 1,
                preguntaId: "402010102"
            },
            {
                id: "4020101002",
                pregunta: "¿En cuántos niveles se basa la arquitectura ANSI-SPARC?",
                opciones: [
                    "Dos niveles",
                    "Tres niveles",
                    "Cuatro niveles",
                    "Cinco niveles"
                ],
                correcta: 1,
                preguntaId: "402010103"
            },
            {
                id: "4020101002",
                pregunta: "¿Cuáles son los tres niveles de la arquitectura ANSI-SPARC?",
                opciones: [
                    "Físico, lógico y de aplicación",
                    "Externo, conceptual e interno",
                    "Usuario, sistema y hardware",
                    "Datos, aplicaciones y usuarios"
                ],
                correcta: 1,
                preguntaId: "402010104"
            },
            {
                id: "4020101002",
                pregunta: "¿Cómo se define la independencia en la arquitectura ANSI-SPARC?",
                opciones: [
                    "Como la capacidad de modificar la vista o el esquema de uno de los niveles, sin que afecte al esquema del nivel inmediatamente superior",
                    "Como la capacidad de modificar la vista o el esquema de uno de los niveles, sin que afecte al esquema del nivel inmediatamente inferior",
                    "Como la capacidad de modificar la vista o el esquema de uno de los niveles, sin que afecte a ningún otro nivel",
                    "Como la capacidad de modificar la vista o el esquema de uno de los niveles, afectando solo al nivel inmediatamente superior"
                ],
                correcta: 0,
                preguntaId: "402010105"
            },
            {
                id: "4020101002",
                pregunta: "¿Cuántos tipos de independencia de datos define la arquitectura ANSI-SPARC?",
                opciones: [
                    "Uno",
                    "Dos",
                    "Tres",
                    "Cuatro"
                ],
                correcta: 1,
                preguntaId: "402010106"
            },
            {
                id: "4020101002",
                pregunta: "¿Qué es la independencia lógica según la arquitectura ANSI-SPARC?",
                opciones: [
                    "La capacidad de modificar el esquema interno sin tener que alterar el esquema conceptual",
                    "La capacidad de modificar el esquema externo sin tener que alterar el esquema conceptual",
                    "La capacidad de modificar el esquema conceptual sin tener que alterar los esquemas externos ni los programas de aplicación",
                    "La capacidad de modificar los programas de aplicación sin tener que alterar los esquemas"
                ],
                correcta: 2,
                preguntaId: "402010107"
            },
            {
                id: "4020101002",
                pregunta: "¿Qué es la independencia física según la arquitectura ANSI-SPARC?",
                opciones: [
                    "La capacidad de modificar el esquema interno sin tener que alterar el esquema conceptual",
                    "La capacidad de modificar el esquema externo sin tener que alterar el esquema conceptual",
                    "La capacidad de modificar el esquema conceptual sin tener que alterar los esquemas externos",
                    "La capacidad de modificar los programas de aplicación sin tener que alterar los esquemas"
                ],
                correcta: 0,
                preguntaId: "402010108"
            },
            {
                id: "4020101002",
                pregunta: "Según el texto, ¿cuál de los dos tipos de independencia es más fácil de conseguir?",
                opciones: [
                    "La independencia lógica",
                    "La independencia física",
                    "Ambas son igualmente fáciles de conseguir",
                    "Ninguna de las dos es fácil de conseguir"
                ],
                correcta: 1,
                preguntaId: "402010109"
            },
            {
                id: "4020101003",
                pregunta: "¿Qué es el nivel externo en la arquitectura ANSI-SPARC?",
                opciones: [
                    "El nivel que describe cómo se almacenan físicamente los datos",
                    "El nivel que describe el modelo conceptual de los datos",
                    "El nivel que está en contacto con los propios usuarios y aplicaciones que hacen uso de la base de datos",
                    "El nivel que gestiona las transacciones de la base de datos"
                ],
                correcta: 2,
                preguntaId: "402010110"
            },
            {
                id: "4020101003",
                pregunta: "¿Qué se entiende por vista de usuario en el nivel externo?",
                opciones: [
                    "La descripción completa de la base de datos",
                    "La descripción de una parte de la base de datos que resulta relevante para un usuario en particular",
                    "La descripción de cómo se almacenan físicamente los datos",
                    "La descripción de las relaciones entre las tablas de la base de datos"
                ],
                correcta: 1,
                preguntaId: "402010111"
            },
            {
                id: "4020101003",
                pregunta: "¿Cuántas vistas de usuario pueden existir en una base de datos según el nivel externo?",
                opciones: [
                    "Solo una",
                    "Dos como máximo",
                    "Varias según las necesidades de cada caso",
                    "Una por cada tabla de la base de datos"
                ],
                correcta: 2,
                preguntaId: "402010112"
            },
            {
                id: "4020101004",
                pregunta: "¿Qué es el nivel conceptual en la arquitectura ANSI-SPARC?",
                opciones: [
                    "El nivel que describe cómo se almacenan físicamente los datos",
                    "El nivel que está en contacto con los usuarios y aplicaciones",
                    "El modelo que describe los datos almacenados en la base de datos junto con las relaciones y restricciones de integridad",
                    "El nivel que gestiona las transacciones de la base de datos"
                ],
                correcta: 2,
                preguntaId: "402010113"
            },
            {
                id: "4020101004",
                pregunta: "¿Cuántos esquemas conceptuales existen por cada base de datos?",
                opciones: [
                    "Uno",
                    "Varios",
                    "Depende del número de usuarios",
                    "Depende del tamaño de la base de datos"
                ],
                correcta: 0,
                preguntaId: "402010114"
            },
            {
                id: "4020101004",
                pregunta: "¿Quién define y trabaja en el nivel conceptual?",
                opciones: [
                    "Los usuarios finales",
                    "Los programadores de aplicaciones",
                    "El Database Administrator o DBA",
                    "El administrador del sistema"
                ],
                correcta: 2,
                preguntaId: "402010115"
            },
            {
                id: "4020101004",
                pregunta: "¿Qué característica tiene la estructura descrita en el nivel conceptual?",
                opciones: [
                    "Es específica para cada usuario",
                    "Es común a todos los usuarios de la base de datos",
                    "Depende del hardware utilizado",
                    "Depende del software de la base de datos"
                ],
                correcta: 1,
                preguntaId: "402010116"
            },
            {
                id: "4020101004",
                pregunta: "¿De qué es independiente el modelo abstracto del nivel conceptual?",
                opciones: [
                    "De los usuarios",
                    "De las aplicaciones",
                    "Del hardware y del software de la base de datos",
                    "De los datos almacenados"
                ],
                correcta: 2,
                preguntaId: "402010117"
            },
            {
                id: "4020101005",
                pregunta: "¿Qué es el nivel interno en la arquitectura ANSI-SPARC?",
                opciones: [
                    "El nivel que describe cómo se almacenan los datos en la base de datos y en el hardware",
                    "El nivel que está en contacto con los usuarios y aplicaciones",
                    "El modelo que describe los datos almacenados en la base de datos junto con las relaciones",
                    "El nivel que gestiona las transacciones de la base de datos"
                ],
                correcta: 0,
                preguntaId: "402010118"
            },
            {
                id: "4020101005",
                pregunta: "¿Cuál es el nivel más bajo de los tres en la arquitectura ANSI-SPARC?",
                opciones: [
                    "El nivel externo",
                    "El nivel conceptual",
                    "El nivel interno",
                    "Todos están al mismo nivel"
                ],
                correcta: 2,
                preguntaId: "402010119"
            },
            {
                id: "4020101005",
                pregunta: "Según el ejemplo del texto, ¿cómo distribuye SQL Server de Microsoft las bases de datos físicamente?",
                opciones: [
                    "En un único fichero",
                    "En dos ficheros: uno para los datos con extensión .mdf y otro para el log de transacciones con extensión .ldf",
                    "En tres ficheros diferentes",
                    "En múltiples ficheros según el tamaño de la base de datos"
                ],
                correcta: 1,
                preguntaId: "402010120"
            }
        ]
    },
    "4020102000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020102001",
                pregunta: "¿Qué son las bases de datos según el texto?",
                opciones: [
                    "Programas informáticos para gestionar información",
                    "Elementos de almacenamiento de la información que representan o modelan una parte de la realidad",
                    "Sistemas de gestión de archivos",
                    "Aplicaciones para el análisis de datos"
                ],
                correcta: 1,
                preguntaId: "402010201"
            },
            {
                id: "4020102002",
                pregunta: "¿Cuántos modelos principales de bases de datos se describen en el texto?",
                opciones: [
                    "Tres",
                    "Cuatro",
                    "Cinco",
                    "Seis"
                ],
                correcta: 2,
                preguntaId: "402010202"
            },
            {
                id: "4020102002",
                pregunta: "¿Qué tipo de relaciones permite representar el modelo jerárquico?",
                opciones: [
                    "Relaciones N a M",
                    "Relaciones 1 a 1",
                    "Relaciones 1 a N",
                    "Cualquier tipo de relación"
                ],
                correcta: 2,
                preguntaId: "402010203"
            },
            {
                id: "4020102002",
                pregunta: "¿Cuál es una limitación del modelo jerárquico según el texto?",
                opciones: [
                    "No permite almacenar grandes cantidades de datos",
                    "Es demasiado complejo de implementar",
                    "Solo permite representación de relaciones con cardinalidad 1 a N, pero no la inversa",
                    "No permite realizar consultas complejas"
                ],
                correcta: 2,
                preguntaId: "402010204"
            },
            {
                id: "4020102002",
                pregunta: "¿Cuáles son ejemplos de bases de datos jerárquicas mencionados en el texto?",
                opciones: [
                    "Oracle y MySQL",
                    "IMS de IBM y el Registro del sistema operativo Windows de Microsoft",
                    "MongoDB y Cassandra",
                    "SQL Server y PostgreSQL"
                ],
                correcta: 1,
                preguntaId: "402010205"
            },
            {
                id: "4020102002",
                pregunta: "¿Quién propuso el modelo en red según el texto?",
                opciones: [
                    "E. F. Codd",
                    "Charles Bachman",
                    "IBM",
                    "Microsoft"
                ],
                correcta: 1,
                preguntaId: "402010206"
            },
            {
                id: "4020102002",
                pregunta: "¿En qué año fue publicado el estándar relacionado con el modelo en red por CODASYL?",
                opciones: [
                    "1965",
                    "1969",
                    "1972",
                    "1975"
                ],
                correcta: 1,
                preguntaId: "402010207"
            },
            {
                id: "4020102002",
                pregunta: "¿Qué tipo de relaciones permite representar el modelo en red?",
                opciones: [
                    "Solo relaciones 1 a 1",
                    "Solo relaciones 1 a N",
                    "Relaciones N a M",
                    "Ningún tipo de relación"
                ],
                correcta: 2,
                preguntaId: "402010208"
            },
            {
                id: "4020102002",
                pregunta: "¿Cuál es el modelo de base de datos más extendido hoy en día según el texto?",
                opciones: [
                    "Modelo jerárquico",
                    "Modelo en red",
                    "Modelo relacional",
                    "Modelo orientado a objetos"
                ],
                correcta: 2,
                preguntaId: "402010209"
            },
            {
                id: "4020102002",
                pregunta: "¿En qué se basa el modelo relacional?",
                opciones: [
                    "En la representación mediante objetos",
                    "En la representación mediante árboles",
                    "En la representación mediante tablas que se componen de filas (tuplas) y columnas (atributos)",
                    "En la representación mediante redes"
                ],
                correcta: 2,
                preguntaId: "402010210"
            },
            {
                id: "4020102002",
                pregunta: "¿Quién concibió el modelo relacional y en qué año?",
                opciones: [
                    "Charles Bachman en 1969",
                    "E. F. Codd en 1972",
                    "IBM en 1975",
                    "Microsoft en 1980"
                ],
                correcta: 1,
                preguntaId: "402010211"
            },
            {
                id: "4020102002",
                pregunta: "¿En qué conceptos se basó E. F. Codd para concebir el modelo relacional?",
                opciones: [
                    "En la teoría de grafos",
                    "En la teoría de conjuntos y la lógica de predicados",
                    "En la teoría de la computación",
                    "En la teoría de la información"
                ],
                correcta: 1,
                preguntaId: "402010212"
            },
            {
                id: "4020102002",
                pregunta: "¿En qué se diferencia el modelo multidimensional del modelo relacional?",
                opciones: [
                    "No utiliza tablas",
                    "No permite relaciones entre entidades",
                    "Amplía hasta N dimensiones en lugar de las dos dimensiones del modelo relacional",
                    "Es más antiguo que el modelo relacional"
                ],
                correcta: 2,
                preguntaId: "402010213"
            },
            {
                id: "4020102002",
                pregunta: "¿Para qué tipo de proceso es adecuado el modelo multidimensional según el texto?",
                opciones: [
                    "Para el procesamiento de transacciones en línea (OLTP)",
                    "Para el proceso analítico de transacciones en línea (OLAP)",
                    "Para el procesamiento de datos en tiempo real",
                    "Para el procesamiento de datos estructurados"
                ],
                correcta: 1,
                preguntaId: "402010214"
            },
            {
                id: "4020102002",
                pregunta: "¿En qué se basa el modelo orientado a objetos?",
                opciones: [
                    "En la representación mediante tablas",
                    "En la representación mediante árboles",
                    "En la representación mediante objetos de las entidades propias del universo modelado",
                    "En la representación mediante redes"
                ],
                correcta: 2,
                preguntaId: "402010215"
            },
            {
                id: "4020102003",
                pregunta: "¿Qué es un Sistema de Gestión de Bases de Datos (SGBD)?",
                opciones: [
                    "Un modelo de base de datos",
                    "Un lenguaje de programación",
                    "La herramienta que se encarga de realizar funciones sobre las bases de datos",
                    "Un tipo de base de datos"
                ],
                correcta: 2,
                preguntaId: "402010216"
            },
            {
                id: "4020102003",
                pregunta: "¿Cuántos componentes principales debe incluir un SGBD según el texto?",
                opciones: [
                    "Dos",
                    "Tres",
                    "Cuatro",
                    "Cinco"
                ],
                correcta: 1,
                preguntaId: "402010217"
            },
            {
                id: "4020102003",
                pregunta: "¿Qué funcionalidades aporta el subsistema de administración de un SGBD?",
                opciones: [
                    "Solo almacenamiento y recuperación",
                    "Solo gestión de la seguridad",
                    "Almacenamiento y recuperación, gestión de la seguridad, optimización de consultas, control de concurrencia y gestión de cambios",
                    "Solo optimización de consultas"
                ],
                correcta: 2,
                preguntaId: "402010218"
            },
            {
                id: "4020102003",
                pregunta: "¿Qué permite el subsistema de definición de datos de un SGBD?",
                opciones: [
                    "Realizar operaciones para añadir, cambiar y borrar información",
                    "Crear y mantener el diccionario de datos y definir la estructura del fichero que soporta la base de datos",
                    "Recibir las peticiones de operaciones lógicas sobre la base de datos",
                    "Proporcionar pantallas de entrada de datos"
                ],
                correcta: 1,
                preguntaId: "402010219"
            },
            {
                id: "4020102003",
                pregunta: "¿Qué contiene el subsistema de generación de aplicaciones de un SGBD?",
                opciones: [
                    "Herramientas para la administración de la base de datos",
                    "Herramientas para la definición de datos",
                    "Herramientas para la manipulación de datos",
                    "Utilidades para ayudar a los usuarios en el desarrollo de aplicaciones"
                ],
                correcta: 3,
                preguntaId: "402010220"
            }
        ]
    },
    "4020201000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020201002",
                pregunta: "¿Quién propuso el modelo relacional y en qué año?",
                opciones: [
                    "Charles Bachman en 1965",
                    "Edgar Frank Codd en 1970",
                    "IBM en 1975",
                    "Microsoft en 1980"
                ],
                correcta: 1,
                preguntaId: "402020101"
            },
            {
                id: "4020201002",
                pregunta: "¿Dónde trabajaba Edgar Frank Codd cuando propuso el modelo relacional?",
                opciones: [
                    "En Microsoft",
                    "En Oracle",
                    "En los laboratorios IBM en San José (California)",
                    "En la Universidad de Stanford"
                ],
                correcta: 2,
                preguntaId: "402020102"
            },
            {
                id: "4020201002",
                pregunta: "¿En qué conceptos se basó Codd para proponer el modelo relacional?",
                opciones: [
                    "En la teoría de grafos y la programación orientada a objetos",
                    "En la teoría de conjuntos y la lógica de predicados",
                    "En la teoría de la computación y la inteligencia artificial",
                    "En la teoría de la información y la criptografía"
                ],
                correcta: 1,
                preguntaId: "402020103"
            },
            {
                id: "4020201002",
                pregunta: "Según el texto, ¿cuál es la idea fundamental del modelo relacional?",
                opciones: [
                    "El uso de árboles jerárquicos",
                    "El uso de relaciones, que podrían considerarse como conjuntos de datos llamados 'tuplas'",
                    "El uso de objetos y métodos",
                    "El uso de redes de nodos interconectados"
                ],
                correcta: 1,
                preguntaId: "402020104"
            },
            {
                id: "4020201002",
                pregunta: "¿Qué ventaja aporta el modelo relacional frente a otros como el jerárquico o el de red?",
                opciones: [
                    "Mayor velocidad de procesamiento",
                    "Mayor capacidad de almacenamiento",
                    "El lugar y la forma en que se almacenen los datos no tienen relevancia",
                    "Mayor seguridad de los datos"
                ],
                correcta: 2,
                preguntaId: "402020105"
            },
            {
                id: "4020201002",
                pregunta: "¿Cuál es el lenguaje más habitual para construir operaciones o consultas sobre las bases de datos relacionales?",
                opciones: [
                    "HTML",
                    "Java",
                    "SQL (Structured Query Language)",
                    "Python"
                ],
                correcta: 2,
                preguntaId: "402020106"
            },
            {
                id: "4020201004",
                pregunta: "¿Cuál es la estructura básica del modelo relacional?",
                opciones: [
                    "El atributo",
                    "La tupla",
                    "La relación",
                    "El dominio"
                ],
                correcta: 2,
                preguntaId: "402020107"
            },
            {
                id: "4020201004",
                pregunta: "¿Con qué se equipara una relación en el modelo relacional?",
                opciones: [
                    "Con una columna",
                    "Con una fila",
                    "Con una tabla de dos dimensiones",
                    "Con un valor"
                ],
                correcta: 2,
                preguntaId: "402020108"
            },
            {
                id: "4020201004",
                pregunta: "¿Qué representa un atributo en el modelo relacional?",
                opciones: [
                    "Cada una de las propiedades de la relación",
                    "Cada una de las ocurrencias de los atributos de una relación",
                    "El espacio para los posibles valores que puede tomar un determinado atributo",
                    "La estructura básica del modelo"
                ],
                correcta: 0,
                preguntaId: "402020109"
            },
            {
                id: "4020201004",
                pregunta: "¿Con qué se equipara un atributo en una tabla?",
                opciones: [
                    "Con una tabla",
                    "Con una fila",
                    "Con una columna",
                    "Con un valor"
                ],
                correcta: 2,
                preguntaId: "402020110"
            },
            {
                id: "4020201004",
                pregunta: "¿Qué es el grado de una relación?",
                opciones: [
                    "El número de tuplas que contiene una tabla",
                    "El número de atributos que tiene una relación",
                    "El número de relaciones en una base de datos",
                    "El número de valores nulos en una relación"
                ],
                correcta: 1,
                preguntaId: "402020111"
            },
            {
                id: "4020201004",
                pregunta: "¿Qué es una tupla en el modelo relacional?",
                opciones: [
                    "Cada una de las propiedades de la relación",
                    "Cada una de las ocurrencias de los atributos de una relación",
                    "El espacio para los posibles valores que puede tomar un determinado atributo",
                    "La estructura básica del modelo"
                ],
                correcta: 1,
                preguntaId: "402020112"
            },
            {
                id: "4020201004",
                pregunta: "¿Con qué se identifica una tupla en una tabla?",
                opciones: [
                    "Con una tabla",
                    "Con una fila",
                    "Con una columna",
                    "Con un valor"
                ],
                correcta: 1,
                preguntaId: "402020113"
            },
            {
                id: "4020201004",
                pregunta: "¿Qué es la cardinalidad de una relación?",
                opciones: [
                    "El número de tuplas que contiene una tabla",
                    "El número de atributos que tiene una relación",
                    "El número de relaciones en una base de datos",
                    "El número de valores nulos en una relación"
                ],
                correcta: 0,
                preguntaId: "402020114"
            },
            {
                id: "4020201004",
                pregunta: "¿Qué es un dominio en el modelo relacional?",
                opciones: [
                    "Cada una de las propiedades de la relación",
                    "Cada una de las ocurrencias de los atributos de una relación",
                    "El espacio para los posibles valores que puede tomar un determinado atributo",
                    "La estructura básica del modelo"
                ],
                correcta: 2,
                preguntaId: "402020115"
            },
            {
                id: "4020201005",
                pregunta: "¿Qué significa el valor nulo (NULL) en el modelo relacional?",
                opciones: [
                    "Un valor cero",
                    "Un valor en blanco",
                    "Que el valor particular para un determinado atributo es desconocido o no está disponible",
                    "Que el atributo no existe"
                ],
                correcta: 2,
                preguntaId: "402020116"
            },
            {
                id: "4020201005",
                pregunta: "Según una de las 13 reglas de Codd, ¿qué debe permitir el sistema de gestión de base de datos respecto a los valores nulos?",
                opciones: [
                    "No debe permitir la existencia de campos con valores nulos",
                    "Debe permitir la existencia de campos con valores nulos como representación de información no disponible",
                    "Debe convertir automáticamente los valores nulos en ceros o blancos",
                    "Debe eliminar las tuplas que contengan valores nulos"
                ],
                correcta: 1,
                preguntaId: "402020117"
            },
            {
                id: "4020201005",
                pregunta: "¿En qué situaciones no resulta admisible el valor nulo según el texto?",
                opciones: [
                    "En ninguna situación",
                    "En las claves primarias",
                    "En las claves foráneas",
                    "En los atributos de tipo texto"
                ],
                correcta: 1,
                preguntaId: "402020118"
            },
            {
                id: "4020201006",
                pregunta: "¿Qué es una clave candidata en el modelo relacional?",
                opciones: [
                    "Cualquier atributo de una relación",
                    "Cada uno de los conjuntos de atributos que identifica de manera unívoca y mínima a cada una de las tuplas de una relación",
                    "La clave elegida entre las llaves candidatas",
                    "Un atributo de una relación que está definido en el mismo dominio que la clave primaria de otra relación"
                ],
                correcta: 1,
                preguntaId: "402020119"
            },
            {
                id: "4020201006",
                pregunta: "¿Qué es una clave primaria (primary key) en el modelo relacional?",
                opciones: [
                    "Cualquier atributo de una relación",
                    "Cada uno de los conjuntos de atributos que identifica de manera unívoca y mínima a cada una de las tuplas de una relación",
                    "La clave elegida entre las llaves candidatas",
                    "Un atributo de una relación que está definido en el mismo dominio que la clave primaria de otra relación"
                ],
                correcta: 2,
                preguntaId: "402020120"
            }
        ]
    },
    "4020202000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020202001",
                pregunta: "¿Para qué sirven las reglas de integridad en el modelo relacional?",
                opciones: [
                    "Para mejorar el rendimiento de las consultas",
                    "Para asegurar que los datos almacenados en la base de datos son correctos y consistentes en todo momento",
                    "Para facilitar la programación de aplicaciones",
                    "Para reducir el tamaño de la base de datos"
                ],
                correcta: 1,
                preguntaId: "402020201"
            },
            {
                id: "4020202001",
                pregunta: "¿Cómo se conocen también las reglas de integridad en el modelo relacional?",
                opciones: [
                    "Data rules",
                    "Integrity constraints",
                    "Relational rules",
                    "Database constraints"
                ],
                correcta: 1,
                preguntaId: "402020202"
            },
            {
                id: "4020202002",
                pregunta: "¿Qué establece la regla de integridad de entidad?",
                opciones: [
                    "Que cada relación debe tener una clave que identifique de manera única cada tupla",
                    "Que un atributo que actúa como clave foránea debe referenciar a una clave primaria existente",
                    "Que la clave primaria de una relación no puede aceptar NULL, debe tener valores únicos y solo puede existir una por relación",
                    "Que se pueden restringir los valores que podrá tomar un determinado atributo"
                ],
                correcta: 2,
                preguntaId: "402020203"
            },
            {
                id: "4020202002",
                pregunta: "Según la regla de integridad de entidad, ¿cuántas claves primarias puede tener una relación?",
                opciones: [
                    "Ninguna",
                    "Una",
                    "Dos",
                    "Tantas como se necesiten"
                ],
                correcta: 1,
                preguntaId: "402020204"
            },
            {
                id: "4020202002",
                pregunta: "Según la regla de integridad de entidad, ¿pueden repetirse valores en las columnas que forman la clave primaria?",
                opciones: [
                    "Sí, siempre",
                    "Sí, pero solo en algunos casos",
                    "No, deben ser únicos",
                    "Depende del tipo de datos"
                ],
                correcta: 2,
                preguntaId: "402020205"
            },
            {
                id: "4020202002",
                pregunta: "Según la regla de integridad de entidad, ¿pueden las columnas que forman la clave primaria aceptar valores NULL?",
                opciones: [
                    "Sí, siempre",
                    "Sí, pero solo en algunos casos",
                    "No, no pueden aceptar NULL",
                    "Depende del tipo de datos"
                ],
                correcta: 2,
                preguntaId: "402020206"
            },
            {
                id: "4020202003",
                pregunta: "¿Qué establece la regla de integridad referencial?",
                opciones: [
                    "Que cada relación debe tener una clave que identifique de manera única cada tupla",
                    "Que un atributo que actúa como clave foránea debe referenciar a una clave primaria existente",
                    "Que la clave primaria de una relación no puede aceptar NULL",
                    "Que se pueden restringir los valores que podrá tomar un determinado atributo"
                ],
                correcta: 1,
                preguntaId: "402020207"
            },
            {
                id: "4020202003",
                pregunta: "¿Cuántas opciones habituales se mencionan en el texto para mantener la integridad referencial cuando se opera sobre una clave primaria?",
                opciones: [
                    "Una",
                    "Dos",
                    "Tres",
                    "Cuatro"
                ],
                correcta: 2,
                preguntaId: "402020208"
            },
            {
                id: "4020202003",
                pregunta: "¿Qué hace la opción RESTRICT para mantener la integridad referencial?",
                opciones: [
                    "Borra o actualiza los registros de la tabla dependiente",
                    "Establece a valor NULL el campo clave foránea de los registros afectados",
                    "No permite borrar un registro cuyo valor de clave primaria exista como clave secundaria en otra relación",
                    "Permite borrar cualquier registro sin restricciones"
                ],
                correcta: 2,
                preguntaId: "402020209"
            },
            {
                id: "4020202003",
                pregunta: "Según la opción RESTRICT, ¿qué habría que hacer para borrar un registro cuyo valor de clave primaria estuviese actuando también como clave foránea en otra tabla?",
                opciones: [
                    "No se puede borrar en ningún caso",
                    "Borrar primero todos los registros de la segunda tabla que tuvieran el mismo valor que la clave primaria en la primera tabla",
                    "Actualizar primero el valor de la clave primaria",
                    "Establecer a NULL el valor de la clave foránea"
                ],
                correcta: 1,
                preguntaId: "402020210"
            },
            {
                id: "4020202003",
                pregunta: "¿Qué hace la opción CASCADE para mantener la integridad referencial?",
                opciones: [
                    "Borra o actualiza los registros de la tabla dependiente cuando se borra o actualiza el registro con el valor correspondiente de la clave referenciada",
                    "Establece a valor NULL el campo clave foránea de los registros afectados",
                    "No permite borrar un registro cuyo valor de clave primaria exista como clave secundaria en otra relación",
                    "Permite borrar cualquier registro sin restricciones"
                ],
                correcta: 0,
                preguntaId: "402020211"
            },
            {
                id: "4020202003",
                pregunta: "Si se ejecuta DELETE FROM Centros WHERE NombreC='Informatica'; con la opción CASCADE, ¿qué ocurriría con los registros de la tabla Empleados cuyo valor del campo Centro es igual a 'Informatica'?",
                opciones: [
                    "Se borrarían",
                    "Se establecerían a NULL",
                    "No se modificarían",
                    "Se actualizarían con un nuevo valor"
                ],
                correcta: 0,
                preguntaId: "402020212"
            },
            {
                id: "4020202003",
                pregunta: "Si se ejecuta UPDATE Centros SET NombreC = 'TIC' WHERE NombreC = 'Informatica'; con la opción CASCADE, ¿qué ocurriría con los registros de la tabla Empleados cuyo valor del campo Centro es igual a 'Informatica'?",
                opciones: [
                    "Se borrarían",
                    "Se establecerían a NULL",
                    "No se modificarían",
                    "El valor del campo Centro pasaría a ser 'TIC'"
                ],
                correcta: 3,
                preguntaId: "402020213"
            },
            {
                id: "4020202003",
                pregunta: "¿Qué hace la opción SET NULL para mantener la integridad referencial?",
                opciones: [
                    "Borra o actualiza los registros de la tabla dependiente",
                    "Establece a valor NULL el campo clave foránea de los registros afectados de la tabla dependiente",
                    "No permite borrar un registro cuyo valor de clave primaria exista como clave secundaria en otra relación",
                    "Permite borrar cualquier registro sin restricciones"
                ],
                correcta: 1,
                preguntaId: "402020214"
            },
            {
                id: "4020202003",
                pregunta: "Si se ejecuta DELETE FROM Centros WHERE NombreC='Informatica'; con la opción SET NULL, ¿qué ocurriría con los registros de la tabla Empleados cuyo valor del campo Centro es igual a 'Informatica'?",
                opciones: [
                    "Se borrarían",
                    "Se establecerían a NULL",
                    "No se modificarían",
                    "Se actualizarían con un nuevo valor"
                ],
                correcta: 1,
                preguntaId: "402020215"
            },
            {
                id: "4020202004",
                pregunta: "¿Qué establece la regla de integridad de la clave?",
                opciones: [
                    "Que cada relación debe tener una clave que identifique de manera única cada tupla de dicha relación",
                    "Que un atributo que actúa como clave foránea debe referenciar a una clave primaria existente",
                    "Que la clave primaria de una relación no puede aceptar NULL",
                    "Que se pueden restringir los valores que podrá tomar un determinado atributo"
                ],
                correcta: 0,
                preguntaId: "402020216"
            },
            {
                id: "4020202005",
                pregunta: "¿Qué permiten las reglas de integridad para restringir los valores admitidos?",
                opciones: [
                    "Identificar de manera única cada tupla de una relación",
                    "Referenciar a una clave primaria existente",
                    "Restringir los valores que podrá tomar un determinado atributo",
                    "Establecer que la clave primaria no puede aceptar NULL"
                ],
                correcta: 2,
                preguntaId: "402020217"
            },
            {
                id: "4020202005",
                pregunta: "En el ejemplo de la restricción tablaPrueba_Restriccion1, ¿qué valores puede tomar el atributo columna1?",
                opciones: [
                    "Cualquier valor",
                    "Solo valores NULL",
                    "Solo valores 10, 20, 30 o 40",
                    "Solo valores mayores que 10"
                ],
                correcta: 2,
                preguntaId: "402020218"
            },
            {
                id: "4020202005",
                pregunta: "¿Qué sentencia SQL se utiliza en el ejemplo para añadir una restricción a una tabla?",
                opciones: [
                    "CREATE TABLE",
                    "ALTER TABLE",
                    "UPDATE TABLE",
                    "MODIFY TABLE"
                ],
                correcta: 1,
                preguntaId: "402020219"
            },
            {
                id: "4020202005",
                pregunta: "¿Qué cláusula se utiliza en el ejemplo para definir la condición de la restricción?",
                opciones: [
                    "WHERE",
                    "HAVING",
                    "CHECK",
                    "CONSTRAINT"
                ],
                correcta: 2,
                preguntaId: "402020220"
            }
        ]
    },
    "4020203000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020203001",
                pregunta: "¿Quién propuso las trece reglas para los modelos de bases de datos relacionales?",
                opciones: [
                    "Bill Gates",
                    "Edgar Frank Codd",
                    "Larry Ellison",
                    "James Gosling"
                ],
                correcta: 1,
                preguntaId: "402020301"
            },
            {
                id: "4020203001",
                pregunta: "¿Cómo se numeran habitualmente las trece reglas de Codd?",
                opciones: [
                    "Del 1 al 13",
                    "Del 0 al 12",
                    "Del A al M",
                    "No tienen numeración específica"
                ],
                correcta: 1,
                preguntaId: "402020302"
            },
            {
                id: "4020203001",
                pregunta: "Según el texto, ¿qué problema existía en la época inicial del modelo relacional?",
                opciones: [
                    "Las bases de datos eran demasiado complejas",
                    "No existían sistemas de gestión de bases de datos",
                    "Algunos modelos se limitaban a guardar información en formato de tabla sin atender a la normalización ni a las reglas de integridad",
                    "Las bases de datos eran demasiado lentas"
                ],
                correcta: 2,
                preguntaId: "402020303"
            },
            {
                id: "4020203001",
                pregunta: "Según el texto, ¿cuándo se considera que un modelo de bases de datos es más relacional?",
                opciones: [
                    "Cuando utiliza más tablas",
                    "Cuando tiene más datos",
                    "Cuando mayor número de las 13 reglas de Codd cumpla",
                    "Cuando utiliza SQL como lenguaje de consulta"
                ],
                correcta: 2,
                preguntaId: "402020304"
            },
            {
                id: "4020203002",
                pregunta: "¿Qué establece la Regla 0 o de fundación?",
                opciones: [
                    "Toda la información debe ser gestionada enteramente mediante capacidades relacionales",
                    "Todos los datos deben ser accesibles sin ambigüedad",
                    "El sistema debe permitir valores nulos",
                    "El sistema debe soportar un catálogo relacional online"
                ],
                correcta: 0,
                preguntaId: "402020305"
            },
            {
                id: "4020203002",
                pregunta: "Según la Regla 1 o de la información, ¿cómo se representa la información en la base de datos?",
                opciones: [
                    "Mediante archivos binarios",
                    "Mediante valores en posiciones de las columnas dentro de filas de tablas",
                    "Mediante árboles jerárquicos",
                    "Mediante grafos de relaciones"
                ],
                correcta: 1,
                preguntaId: "402020306"
            },
            {
                id: "4020203002",
                pregunta: "Según la Regla 2 o del acceso garantizado, ¿cómo debe ser localizable cada valor individual en la base de datos?",
                opciones: [
                    "Mediante un índice único global",
                    "Mediante un identificador universal",
                    "Especificando el nombre de la tabla, la columna que lo contiene y la clave primaria asociada",
                    "Mediante una función hash"
                ],
                correcta: 2,
                preguntaId: "402020307"
            },
            {
                id: "4020203002",
                pregunta: "¿Qué establece la Regla 3 sobre los valores nulos?",
                opciones: [
                    "No deben permitirse en ningún caso",
                    "Deben ser tratados como ceros o espacios en blanco",
                    "El sistema debe permitir su existencia como representación de información no disponible",
                    "Solo deben permitirse en campos no clave"
                ],
                correcta: 2,
                preguntaId: "402020308"
            },
            {
                id: "4020203003",
                pregunta: "¿Qué debe soportar el sistema según la Regla 4?",
                opciones: [
                    "Un sistema de archivos distribuido",
                    "Un catálogo relacional online que proporcione acceso a la estructura de la base de datos",
                    "Un sistema de respaldo automático",
                    "Un sistema de encriptación de datos"
                ],
                correcta: 1,
                preguntaId: "402020309"
            },
            {
                id: "4020203003",
                pregunta: "Según la Regla 5, ¿qué tipo de operaciones debe soportar el lenguaje relacional?",
                opciones: [
                    "Solo operaciones de consulta",
                    "Solo operaciones de definición (DDL) y manipulación de datos (DML)",
                    "Operaciones de definición (DDL), manipulación de datos (DML), control de seguridad e integridad (DCL) y administración de transacciones (TCL)",
                    "Solo operaciones de administración de transacciones (TCL)"
                ],
                correcta: 2,
                preguntaId: "402020310"
            },
            {
                id: "4020203003",
                pregunta: "¿Qué establece la Regla 6 sobre las vistas?",
                opciones: [
                    "No deben utilizarse vistas en un modelo relacional",
                    "Las vistas solo deben ser de lectura",
                    "Todas las vistas que son teóricamente actualizables deben poder ser actualizadas por el sistema",
                    "Las vistas deben ser materializadas"
                ],
                correcta: 2,
                preguntaId: "402020311"
            },
            {
                id: "4020203003",
                pregunta: "Según la Regla 7, ¿qué tipo de manipulación debe permitir el sistema?",
                opciones: [
                    "Solo manipulación de registros individuales",
                    "Manipulación de alto nivel en los datos, sobre conjuntos de tuplas",
                    "Solo manipulación de tablas completas",
                    "Solo manipulación de columnas individuales"
                ],
                correcta: 1,
                preguntaId: "402020312"
            },
            {
                id: "4020203004",
                pregunta: "¿Qué establece la Regla 8 o de independencia física de los datos?",
                opciones: [
                    "Los datos deben estar físicamente separados de las aplicaciones",
                    "Los programas de aplicación permanecen inalterados a nivel lógico aunque se realicen cambios en las representaciones de almacenamiento",
                    "Los datos deben estar almacenados en dispositivos independientes",
                    "Los datos deben estar replicados en múltiples ubicaciones"
                ],
                correcta: 1,
                preguntaId: "402020313"
            },
            {
                id: "4020203004",
                pregunta: "¿Qué establece la Regla 9 o de independencia lógica de los datos?",
                opciones: [
                    "Los datos deben estar lógicamente separados de las aplicaciones",
                    "Los programas de aplicación permanecen inalterados a nivel lógico aunque se realicen cambios a las tablas base que preserven la información",
                    "Los datos deben tener una estructura lógica independiente",
                    "Los datos deben estar normalizados"
                ],
                correcta: 1,
                preguntaId: "402020314"
            },
            {
                id: "4020203004",
                pregunta: "Según la Regla 10, ¿cómo deben especificarse las restricciones de integridad?",
                opciones: [
                    "Dentro de los programas de aplicación",
                    "En un archivo de configuración externo",
                    "Por separado de los programas de aplicación y almacenarse en la base de datos",
                    "No es necesario especificar restricciones de integridad"
                ],
                correcta: 2,
                preguntaId: "402020315"
            },
            {
                id: "4020203004",
                pregunta: "¿Qué establece la Regla 11 o de independencia de la distribución?",
                opciones: [
                    "Los datos deben estar distribuidos en múltiples servidores",
                    "La distribución de porciones de base de datos en distintas localizaciones debe ser transparente para los usuarios",
                    "Los datos deben estar centralizados en un único servidor",
                    "Los usuarios deben conocer la ubicación física de los datos"
                ],
                correcta: 1,
                preguntaId: "402020316"
            },
            {
                id: "4020203004",
                pregunta: "¿Qué establece la Regla 12 o regla de la no subversión?",
                opciones: [
                    "El sistema no debe permitir interfaces de bajo nivel",
                    "El sistema debe proporcionar múltiples interfaces",
                    "Si el sistema proporciona una interfaz de bajo nivel, esta no debe permitir su utilización para subvertir el sistema",
                    "El sistema debe proporcionar solo interfaces de alto nivel"
                ],
                correcta: 2,
                preguntaId: "402020317"
            },
            {
                id: "4020203001",
                pregunta: "¿Cuál es el propósito principal de las trece reglas de Codd?",
                opciones: [
                    "Mejorar el rendimiento de las bases de datos",
                    "Establecer criterios para considerar un modelo de base de datos como completamente relacional",
                    "Facilitar la programación de aplicaciones",
                    "Reducir el tamaño de las bases de datos"
                ],
                correcta: 1,
                preguntaId: "402020318"
            },
            {
                id: "4020203003",
                pregunta: "Según la Regla 5, ¿qué característica debe tener la sintaxis del lenguaje relacional?",
                opciones: [
                    "Debe ser gráfica",
                    "Debe ser lineal",
                    "Debe ser orientada a objetos",
                    "Debe ser funcional"
                ],
                correcta: 1,
                preguntaId: "402020319"
            },
            {
                id: "4020203003",
                pregunta: "Según la Regla 7, además de recuperar datos de filas y tablas múltiples, ¿qué otras operaciones pueden realizarse sobre conjuntos de tuplas?",
                opciones: [
                    "Solo consultas",
                    "Solo inserciones",
                    "Inserciones, actualizaciones y borrados",
                    "Solo actualizaciones"
                ],
                correcta: 2,
                preguntaId: "402020320"
            }
        ]
    },
    "4020204000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020204001",
                pregunta: "¿Qué es SQL?",
                opciones: [
                    "Un sistema de gestión de bases de datos",
                    "Un lenguaje declarativo de acceso a bases de datos",
                    "Un modelo de datos jerárquico",
                    "Un sistema operativo para servidores"
                ],
                correcta: 1,
                preguntaId: "402020401"
            },
            {
                id: "4020204001",
                pregunta: "¿Quién desarrolló originalmente SQL?",
                opciones: [
                    "Microsoft",
                    "Oracle",
                    "IBM",
                    "Sun Microsystems"
                ],
                correcta: 2,
                preguntaId: "402020402"
            },
            {
                id: "4020204001",
                pregunta: "¿En qué década fue desarrollado originalmente SQL?",
                opciones: [
                    "Años 60",
                    "Años 70",
                    "Años 80",
                    "Años 90"
                ],
                correcta: 1,
                preguntaId: "402020403"
            },
            {
                id: "4020204001",
                pregunta: "¿Cuál fue el nombre original de SQL?",
                opciones: [
                    "SEQUEL",
                    "ANSI SQL",
                    "SQL1",
                    "SQL2"
                ],
                correcta: 0,
                preguntaId: "402020404"
            },
            {
                id: "4020204001",
                pregunta: "¿Qué significa SQL?",
                opciones: [
                    "System Query Language",
                    "Structured Query Language",
                    "Standard Query Language",
                    "Simple Query Language"
                ],
                correcta: 1,
                preguntaId: "402020405"
            },
            {
                id: "4020204001",
                pregunta: "¿Qué versión de SQL añadió disparadores junto con funcionalidad de la orientación a objetos?",
                opciones: [
                    "SQL-86",
                    "SQL-92",
                    "SQL:1999",
                    "SQL:2003"
                ],
                correcta: 2,
                preguntaId: "402020406"
            },
            {
                id: "4020204001",
                pregunta: "¿Qué versión de SQL incorporó el lenguaje XML, junto a secuencias y columnas auto-numéricas?",
                opciones: [
                    "SQL-86",
                    "SQL-92",
                    "SQL:1999",
                    "SQL:2003"
                ],
                correcta: 3,
                preguntaId: "402020407"
            },
            {
                id: "4020204001",
                pregunta: "¿Qué significa DDL en el contexto de SQL?",
                opciones: [
                    "Data Definition Language",
                    "Data Manipulation Language",
                    "Data Control Language",
                    "Transaction Control Language"
                ],
                correcta: 0,
                preguntaId: "402020408"
            },
            {
                id: "4020204001",
                pregunta: "¿Qué significa DML en el contexto de SQL?",
                opciones: [
                    "Data Definition Language",
                    "Data Manipulation Language",
                    "Data Control Language",
                    "Transaction Control Language"
                ],
                correcta: 1,
                preguntaId: "402020409"
            },
            {
                id: "4020204002",
                pregunta: "¿Qué comando DDL se utiliza para crear nuevos objetos en una base de datos?",
                opciones: [
                    "ALTER",
                    "CREATE",
                    "DROP",
                    "TRUNCATE"
                ],
                correcta: 1,
                preguntaId: "402020410"
            },
            {
                id: "4020204002",
                pregunta: "¿Qué comando DDL se utiliza para modificar la estructura de un objeto existente?",
                opciones: [
                    "ALTER",
                    "CREATE",
                    "DROP",
                    "TRUNCATE"
                ],
                correcta: 0,
                preguntaId: "402020411"
            },
            {
                id: "4020204002",
                pregunta: "¿Qué comando DDL se utiliza para eliminar un objeto de la base de datos?",
                opciones: [
                    "ALTER",
                    "CREATE",
                    "DROP",
                    "TRUNCATE"
                ],
                correcta: 2,
                preguntaId: "402020412"
            },
            {
                id: "4020204002",
                pregunta: "¿Qué comando se utiliza para borrar el contenido completo de una tabla sin eliminar la tabla en sí?",
                opciones: [
                    "DELETE",
                    "DROP",
                    "TRUNCATE",
                    "CLEAR"
                ],
                correcta: 2,
                preguntaId: "402020413"
            },
            {
                id: "4020204003",
                pregunta: "¿Qué comando DML se utiliza para consultar datos de una tabla?",
                opciones: [
                    "SELECT",
                    "INSERT",
                    "UPDATE",
                    "DELETE"
                ],
                correcta: 0,
                preguntaId: "402020414"
            },
            {
                id: "4020204003",
                pregunta: "¿Qué comando DML se utiliza para agregar nuevos registros a una tabla?",
                opciones: [
                    "SELECT",
                    "INSERT",
                    "UPDATE",
                    "DELETE"
                ],
                correcta: 1,
                preguntaId: "402020415"
            },
            {
                id: "4020204003",
                pregunta: "¿Qué comando DML se utiliza para modificar registros existentes en una tabla?",
                opciones: [
                    "SELECT",
                    "INSERT",
                    "UPDATE",
                    "DELETE"
                ],
                correcta: 2,
                preguntaId: "402020416"
            },
            {
                id: "4020204003",
                pregunta: "¿Qué cláusula de SELECT se utiliza para especificar la condición que deben cumplir los datos a recuperar?",
                opciones: [
                    "FROM",
                    "WHERE",
                    "GROUP BY",
                    "HAVING"
                ],
                correcta: 1,
                preguntaId: "402020417"
            },
            {
                id: "4020204004",
                pregunta: "¿Qué comando DCL se utiliza para asignar permisos a usuarios?",
                opciones: [
                    "GRANT",
                    "REVOKE",
                    "COMMIT",
                    "ROLLBACK"
                ],
                correcta: 0,
                preguntaId: "402020418"
            },
            {
                id: "4020204004",
                pregunta: "¿Qué comando DCL se utiliza para retirar permisos a usuarios?",
                opciones: [
                    "GRANT",
                    "REVOKE",
                    "COMMIT",
                    "ROLLBACK"
                ],
                correcta: 1,
                preguntaId: "402020419"
            },
            {
                id: "4020204005",
                pregunta: "¿Qué comando TCL se utiliza para finalizar una transacción haciendo permanentes sus cambios?",
                opciones: [
                    "GRANT",
                    "REVOKE",
                    "COMMIT",
                    "ROLLBACK"
                ],
                correcta: 2,
                preguntaId: "402020420"
            }
        ]
    },
    "4020205000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020205001",
                pregunta: "¿Qué significa el acrónimo ACID en el contexto de las transacciones del modelo relacional?",
                opciones: [
                    "Atomicidad, Consistencia, Integridad, Durabilidad",
                    "Atomicidad, Consistencia, Aislamiento, Durabilidad",
                    "Acceso, Consistencia, Integridad, Durabilidad",
                    "Atomicidad, Coherencia, Integridad, Disponibilidad"
                ],
                correcta: 1,
                preguntaId: "402020501"
            },
            {
                id: "4020205001",
                pregunta: "¿Para qué sirven las propiedades ACID en el modelo relacional?",
                opciones: [
                    "Para mejorar el rendimiento de las consultas",
                    "Para garantizar que las transacciones sobre los datos se realizan de manera fiable",
                    "Para facilitar la programación de aplicaciones",
                    "Para reducir el tamaño de la base de datos"
                ],
                correcta: 1,
                preguntaId: "402020502"
            },
            {
                id: "4020205002",
                pregunta: "¿Qué establece la propiedad de atomicidad?",
                opciones: [
                    "Que las transacciones deben entenderse como una unidad, ejecutándose en su totalidad o revertidas por completo",
                    "Que la ejecución de cualquier transacción llevará a la base de datos de un estado válido a otro estado que también lo sea",
                    "Que la ejecución concurrente de las transacciones resulta en un estado del sistema similar al que se obtendría si dichas transacciones fueran ejecutadas una detrás de otra",
                    "Que una vez confirmada cierta transacción, quedará persistida, siendo sus cambios permanentes para la base de datos"
                ],
                correcta: 0,
                preguntaId: "402020503"
            },
            {
                id: "4020205002",
                pregunta: "Según la propiedad de atomicidad, si una parte de la transacción falla, ¿qué ocurre con el conjunto de la transacción?",
                opciones: [
                    "Se ejecuta parcialmente",
                    "Se ejecuta completamente",
                    "No se ejecuta y no realiza cambios sobre la base de datos",
                    "Se ejecuta pero con advertencias"
                ],
                correcta: 2,
                preguntaId: "402020504"
            },
            {
                id: "4020205003",
                pregunta: "¿Qué establece la propiedad de consistencia?",
                opciones: [
                    "Que las transacciones deben entenderse como una unidad",
                    "Que la ejecución de cualquier transacción llevará a la base de datos de un estado válido a otro estado que también lo sea",
                    "Que la ejecución concurrente de las transacciones resulta en un estado del sistema similar al que se obtendría si dichas transacciones fueran ejecutadas una detrás de otra",
                    "Que una vez confirmada cierta transacción, quedará persistida"
                ],
                correcta: 1,
                preguntaId: "402020505"
            },
            {
                id: "4020205003",
                pregunta: "¿Qué es una restricción de consistencia según el texto?",
                opciones: [
                    "Un tipo de transacción",
                    "Un predicado sobre los datos que funcionan como precondición, postcondición, y condición de transformación en la ejecución de cualquier transacción",
                    "Un tipo de bloqueo",
                    "Un nivel de aislamiento"
                ],
                correcta: 1,
                preguntaId: "402020506"
            },
            {
                id: "4020205004",
                pregunta: "¿Qué establece la propiedad de aislamiento (isolation)?",
                opciones: [
                    "Que las transacciones deben entenderse como una unidad",
                    "Que la ejecución de cualquier transacción llevará a la base de datos de un estado válido a otro estado que también lo sea",
                    "Que la ejecución concurrente de las transacciones resulta en un estado del sistema similar al que se obtendría si dichas transacciones fueran ejecutadas una detrás de otra de forma independiente",
                    "Que una vez confirmada cierta transacción, quedará persistida"
                ],
                correcta: 2,
                preguntaId: "402020507"
            },
            {
                id: "4020205004",
                pregunta: "¿Qué es la concurrencia en el contexto del aislamiento de transacciones?",
                opciones: [
                    "La ejecución de una transacción después de otra",
                    "La situación de ejecución simultánea de dos o más transacciones sobre el mismo conjunto de datos",
                    "El establecimiento de restricciones de acceso único sobre ciertos datos",
                    "La confirmación de una transacción"
                ],
                correcta: 1,
                preguntaId: "402020508"
            },
            {
                id: "4020205004",
                pregunta: "¿Qué es un bloqueo en el contexto del aislamiento de transacciones?",
                opciones: [
                    "La ejecución de una transacción después de otra",
                    "La situación de ejecución simultánea de dos o más transacciones",
                    "El establecimiento de restricciones de acceso único o exclusivo sobre ciertos datos o elementos de la base de datos",
                    "La confirmación de una transacción"
                ],
                correcta: 2,
                preguntaId: "402020509"
            },
            {
                id: "4020205004",
                pregunta: "¿Cuál es el nivel más alto de aislamiento según ANSI/ISO SQL?",
                opciones: [
                    "Lecturas no confirmadas",
                    "Lecturas confirmadas",
                    "Lecturas repetibles",
                    "Lecturas serializables"
                ],
                correcta: 3,
                preguntaId: "402020510"
            },
            {
                id: "4020205004",
                pregunta: "¿Cuál es el nivel más bajo de aislamiento según ANSI/ISO SQL?",
                opciones: [
                    "Lecturas no confirmadas",
                    "Lecturas confirmadas",
                    "Lecturas repetibles",
                    "Lecturas serializables"
                ],
                correcta: 0,
                preguntaId: "402020511"
            },
            {
                id: "4020205005",
                pregunta: "¿Qué son las lecturas sucias o dirty reads?",
                opciones: [
                    "Cuando durante el curso de una transacción se recupera una fila en dos ocasiones, obteniéndose valores diferentes",
                    "Cuando durante el curso de una transacción se ejecutan dos consultas idénticas, siendo las filas devueltas por la segunda diferentes a las de la primera",
                    "Cuando se permite que una transacción lea un dato que ha sido modificado por otra transacción que aún no ha hecho COMMIT y que finalmente acaba haciendo ROLLBACK",
                    "Cuando dos transacciones concurrentes realizan actualizaciones del mismo registro"
                ],
                correcta: 2,
                preguntaId: "402020512"
            },
            {
                id: "4020205005",
                pregunta: "¿Qué son las lecturas no repetibles?",
                opciones: [
                    "Cuando durante el curso de una transacción se recupera una fila en dos ocasiones, obteniéndose valores diferentes",
                    "Cuando durante el curso de una transacción se ejecutan dos consultas idénticas, siendo las filas devueltas por la segunda diferentes a las de la primera",
                    "Cuando se permite que una transacción lea un dato que ha sido modificado por otra transacción que aún no ha hecho COMMIT",
                    "Cuando dos transacciones concurrentes realizan actualizaciones del mismo registro"
                ],
                correcta: 0,
                preguntaId: "402020513"
            },
            {
                id: "4020205005",
                pregunta: "¿Qué son las lecturas fantasmas?",
                opciones: [
                    "Cuando durante el curso de una transacción se recupera una fila en dos ocasiones, obteniéndose valores diferentes",
                    "Cuando durante el curso de una transacción se ejecutan dos consultas idénticas, siendo las filas devueltas por la segunda diferentes a las de la primera",
                    "Cuando se permite que una transacción lea un dato que ha sido modificado por otra transacción que aún no ha hecho COMMIT",
                    "Cuando dos transacciones concurrentes realizan actualizaciones del mismo registro"
                ],
                correcta: 1,
                preguntaId: "402020514"
            },
            {
                id: "4020205005",
                pregunta: "¿Qué es el problema de la última modificación (Last update problem)?",
                opciones: [
                    "Cuando durante el curso de una transacción se recupera una fila en dos ocasiones, obteniéndose valores diferentes",
                    "Cuando durante el curso de una transacción se ejecutan dos consultas idénticas, siendo las filas devueltas por la segunda diferentes a las de la primera",
                    "Cuando se permite que una transacción lea un dato que ha sido modificado por otra transacción que aún no ha hecho COMMIT",
                    "Un caso específico de lectura no repetible, que se produce cuando dos transacciones concurrentes realizan actualizaciones del mismo registro"
                ],
                correcta: 3,
                preguntaId: "402020515"
            },
            {
                id: "4020205005",
                pregunta: "Según la tabla del texto, ¿qué nivel de aislamiento previene todos los problemas de concurrencia?",
                opciones: [
                    "Lectura no confirmada",
                    "Lectura confirmada",
                    "Lectura repetible",
                    "Lectura serializable"
                ],
                correcta: 3,
                preguntaId: "402020516"
            },
            {
                id: "4020205006",
                pregunta: "¿Qué establece la propiedad de durabilidad?",
                opciones: [
                    "Que las transacciones deben entenderse como una unidad",
                    "Que la ejecución de cualquier transacción llevará a la base de datos de un estado válido a otro estado que también lo sea",
                    "Que la ejecución concurrente de las transacciones resulta en un estado del sistema similar al que se obtendría si dichas transacciones fueran ejecutadas una detrás de otra",
                    "Que una vez confirmada cierta transacción, quedará persistida, siendo sus cambios permanentes para la base de datos"
                ],
                correcta: 3,
                preguntaId: "402020517"
            },
            {
                id: "4020205006",
                pregunta: "¿Cómo implementan muchas bases de datos la durabilidad según el texto?",
                opciones: [
                    "Mediante la replicación de datos",
                    "Mediante la escritura de las transacciones en un log de transacciones",
                    "Mediante el uso de memoria no volátil",
                    "Mediante copias de seguridad automáticas"
                ],
                correcta: 1,
                preguntaId: "402020518"
            },
            {
                id: "4020205006",
                pregunta: "¿Qué es el protocolo de 'COMMIT en dos fases' o 2PC?",
                opciones: [
                    "Un protocolo para implementar la atomicidad",
                    "Un protocolo para implementar la consistencia",
                    "Un protocolo para implementar el aislamiento",
                    "Un protocolo para coordinar a todos los participantes (nodos) en transacciones distribuidas antes de aceptar un COMMIT"
                ],
                correcta: 3,
                preguntaId: "402020519"
            },
            {
                id: "4020205006",
                pregunta: "¿Cuáles son las dos fases del protocolo de 'COMMIT en dos fases'?",
                opciones: [
                    "Fase de lectura y fase de escritura",
                    "Fase de bloqueo y fase de desbloqueo",
                    "Fase preparatoria y fase COMMIT",
                    "Fase de inicio y fase de finalización"
                ],
                correcta: 2,
                preguntaId: "402020520"
            }
        ]
    },
    "4020206000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020206001",
                pregunta: "¿Cuál es el principal objetivo de la normalización en el modelo relacional?",
                opciones: [
                    "Mejorar el rendimiento de las consultas",
                    "Evitar principalmente la redundancia en los datos y las anomalías que produce",
                    "Reducir el tamaño de la base de datos",
                    "Facilitar la programación de aplicaciones"
                ],
                correcta: 1,
                preguntaId: "402020601"
            },
            {
                id: "4020206001",
                pregunta: "¿Qué relación existe entre las formas normales?",
                opciones: [
                    "Son independientes entre sí",
                    "Cada una incluye a las anteriores",
                    "Cada una excluye a las anteriores",
                    "No existe relación entre ellas"
                ],
                correcta: 1,
                preguntaId: "402020602"
            },
            {
                id: "4020206002",
                pregunta: "¿Qué problema principal genera la redundancia de datos?",
                opciones: [
                    "Mayor velocidad de procesamiento",
                    "Mayor necesidad de almacenamiento innecesario",
                    "Mayor seguridad de los datos",
                    "Mayor facilidad de consulta"
                ],
                correcta: 1,
                preguntaId: "402020603"
            },
            {
                id: "4020206002",
                pregunta: "¿Qué tipos de anomalías pueden presentarse debido a la redundancia de datos?",
                opciones: [
                    "Anomalías de inserción, borrado y modificación",
                    "Anomalías de consulta, actualización y eliminación",
                    "Anomalías de creación, lectura y escritura",
                    "Anomalías de definición, manipulación y control"
                ],
                correcta: 0,
                preguntaId: "402020604"
            },
            {
                id: "4020206002",
                pregunta: "¿Qué es una anomalía de inserción?",
                opciones: [
                    "Cuando no se pueden insertar datos en la base de datos",
                    "Cuando la inserción de datos provoca un error en el sistema",
                    "Cuando la existencia de atributos que no dependen completamente de la clave primaria permite realizar inserciones sin respetar las dependencias funcionales",
                    "Cuando la inserción de datos es demasiado lenta"
                ],
                correcta: 2,
                preguntaId: "402020605"
            },
            {
                id: "4020206002",
                pregunta: "¿Qué es una anomalía de borrado?",
                opciones: [
                    "Cuando no se pueden borrar datos de la base de datos",
                    "Cuando el borrado de datos provoca un error en el sistema",
                    "Cuando la eliminación de una fila conlleva la eliminación de datos asociados con los que no existe realmente una dependencia funcional completa",
                    "Cuando el borrado de datos es demasiado lento"
                ],
                correcta: 2,
                preguntaId: "402020606"
            },
            {
                id: "4020206002",
                pregunta: "¿Qué es una anomalía de modificación?",
                opciones: [
                    "Cuando no se pueden modificar datos en la base de datos",
                    "Cuando la modificación de datos provoca un error en el sistema",
                    "Cuando la modificación de determinados datos redundantes sólo se realiza para algunas de sus ocurrencias, perdiéndose la consistencia global",
                    "Cuando la modificación de datos es demasiado lenta"
                ],
                correcta: 2,
                preguntaId: "402020607"
            },
            {
                id: "4020206003",
                pregunta: "¿Cuándo se considera que un esquema está en Primera Forma Normal (1FN)?",
                opciones: [
                    "Cuando todos los valores de sus atributos se establecen en dominios atómicos",
                    "Cuando todos los atributos que no forman parte de la clave tienen dependencia funcional completa de la clave",
                    "Cuando ningún atributo que no forma parte de una clave candidata depende transitivamente de ninguna clave candidata",
                    "Cuando todas las dependencias funcionales lo son de un atributo que sea superclave"
                ],
                correcta: 0,
                preguntaId: "402020608"
            },
            {
                id: "4020206003",
                pregunta: "¿Qué tipo de atributos se deben evitar para que un esquema esté en Primera Forma Normal?",
                opciones: [
                    "Atributos numéricos",
                    "Atributos de texto",
                    "Atributos multivalorados, compuestos o sus combinaciones",
                    "Atributos con valores nulos"
                ],
                correcta: 2,
                preguntaId: "402020609"
            },
            {
                id: "4020206003",
                pregunta: "¿Cuál de las siguientes soluciones para poner un esquema en Primera Forma Normal presenta el inconveniente de incluir información redundante?",
                opciones: [
                    "Eliminar el atributo multivalorado y crear una nueva relación",
                    "Ampliar la clave de la relación para incluir al atributo multivalorado",
                    "Crear tantas columnas como sea necesario para los valores del atributo multivalorado",
                    "Ninguna de las anteriores"
                ],
                correcta: 1,
                preguntaId: "402020610"
            },
            {
                id: "4020206004",
                pregunta: "¿Cuándo se considera que un esquema está en Segunda Forma Normal (2FN)?",
                opciones: [
                    "Cuando todos los valores de sus atributos se establecen en dominios atómicos",
                    "Cuando está en 1FN y todos los atributos que no forman parte de la clave tienen dependencia funcional completa de la clave",
                    "Cuando ningún atributo que no forma parte de una clave candidata depende transitivamente de ninguna clave candidata",
                    "Cuando todas las dependencias funcionales lo son de un atributo que sea superclave"
                ],
                correcta: 1,
                preguntaId: "402020611"
            },
            {
                id: "4020206004",
                pregunta: "¿Qué es una dependencia funcional completa?",
                opciones: [
                    "Cuando un atributo depende de otro atributo",
                    "Cuando un atributo depende de una clave primaria",
                    "Cuando un atributo Y depende del atributo clave X y no existe ningún subconjunto de X del que Y dependa",
                    "Cuando un atributo depende de varios atributos"
                ],
                correcta: 2,
                preguntaId: "402020612"
            },
            {
                id: "4020206004",
                pregunta: "¿Qué solución se propone para poner un esquema en Segunda Forma Normal?",
                opciones: [
                    "Eliminar los atributos multivalorados",
                    "Crear tantas relaciones adicionales como dependencias funcionales no completas existan",
                    "Ampliar la clave de la relación",
                    "Crear tantas columnas como sea necesario"
                ],
                correcta: 1,
                preguntaId: "402020613"
            },
            {
                id: "4020206005",
                pregunta: "¿Cuándo se considera que un esquema está en Tercera Forma Normal (3FN)?",
                opciones: [
                    "Cuando todos los valores de sus atributos se establecen en dominios atómicos",
                    "Cuando todos los atributos que no forman parte de la clave tienen dependencia funcional completa de la clave",
                    "Cuando satisface la 2FN y ningún atributo que no forma parte de una clave candidata depende transitivamente de ninguna clave candidata",
                    "Cuando todas las dependencias funcionales lo son de un atributo que sea superclave"
                ],
                correcta: 2,
                preguntaId: "402020614"
            },
            {
                id: "4020206005",
                pregunta: "¿Qué es una dependencia funcional transitiva?",
                opciones: [
                    "Cuando un atributo depende de otro atributo",
                    "Cuando un atributo depende de una clave primaria",
                    "Cuando un atributo depende de un subconjunto de la clave",
                    "Cuando la dependencia funcional X → Y se da a través de un conjunto de atributos Z, cumpliéndose X → Z y Z → Y"
                ],
                correcta: 3,
                preguntaId: "402020615"
            },
            {
                id: "4020206005",
                pregunta: "¿Qué solución se propone para poner un esquema en Tercera Forma Normal?",
                opciones: [
                    "Eliminar los atributos multivalorados",
                    "Crear tantas relaciones adicionales como dependencias funcionales no completas existan",
                    "Crear tantas relaciones adicionales como dependencias funcionales transitivas existan",
                    "Ampliar la clave de la relación"
                ],
                correcta: 2,
                preguntaId: "402020616"
            },
            {
                id: "4020206006",
                pregunta: "¿Qué establece la Forma Normal de Boyce Codd (FNBC)?",
                opciones: [
                    "Que todos los valores de sus atributos se establecen en dominios atómicos",
                    "Que todos los atributos que no forman parte de la clave tienen dependencia funcional completa de la clave",
                    "Que ningún atributo que no forma parte de una clave candidata depende transitivamente de ninguna clave candidata",
                    "Que todas las dependencias funcionales deben serlo de un atributo que sea superclave"
                ],
                correcta: 3,
                preguntaId: "402020617"
            },
            {
                id: "4020206006",
                pregunta: "¿Qué relación existe entre la Tercera Forma Normal (3FN) y la Forma Normal de Boyce Codd (FNBC)?",
                opciones: [
                    "Son equivalentes",
                    "La FNBC es más restrictiva que la 3FN",
                    "La 3FN es más restrictiva que la FNBC",
                    "No existe relación entre ellas"
                ],
                correcta: 1,
                preguntaId: "402020618"
            },
            {
                id: "4020206007",
                pregunta: "¿Cuándo se considera que un esquema está en Cuarta Forma Normal (4FN)?",
                opciones: [
                    "Cuando todos los valores de sus atributos se establecen en dominios atómicos",
                    "Cuando todos los atributos que no forman parte de la clave tienen dependencia funcional completa de la clave",
                    "Cuando satisface la 3FN o la FNBC y no posee dependencias multivaluadas no triviales",
                    "Cuando todas las dependencias funcionales lo son de un atributo que sea superclave"
                ],
                correcta: 2,
                preguntaId: "402020619"
            },
            {
                id: "4020206007",
                pregunta: "¿Qué es una tabla con dependencia multivaluada?",
                opciones: [
                    "Una tabla con atributos multivalorados",
                    "Una tabla en la que la existencia de dos o más relaciones independientes M a N causa redundancia de información",
                    "Una tabla con dependencias funcionales transitivas",
                    "Una tabla con dependencias funcionales parciales"
                ],
                correcta: 1,
                preguntaId: "402020620"
            }
        ]
    },
    "4020207000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020207001",
                pregunta: "¿Cuál es la principal finalidad de los índices en las bases de datos?",
                opciones: [
                    "Reducir el tamaño de la base de datos",
                    "Acelerar las operaciones que se realizan sobre los datos",
                    "Mejorar la seguridad de los datos",
                    "Facilitar la programación de aplicaciones"
                ],
                correcta: 1,
                preguntaId: "402020701"
            },
            {
                id: "4020207001",
                pregunta: "¿Cómo funcionan los índices de bases de datos según el texto?",
                opciones: [
                    "Comprimiendo los datos para reducir su tamaño",
                    "Estableciendo pares que asocian el elemento a indexar con su posición en la base de datos",
                    "Cifrando los datos para mejorar la seguridad",
                    "Creando copias de seguridad de los datos"
                ],
                correcta: 1,
                preguntaId: "402020702"
            },
            {
                id: "4020207001",
                pregunta: "¿Qué métricas se utilizan para medir la calidad de los índices?",
                opciones: [
                    "La velocidad de las operaciones de acceso y el espacio de almacenamiento",
                    "La seguridad y la integridad de los datos",
                    "La facilidad de uso y la compatibilidad",
                    "El coste económico y el rendimiento"
                ],
                correcta: 0,
                preguntaId: "402020703"
            },
            {
                id: "4020207001",
                pregunta: "¿Cómo se denomina al proceso de puesta al día de los índices con respecto a los datos indexados?",
                opciones: [
                    "Reindexación",
                    "Actualización de las estadísticas de la base de datos",
                    "Reconstrucción de índices",
                    "Optimización de índices"
                ],
                correcta: 1,
                preguntaId: "402020704"
            },
            {
                id: "4020207001",
                pregunta: "¿Qué diferencia hay entre los índices simples y los índices compuestos?",
                opciones: [
                    "Los índices simples son más rápidos, los compuestos más lentos",
                    "Los índices simples indexan un único atributo, los compuestos indexan varios",
                    "Los índices simples ocupan menos espacio, los compuestos más",
                    "Los índices simples son para tablas pequeñas, los compuestos para tablas grandes"
                ],
                correcta: 1,
                preguntaId: "402020705"
            },
            {
                id: "4020207002",
                pregunta: "¿Qué característica define a los índices primarios?",
                opciones: [
                    "Son archivos ordenados secuencialmente por el campo de la tabla que se indexa",
                    "No se basan en la ordenación de los registros en la tabla",
                    "Pueden existir varios por tabla",
                    "Siempre contienen todos los valores del campo que indexan"
                ],
                correcta: 0,
                preguntaId: "402020706"
            },
            {
                id: "4020207002",
                pregunta: "¿Cuántos índices primarios puede tener una tabla?",
                opciones: [
                    "Ninguno",
                    "Uno",
                    "Dos",
                    "Tantos como columnas tenga la tabla"
                ],
                correcta: 1,
                preguntaId: "402020707"
            },
            {
                id: "4020207002",
                pregunta: "¿Qué característica define a los índices secundarios?",
                opciones: [
                    "Son archivos ordenados secuencialmente por el campo de la tabla que se indexa",
                    "El mecanismo de indexación no está basado en la ordenación de los registros en la tabla",
                    "Solo puede existir uno por tabla",
                    "Siempre se basan en la clave primaria"
                ],
                correcta: 1,
                preguntaId: "402020708"
            },
            {
                id: "4020207003",
                pregunta: "¿Qué son los índices multinivel?",
                opciones: [
                    "Índices que solo indexan un único atributo",
                    "Índices que se basan en el orden que toman los datos en la tabla",
                    "Índices que incluyen un primer nivel de indexado de los datos y otros niveles de indexado sobre esos índices",
                    "Índices que contienen tantas entradas como la columna de la tabla que indexan"
                ],
                correcta: 2,
                preguntaId: "402020709"
            },
            {
                id: "4020207003",
                pregunta: "¿De qué viene el nombre de árbol B?",
                opciones: [
                    "Binary tree (árbol binario)",
                    "Balanced tree (árbol balanceado)",
                    "Basic tree (árbol básico)",
                    "Branched tree (árbol ramificado)"
                ],
                correcta: 1,
                preguntaId: "402020710"
            },
            {
                id: "4020207003",
                pregunta: "¿Cuál de las siguientes NO es una característica de un árbol B?",
                opciones: [
                    "Todos los caminos desde la raíz a los nodos hoja tienen la misma longitud",
                    "Cada nodo interno tiene entre n/2 y n hijos",
                    "Todos los nodos de tipo hoja están en la misma capa",
                    "Los nodos no hoja solo se usan como índices, y los datos se almacenan en nodos hoja"
                ],
                correcta: 3,
                preguntaId: "402020711"
            },
            {
                id: "4020207003",
                pregunta: "¿Cuál de las siguientes es una diferencia entre los árboles B+ y los árboles B?",
                opciones: [
                    "Los árboles B+ no están balanceados",
                    "Los árboles B+ tienen menos niveles que los árboles B",
                    "En los árboles B+, los nodos no hoja solo se usan como índices, y los datos se almacenan en nodos hoja",
                    "Los árboles B+ no permiten búsquedas eficientes"
                ],
                correcta: 2,
                preguntaId: "402020712"
            },
            {
                id: "4020207003",
                pregunta: "En la operación de búsqueda en un árbol B, si la clave a buscar no se encuentra en el nodo actual y este no es una hoja, ¿qué se hace?",
                opciones: [
                    "Se termina la búsqueda y se concluye que la clave no existe",
                    "Se vuelve al nodo padre y se continúa la búsqueda",
                    "Se pasa al nodo hijo que corresponde según el valor de la clave",
                    "Se realiza una búsqueda secuencial en todos los nodos hijos"
                ],
                correcta: 2,
                preguntaId: "402020713"
            },
            {
                id: "4020207003",
                pregunta: "En la operación de inserción en un árbol B, si el nodo hoja donde debe ubicarse el nuevo elemento está lleno, ¿qué se hace?",
                opciones: [
                    "Se rechaza la inserción",
                    "Se busca otro nodo con espacio",
                    "El nodo debe ser dividido en dos nodos",
                    "Se crea un nuevo nivel en el árbol"
                ],
                correcta: 2,
                preguntaId: "402020714"
            },
            {
                id: "4020207003",
                pregunta: "¿Por qué la operación de eliminación en árboles B+ es más simple que en árboles B?",
                opciones: [
                    "Porque los árboles B+ tienen menos niveles",
                    "Porque los elementos a eliminar siempre se encontrarán en los nodos hoja",
                    "Porque los árboles B+ no requieren rebalanceo",
                    "Porque los árboles B+ no permiten eliminaciones"
                ],
                correcta: 1,
                preguntaId: "402020715"
            },
            {
                id: "4020207004",
                pregunta: "¿Qué significa ISAM?",
                opciones: [
                    "Indexed Sequential Access Method",
                    "Index System Access Management",
                    "Integrated Sequential Access Method",
                    "Index Sequential Access Management"
                ],
                correcta: 0,
                preguntaId: "402020716"
            },
            {
                id: "4020207004",
                pregunta: "¿Cuántos índices de tipo clúster puede tener una tabla?",
                opciones: [
                    "Ninguno",
                    "Uno",
                    "Dos",
                    "Tantos como columnas tenga la tabla"
                ],
                correcta: 1,
                preguntaId: "402020717"
            },
            {
                id: "4020207004",
                pregunta: "¿Qué ventaja tienen los índices de tipo clúster en cuanto al acceso a los datos?",
                opciones: [
                    "Permiten búsquedas por rango más eficientes",
                    "Ocupan menos espacio de almacenamiento",
                    "El acceso a los datos es más rápido porque se evita un nivel de indirección",
                    "Permiten múltiples ordenaciones de los datos"
                ],
                correcta: 2,
                preguntaId: "402020718"
            },
            {
                id: "4020207004",
                pregunta: "¿Para qué tipo de columnas son especialmente indicados los índices bitmap?",
                opciones: [
                    "Columnas con muchos valores diferentes",
                    "Columnas con una cardinalidad baja (pocos valores diferentes)",
                    "Columnas de tipo numérico",
                    "Columnas de tipo fecha"
                ],
                correcta: 1,
                preguntaId: "402020719"
            },
            {
                id: "4020207004",
                pregunta: "¿Qué limitaciones presentan los índices hash?",
                opciones: [
                    "Ocupan mucho espacio de almacenamiento",
                    "Son muy lentos en las búsquedas",
                    "No se pueden usar para ordenar y agrupar valores de datos, y solo admiten búsqueda precisa",
                    "Solo funcionan con datos numéricos"
                ],
                correcta: 2,
                preguntaId: "402020720"
            }
        ]
    },
    "4020208000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020208001",
                pregunta: "¿Qué tipo de sistema de gestión de base de datos es Oracle Database?",
                opciones: [
                    "Relacional puro",
                    "Objeto-relacional",
                    "Orientado a documentos",
                    "NoSQL"
                ],
                correcta: 1,
                preguntaId: "402020801"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué empresa desarrolla Oracle Database?",
                opciones: [
                    "Microsoft",
                    "IBM",
                    "Oracle Corporation",
                    "Sun Microsystems"
                ],
                correcta: 2,
                preguntaId: "402020802"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué lenguaje de desarrollo utiliza Microsoft SQL Server?",
                opciones: [
                    "PL/SQL",
                    "Transact-SQL",
                    "PL/pgSQL",
                    "SQL estándar"
                ],
                correcta: 1,
                preguntaId: "402020803"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué empresa desarrolla Microsoft SQL Server?",
                opciones: [
                    "Oracle Corporation",
                    "IBM",
                    "Microsoft",
                    "PostgreSQL Global Development Group"
                ],
                correcta: 2,
                preguntaId: "402020804"
            },
            {
                id: "4020208001",
                pregunta: "¿Bajo qué tipo de licencia se publica PostgreSQL?",
                opciones: [
                    "Licencia comercial",
                    "Licencia GPL",
                    "Licencia similar a BSD o MIT",
                    "Licencia dual (GPL/Comercial)"
                ],
                correcta: 2,
                preguntaId: "402020805"
            },
            {
                id: "4020208001",
                pregunta: "¿Cómo se denomina la comunidad que dirige el desarrollo de PostgreSQL?",
                opciones: [
                    "PostgreSQL Foundation",
                    "PGDG (PostgreSQL Global Development Group)",
                    "PostgreSQL Community",
                    "PostgreSQL Development Team"
                ],
                correcta: 1,
                preguntaId: "402020806"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué empresa desarrolla DB2?",
                opciones: [
                    "Oracle Corporation",
                    "Microsoft",
                    "IBM",
                    "Sun Microsystems"
                ],
                correcta: 2,
                preguntaId: "402020807"
            },
            {
                id: "4020208001",
                pregunta: "¿Para qué está diseñado principalmente DB2 según el texto?",
                opciones: [
                    "Para ofrecer resiliencia, rendimiento y rentabilidad para cargas de trabajo transaccionales",
                    "Para entornos de desarrollo web",
                    "Para bases de datos orientadas a objetos",
                    "Para sistemas de almacenamiento en la nube"
                ],
                correcta: 0,
                preguntaId: "402020808"
            },
            {
                id: "4020208001",
                pregunta: "¿Bajo qué tipo de licencia se desarrolla MySQL?",
                opciones: [
                    "Solo licencia comercial",
                    "Solo licencia GPL",
                    "Licencia dual: GPL y comercial",
                    "Licencia similar a BSD o MIT"
                ],
                correcta: 2,
                preguntaId: "402020809"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué empresa es propietaria actualmente de MySQL?",
                opciones: [
                    "Microsoft",
                    "IBM",
                    "Oracle Corporation",
                    "Fundación MariaDB"
                ],
                correcta: 2,
                preguntaId: "402020810"
            },
            {
                id: "4020208001",
                pregunta: "¿Para qué entornos está especialmente orientado MySQL según el texto?",
                opciones: [
                    "Entornos de desarrollo web",
                    "Grandes bases de datos empresariales",
                    "Sistemas de procesamiento analítico",
                    "Aplicaciones móviles"
                ],
                correcta: 0,
                preguntaId: "402020811"
            },
            {
                id: "4020208001",
                pregunta: "¿De qué sistema de gestión de bases de datos deriva MariaDB?",
                opciones: [
                    "Oracle Database",
                    "Microsoft SQL Server",
                    "PostgreSQL",
                    "MySQL"
                ],
                correcta: 3,
                preguntaId: "402020812"
            },
            {
                id: "4020208001",
                pregunta: "¿Bajo qué licencia se desarrolla MariaDB?",
                opciones: [
                    "Licencia comercial",
                    "Licencia GPL",
                    "Licencia dual (GPL/Comercial)",
                    "Licencia similar a BSD o MIT"
                ],
                correcta: 1,
                preguntaId: "402020813"
            },
            {
                id: "4020208001",
                pregunta: "¿Quién fundó MySQL según el texto?",
                opciones: [
                    "Larry Ellison",
                    "Bill Gates",
                    "Michael Widenius",
                    "James Gosling"
                ],
                correcta: 2,
                preguntaId: "402020814"
            },
            {
                id: "4020208001",
                pregunta: "¿Cuál de los siguientes sistemas de gestión de bases de datos NO es de código abierto?",
                opciones: [
                    "PostgreSQL",
                    "MySQL",
                    "MariaDB",
                    "Microsoft SQL Server"
                ],
                correcta: 3,
                preguntaId: "402020815"
            },
            {
                id: "4020208001",
                pregunta: "¿Cuál de los siguientes sistemas de gestión de bases de datos es descrito como orientado a objetos y relacional?",
                opciones: [
                    "Oracle Database",
                    "Microsoft SQL Server",
                    "PostgreSQL",
                    "DB2"
                ],
                correcta: 2,
                preguntaId: "402020816"
            },
            {
                id: "4020208001",
                pregunta: "¿Cuál de los siguientes sistemas de gestión de bases de datos está considerado como el más popular de código abierto según el texto?",
                opciones: [
                    "PostgreSQL",
                    "MySQL",
                    "MariaDB",
                    "DB2"
                ],
                correcta: 1,
                preguntaId: "402020817"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué tres sistemas de gestión de bases de datos son mencionados como los más populares en general según el texto?",
                opciones: [
                    "Oracle, Microsoft SQL Server y MySQL",
                    "PostgreSQL, MySQL y MariaDB",
                    "Oracle, DB2 y PostgreSQL",
                    "Microsoft SQL Server, DB2 y MariaDB"
                ],
                correcta: 0,
                preguntaId: "402020818"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué característica destaca el texto sobre Oracle Database?",
                opciones: [
                    "Su facilidad de uso",
                    "Su bajo coste",
                    "La mejora en la gestión de grandes bases de datos y aumento del nivel de seguridad",
                    "Su orientación a entornos web"
                ],
                correcta: 2,
                preguntaId: "402020819"
            },
            {
                id: "4020208001",
                pregunta: "¿Qué es Transact-SQL según el texto?",
                opciones: [
                    "Un tipo de base de datos",
                    "Una implementación del estándar ANSI del lenguaje SQL utilizada por Microsoft SQL Server",
                    "Un sistema de gestión de transacciones",
                    "Un lenguaje de programación independiente"
                ],
                correcta: 1,
                preguntaId: "402020820"
            }
        ]
    },
    "4020301000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020301001",
                pregunta: "¿Qué significa DAS?",
                opciones: [
                    "Data Access Storage",
                    "Direct Attached Storage",
                    "Distributed Array System",
                    "Digital Archive Storage"
                ],
                correcta: 1,
                preguntaId: "402030101"
            },
            {
                id: "4020301001",
                pregunta: "¿Cuál es la principal característica del almacenamiento DAS?",
                opciones: [
                    "Se conecta a través de una red TCP/IP",
                    "Utiliza una red dedicada independiente de las redes TCP/IP",
                    "El dispositivo de almacenamiento se conecta directamente al servidor o host",
                    "Utiliza protocolos de compartición de archivos como NFS o CIFS"
                ],
                correcta: 2,
                preguntaId: "402030102"
            },
            {
                id: "4020301001",
                pregunta: "¿Cuáles son las principales ventajas del almacenamiento DAS?",
                opciones: [
                    "Alto rendimiento y tolerancia a fallos",
                    "Bajo coste y facilidad de implementación",
                    "Acceso a nivel de bloque y uso de fibra óptica",
                    "Compartición de archivos y uso de red TCP/IP"
                ],
                correcta: 1,
                preguntaId: "402030103"
            },
            {
                id: "4020301001",
                pregunta: "¿Qué significa NAS?",
                opciones: [
                    "Network Array System",
                    "New Access Storage",
                    "Network Attached Storage",
                    "Non-volatile Array Storage"
                ],
                correcta: 2,
                preguntaId: "402030104"
            },
            {
                id: "4020301001",
                pregunta: "¿Qué tipo de red utiliza habitualmente el almacenamiento NAS?",
                opciones: [
                    "Red Fibre Channel",
                    "Red TCP/IP",
                    "Red InfiniBand",
                    "Red ATM"
                ],
                correcta: 1,
                preguntaId: "402030105"
            },
            {
                id: "4020301001",
                pregunta: "¿Qué protocolos de compartición de archivos utiliza el almacenamiento NAS?",
                opciones: [
                    "FTP y HTTP",
                    "iSCSI y FCoE",
                    "NFS y CIFS",
                    "FC y SCSI"
                ],
                correcta: 2,
                preguntaId: "402030106"
            },
            {
                id: "4020301001",
                pregunta: "¿Qué significa SAN?",
                opciones: [
                    "Storage Array Network",
                    "System Area Network",
                    "Storage Area Network",
                    "Server Access Network"
                ],
                correcta: 2,
                preguntaId: "402030107"
            },
            {
                id: "4020301001",
                pregunta: "¿Cuál es el protocolo más habitual en las redes SAN?",
                opciones: [
                    "TCP/IP",
                    "Fibre Channel (FC)",
                    "iSCSI",
                    "NFS"
                ],
                correcta: 1,
                preguntaId: "402030108"
            },
            {
                id: "4020301001",
                pregunta: "¿A qué nivel se realiza el acceso en una red SAN?",
                opciones: [
                    "Nivel de archivo",
                    "Nivel de bloque",
                    "Nivel de aplicación",
                    "Nivel de objeto"
                ],
                correcta: 1,
                preguntaId: "402030109"
            },
            {
                id: "4020301001",
                pregunta: "¿Cuáles son las principales ventajas del almacenamiento SAN?",
                opciones: [
                    "Bajo coste y facilidad de implementación",
                    "Uso de redes TCP/IP existentes y acceso a nivel de archivo",
                    "Alto rendimiento y tolerancia a fallos",
                    "Islas de información y replicación manual"
                ],
                correcta: 2,
                preguntaId: "402030110"
            },
            {
                id: "4020301002",
                pregunta: "¿Qué porcentaje aproximado del mercado SAN implementa el protocolo Fibre Channel?",
                opciones: [
                    "30-40%",
                    "50-60%",
                    "70-80%",
                    "90-100%"
                ],
                correcta: 2,
                preguntaId: "402030111"
            },
            {
                id: "4020301002",
                pregunta: "¿Qué hace el protocolo iSCSI con los comandos SCSI?",
                opciones: [
                    "Los convierte a formato FC",
                    "Los encapsula dentro de una trama de Ethernet",
                    "Los comprime para mejorar el rendimiento",
                    "Los cifra para mayor seguridad"
                ],
                correcta: 1,
                preguntaId: "402030112"
            },
            {
                id: "4020301002",
                pregunta: "¿Qué porcentaje aproximado del mercado SAN implementa el protocolo FCoE?",
                opciones: [
                    "Menos del 5%",
                    "10-15%",
                    "20-30%",
                    "40-50%"
                ],
                correcta: 0,
                preguntaId: "402030113"
            },
            {
                id: "4020301002",
                pregunta: "¿Qué ventaja ofrece el protocolo FC-NVMe frente a las arquitecturas all-flash tradicionales?",
                opciones: [
                    "Mayor capacidad de almacenamiento",
                    "Menor coste de implementación",
                    "Admite decenas de miles de colas paralelas",
                    "Mejor compatibilidad con sistemas antiguos"
                ],
                correcta: 2,
                preguntaId: "402030114"
            },
            {
                id: "4020301002",
                pregunta: "¿En qué entornos es habitual el uso del protocolo NFS?",
                opciones: [
                    "Microsoft Windows",
                    "UNIX/Linux",
                    "IBM Mainframes",
                    "Apple macOS"
                ],
                correcta: 1,
                preguntaId: "402030115"
            },
            {
                id: "4020301002",
                pregunta: "¿En qué entornos es habitual el uso del protocolo SMB/CIFS?",
                opciones: [
                    "Microsoft Windows",
                    "UNIX/Linux",
                    "IBM Mainframes",
                    "Sistemas embebidos"
                ],
                correcta: 0,
                preguntaId: "402030116"
            },
            {
                id: "4020301003",
                pregunta: "¿Qué elemento vertebra la red de almacenamiento en una SAN?",
                opciones: [
                    "Servidores o hosts",
                    "Tarjetas HBA",
                    "Switches de fibra",
                    "Cabinas de almacenamiento"
                ],
                correcta: 2,
                preguntaId: "402030117"
            },
            {
                id: "4020301003",
                pregunta: "¿Qué tipo de tarjetas necesita un servidor para conectarse a una red SAN?",
                opciones: [
                    "Tarjetas de red (NIC)",
                    "Tarjetas HBA (Host Bus Adapter)",
                    "Tarjetas RAID",
                    "Tarjetas gráficas"
                ],
                correcta: 1,
                preguntaId: "402030118"
            },
            {
                id: "4020301003",
                pregunta: "¿Qué es el WWN en el contexto de las redes SAN?",
                opciones: [
                    "Un tipo de protocolo de comunicación",
                    "Un tipo de cable de fibra óptica",
                    "El equivalente a la dirección MAC en las tarjetas HBA",
                    "Un tipo de configuración RAID"
                ],
                correcta: 2,
                preguntaId: "402030119"
            },
            {
                id: "4020301003",
                pregunta: "¿Qué contienen las cabinas de almacenamiento en una red SAN?",
                opciones: [
                    "Tarjetas HBA",
                    "Switches de fibra",
                    "Discos (SSD, SAS, etc.)",
                    "Servidores virtuales"
                ],
                correcta: 2,
                preguntaId: "402030120"
            }
        ]
    },
    "4020302000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020302001",
                pregunta: "¿Qué significa RAID?",
                opciones: [
                    "Redundant Array of Inexpensive Disks",
                    "Redundant Array of Independent Disks",
                    "Reliable Array of Integrated Disks",
                    "Random Access of Independent Disks"
                ],
                correcta: 1,
                preguntaId: "402030201"
            },
            {
                id: "4020302001",
                pregunta: "¿Cuál es el principal objetivo de los sistemas RAID?",
                opciones: [
                    "Aumentar la capacidad de almacenamiento",
                    "Reducir el coste de los discos",
                    "Evitar o minimizar la pérdida de información en caso de error en algún disco",
                    "Mejorar la velocidad de acceso a los datos"
                ],
                correcta: 2,
                preguntaId: "402030202"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué característica define al RAID 0?",
                opciones: [
                    "Duplicación de la información",
                    "Distribución de la información entre todos los discos (striping)",
                    "Uso de un disco dedicado para paridad",
                    "Paridad distribuida entre todos los discos"
                ],
                correcta: 1,
                preguntaId: "402030203"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué ocurre si falla un disco en un RAID 0?",
                opciones: [
                    "No hay pérdida de información",
                    "Se pierde solo la información del disco que falla",
                    "Hay pérdida de información",
                    "El sistema reconstruye automáticamente la información"
                ],
                correcta: 2,
                preguntaId: "402030204"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué característica define al RAID 1?",
                opciones: [
                    "Distribución de la información entre todos los discos (striping)",
                    "Duplicación de la información (mirroring)",
                    "Uso de un disco dedicado para paridad",
                    "Paridad distribuida entre todos los discos"
                ],
                correcta: 1,
                preguntaId: "402030205"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué porcentaje de espacio útil para datos ofrece un RAID 1?",
                opciones: [
                    "100%",
                    "75%",
                    "50%",
                    "(n-1)/n"
                ],
                correcta: 2,
                preguntaId: "402030206"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué característica diferencia al RAID 4 del RAID 3?",
                opciones: [
                    "El RAID 4 no utiliza paridad",
                    "El RAID 4 distribuye los datos a nivel de bloque en lugar de a nivel de bits",
                    "El RAID 4 requiere más discos",
                    "El RAID 4 ofrece mayor espacio útil"
                ],
                correcta: 1,
                preguntaId: "402030207"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué ventaja ofrece el RAID 5 frente al RAID 3 y RAID 4?",
                opciones: [
                    "Mayor capacidad de almacenamiento",
                    "Mayor tolerancia a fallos",
                    "Elimina el cuello de botella del disco de paridad al distribuir la paridad entre todos los discos",
                    "No requiere discos adicionales"
                ],
                correcta: 2,
                preguntaId: "402030208"
            },
            {
                id: "4020302002",
                pregunta: "¿Cuántos discos pueden fallar en un RAID 6 sin que se produzca pérdida de datos?",
                opciones: [
                    "Ninguno",
                    "Uno",
                    "Dos",
                    "Tres"
                ],
                correcta: 2,
                preguntaId: "402030209"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué tipo de paridad utiliza el RAID 6?",
                opciones: [
                    "XOR",
                    "Hamming",
                    "Reed Solomon",
                    "No utiliza paridad"
                ],
                correcta: 2,
                preguntaId: "402030210"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué configuraciones RAID se combinan en un RAID 10?",
                opciones: [
                    "RAID 0 y RAID 1",
                    "RAID 1 y RAID 0",
                    "RAID 1 y RAID 5",
                    "RAID 0 y RAID 5"
                ],
                correcta: 1,
                preguntaId: "402030211"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué porcentaje de espacio útil para datos ofrece un RAID 10?",
                opciones: [
                    "100%",
                    "75%",
                    "50%",
                    "(n-1)/n"
                ],
                correcta: 2,
                preguntaId: "402030212"
            },
            {
                id: "4020302002",
                pregunta: "¿Qué configuraciones RAID se combinan en un RAID 50?",
                opciones: [
                    "RAID 0 y RAID 1",
                    "RAID 1 y RAID 0",
                    "RAID 5 y RAID 0",
                    "RAID 0 y RAID 5"
                ],
                correcta: 3,
                preguntaId: "402030213"
            },
            {
                id: "4020302003",
                pregunta: "¿Cuál de los siguientes es un ejemplo de configuración RAID propietaria?",
                opciones: [
                    "RAID 0",
                    "RAID 5",
                    "RAID 7",
                    "RAID 10"
                ],
                correcta: 2,
                preguntaId: "402030214"
            },
            {
                id: "4020302003",
                pregunta: "¿En qué sistema de archivos está integrado el RAID Z?",
                opciones: [
                    "NTFS",
                    "ext4",
                    "ZFS",
                    "APFS"
                ],
                correcta: 2,
                preguntaId: "402030215"
            },
            {
                id: "4020302004",
                pregunta: "¿Cuáles son las dos formas principales de implementar soluciones RAID?",
                opciones: [
                    "RAID interno y RAID externo",
                    "RAID primario y RAID secundario",
                    "RAID basado en hardware y RAID basado en software",
                    "RAID físico y RAID virtual"
                ],
                correcta: 2,
                preguntaId: "402030216"
            },
            {
                id: "4020302004",
                pregunta: "¿Qué ventajas ofrece el RAID basado en hardware frente al basado en software?",
                opciones: [
                    "Menor coste y mayor facilidad de configuración",
                    "Independencia de la plataforma y mayor rapidez",
                    "Mayor capacidad de almacenamiento",
                    "Mejor compatibilidad con sistemas operativos antiguos"
                ],
                correcta: 1,
                preguntaId: "402030217"
            },
            {
                id: "4020302005",
                pregunta: "¿Cuál de las siguientes NO es una ventaja que se puede conseguir mediante el uso de sistemas RAID?",
                opciones: [
                    "Tolerancia a fallos",
                    "Mayor uptime del servicio",
                    "Atención de varias operaciones simultáneamente",
                    "Restauración de datos en caso de error lógico"
                ],
                correcta: 3,
                preguntaId: "402030218"
            },
            {
                id: "4020302005",
                pregunta: "¿Por qué un sistema RAID no debe ser entendido como una herramienta de backup?",
                opciones: [
                    "Porque es demasiado costoso",
                    "Porque no permite restaurar los datos en caso de error lógico",
                    "Porque no ofrece suficiente capacidad de almacenamiento",
                    "Porque no es compatible con todos los sistemas operativos"
                ],
                correcta: 1,
                preguntaId: "402030219"
            },
            {
                id: "4020302006",
                pregunta: "¿De qué factores depende la elección de la configuración RAID más adecuada?",
                opciones: [
                    "Únicamente del presupuesto disponible",
                    "Solo de la capacidad de almacenamiento requerida",
                    "Del tipo de dato a almacenar, opciones tecnológicas disponibles, necesidad de fiabilidad y condicionantes económicos",
                    "Exclusivamente de la velocidad de acceso requerida"
                ],
                correcta: 2,
                preguntaId: "402030220"
            }
        ]
    },
    "4020401000e": {
        minimoParaAprobar: 4,
        preguntas: [
            {
                id: "4020401001",
                pregunta: "¿Qué significa el acrónimo JBOD?",
                opciones: [
                    "Java Based Object Database",
                    "Just a Bunch of Disks/Drives",
                    "Joint Backup Operation Device",
                    "Jumbo Block Operation Drive"
                ],
                correcta: 1,
                preguntaId: "402040101"
            },
            {
                id: "4020401001",
                pregunta: "¿Cuál es la principal característica de JBOD en comparación con RAID?",
                opciones: [
                    "Proporciona mayor redundancia",
                    "Los datos se almacenan en discos independientes sin redundancia",
                    "Ofrece mejor rendimiento",
                    "Requiere menos discos"
                ],
                correcta: 1,
                preguntaId: "402040102"
            },
            {
                id: "4020401001",
                pregunta: "¿Por qué algunas aplicaciones recomiendan el uso de JBOD?",
                opciones: [
                    "Porque es más rápido que RAID",
                    "Porque es más barato que RAID",
                    "Porque la redundancia la proporciona la propia aplicación",
                    "Porque consume menos energía"
                ],
                correcta: 2,
                preguntaId: "402040103"
            },
            {
                id: "4020401002",
                pregunta: "¿Qué significa SSD?",
                opciones: [
                    "Super Speed Drive",
                    "Solid State Drive",
                    "System Storage Device",
                    "Secure Storage Disk"
                ],
                correcta: 1,
                preguntaId: "402040104"
            },
            {
                id: "4020401002",
                pregunta: "¿Cuál es el tiempo de acceso aproximado de un SSD?",
                opciones: [
                    "5.5 ms",
                    "1.0 ms",
                    "0.1 ms",
                    "8.0 ms"
                ],
                correcta: 2,
                preguntaId: "402040105"
            },
            {
                id: "4020401002",
                pregunta: "¿Cuántas veces más rápido es un SSD en rendimiento I/O aleatorio comparado con un HDD?",
                opciones: [
                    "5 veces",
                    "10 veces",
                    "15 veces",
                    "20 veces"
                ],
                correcta: 2,
                preguntaId: "402040106"
            },
            {
                id: "4020401002",
                pregunta: "¿Cuál es la tasa de fallos de un SSD?",
                opciones: [
                    "0.5%",
                    "2%",
                    "5%",
                    "7%"
                ],
                correcta: 0,
                preguntaId: "402040107"
            },
            {
                id: "4020401002",
                pregunta: "¿Cuánto tiempo aproximado toma un backup completo en un SSD?",
                opciones: [
                    "20 horas",
                    "24 horas",
                    "12 horas",
                    "6 horas"
                ],
                correcta: 3,
                preguntaId: "402040108"
            },
            {
                id: "4020401002",
                pregunta: "¿Cuál es el consumo de energía típico de un SSD?",
                opciones: [
                    "6-15 watts",
                    "2-5 watts",
                    "10-20 watts",
                    "1-2 watts"
                ],
                correcta: 1,
                preguntaId: "402040109"
            },
            {
                id: "4020401002",
                pregunta: "¿Qué porcentaje de uso de CPU (I/O wait) tiene un SSD en comparación con un HDD?",
                opciones: [
                    "1% vs 7%",
                    "5% vs 10%",
                    "2% vs 5%",
                    "3% vs 8%"
                ],
                correcta: 0,
                preguntaId: "402040110"
            }
        ]
    },
    "4020501000e": {
        minimoParaAprobar: 8,
        preguntas: [
            {
                id: "4020501001",
                pregunta: "¿Qué se entiende por backup o copia de seguridad?",
                opciones: [
                    "Un mecanismo para aumentar el rendimiento de los sistemas",
                    "Una herramienta o mecanismo preventivo de salvaguarda ante la pérdida de información",
                    "Un sistema para comprimir la información y ahorrar espacio",
                    "Un procedimiento para transferir datos entre diferentes sistemas"
                ],
                correcta: 1,
                preguntaId: "402050101"
            },
            {
                id: "4020501002",
                pregunta: "¿Cuál de los siguientes sería un ejemplo de pérdida accidental de información?",
                opciones: [
                    "Borrado por despiste de los usuarios",
                    "Ataque de ransomware que cifra la información",
                    "Corrupción intencionada de datos",
                    "Robo de información confidencial"
                ],
                correcta: 0,
                preguntaId: "402050102"
            },
            {
                id: "4020501003",
                pregunta: "¿De qué plan forma parte habitualmente la planificación o estrategia de backup?",
                opciones: [
                    "Plan de Marketing Digital",
                    "Plan de Recursos Humanos",
                    "Plan de Recuperación ante desastres (DRP)",
                    "Plan de Desarrollo de Software"
                ],
                correcta: 2,
                preguntaId: "402050103"
            },
            {
                id: "4020501003",
                pregunta: "¿Qué relación existe entre el DRP y el BCP?",
                opciones: [
                    "Son planes completamente independientes",
                    "El DRP forma parte del BCP, que es más amplio",
                    "El BCP forma parte del DRP, que es más amplio",
                    "Son términos diferentes para el mismo concepto"
                ],
                correcta: 1,
                preguntaId: "402050104"
            },
            {
                id: "4020501003",
                pregunta: "¿Cuál de los siguientes NO es un paso necesario para establecer una estrategia de backup?",
                opciones: [
                    "Identificar los procesos internos y servicios digitales prestados",
                    "Analizar y establecer los activos de información asociados a cada servicio",
                    "Realizar pruebas de restauración periódicamente",
                    "Implementar siempre backups completos diarios"
                ],
                correcta: 3,
                preguntaId: "402050105"
            },
            {
                id: "4020501004",
                pregunta: "¿Qué tipo de backup realiza una copia completa o íntegra de la información a respaldar?",
                opciones: [
                    "Backup incremental",
                    "Backup diferencial",
                    "Backup total o completo (full)",
                    "Backup selectivo"
                ],
                correcta: 2,
                preguntaId: "402050106"
            },
            {
                id: "4020501004",
                pregunta: "¿Qué tipo de backup realiza una salvaguarda de aquellos datos que se han modificado desde el último backup que se realizó?",
                opciones: [
                    "Backup incremental",
                    "Backup diferencial",
                    "Backup total o completo (full)",
                    "Backup selectivo"
                ],
                correcta: 0,
                preguntaId: "402050107"
            },
            {
                id: "4020501004",
                pregunta: "¿Qué tipo de backup realiza una copia de los datos que se han modificado desde la última copia de backup completa realizada?",
                opciones: [
                    "Backup incremental",
                    "Backup diferencial",
                    "Backup total o completo (full)",
                    "Backup selectivo"
                ],
                correcta: 1,
                preguntaId: "402050108"
            },
            {
                id: "4020501004",
                pregunta: "¿Cómo se denomina al conjunto de backups y restores necesarios para respaldar y recuperar una determinada información?",
                opciones: [
                    "Secuencia de backup",
                    "Cadena de backup",
                    "Ciclo de backup",
                    "Proceso de backup"
                ],
                correcta: 1,
                preguntaId: "402050109"
            },
            {
                id: "4020501005",
                pregunta: "En una estrategia de backup semanal típica, ¿qué día suele realizarse el backup completo?",
                opciones: [
                    "Lunes",
                    "Miércoles",
                    "Viernes",
                    "Domingo"
                ],
                correcta: 3,
                preguntaId: "402050110"
            },
            {
                id: "4020501005",
                pregunta: "Si el lunes se modifican los datos A y B, y el martes se modifican los datos B y C, ¿qué datos incluiría el backup diferencial del martes?",
                opciones: [
                    "Solo B y C",
                    "A, B y C",
                    "Solo el dato B",
                    "Todos los datos (A, B, C, D, E, F)"
                ],
                correcta: 1,
                preguntaId: "402050111"
            },
            {
                id: "4020501005",
                pregunta: "Si el lunes se modifican los datos A y B, y el martes se modifican los datos B y C, ¿qué datos incluiría el backup incremental del martes?",
                opciones: [
                    "Solo B y C",
                    "A, B y C",
                    "Solo el dato B",
                    "Todos los datos (A, B, C, D, E, F)"
                ],
                correcta: 0,
                preguntaId: "402050112"
            },
            {
                id: "4020501006",
                pregunta: "Para restaurar datos usando una estrategia de backup incremental, ¿qué componentes son necesarios?",
                opciones: [
                    "Solo el último backup incremental",
                    "El backup completo y el último backup incremental",
                    "El backup completo y todos los backups incrementales posteriores",
                    "Solo el backup completo"
                ],
                correcta: 2,
                preguntaId: "402050113"
            },
            {
                id: "4020501006",
                pregunta: "Para restaurar datos usando una estrategia de backup diferencial, ¿qué componentes son necesarios?",
                opciones: [
                    "Solo el último backup diferencial",
                    "El backup completo y el último backup diferencial",
                    "El backup completo y todos los backups diferenciales posteriores",
                    "Solo el backup completo"
                ],
                correcta: 1,
                preguntaId: "402050114"
            },
            {
                id: "4020501006",
                pregunta: "¿Qué ventaja tiene el backup diferencial sobre el incremental?",
                opciones: [
                    "Consume menos espacio de almacenamiento",
                    "Es más rápido de realizar",
                    "La restauración es más rápida y sencilla",
                    "No requiere un backup completo inicial"
                ],
                correcta: 2,
                preguntaId: "402050115"
            },
            {
                id: "4020501006",
                pregunta: "¿Qué ventaja tiene el backup incremental sobre el diferencial?",
                opciones: [
                    "Consume menos espacio de almacenamiento",
                    "La restauración es más rápida",
                    "Proporciona mayor seguridad",
                    "No requiere un backup completo inicial"
                ],
                correcta: 0,
                preguntaId: "402050116"
            },
            {
                id: "4020501006",
                pregunta: "¿Por qué no suele ser admisible una estrategia basada solo en backups full?",
                opciones: [
                    "Porque no proporciona suficiente seguridad",
                    "Porque consume demasiados recursos (tiempo y espacio)",
                    "Porque es demasiado compleja de implementar",
                    "Porque no permite restaurar datos específicos"
                ],
                correcta: 1,
                preguntaId: "402050117"
            },
            {
                id: "4020501006",
                pregunta: "Si durante la jornada del miércoles se pierde información, ¿hasta qué punto se podría recuperar con los backups disponibles?",
                opciones: [
                    "Hasta el final del día martes",
                    "Hasta el inicio del día miércoles",
                    "Hasta el final del día lunes",
                    "Hasta el inicio del día domingo"
                ],
                correcta: 1,
                preguntaId: "402050118"
            },
            {
                id: "4020501003",
                pregunta: "¿Qué significa la sigla BCP en el contexto de los backups?",
                opciones: [
                    "Backup Control Protocol",
                    "Business Continuity Plan",
                    "Backup Copy Process",
                    "Basic Computer Protection"
                ],
                correcta: 1,
                preguntaId: "402050119"
            },
            {
                id: "4020501003",
                pregunta: "¿Qué significa la sigla DRP en el contexto de los backups?",
                opciones: [
                    "Data Recovery Process",
                    "Digital Restoration Protocol",
                    "Disaster Recovery Plan",
                    "Database Replication Procedure"
                ],
                correcta: 2,
                preguntaId: "402050120"
            }
        ]
    },
    "4020502000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4020502001",
                pregunta: "¿Qué son los snapshots en el contexto de respaldo de información?",
                opciones: [
                    "Copias completas de los datos en un momento dado",
                    "Instantáneas que copian los punteros a los diferentes bloques de información",
                    "Mecanismos de replicación entre dos ubicaciones físicas",
                    "Herramientas de compresión de datos para ahorrar espacio"
                ],
                correcta: 1,
                preguntaId: "402050201"
            },
            {
                id: "4020502001",
                pregunta: "¿Cuál de las siguientes NO es una característica de los snapshots?",
                opciones: [
                    "Son muy rápidos de realizar",
                    "Son muy rápidos de restaurar",
                    "Requieren mucho espacio adicional",
                    "Su eficacia depende del grado de cambios en los datos"
                ],
                correcta: 2,
                preguntaId: "402050202"
            },
            {
                id: "4020502002",
                pregunta: "En el contexto de snapshots, ¿qué se copia realmente cuando se realiza un snapshot?",
                opciones: [
                    "Una copia completa de todos los datos",
                    "Solo los datos que han cambiado",
                    "Los punteros a los bloques de información",
                    "Una versión comprimida de los datos"
                ],
                correcta: 2,
                preguntaId: "402050203"
            },
            {
                id: "4020502003",
                pregunta: "Si se modifican los datos A y C después de realizar un snapshot, ¿qué ocurre con los datos originales?",
                opciones: [
                    "Se eliminan automáticamente",
                    "Se conservan junto con su puntero correspondiente",
                    "Se comprimen para ahorrar espacio",
                    "Se mueven a una ubicación secundaria"
                ],
                correcta: 1,
                preguntaId: "402050204"
            },
            {
                id: "4020502004",
                pregunta: "Si se añade un nuevo bloque G a los datos después de realizar un snapshot, ¿qué ocurre al crear un segundo snapshot?",
                opciones: [
                    "El segundo snapshot incluye punteros a todos los datos, incluido G",
                    "El segundo snapshot solo incluye un puntero al bloque G",
                    "El segundo snapshot crea una copia completa de todos los datos",
                    "El segundo snapshot no puede incluir el bloque G"
                ],
                correcta: 0,
                preguntaId: "402050205"
            },
            {
                id: "4020502005",
                pregunta: "¿Qué tipo de información se beneficia más del uso de snapshots?",
                opciones: [
                    "Datos que cambian frecuentemente",
                    "Información con bloques muy similares entre sí",
                    "Archivos de registro que crecen constantemente",
                    "Bases de datos con alta tasa de transacciones"
                ],
                correcta: 1,
                preguntaId: "402050206"
            },
            {
                id: "4020502005",
                pregunta: "¿Cuál es un ejemplo de información que se beneficia especialmente de los snapshots?",
                opciones: [
                    "Logs de transacciones",
                    "Bases de datos con muchas operaciones de escritura",
                    "Máquinas virtuales",
                    "Archivos de correo electrónico con alta actividad"
                ],
                correcta: 2,
                preguntaId: "402050207"
            },
            {
                id: "4020502005",
                pregunta: "¿Cómo debe entenderse la técnica de snapshots respecto al backup tradicional?",
                opciones: [
                    "Como una sustitución completa",
                    "Como una técnica aplicable a cualquier caso",
                    "Como una técnica que presenta ventajas e inconvenientes específicos",
                    "Como una solución obsoleta"
                ],
                correcta: 2,
                preguntaId: "402050208"
            },
            {
                id: "4020502006",
                pregunta: "¿Por qué la replicación o sincronización de datos entre dos ubicaciones físicas no se considera un backup?",
                opciones: [
                    "Porque es demasiado lenta",
                    "Porque si se produce una corrupción o borrado de datos, se replicará al otro site",
                    "Porque consume demasiado espacio",
                    "Porque no permite restaurar datos antiguos"
                ],
                correcta: 1,
                preguntaId: "402050209"
            },
            {
                id: "4020502006",
                pregunta: "¿Cuál de las siguientes NO es una herramienta de backup?",
                opciones: [
                    "Backup completo (full)",
                    "Backup incremental",
                    "Snapshot",
                    "Balanceo de carga"
                ],
                correcta: 3,
                preguntaId: "402050210"
            },
            {
                id: "4020502006",
                pregunta: "¿Cuál es el objetivo principal de un snapshot?",
                opciones: [
                    "Alta disponibilidad",
                    "Recuperación ante desastres",
                    "Recuperación rápida de datos",
                    "Optimización del rendimiento"
                ],
                correcta: 2,
                preguntaId: "402050211"
            },
            {
                id: "4020502006",
                pregunta: "¿Cuál es el objetivo principal de la replicación?",
                opciones: [
                    "Alta disponibilidad",
                    "Recuperación ante desastres",
                    "Recuperación rápida de datos",
                    "Optimización del rendimiento"
                ],
                correcta: 0,
                preguntaId: "402050212"
            },
            {
                id: "4020502006",
                pregunta: "¿Qué mecanismo de respaldo ofrece protección contra la corrupción de datos?",
                opciones: [
                    "Solo el backup tradicional",
                    "Solo los snapshots",
                    "Tanto el backup tradicional como los snapshots",
                    "La replicación"
                ],
                correcta: 2,
                preguntaId: "402050213"
            },
            {
                id: "4020502001",
                pregunta: "¿Qué ventaja principal tienen los snapshots frente a los backups tradicionales?",
                opciones: [
                    "Mayor seguridad",
                    "Mayor velocidad y menor consumo de espacio",
                    "Mayor compatibilidad con diferentes sistemas",
                    "Mayor durabilidad a largo plazo"
                ],
                correcta: 1,
                preguntaId: "402050214"
            },
            {
                id: "4020502005",
                pregunta: "¿Qué ocurre con la eficacia de los snapshots cuando los datos cambian frecuentemente?",
                opciones: [
                    "Aumenta considerablemente",
                    "Se mantiene igual",
                    "Se reduce",
                    "No afecta a su funcionamiento"
                ],
                correcta: 2,
                preguntaId: "402050215"
            }
        ]
    },
    "4020503000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4020503002",
                pregunta: "¿Qué es el catálogo de backup?",
                opciones: [
                    "Un listado de los medios físicos donde se almacenan los backups",
                    "El elemento del sistema que guarda la información sobre el histórico del backup",
                    "Un registro de los usuarios que pueden realizar backups",
                    "Una herramienta para cifrar los backups"
                ],
                correcta: 1,
                preguntaId: "402050301"
            },
            {
                id: "4020503002",
                pregunta: "¿Por qué es necesario establecer una política de backup para el propio catálogo de backup?",
                opciones: [
                    "Porque no es importante y se puede perder",
                    "Porque es una pieza fundamental del sistema",
                    "Porque ocupa demasiado espacio",
                    "Porque cambia constantemente"
                ],
                correcta: 1,
                preguntaId: "402050302"
            },
            {
                id: "4020503002",
                pregunta: "¿Cuál de los siguientes NO es un estado típico de los backups en el catálogo?",
                opciones: [
                    "Running",
                    "Successful",
                    "Failed",
                    "Completed"
                ],
                correcta: 3,
                preguntaId: "402050303"
            },
            {
                id: "4020503002",
                pregunta: "¿Qué información contiene el catálogo de backup respecto a los backups cifrados?",
                opciones: [
                    "Solo el algoritmo de cifrado utilizado",
                    "La ubicación de la raíz y cadena de encriptación",
                    "Las contraseñas de los usuarios",
                    "El tamaño del backup antes y después del cifrado"
                ],
                correcta: 1,
                preguntaId: "402050304"
            },
            {
                id: "4020503003",
                pregunta: "¿Cuál es el principal rol gestor del sistema de backup?",
                opciones: [
                    "Media Server",
                    "Cliente del backup",
                    "Master server",
                    "Storage Unit"
                ],
                correcta: 2,
                preguntaId: "402050305"
            },
            {
                id: "4020503003",
                pregunta: "¿Qué característica define a un Media Server?",
                opciones: [
                    "Es el que gestiona el catálogo de backup",
                    "Es el nodo del que se hace backup",
                    "Tiene acceso a la capa de almacenamiento",
                    "Es el que define las políticas de backup"
                ],
                correcta: 2,
                preguntaId: "402050306"
            },
            {
                id: "4020503003",
                pregunta: "¿Qué tipo de servidores son candidatos ideales para convertirse en Media Server?",
                opciones: [
                    "Servidores con poco uso",
                    "Servidores que manejen un volumen muy alto de información",
                    "Servidores con alta capacidad de procesamiento",
                    "Servidores con conexión a Internet"
                ],
                correcta: 1,
                preguntaId: "402050307"
            },
            {
                id: "4020503003",
                pregunta: "¿Qué puede ser necesario instalar en los clientes del backup?",
                opciones: [
                    "Un sistema operativo específico",
                    "Un agente de backup",
                    "Un servidor web",
                    "Un sistema de cifrado"
                ],
                correcta: 1,
                preguntaId: "402050308"
            },
            {
                id: "4020503004",
                pregunta: "¿Qué es la ventana de backup?",
                opciones: [
                    "El tiempo máximo que puede durar un backup",
                    "La interfaz gráfica del sistema de backup",
                    "La franja temporal en la que se realizará la copia de seguridad",
                    "El espacio disponible para almacenar backups"
                ],
                correcta: 2,
                preguntaId: "402050309"
            },
            {
                id: "4020503004",
                pregunta: "¿Qué es el período de retención en una política de backup?",
                opciones: [
                    "El tiempo que tarda en realizarse un backup",
                    "El período en el que las copias de seguridad se mantendrán en el sistema",
                    "El intervalo entre backups consecutivos",
                    "El tiempo necesario para restaurar un backup"
                ],
                correcta: 1,
                preguntaId: "402050310"
            },
            {
                id: "4020503004",
                pregunta: "Según el ejemplo de política de retención, ¿qué tipo de backups se conservan durante el primer año?",
                opciones: [
                    "Solo backups completos",
                    "Solo backups incrementales",
                    "Solo backups diferenciales",
                    "Todos los tipos (full, incremental, diferencial)"
                ],
                correcta: 3,
                preguntaId: "402050311"
            },
            {
                id: "4020503004",
                pregunta: "¿En qué se basa la política de retención de la información descrita en el texto?",
                opciones: [
                    "En el tamaño de los backups",
                    "En la importancia de los datos",
                    "En que la necesidad de restauración es inversamente proporcional a la antigüedad",
                    "En el tipo de medio de almacenamiento utilizado"
                ],
                correcta: 2,
                preguntaId: "402050312"
            },
            {
                id: "4020503004",
                pregunta: "¿Qué información aporta la configuración de rotación en una política de backup?",
                opciones: [
                    "La frecuencia con la que se realizan los backups",
                    "El orden en que se restauran los backups",
                    "Información sobre las segundas y terceras copias que se realizarán",
                    "El tiempo que tarda en completarse un backup"
                ],
                correcta: 2,
                preguntaId: "402050313"
            },
            {
                id: "4020503004",
                pregunta: "¿Qué exige el uso de cifrado en los backups con largos períodos de retención?",
                opciones: [
                    "Mantener las claves de cifrado durante mucho tiempo",
                    "Cambiar las claves de cifrado frecuentemente",
                    "Utilizar algoritmos de cifrado más potentes",
                    "Realizar copias adicionales sin cifrar"
                ],
                correcta: 0,
                preguntaId: "402050314"
            },
            {
                id: "4020503003",
                pregunta: "¿Por qué suelen configurarse soluciones de alta disponibilidad para el Master Server?",
                opciones: [
                    "Porque es el nodo más económico",
                    "Porque es el que más espacio de almacenamiento necesita",
                    "Porque la realización de las tareas de backup y restore depende de su disponibilidad",
                    "Porque es el que más recursos de red consume"
                ],
                correcta: 2,
                preguntaId: "402050315"
            }
        ]
    },
    "4020504000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4020504001",
                pregunta: "¿Por qué es importante la estrategia de almacenamiento en los sistemas de backup?",
                opciones: [
                    "Porque los sistemas de backup generan grandes volúmenes de información",
                    "Porque el almacenamiento es el componente más caro",
                    "Porque solo existe un tipo de almacenamiento para backup",
                    "Porque los backups solo pueden almacenarse en la nube"
                ],
                correcta: 0,
                preguntaId: "402050401"
            },
            {
                id: "4020504002",
                pregunta: "¿Cuál de las siguientes NO es una razón por la que las cintas magnéticas han caído en desuso?",
                opciones: [
                    "Requieren operación manual para restauración",
                    "Los robots de cintas suelen generar bastantes incidencias",
                    "Son más costosas que otras alternativas",
                    "Pueden deteriorarse si las condiciones de conservación no son buenas"
                ],
                correcta: 2,
                preguntaId: "402050402"
            },
            {
                id: "4020504002",
                pregunta: "¿Por qué las librerías de cintas han tomado de nuevo cierto protagonismo recientemente?",
                opciones: [
                    "Porque son más rápidas que los discos",
                    "Porque son más baratas que el almacenamiento en la nube",
                    "Porque se consideran más seguras frente a ataques informáticos",
                    "Porque ocupan menos espacio físico"
                ],
                correcta: 2,
                preguntaId: "402050403"
            },
            {
                id: "4020504002",
                pregunta: "¿Qué tipo de datos son más adecuados para almacenar en cintas magnéticas?",
                opciones: [
                    "Datos que requieren acceso frecuente",
                    "Datos que necesitan restauración inmediata",
                    "Datos cuyo acceso no resulta esencial y se produce con poca frecuencia",
                    "Datos que cambian constantemente"
                ],
                correcta: 2,
                preguntaId: "402050404"
            },
            {
                id: "4020504003",
                pregunta: "¿Qué característica suelen tener las cabinas de discos específicas para backup?",
                opciones: [
                    "Utilizan principalmente discos SSD",
                    "Utilizan discos mecánicos de gran capacidad y velocidad de rotación no excesiva",
                    "Son idénticas a las cabinas de almacenamiento para entornos productivos",
                    "Tienen menor capacidad que las librerías de cintas"
                ],
                correcta: 1,
                preguntaId: "402050405"
            },
            {
                id: "4020504003",
                pregunta: "¿Qué es la deduplicación en el contexto de almacenamiento para backup?",
                opciones: [
                    "Un proceso que comprime los datos para que ocupen menos espacio",
                    "Un proceso que divide la información en bloques y elimina los duplicados",
                    "Un sistema que distribuye los datos entre diferentes discos",
                    "Un mecanismo para cifrar los datos de backup"
                ],
                correcta: 1,
                preguntaId: "402050406"
            },
            {
                id: "4020504003",
                pregunta: "¿Sobre qué tipo de datos funciona mejor la deduplicación?",
                opciones: [
                    "Imágenes y archivos multimedia",
                    "Archivos de texto plano",
                    "Máquinas virtuales y ficheros con pocas modificaciones",
                    "Bases de datos con alta tasa de cambios"
                ],
                correcta: 2,
                preguntaId: "402050407"
            },
            {
                id: "4020504003",
                pregunta: "En el ejemplo de deduplicación del texto, ¿cuál fue el ratio de reducción obtenido?",
          
                opciones: [
                    "2:1",
                    "1.5:1",
                    "3:1",
                    "5:1"
                ],
                correcta: 1,
                preguntaId: "402050408"
            },
            {
                id: "4020504003",
                pregunta: "¿Cuál es la diferencia principal entre deduplicación y compresión?",
                opciones: [
                    "La deduplicación es más rápida que la compresión",
                    "La deduplicación elimina bloques duplicados mientras que la compresión reduce el tamaño de los datos",
                    "La deduplicación solo funciona en la nube mientras que la compresión funciona localmente",
                    "La deduplicación es un estándar abierto mientras que la compresión es propietaria"
                ],
                correcta: 1,
                preguntaId: "402050409"
            },
            {
                id: "4020504004",
                pregunta: "¿Qué es una Librería de Cintas Virtuales (VTL)?",
                opciones: [
                    "Un sistema basado en cintas físicas que emula el comportamiento de discos",
                    "Un sistema basado en disco cuyo comportamiento imita al de una biblioteca de cintas físicas",
                    "Un sistema de almacenamiento en la nube que simula cintas",
                    "Un catálogo digital de cintas físicas"
                ],
                correcta: 1,
                preguntaId: "402050410"
            },
            {
                id: "4020504005",
                pregunta: "¿Cuál suele ser el mayor coste en el almacenamiento de backup en la nube?",
                opciones: [
                    "El almacenamiento mensual",
                    "La subida inicial de datos",
                    "La descarga de información al realizar su restauración",
                    "Las licencias del software"
                ],
                correcta: 2,
                preguntaId: "402050411"
            },
            {
                id: "4020504005",
                pregunta: "¿Qué factor es importante considerar cuando se tiene un sistema de backup local y una copia en la nube?",
                opciones: [
                    "La marca del proveedor de nube",
                    "El ancho de banda de la conexión entre ambas instalaciones",
                    "El sistema operativo utilizado",
                    "La ubicación geográfica del proveedor"
                ],
                correcta: 1,
                preguntaId: "402050412"
            },
            {
                id: "4020504006",
                pregunta: "¿Cuántas copias de backup se recomienda tener según el texto?",
                opciones: [
                    "Una copia es suficiente",
                    "Dos copias como mínimo",
                    "Tres copias (una en cada ubicación y una offsite)",
                    "Cuatro copias distribuidas geográficamente"
                ],
                correcta: 2,
                preguntaId: "402050413"
            },
            {
                id: "4020504006",
                pregunta: "¿Qué ventaja proporciona tener una tercera copia de backup no accesible continuamente desde los sites principales?",
                opciones: [
                    "Mayor velocidad de restauración",
                    "Menor coste de almacenamiento",
                    "Mayor seguridad ante ataques de cifrado o corrupción de datos",
                    "Mejor rendimiento del sistema"
                ],
                correcta: 2,
                preguntaId: "402050414"
            },
            {
                id: "4020504006",
                pregunta: "¿Qué establece la estrategia 3-2-1 para backups?",
                opciones: [
                    "3 copias en 2 ubicaciones con 1 administrador",
                    "3 copias de los datos, 2 tipos diferentes de medios y 1 copia fuera del sitio",
                    "3 días de retención, 2 semanas de archivado y 1 mes de almacenamiento",
                    "3 backups diarios, 2 semanales y 1 mensual"
                ],
                correcta: 1,
                preguntaId: "402050415"
            },
            {
                id: "4020504003",
                pregunta: "¿Qué ocurre cuando un sistema de deduplicación encuentra un bloque de datos cuyo hash coincide con uno existente?",
                opciones: [
                    "Lo comprime adicionalmente",
                    "Lo cifra para mayor seguridad",
                    "No lo copia y añade un puntero a la información ya almacenada",
                    "Lo marca como corrupto"
                ],
                correcta: 2,
                preguntaId: "402050416"
            },
            {
                id: "4020504002",
                pregunta: "¿Qué tipo de ataque específico puede afectar a las librerías de cintas?",
                opciones: [
                    "Ataques que cifran los datos de las cintas",
                    "Ataques que borran el catálogo de backup",
                    "Ataques que inutilizan los brazos robóticos de las librerías",
                    "Ataques que modifican las etiquetas de las cintas"
                ],
                correcta: 2,
                preguntaId: "402050417"
            },
            {
                id: "4020504001",
                pregunta: "¿Cuáles son los dos enfoques que deben tenerse en cuenta en la estrategia de almacenamiento para backup?",
                opciones: [
                    "El coste y la velocidad",
                    "La seguridad y la escalabilidad",
                    "Las opciones de almacenamiento existentes y su utilización conjunta",
                    "El tipo de datos y su criticidad"
                ],
                correcta: 2,
                preguntaId: "402050418"
            },
            {
                id: "4020504006",
                pregunta: "Según la estrategia por antigüedad, ¿dónde se recomienda almacenar los datos más antiguos?",
                opciones: [
                    "En discos de alta velocidad",
                    "En almacenamiento primario",
                    "En cintas magnéticas o almacenamiento en la nube de bajo coste",
                    "En servidores locales"
                ],
                correcta: 2,
                preguntaId: "402050419"
            },
            {
                id: "4020504005",
                pregunta: "¿Qué proveedores de computación en la nube se mencionan en el texto como ejemplos para almacenamiento de backup?",
                opciones: [
                    "Google y Oracle",
                    "IBM y Alibaba",
                    "Amazon (AWS) y Microsoft (Azure)",
                    "Dropbox y OneDrive"
                ],
                correcta: 2,
                preguntaId: "402050420"
            }
        ]
    },
    "4020505000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4020505002",
                pregunta: "¿Qué es NVMe (No Volatil Memory Express)?",
                opciones: [
                    "Un tipo de memoria RAM no volátil",
                    "Un protocolo de transporte y acceso al almacenamiento para unidades flash y de estado sólido",
                    "Un sistema de backup en la nube",
                    "Un tipo de disco duro mecánico de alta velocidad"
                ],
                correcta: 1,
                preguntaId: "402050501"
            },
            {
                id: "4020505002",
                pregunta: "¿A través de qué bus accede el protocolo NVMe al almacenamiento flash?",
                opciones: [
                    "USB",
                    "SATA",
                    "PCI Express (PCIe)",
                    "Thunderbolt"
                ],
                correcta: 2,
                preguntaId: "402050502"
            },
            {
                id: "4020505002",
                pregunta: "¿Cuál es una ventaja clave del protocolo NVMe frente a arquitecturas tradicionales?",
                opciones: [
                    "Menor coste de implementación",
                    "Mayor compatibilidad con sistemas antiguos",
                    "Admite decenas de miles de colas de comando paralelas",
                    "Consume menos energía"
                ],
                correcta: 2,
                preguntaId: "402050503"
            },
            {
                id: "4020505003",
                pregunta: "¿Qué es Simple Storage Service (S3)?",
                opciones: [
                    "Un protocolo de comunicación entre servidores",
                    "Un servicio de almacenamiento de objetos en la cloud",
                    "Un sistema operativo para servidores de backup",
                    "Un tipo de disco duro específico para backups"
                ],
                correcta: 1,
                preguntaId: "402050504"
            },
            {
                id: "4020505003",
                pregunta: "¿Qué compañía propuso inicialmente el servicio S3?",
                opciones: [
                    "Microsoft",
                    "Google",
                    "Amazon",
                    "IBM"
                ],
                correcta: 2,
                preguntaId: "402050505"
            },
            {
                id: "4020505003",
                pregunta: "¿Cuál de los siguientes NO es un software de backup compatible con el protocolo S3 según el texto?",
                opciones: [
                    "Veeam",
                    "Veritas NetBackup",
                    "IDPA",
                    "Microsoft Backup"
                ],
                correcta: 3,
                preguntaId: "402050506"
            },
            {
                id: "4020505004",
                pregunta: "¿Cuántas copias del backup recomienda tener la regla 3-2-1?",
                opciones: [
                    "Al menos 1",
                    "Al menos 2",
                    "Al menos 3",
                    "Al menos 5"
                ],
                correcta: 2,
                preguntaId: "402050507"
            },
            {
                id: "4020505004",
                pregunta: "Según la regla 3-2-1, ¿en cuántos soportes distintos se deben almacenar las copias?",
                opciones: [
                    "Al menos 1",
                    "Al menos 2",
                    "Al menos 3",
                    "Al menos 4"
                ],
                correcta: 1,
                preguntaId: "402050508"
            },
            {
                id: "4020505004",
                pregunta: "¿Dónde recomienda la regla 3-2-1 guardar una de las copias del backup?",
                opciones: [
                    "En la misma ubicación que el sistema principal",
                    "En una ubicación offsite (fuera de la ubicación principal)",
                    "En un servidor virtual",
                    "En la memoria RAM del servidor principal"
                ],
                correcta: 1,
                preguntaId: "402050509"
            },
            {
                id: "4020505004",
                pregunta: "¿Por qué es importante diversificar las ubicaciones para albergar las copias de seguridad?",
                opciones: [
                    "Para reducir costes de almacenamiento",
                    "Para aumentar la velocidad de restauración",
                    "Para evitar perder todos los datos en caso de un incendio o evento similar",
                    "Para cumplir con requisitos legales"
                ],
                correcta: 2,
                preguntaId: "402050510"
            },
            {
                id: "4020505004",
                pregunta: "¿Qué riesgo existe si la ubicación offsite tiene conectividad permanente con la infraestructura principal?",
                opciones: [
                    "Mayor latencia en las comunicaciones",
                    "Mayor coste de mantenimiento",
                    "Posible propagación de un ataque de tipo ransomware",
                    "Menor capacidad de almacenamiento"
                ],
                correcta: 2,
                preguntaId: "402050511"
            },
            {
                id: "4020505005",
                pregunta: "¿Por qué es importante ajustar el backup a las necesidades del servicio?",
                opciones: [
                    "Para reducir el coste del hardware",
                    "Para optimizar los recursos consumidos (espacio, operaciones y ventanas temporales)",
                    "Para cumplir con la normativa legal",
                    "Para facilitar la migración a la nube"
                ],
                correcta: 1,
                preguntaId: "402050512"
            },
            {
                id: "4020505005",
                pregunta: "¿Por qué no deben almacenarse los datos de backup en los mismos sistemas que alojan la información productiva?",
                opciones: [
                    "Porque ocuparía demasiado espacio",
                    "Porque ralentizaría el sistema productivo",
                    "Porque un fallo podría inutilizar tanto la información productiva como la del backup",
                    "Porque es más costoso"
                ],
                correcta: 2,
                preguntaId: "402050513"
            },
            {
                id: "4020505005",
                pregunta: "¿Por qué es importante realizar restauraciones periódicas de los backups?",
                opciones: [
                    "Para mantener el sistema actualizado",
                    "Para verificar la utilidad e integridad de los datos",
                    "Para optimizar el espacio de almacenamiento",
                    "Para cumplir con requisitos legales"
                ],
                correcta: 1,
                preguntaId: "402050514"
            },
            {
                id: "4020505005",
                pregunta: "¿Qué implica el cifrado de los datos de los backups?",
                opciones: [
                    "Mayor velocidad de restauración",
                    "Menor espacio de almacenamiento",
                    "Mantenimiento de una infraestructura de claves durante largos períodos",
                    "Imposibilidad de restaurar en sistemas diferentes"
                ],
                correcta: 2,
                preguntaId: "402050515"
            },
            {
                id: "4020505005",
                pregunta: "Según el texto, ¿son suficientes los mecanismos de salvaguarda de Office 365 como sistema de backup?",
                opciones: [
                    "Sí, son completamente suficientes",
                    "No, se debe programar un sistema de backup adicional",
                    "Depende del tipo de datos almacenados",
                    "Sí, pero solo para correo electrónico"
                ],
                correcta: 1,
                preguntaId: "402050516"
            },
            {
                id: "4020505002",
                pregunta: "¿Qué limitación tienen las arquitecturas all-flash tradicionales frente a NVMe?",
                opciones: [
                    "Están limitadas a una sola cola de comandos",
                    "No pueden utilizar memoria flash",
                    "Son incompatibles con sistemas modernos",
                    "Tienen mayor latencia pero mejor rendimiento"
                ],
                correcta: 0,
                preguntaId: "402050517"
            },
            {
                id: "4020505003",
                pregunta: "¿Cuál de los siguientes NO es un uso típico del servicio S3?",
                opciones: [
                    "Lagos de datos",
                    "Procesos de copia de seguridad y restauración",
                    "Análisis de big data",
                    "Procesamiento en tiempo real de transacciones financieras"
                ],
                correcta: 3,
                preguntaId: "402050518"
            },
            {
                id: "4020505005",
                pregunta: "¿Qué característica debe tener una infraestructura de backup bien diseñada?",
                opciones: [
                    "Debe estar centralizada en un único punto",
                    "Debe estar adecuadamente dimensionada y redundada",
                    "Debe utilizar exclusivamente almacenamiento en la nube",
                    "Debe utilizar un único tipo de medio de almacenamiento"
                ],
                correcta: 1,
                preguntaId: "402050519"
            },
            {
                id: "4020505005",
                pregunta: "¿Qué debe incluir la documentación del plan de backup según el texto?",
                opciones: [
                    "Solo los procedimientos técnicos",
                    "Solo los horarios de backup",
                    "Actores involucrados, responsabilidades, pruebas y ubicación de las copias",
                    "Solo los costes asociados"
                ],
                correcta: 2,
                preguntaId: "402050520"
            }
        ]
    },
    "4020506000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4020506001",
                pregunta: "¿Qué es el Plan de Recuperación ante Desastres (DRP)?",
                opciones: [
                    "Un plan que incluye acciones para restituir el funcionamiento de infraestructura o servicios TIC tras un desastre",
                    "Un plan que solo se enfoca en la recuperación de datos",
                    "Un plan que incluye todas las acciones de la organización ante cualquier tipo de incidente",
                    "Un plan exclusivo para la recuperación de información en la nube"
                ],
                correcta: 0,
                preguntaId: "402050601"
            },
            {
                id: "4020506003",
                pregunta: "¿Qué es el Plan de Continuidad de Negocio (BCP)?",
                opciones: [
                    "Un plan exclusivo para la recuperación de sistemas TIC",
                    "Un plan que incluye acciones TIC del DRP y otras de diversos ámbitos para restituir los procesos de negocio",
                    "Un plan que solo se enfoca en la seguridad de la información",
                    "Un plan para la gestión de copias de seguridad"
                ],
                correcta: 1,
                preguntaId: "402050602"
            },
            {
                id: "4020506003",
                pregunta: "¿Qué estándar internacional incluye los requisitos para implantar un Sistema de Gestión de Continuidad de Negocio?",
                opciones: [
                    "ISO 27001",
                    "ISO 9001",
                    "ISO 22301",
                    "ISO 20000"
                ],
                correcta: 2,
                preguntaId: "402050603"
            },
            {
                id: "4020506004",
                pregunta: "¿Qué es un SLA (Service Level Agreement)?",
                opciones: [
                    "Un software para gestionar backups",
                    "Un contrato que establece los detalles del servicio que prestará el proveedor",
                    "Un protocolo de comunicación entre sistemas",
                    "Un sistema de almacenamiento en la nube"
                ],
                correcta: 1,
                preguntaId: "402050604"
            },
            {
                id: "4020506004",
                pregunta: "¿Qué significa RPO (Recovery Point Objective)?",
                opciones: [
                    "El tiempo máximo que puede transcurrir desde un desastre hasta la restauración del servicio",
                    "La máxima cantidad de datos asumible que se pueden perder en un proceso de restauración",
                    "El punto de restauración óptimo para un sistema",
                    "El objetivo de recuperación de procesos"
                ],
                correcta: 1,
                preguntaId: "402050605"
            },
            {
                id: "4020506004",
                pregunta: "¿Qué significa RTO (Recovery Time Objective)?",
                opciones: [
                    "El tiempo máximo que puede transcurrir desde un desastre hasta la restauración del servicio",
                    "La máxima cantidad de datos asumible que se pueden perder en un proceso de restauración",
                    "El tiempo de respuesta óptimo",
                    "El objetivo de recuperación de datos"
                ],
                correcta: 0,
                preguntaId: "402050606"
            },
            {
                id: "4020506004",
                pregunta: "En el ejemplo del texto, si tenemos un backup full semanal e incrementales diarios, ¿cuál sería el RPO máximo esperable?",
                opciones: [
                    "1 hora",
                    "12 horas",
                    "24 horas",
                    "1 semana"
                ],
                correcta: 2,
                preguntaId: "402050607"
            },
            {
                id: "4020506005",
                pregunta: "¿Qué significa WORM en el contexto de backup?",
                opciones: [
                    "Write Once Read Multiple",
                    "Write Only Read Many",
                    "Write Once Restore Multiple",
                    "Write Original Read Memory"
                ],
                correcta: 1,
                preguntaId: "402050608"
            },
            {
                id: "4020506005",
                pregunta: "¿Qué ventaja proporciona un backup WORM?",
                opciones: [
                    "Mayor velocidad de restauración",
                    "Menor espacio de almacenamiento",
                    "Protección ante ataques lógicos como ransomware",
                    "Mayor compatibilidad con sistemas antiguos"
                ],
                correcta: 2,
                preguntaId: "402050609"
            },
            {
                id: "4020506005",
                pregunta: "¿Por qué es recomendable tener una copia del backup en una ubicación desconectada?",
                opciones: [
                    "Para ahorrar costes de almacenamiento",
                    "Para aumentar la velocidad de restauración",
                    "Para evitar que un ataque en el site principal pueda afectar a la copia de seguridad",
                    "Para cumplir con requisitos legales"
                ],
                correcta: 2,
                preguntaId: "402050610"
            },
            {
                id: "4020506005",
                pregunta: "Según el texto, ¿qué característica tiene el coste del almacenamiento en la nube?",
                opciones: [
                    "Es muy caro tanto el almacenamiento como el trasiego de datos",
                    "Es muy barato el almacenamiento y mucho más caro su trasiego",
                    "Es muy caro el almacenamiento y barato el trasiego",
                    "Tiene el mismo coste tanto el almacenamiento como el trasiego"
                ],
                correcta: 1,
                preguntaId: "402050611"
            },
            {
                id: "4020506006",
                pregunta: "¿Qué significa BaaS en el contexto del backup?",
                opciones: [
                    "Backup and Storage",
                    "Backup as a Service",
                    "Backup and Security",
                    "Backup and System"
                ],
                correcta: 1,
                preguntaId: "402050612"
            },
            {
                id: "4020506006",
                pregunta: "¿Qué significa RaaS en el contexto del backup?",
                opciones: [
                    "Recovery as a Service",
                    "Restore and Storage",
                    "Recovery and Security",
                    "Restore as a System"
                ],
                correcta: 0,
                preguntaId: "402050613"
            },
            {
                id: "4020506006",
                pregunta: "¿Cómo se considera generalmente el servicio BaaS dentro de los modelos de servicio en la nube?",
                opciones: [
                    "IaaS (Infraestructura como Servicio)",
                    "PaaS (Plataforma como Servicio)",
                    "SaaS (Software como Servicio)",
                    "DaaS (Datos como Servicio)"
                ],
                correcta: 1,
                preguntaId: "402050614"
            },
            {
                id: "4020506006",
                pregunta: "¿Qué dos puntos cobran importancia en la prestación de servicios de backup en la nube?",
                opciones: [
                    "La velocidad de conexión y el tipo de almacenamiento",
                    "El proveedor y la ubicación de los datos",
                    "Los SLAs y los modelos de facturación",
                    "La seguridad y la disponibilidad"
                ],
                correcta: 2,
                preguntaId: "402050615"
            },
            {
                id: "4020506007",
                pregunta: "Según el texto, ¿cuál de las siguientes herramientas de backup se ha establecido como primera opción para backup en la nube y soluciones como Office 365?",
                opciones: [
                    "Veritas NetBackup",
                    "DELL IDPA",
                    "Veeam",
                    "Symantec"
                ],
                correcta: 2,
                preguntaId: "402050616"
            },
            {
                id: "4020506007",
                pregunta: "¿Cómo se licencia Veritas NetBackup según el texto?",
                opciones: [
                    "Por número de usuarios",
                    "Por volumen de información respaldada",
                    "Por número de servidores",
                    "Por suscripción mensual"
                ],
                correcta: 1,
                preguntaId: "402050617"
            },
            {
                id: "4020506007",
                pregunta: "¿Qué característica diferencia a DELL IDPA de las otras herramientas de backup mencionadas?",
                opciones: [
                    "Es exclusivamente para entornos virtualizados",
                    "Solo funciona en la nube",
                    "Incluye de forma compacta tanto el software como el almacenamiento en el mismo equipamiento",
                    "Es gratuito para uso personal"
                ],
                correcta: 2,
                preguntaId: "402050618"
            },
            {
                id: "4020506002",
                pregunta: "¿Cuál es la principal diferencia entre un DRP y un BCP?",
                opciones: [
                    "El DRP se enfoca en la infraestructura TIC mientras que el BCP abarca toda la organización",
                    "El DRP es para empresas pequeñas y el BCP para grandes corporaciones",
                    "El DRP es para recuperación en la nube y el BCP para recuperación local",
                    "El DRP es más completo que el BCP"
                ],
                correcta: 0,
                preguntaId: "402050619"
            },
            {
                id: "4020506001",
                pregunta: "¿Qué papel juegan los backups en los planes de recuperación ante desastres?",
                opciones: [
                    "Son irrelevantes para estos planes",
                    "Son el único componente necesario",
                    "Forman parte y apoyan estos planes",
                    "Solo son importantes para ataques de ransomware"
                ],
                correcta: 2,
                preguntaId: "402050620"
            }
        ]
    },
    "4020601000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4020601001",
                pregunta: "¿Qué es la virtualización de plataforma?",
                opciones: [
                    "Un mecanismo para crear redes virtuales",
                    "Un mecanismo de optimización y racionalización de los recursos de cómputo y proceso",
                    "Un sistema para virtualizar únicamente el almacenamiento",
                    "Un método para crear copias de seguridad virtuales"
                ],
                correcta: 1,
                preguntaId: "402060101"
            },
            {
                id: "4020601001",
                pregunta: "¿Qué ficción crea la virtualización para las cargas de trabajo?",
                opciones: [
                    "Que disponen de un entorno especialmente dedicado",
                    "Que funcionan en la nube",
                    "Que no consumen recursos físicos",
                    "Que son más rápidas que en entornos físicos"
                ],
                correcta: 0,
                preguntaId: "402060102"
            },
            {
                id: "4020601001",
                pregunta: "¿Cuáles son las principales soluciones tecnológicas en el ámbito de la virtualización de servidores según el texto?",
                opciones: [
                    "Linux KVM y Xen",
                    "Oracle VM y Citrix XenServer",
                    "VSphere de VMWare y HyperV de Microsoft",
                    "Docker y Kubernetes"
                ],
                correcta: 2,
                preguntaId: "402060103"
            },
            {
                id: "4020601002",
                pregunta: "¿Cuál de las siguientes NO es una ventaja de la virtualización de servidores?",
                opciones: [
                    "Eficiencia en la asignación de recursos",
                    "Sencillez en las labores de administración",
                    "Mayor rapidez en el aprovisionamiento",
                    "Mayor seguridad ante ataques informáticos"
                ],
                correcta: 3,
                preguntaId: "402060104"
            },
            {
                id: "4020601002",
                pregunta: "¿Qué característica permite la virtualización respecto a los recursos asignados a las máquinas virtuales?",
                opciones: [
                    "Que sean estáticos y no modificables",
                    "Que sean infinitos",
                    "Que puedan modificarse, incluso 'en caliente'",
                    "Que sean independientes del hardware físico"
                ],
                correcta: 2,
                preguntaId: "402060105"
            },
            {
                id: "4020601003",
                pregunta: "¿Qué es un hipervisor?",
                opciones: [
                    "El hardware físico que soporta la virtualización",
                    "El software de sistema operativo que realiza las labores de virtualización",
                    "Una máquina virtual con capacidades especiales",
                    "Un sistema de monitorización de entornos virtualizados"
                ],
                correcta: 1,
                preguntaId: "402060106"
            },
            {
                id: "4020601003",
                pregunta: "¿Qué nombre recibe el hipervisor en el ámbito del fabricante VMWare?",
                opciones: [
                    "ESXi",
                    "VSphere",
                    "vCenter Server",
                    "Workstation"
                ],
                correcta: 1,
                preguntaId: "402060107"
            },
            {
                id: "4020601003",
                pregunta: "¿Qué elemento es necesario para permitir el movimiento de máquinas virtuales entre servidores anfitriones?",
                opciones: [
                    "Un hipervisor de tipo 1",
                    "Almacenamiento compartido con visibilidad común",
                    "Procesadores de la misma marca y modelo",
                    "Sistemas operativos idénticos"
                ],
                correcta: 1,
                preguntaId: "402060108"
            },
            {
                id: "4020601004",
                pregunta: "¿Qué es un clúster en el contexto de la virtualización de servidores?",
                opciones: [
                    "Un grupo de máquinas virtuales que funcionan juntas",
                    "Un grupo de máquinas físicas que funcionan en conjunto permitiendo el movimiento de VMs entre ellas",
                    "Un sistema de almacenamiento compartido",
                    "Un mecanismo de seguridad para entornos virtualizados"
                ],
                correcta: 1,
                preguntaId: "402060109"
            },
            {
                id: "4020601004",
                pregunta: "¿Qué nombre recibe en VMWare el mecanismo que permite mover máquinas virtuales entre hosts?",
                opciones: [
                    "HostMotion",
                    "VMMotion",
                    "VMotion",
                    "LiveMigration"
                ],
                correcta: 2,
                preguntaId: "402060110"
            },
            {
                id: "4020601005",
                pregunta: "Según el texto, ¿cuál es un riesgo de seguridad en entornos virtualizados?",
                opciones: [
                    "Que las máquinas virtuales consuman demasiados recursos",
                    "Que una máquina virtual pueda saltar al hardware anfitrión o a otra máquina virtual",
                    "Que el hipervisor se bloquee frecuentemente",
                    "Que las máquinas virtuales sean más lentas que las físicas"
                ],
                correcta: 1,
                preguntaId: "402060111"
            },
            {
                id: "4020601005",
                pregunta: "¿Qué buena práctica de seguridad se recomienda para entornos virtualizados?",
                opciones: [
                    "Cifrar todas las máquinas virtuales",
                    "No alojar en el mismo host máquinas de dominios de seguridad distintos",
                    "Utilizar únicamente sistemas operativos Windows",
                    "Reiniciar diariamente todos los servidores virtuales"
                ],
                correcta: 1,
                preguntaId: "402060112"
            },
            {
                id: "4020601006",
                pregunta: "¿En qué consiste la virtualización del almacenamiento?",
                opciones: [
                    "En crear copias de seguridad virtuales",
                    "En la agrupación de recursos físicos de almacenamiento para presentarlos como un único espacio",
                    "En comprimir los datos para que ocupen menos espacio",
                    "En cifrar la información almacenada"
                ],
                correcta: 1,
                preguntaId: "402060113"
            },
            {
                id: "4020601006",
                pregunta: "¿Cuáles son las dos principales opciones para la virtualización del almacenamiento?",
                opciones: [
                    "Virtualización en caliente y en frío",
                    "Virtualización local y remota",
                    "Virtualización basada en hardware y basada en software",
                    "Virtualización síncrona y asíncrona"
                ],
                correcta: 2,
                preguntaId: "402060114"
            },
            {
                id: "4020601006",
                pregunta: "¿Qué es la virtualización de los balanceadores de carga?",
                opciones: [
                    "Un sistema para distribuir el tráfico entre varios servidores",
                    "La creación de unidades virtuales menores a partir de un appliance físico de balanceo",
                    "Un mecanismo para equilibrar la carga de trabajo entre máquinas virtuales",
                    "Un sistema para optimizar el rendimiento de las aplicaciones"
                ],
                correcta: 1,
                preguntaId: "402060115"
            },
            {
                id: "4020601006",
                pregunta: "¿Qué permite el Distributed File System de Microsoft según el texto?",
                opciones: [
                    "Distribuir archivos entre diferentes servidores",
                    "Crear una ruta lógica para una o varias ubicaciones físicas",
                    "Comprimir archivos para ahorrar espacio",
                    "Cifrar archivos para mayor seguridad"
                ],
                correcta: 1,
                preguntaId: "402060116"
            },
            {
                id: "4020601007",
                pregunta: "¿Por qué la virtualización es un factor clave para la computación en la nube?",
                opciones: [
                    "Porque reduce el coste de los servidores",
                    "Porque permite el acceso remoto a los sistemas",
                    "Porque aporta flexibilidad al hardware, permitiendo repartirlo entre varios clientes",
                    "Porque mejora la seguridad de los datos"
                ],
                correcta: 2,
                preguntaId: "402060117"
            },
            {
                id: "4020601007",
                pregunta: "¿Qué significa IaaS?",
                opciones: [
                    "Internet as a Service",
                    "Infrastructure as a Service",
                    "Information as a Service",
                    "Integration as a Service"
                ],
                correcta: 1,
                preguntaId: "402060118"
            },
            {
                id: "4020601007",
                pregunta: "En el modelo PaaS, ¿quién se encarga del mantenimiento de la infraestructura?",
                opciones: [
                    "El cliente",
                    "Un tercero contratado por el cliente",
                    "El proveedor",
                    "Se comparte entre cliente y proveedor"
                ],
                correcta: 2,
                preguntaId: "402060119"
            },
            {
                id: "4020601007",
                pregunta: "¿Cuál de los siguientes es un ejemplo de SaaS según el texto?",
                opciones: [
                    "Un conjunto de máquinas virtuales",
                    "Microsoft Office 365",
                    "Un software de videoconferencia puesto a disposición de una empresa",
                    "Una plataforma de desarrollo de aplicaciones"
                ],
                correcta: 2,
                preguntaId: "402060120"
            }
        ]
    },
    "4020602000e": {
    minimoParaAprobar: 7,
    preguntas: [
        {
            id: "4020602001",
            pregunta: "¿Qué es la virtualización del puesto de trabajo?",
            opciones: [
                "Un sistema para crear copias de seguridad de los ordenadores de los empleados",
                "Una solución que permite modelar servicios, aplicaciones y herramientas para ser accedidos desde cualquier lugar y dispositivo",
                "Un método para reducir el número de ordenadores en una organización",
                "Un sistema para monitorizar la actividad de los empleados en sus ordenadores"
            ],
            correcta: 1,
            preguntaId: "402060201"
        },
        {
            id: "4020602001",
            pregunta: "¿Qué evento reciente ha acelerado la implantación de soluciones de virtualización del puesto de trabajo según el texto?",
            opciones: [
                "La pandemia de COVID-19",
                "La crisis económica global",
                "El aumento de los ciberataques",
                "La obsolescencia de los sistemas operativos"
            ],
            correcta: 0,
            preguntaId: "402060202"
        },
        {
            id: "4020602001",
            pregunta: "¿Qué nombre recibe habitualmente el puesto de trabajo basado en virtualización y otras herramientas?",
            opciones: [
                "Puesto de trabajo remoto",
                "Puesto de trabajo virtual",
                "Puesto de trabajo digital",
                "Puesto de trabajo en la nube"
            ],
            correcta: 2,
            preguntaId: "402060203"
        },
        {
            id: "4020602001",
            pregunta: "¿Cuál de los siguientes aspectos NO se menciona como importante para analizar antes de implementar la virtualización del puesto de trabajo?",
            opciones: [
                "Inventario y costes asociados al parque de equipos de sobremesa",
                "Grupos de usuarios principales en la organización",
                "Tipología de aplicaciones utilizadas por cada grupo de trabajo",
                "Nivel de conocimientos informáticos de los usuarios"
            ],
            correcta: 3,
            preguntaId: "402060204"
        },
        {
            id: "4020602002",
            pregunta: "¿Qué significa el acrónimo BYOD mencionado en el texto?",
            opciones: [
                "Build Your Own Desktop",
                "Backup Your Office Data",
                "Bring Your Own Device",
                "Business Yearly Operation Development"
            ],
            correcta: 2,
            preguntaId: "402060205"
        },
        {
            id: "4020602002",
            pregunta: "¿Cuál de las siguientes NO es una ventaja de la virtualización del puesto de trabajo según el texto?",
            opciones: [
                "Flexibilidad",
                "Facilidad de operación y mantenimiento",
                "Reducción de costes",
                "Eliminación total de problemas de seguridad"
            ],
            correcta: 3,
            preguntaId: "402060206"
        },
        {
            id: "4020602002",
            pregunta: "¿Qué ventaja de la virtualización del puesto de trabajo está relacionada con la posibilidad de seguir trabajando ante situaciones como incendios u otros eventos que afecten a las instalaciones?",
            opciones: [
                "Flexibilidad",
                "Reducción de costes",
                "Continuidad del negocio",
                "Aumento de la seguridad"
            ],
            correcta: 2,
            preguntaId: "402060207"
        },
        {
            id: "4020602002",
            pregunta: "Según el texto, ¿qué aspecto debe tenerse especialmente en cuenta en la configuración cuando se utiliza una nube híbrida para la virtualización del puesto de trabajo?",
            opciones: [
                "El color de la interfaz de usuario",
                "Las comunicaciones y conectividad entre la infraestructura en nube y la que se aloja en las propias instalaciones",
                "La marca de los dispositivos de los usuarios",
                "El sistema operativo de los servidores"
            ],
            correcta: 1,
            preguntaId: "402060208"
        },
        {
            id: "4020602003",
            pregunta: "¿Cuáles son las dos principales opciones de virtualización del puesto de trabajo mencionadas en el texto?",
            opciones: [
                "Virtualización local y virtualización remota",
                "Virtualización de aplicaciones sin estado y virtualización de escritorios con estado",
                "Virtualización en la nube y virtualización on-premise",
                "Virtualización para usuarios VIP y virtualización para usuarios estándar"
            ],
            correcta: 1,
            preguntaId: "402060209"
        },
        {
            id: "4020602003",
            pregunta: "En la virtualización de aplicaciones sin estado, ¿qué se ofrece a los usuarios?",
            opciones: [
                "Un ordenador físico completo",
                "Un escritorio que, a modo de escaparate o portal, ofrece un conjunto de aplicaciones virtualizadas",
                "Un sistema operativo completo virtualizado",
                "Una conexión VPN a la red corporativa"
            ],
            correcta: 1,
            preguntaId: "402060210"
        },
        {
            id: "4020602003",
            pregunta: "¿Cuáles son los protocolos más habituales para presentar la virtualización de las aplicaciones a los usuarios según el texto?",
            opciones: [
                "HTTP, HTTPS y FTP",
                "SSH, Telnet y VNC",
                "Microsoft RDP, Blast y PCoIP",
                "SMTP, POP3 e IMAP"
            ],
            correcta: 2,
            preguntaId: "402060211"
        },
        {
            id: "4020602003",
            pregunta: "¿Qué tecnologías de fabricante se mencionan como las más extendidas para la virtualización de aplicaciones sin estado?",
            opciones: [
                "Remote Desktop Services de Microsoft, RDSH/Horizon de VMWare y tecnología Citrix",
                "TeamViewer, AnyDesk y Chrome Remote Desktop",
                "Docker, Kubernetes y OpenShift",
                "VirtualBox, VMware Workstation y Hyper-V"
            ],
            correcta: 0,
            preguntaId: "402060212"
        },
        {
            id: "4020602003",
            pregunta: "¿Qué característica define a la virtualización de escritorios con estado?",
            opciones: [
                "No requiere autenticación de usuarios",
                "Los escritorios remotos pueden ser retomados por los usuarios en el estado en que los dejaron tras su última utilización",
                "Solo funciona con dispositivos móviles",
                "No permite la personalización del entorno"
            ],
            correcta: 1,
            preguntaId: "402060213"
        },
        {
            id: "4020602003",
            pregunta: "En la virtualización de escritorios con estado (VDI), ¿a qué nivel se realiza la virtualización según el texto?",
            opciones: [
                "A nivel de aplicación",
                "A nivel de hardware",
                "A nivel de sistema operativo",
                "A nivel de red"
            ],
            correcta: 2,
            preguntaId: "402060214"
        },
        {
            id: "4020602003",
            pregunta: "Según el texto, ¿para qué tipo de usuarios se considera preferible la virtualización de escritorios con estado?",
            opciones: [
                "Para usuarios con pocos conocimientos informáticos",
                "Para usuarios VIPs de la organización",
                "Para usuarios que trabajan exclusivamente desde casa",
                "Para usuarios que solo necesitan aplicaciones básicas"
            ],
            correcta: 1,
            preguntaId: "402060215"
        },
        {
            id: "4020602003",
            pregunta: "¿Cuál es una desventaja de la virtualización de escritorios con estado frente a la virtualización de aplicaciones sin estado?",
            opciones: [
                "Menor seguridad",
                "Peor experiencia de usuario",
                "Mayor coste económico y mayor carga de mantenimiento",
                "No permite el acceso desde dispositivos móviles"
            ],
            correcta: 2,
            preguntaId: "402060216"
        },
        {
            id: "4020602003",
            pregunta: "¿Qué producto se menciona como ejemplo de tecnología para la virtualización de escritorios con estado?",
            opciones: [
                "Microsoft Remote Desktop Services",
                "Citrix Virtual Apps",
                "VMWare Horizon VDI",
                "TeamViewer"
            ],
            correcta: 2,
            preguntaId: "402060217"
        },
        {
            id: "4020602002",
            pregunta: "¿Qué ventaja de la virtualización del puesto de trabajo permite aplicar parches o nuevas políticas de forma más sencilla desde un único punto?",
            opciones: [
                "Flexibilidad",
                "Facilidad de operación y mantenimiento",
                "Reducción de costes",
                "Aumento de la seguridad"
            ],
            correcta: 1,
            preguntaId: "402060218"
        },
        {
            id: "4020602002",
            pregunta: "¿Qué aspecto de la seguridad mejora con la virtualización del puesto de trabajo según el texto?",
            opciones: [
                "La eliminación total de amenazas",
                "La centralización de las copias de seguridad y la facilidad de aplicación de nuevas políticas",
                "La imposibilidad de sufrir ataques informáticos",
                "La eliminación de la necesidad de contraseñas"
            ],
            correcta: 1,
            preguntaId: "402060219"
        },
        {
            id: "4020602001",
            pregunta: "¿Qué debe analizarse respecto a las aplicaciones antes de implementar la virtualización del puesto de trabajo?",
            opciones: [
                "Solo su coste de licenciamiento",
                "Solo su popularidad entre los usuarios",
                "Si son aplicaciones estándar, específicamente desarrolladas y qué perspectivas de virtualización aportan",
                "Solo su consumo de recursos"
            ],
            correcta: 2,
            preguntaId: "402060220"
        }
    ]
}

};