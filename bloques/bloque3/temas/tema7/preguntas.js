const preguntas = {
    "3070101000e": {
        minimoParaAprobar: 14,
        preguntas: [
            {
                id: "3070101001",
                pregunta: "¿Qué ofrecen los patrones arquitectónicos en ingeniería de software?",
                opciones: [
                    "Soluciones a problemas de programación de bajo nivel",
                    "Soluciones a problemas de arquitectura de software",
                    "Soluciones a problemas de diseño de interfaces",
                    "Soluciones a problemas de bases de datos"
                ],
                correcta: 1,
                preguntaId: "307010101"
            },
            {
                id: "3070101001",
                pregunta: "¿Qué expresa un patrón arquitectónico?",
                opciones: [
                    "Un conjunto de algoritmos para resolver problemas específicos",
                    "Un esquema de organización estructural esencial para un sistema de software",
                    "Un conjunto de reglas para programar en un lenguaje específico",
                    "Un método para optimizar el rendimiento de las aplicaciones"
                ],
                correcta: 1,
                preguntaId: "307010102"
            },
            {
                id: "3070101001",
                pregunta: "En comparación con los patrones de diseño, los patrones arquitectónicos tienen:",
                opciones: [
                    "Un nivel de abstracción menor",
                    "El mismo nivel de abstracción",
                    "Un nivel de abstracción mayor",
                    "No existe relación entre ambos conceptos"
                ],
                correcta: 2,
                preguntaId: "307010103"
            },
            {
                id: "3070101002",
                pregunta: "¿Cuál de los siguientes NO es un patrón de arquitectura mencionado en el texto?",
                opciones: [
                    "Programación por capas",
                    "Modelo Vista Controlador",
                    "Arquitectura cliente-servidor",
                    "Patrón Singleton"
                ],
                correcta: 3,
                preguntaId: "3070101004"
            },
            {
                id: "3070101002",
                pregunta: "¿Cuántos patrones de arquitectura se enumeran en el apartado 1.1.1?",
                opciones: [
                    "9",
                    "10",
                    "11",
                    "12"
                ],
                correcta: 2,
                preguntaId: "3070101005"
            },
            {
                id: "3070101003",
                pregunta: "¿Cuál es el objetivo fundamental de la programación por capas?",
                opciones: [
                    "Mejorar el rendimiento de las aplicaciones",
                    "Facilitar la documentación del código",
                    "La separación (desacoplamiento) de las partes que componen una aplicación",
                    "Reducir el tiempo de desarrollo"
                ],
                correcta: 2,
                preguntaId: "3070101006"
            },
            {
                id: "3070101003",
                pregunta: "¿Cuáles son las capas en las que se produce la separación en la programación por capas?",
                opciones: [
                    "Capa de presentación, capa de aplicación y capa de datos",
                    "Capa de presentación, lógica de negocio y capa de persistencia o datos",
                    "Capa de usuario, capa de sistema y capa de almacenamiento",
                    "Capa de interfaz, capa de procesamiento y capa de almacenamiento"
                ],
                correcta: 1,
                preguntaId: "3070101007"
            },
            {
                id: "3070101003",
                pregunta: "¿Qué ventaja aporta el modelo de programación por capas respecto al desarrollo?",
                opciones: [
                    "Permite desarrollar aplicaciones más rápidas",
                    "Reduce el consumo de recursos del sistema",
                    "El desarrollo se puede llevar a cabo en varios niveles y los cambios solo afectan al nivel requerido",
                    "Elimina la necesidad de realizar pruebas de integración"
                ],
                correcta: 2,
                preguntaId: "3070101008"
            },
            {
                id: "3070101004",
                pregunta: "¿Qué otro nombre recibe la capa de presentación?",
                opciones: [
                    "Capa de usuario",
                    "Capa de aplicación",
                    "Capa de sistema",
                    "Capa de interfaz de programación"
                ],
                correcta: 0,
                preguntaId: "3070101009"
            },
            {
                id: "3070101004",
                pregunta: "¿Con qué capa se comunica únicamente la capa de presentación?",
                opciones: [
                    "Con la capa de datos",
                    "Con la capa de negocio",
                    "Con ambas capas: negocio y datos",
                    "Con ninguna capa, es independiente"
                ],
                correcta: 1,
                preguntaId: "3070101010"
            },
            {
                id: "3070101004",
                pregunta: "¿Por qué se denomina 'capa de negocio'?",
                opciones: [
                    "Porque es donde se realizan las transacciones económicas",
                    "Porque es donde se establecen todas las reglas que deben cumplirse",
                    "Porque es la capa que genera más beneficios",
                    "Porque es la capa que utilizan los usuarios de negocio"
                ],
                correcta: 1,
                preguntaId: "3070101011"
            },
            {
                id: "3070101004",
                pregunta: "¿Qué componentes forman la capa de datos?",
                opciones: [
                    "Interfaces de usuario y formularios",
                    "Programas de aplicación y reglas de negocio",
                    "Uno o más gestores de bases de datos",
                    "Interfaces de programación de aplicaciones (APIs)"
                ],
                correcta: 2,
                preguntaId: "3070101012"
            },
            {
                id: "3070101004",
                pregunta: "¿Dónde pueden estar alojadas todas las capas de la arquitectura?",
                opciones: [
                    "Siempre en máquinas separadas",
                    "En una única máquina",
                    "Solo en la nube",
                    "Necesariamente en un clúster"
                ],
                correcta: 1,
                preguntaId: "3070101013"
            },
            {
                id: "3070101004",
                pregunta: "¿Qué se puede crear si aumenta el tamaño o complejidad de la capa de datos?",
                opciones: [
                    "Un servidor espejo",
                    "Una capa intermedia",
                    "Un clúster",
                    "Una base de datos NoSQL"
                ],
                correcta: 2,
                preguntaId: "3070101014"
            },
            {
                id: "3070101004",
                pregunta: "En sistemas muy complejos con grandes necesidades de disponibilidad, ¿cómo se suelen distribuir las capas?",
                opciones: [
                    "Todas las capas en una única máquina potente",
                    "Una serie de máquinas para la capa de negocio y otra serie para la base de datos",
                    "Todas las capas en la nube sin separación física",
                    "Solo se separa la capa de presentación"
                ],
                correcta: 1,
                preguntaId: "3070101015"
            },
            {
                id: "3070101003",
                pregunta: "¿Qué permite la programación por capas respecto al trabajo de desarrollo?",
                opciones: [
                    "Centralizar todo el desarrollo en un único equipo",
                    "Distribuir el trabajo de creación de una aplicación por capas",
                    "Eliminar la necesidad de conocer APIs entre niveles",
                    "Reducir el número de desarrolladores necesarios"
                ],
                correcta: 1,
                preguntaId: "3070101016"
            },
            {
                id: "3070101001",
                pregunta: "¿Qué otro nombre reciben los patrones arquitectónicos?",
                opciones: [
                    "Patrones de diseño",
                    "Arquetipos",
                    "Modelos de software",
                    "Frameworks de desarrollo"
                ],
                correcta: 1,
                preguntaId: "3070101017"
            },
            {
                id: "3070101004",
                pregunta: "¿Qué característica debe tener la interfaz gráfica en la capa de presentación?",
                opciones: [
                    "Ser compleja",
                    "Ser amigable",
                    "Ser minimalista",
                    "Ser técnica"
                ],
                correcta: 1,
                preguntaId: "3070101018"
            },
            {
                id: "3070101004",
                pregunta: "¿Qué ocurre cuando necesitamos dividir la capa de negocio en varias instancias?",
                opciones: [
                    "Se crean múltiples instancias de bases de datos",
                    "Se reduce el rendimiento del sistema",
                    "Todas ellas dirigirían las peticiones a una única instancia de base de datos",
                    "Se elimina la capa de presentación"
                ],
                correcta: 2,
                preguntaId: "3070101019"
            }
        ]
    },
    "3070102000e": {
        minimoParaAprobar: 12,
        preguntas: [
            {
                id: "3070102001",
                pregunta: "¿Cuál es la diferencia principal entre 'capa' y 'nivel' en arquitectura de software?",
                opciones: [
                    "No hay diferencia, son términos intercambiables",
                    "Las capas son divisiones físicas y los niveles son divisiones lógicas",
                    "Las capas son divisiones lógicas y los niveles son distribuciones físicas",
                    "Las capas son para aplicaciones web y los niveles para aplicaciones de escritorio"
                ],
                correcta: 2,
                preguntaId: "3070102001"
            },
            {
                id: "3070102001",
                pregunta: "¿Qué ejemplo representa una arquitectura de tres capas y un nivel?",
                opciones: [
                    "Presentación en un servidor, lógica en otro y datos en un tercero",
                    "Presentación, lógica y datos residiendo en una sola máquina",
                    "Presentación y lógica en una máquina, datos en otra",
                    "Tres aplicaciones diferentes comunicándose entre sí"
                ],
                correcta: 1,
                preguntaId: "3070102002"
            },
            {
                id: "3070102002",
                pregunta: "¿Qué característica define a un pipeline en ingeniería de software?",
                opciones: [
                    "Un conjunto de servicios independientes",
                    "Una cadena de elementos donde la salida de uno es la entrada del siguiente",
                    "Un sistema de almacenamiento de datos en caché",
                    "Un protocolo de comunicación entre servidores"
                ],
                correcta: 1,
                preguntaId: "3070102003"
            },
            {
                id: "3070102002",
                pregunta: "¿En qué tipo de sistemas se puede encontrar un ejemplo práctico de pipeline?",
                opciones: [
                    "Sistemas de archivos",
                    "Sistemas operativos multitarea",
                    "Sistemas de bases de datos relacionales",
                    "Sistemas de autenticación"
                ],
                correcta: 1,
                preguntaId: "3070102004"
            },
            {
                id: "3070102003",
                pregunta: "¿Qué caracteriza a la invocación implícita?",
                opciones: [
                    "Llamadas directas a procedimientos",
                    "Invocación a través de la aparición de un evento al que se registra el componente",
                    "Ejecución secuencial de código",
                    "Llamadas síncronas entre componentes"
                ],
                correcta: 1,
                preguntaId: "3070102005"
            },
            {
                id: "3070102003",
                pregunta: "¿Qué incluyen los conectores en la invocación implícita?",
                opciones: [
                    "Solo llamadas a procedimientos tradicionales",
                    "Solo enlaces de eventos",
                    "Llamadas a procedimientos tradicionales y enlaces de eventos con llamadas a procedimientos",
                    "Únicamente protocolos de red"
                ],
                correcta: 2,
                preguntaId: "3070102006"
            },
            {
                id: "3070102004",
                pregunta: "¿Cuáles son los elementos principales de la arquitectura en pizarra?",
                opciones: [
                    "Clientes y servidores",
                    "Agentes y pizarra",
                    "Productores y consumidores",
                    "Nodos y enlaces"
                ],
                correcta: 1,
                preguntaId: "3070102007"
            },
            {
                id: "3070102004",
                pregunta: "¿Cuál es el comportamiento básico de un agente en la arquitectura en pizarra?",
                opciones: [
                    "Comunicarse directamente con otros agentes",
                    "Examinar la pizarra, realizar su tarea y escribir sus conclusiones en la misma pizarra",
                    "Coordinar el trabajo de otros agentes",
                    "Almacenar datos en una base de datos centralizada"
                ],
                correcta: 1,
                preguntaId: "3070102008"
            },
            {
                id: "3070102004",
                pregunta: "¿En qué tipo de sistemas se utiliza habitualmente la arquitectura en pizarra?",
                opciones: [
                    "Sistemas de gestión de bases de datos",
                    "Sistemas de procesamiento de transacciones",
                    "Sistemas expertos y sistemas basados en el conocimiento",
                    "Sistemas operativos"
                ],
                correcta: 2,
                preguntaId: "3070102009"
            },
            {
                id: "3070102005",
                pregunta: "¿Qué promueve la Arquitectura Dirigida por Eventos (EDA)?",
                opciones: [
                    "La centralización de procesos",
                    "La producción, detección, consumo y reacción a partir de eventos",
                    "La comunicación síncrona entre componentes",
                    "El procesamiento secuencial de datos"
                ],
                correcta: 1,
                preguntaId: "3070102010"
            },
            {
                id: "3070102005",
                pregunta: "¿Cuál de las siguientes NO es una ventaja de la Arquitectura Dirigida por Eventos?",
                opciones: [
                    "Simplicidad",
                    "Escalado",
                    "Modularidad",
                    "Garantía de respuesta del suscriptor al evento"
                ],
                correcta: 3,
                preguntaId: "3070102011"
            },
            {
                id: "3070102005",
                pregunta: "¿Cuál es un inconveniente de la Arquitectura Dirigida por Eventos?",
                opciones: [
                    "Excesiva simplicidad",
                    "Dificultad para escalar",
                    "Pobre comprensibilidad: difícil prever qué pasará en respuesta a una acción",
                    "Excesiva dependencia entre componentes"
                ],
                correcta: 2,
                preguntaId: "3070102012"
            },
            {
                id: "3070102006",
                pregunta: "¿Qué caracteriza a la arquitectura Peer-to-Peer (P2P)?",
                opciones: [
                    "Todos los dispositivos conectados actúan como cliente y servidor al mismo tiempo",
                    "Existe siempre un servidor central que administra la red",
                    "La comunicación es unidireccional",
                    "Los nodos no pueden comunicarse entre sí"
                ],
                correcta: 0,
                preguntaId: "3070102013"
            },
            {
                id: "3070102006",
                pregunta: "¿Cuál es la diferencia importante entre la arquitectura P2P y Cliente-Servidor?",
                opciones: [
                    "P2P solo funciona en redes locales",
                    "Cliente-Servidor tiene como punto medular la centralización, mientras P2P busca la descentralización",
                    "P2P no permite compartir archivos",
                    "Cliente-Servidor es más moderna que P2P"
                ],
                correcta: 1,
                preguntaId: "3070102014"
            },
            {
                id: "3070102006",
                pregunta: "¿Para qué se suelen usar las redes P2P?",
                opciones: [
                    "Exclusivamente para aplicaciones empresariales",
                    "Solo para comunicaciones de texto",
                    "Para compartir ficheros y telefonía VoIP",
                    "Únicamente para videojuegos en línea"
                ],
                correcta: 2,
                preguntaId: "3070102015"
            },
            {
                id: "3070102007",
                pregunta: "¿Qué es un servicio en el contexto de SOA?",
                opciones: [
                    "Un componente de hardware",
                    "Una representación lógica de una actividad de negocio con un resultado específico",
                    "Un protocolo de comunicación",
                    "Un tipo de base de datos"
                ],
                correcta: 1,
                preguntaId: "3070102016"
            },
            {
                id: "3070102007",
                pregunta: "¿Qué permite la arquitectura SOA?",
                opciones: [
                    "Únicamente la comunicación entre sistemas propios",
                    "La creación de sistemas poco escalables pero muy seguros",
                    "La creación de sistemas altamente escalables que reflejan el negocio de la organización",
                    "La eliminación de todas las capas de software"
                ],
                correcta: 2,
                preguntaId: "3070102017"
            },
            {
                id: "3070102007",
                pregunta: "¿Cuál de las siguientes NO es una característica de la arquitectura SOA?",
                opciones: [
                    "Estar basado en el diseño de servicios que reflejan actividades del negocio",
                    "Representar los servicios utilizando descripciones de negocio",
                    "Eliminar la necesidad de pruebas en los servicios",
                    "Requerir un gobierno fuerte sobre la representación e implementación de servicios"
                ],
                correcta: 2,
                preguntaId: "3070102018"
            },
            {
                id: "3070102007",
                pregunta: "¿Cuáles son los enfoques para la identificación de servicios en SOA?",
                opciones: [
                    "Enfoque único centralizado",
                    "Enfoques top-down, bottom-up y middle-out",
                    "Enfoque iterativo y enfoque en cascada",
                    "Enfoque ágil y enfoque tradicional"
                ],
                correcta: 1,
                preguntaId: "3070102019"
            },
            {
                id: "3070102007",
                pregunta: "¿Cuál es la virtud principal de SOA según el texto?",
                opciones: [
                    "La definición de una metodología para la definición y reutilización de componentes software y procesos de negocio",
                    "La eliminación de la necesidad de programadores",
                    "La reducción del tiempo de desarrollo a cero",
                    "La compatibilidad exclusiva con sistemas legacy"
                ],
                correcta: 0,
                preguntaId: "3070102020"
            }
        ]
    },
    "3070201000e": {
        minimoParaAprobar: 9,
        preguntas: [
            {
                id: "3070201001",
                pregunta: "Según la definición de la W3C, ¿qué es un servicio web?",
                opciones: [
                    "Un sistema hardware diseñado para soportar la interacción humano-máquina",
                    "Un sistema software diseñado para soportar la interacción máquina-a-máquina a través de una red y de forma interoperable",
                    "Un sistema de bases de datos distribuido",
                    "Un protocolo de comunicación entre servidores web"
                ],
                correcta: 1,
                preguntaId: "3070201001"
            },
            {
                id: "3070201001",
                pregunta: "¿Cuál es la relación entre SOA y Servicios Web?",
                opciones: [
                    "Son exactamente lo mismo",
                    "SOA es un tipo específico de Servicio Web",
                    "Los Servicios Web son siempre parte de una arquitectura SOA",
                    "SOA define el qué, los Servicios Web definen el cómo"
                ],
                correcta: 3,
                preguntaId: "3070201002"
            },
            {
                id: "3070201001",
                pregunta: "¿Es posible implementar una arquitectura SOA sin utilizar Servicios Web?",
                opciones: [
                    "No, SOA siempre requiere Servicios Web",
                    "Sí, una arquitectura SOA puede ser implementada sin que exista un solo Servicio Web",
                    "Solo en sistemas legacy",
                    "Solo si se utiliza un middleware específico"
                ],
                correcta: 1,
                preguntaId: "3070201003"
            },
            {
                id: "3070201002",
                pregunta: "¿Qué componente de los Servicios Web describe la interfaz del servicio?",
                opciones: [
                    "SOAP",
                    "XML",
                    "WSDL",
                    "UDDI"
                ],
                correcta: 2,
                preguntaId: "3070201004"
            },
            {
                id: "3070201002",
                pregunta: "¿Qué estándar se utiliza para el intercambio de mensajes entre el consumidor y el proveedor del servicio web?",
                opciones: [
                    "SOAP",
                    "WSDL",
                    "UDDI",
                    "HTTP"
                ],
                correcta: 0,
                preguntaId: "3070201005"
            },
            {
                id: "3070201002",
                pregunta: "¿Qué componente actúa como un intermediador donde los proveedores publican sus servicios web?",
                opciones: [
                    "SOAP",
                    "WSDL",
                    "UDDI",
                    "XML"
                ],
                correcta: 2,
                preguntaId: "3070201006"
            },
            {
                id: "3070201003",
                pregunta: "¿Qué define SOAP?",
                opciones: [
                    "La interfaz del servicio web",
                    "El registro de servicios web",
                    "Una gramática XML para el formato de documentos a intercambiar entre el consumidor y el servicio",
                    "Los parámetros de entrada y salida del servicio"
                ],
                correcta: 2,
                preguntaId: "3070201007"
            },
            {
                id: "3070201003",
                pregunta: "¿Qué ventaja proporciona SOAP respecto a los sistemas operativos?",
                opciones: [
                    "Solo funciona en un único sistema operativo",
                    "Permite que programas que se ejecutan en diferentes sistemas operativos se comuniquen",
                    "Reemplaza al sistema operativo",
                    "Optimiza el rendimiento del sistema operativo"
                ],
                correcta: 1,
                preguntaId: "3070201008"
            },
            {
                id: "3070201003",
                pregunta: "¿Cómo se estructura un mensaje SOAP?",
                opciones: [
                    "Como un archivo binario comprimido",
                    "Como un sobre (envelope) que contiene el cuerpo del mensaje y la información de cabecera",
                    "Como una secuencia de bytes sin estructura",
                    "Como un archivo de texto plano"
                ],
                correcta: 1,
                preguntaId: "3070201009"
            },
            {
                id: "3070201004",
                pregunta: "¿Qué organización estandariza WSDL?",
                opciones: [
                    "OASIS",
                    "W3C",
                    "ISO",
                    "IEEE"
                ],
                correcta: 1,
                preguntaId: "3070201010"
            },
            {
                id: "3070201004",
                pregunta: "¿Qué permite describir WSDL?",
                opciones: [
                    "El formato de los mensajes a intercambiar",
                    "El registro de servicios",
                    "La interfaz de un servicio web, sus funciones y parámetros",
                    "La seguridad del servicio web"
                ],
                correcta: 2,
                preguntaId: "3070201011"
            },
            {
                id: "3070201005",
                pregunta: "¿A qué organización pertenece UDDI?",
                opciones: [
                    "W3C",
                    "OASIS",
                    "ISO",
                    "IEEE"
                ],
                correcta: 1,
                preguntaId: "3070201012"
            },
            {
                id: "3070201005",
                pregunta: "¿Qué función cumple UDDI en los servicios web?",
                opciones: [
                    "Define el formato de los mensajes",
                    "Describe la interfaz del servicio",
                    "Configura un servicio de registro donde los proveedores publican sus servicios web",
                    "Establece los protocolos de seguridad"
                ],
                correcta: 2,
                preguntaId: "3070201013"
            }
        ]
    },
    "3070301000e": {
        minimoParaAprobar: 12,
        preguntas: [
            {
                id: "3070301001",
                pregunta: "¿Qué son los clientes en una arquitectura cliente-servidor?",
                opciones: [
                    "Programas que proporcionan servicios",
                    "Programas que representan entidades que necesitan servicios",
                    "Componentes de hardware en una red",
                    "Interfaces gráficas de usuario"
                ],
                correcta: 1,
                preguntaId: "3070301001"
            },
            {
                id: "3070301001",
                pregunta: "¿Cuál es la función principal de un servidor en la arquitectura cliente-servidor?",
                opciones: [
                    "Hacer peticiones de servicios",
                    "Mostrar interfaces gráficas al usuario",
                    "Recibir y procesar peticiones, y devolver respuestas",
                    "Almacenar datos temporalmente"
                ],
                correcta: 2,
                preguntaId: "3070301002"
            },
            {
                id: "3070301001",
                pregunta: "¿Qué parte de una aplicación cliente-servidor contiene el código encargado de interactuar con el usuario?",
                opciones: [
                    "Lógica de presentación",
                    "Lógica de negocio",
                    "Lógica de datos",
                    "Middleware"
                ],
                correcta: 0,
                preguntaId: "3070301003"
            },
            {
                id: "3070301001",
                pregunta: "¿Qué parte de una aplicación cliente-servidor realiza el procesamiento de las funciones del sistema?",
                opciones: [
                    "Lógica de presentación",
                    "Lógica de negocio o de aplicación",
                    "Lógica de datos",
                    "Interfaz gráfica"
                ],
                correcta: 1,
                preguntaId: "3070301004"
            },
            {
                id: "3070301002",
                pregunta: "¿Qué característica de la arquitectura cliente/servidor se refiere a que los clientes siempre inician un diálogo mediante peticiones?",
                opciones: [
                    "Encapsulación de servicios",
                    "Protocolos asimétricos",
                    "Transparencia de localización",
                    "Intercambios basados en mensajes"
                ],
                correcta: 1,
                preguntaId: "3070301005"
            },
            {
                id: "3070301002",
                pregunta: "¿Qué ventaja proporciona la encapsulación de servicios en la arquitectura cliente/servidor?",
                opciones: [
                    "Permite que los clientes accedan directamente a los datos del servidor",
                    "Los servidores se pueden actualizar sin afectar a los clientes si la interfaz pública de mensajes no cambia",
                    "Reduce la necesidad de usar protocolos de comunicación",
                    "Elimina la necesidad de middleware"
                ],
                correcta: 1,
                preguntaId: "3070301006"
            },
            {
                id: "3070301002",
                pregunta: "¿Qué significa la transparencia de localización en arquitecturas cliente/servidor?",
                opciones: [
                    "Los servidores siempre están en la misma ubicación física",
                    "El middleware oculta la localización de un servidor a los clientes mediante redirección de servicios",
                    "Los clientes deben conocer la ubicación exacta de los servidores",
                    "Los servidores no pueden cambiar de ubicación una vez instalados"
                ],
                correcta: 1,
                preguntaId: "3070301007"
            },
            {
                id: "3070301002",
                pregunta: "¿Qué tipo de escalabilidad implica añadir o eliminar estaciones clientes con ligero impacto en el rendimiento?",
                opciones: [
                    "Escalabilidad vertical",
                    "Escalabilidad horizontal",
                    "Escalabilidad diagonal",
                    "Escalabilidad modular"
                ],
                correcta: 1,
                preguntaId: "3070301008"
            },
            {
                id: "3070301002",
                pregunta: "¿Qué tipo de escalabilidad implica la migración a una máquina servidora más grande y rápida?",
                opciones: [
                    "Escalabilidad vertical",
                    "Escalabilidad horizontal",
                    "Escalabilidad diagonal",
                    "Escalabilidad modular"
                ],
                correcta: 0,
                preguntaId: "3070301009"
            },
            {
                id: "3070301003",
                pregunta: "¿Qué tipo de servidor permite a los clientes hacer solicitudes de ficheros en una red?",
                opciones: [
                    "Servidor de bases de datos",
                    "Servidor de transacciones",
                    "Servidor de ficheros",
                    "Servidor groupware"
                ],
                correcta: 2,
                preguntaId: "3070301010"
            },
            {
                id: "3070301003",
                pregunta: "¿Qué tipo de servidor recibe solicitudes SQL del cliente y devuelve resultados de consultas?",
                opciones: [
                    "Servidor de ficheros",
                    "Servidor de bases de datos",
                    "Servidor de transacciones",
                    "Servidor de aplicaciones web"
                ],
                correcta: 1,
                preguntaId: "3070301011"
            },
            {
                id: "3070301003",
                pregunta: "¿Qué componente utilizan los objetos del cliente en un servidor de aplicaciones de objetos?",
                opciones: [
                    "Object Request Broker (ORB)",
                    "Remote Procedure Call (RPC)",
                    "Simple Object Access Protocol (SOAP)",
                    "Common Gateway Interface (CGI)"
                ],
                correcta: 0,
                preguntaId: "3070301012"
            },
            {
                id: "3070301004",
                pregunta: "¿Qué modelo puede considerarse como una arquitectura cliente/servidor de una capa?",
                opciones: [
                    "Un servidor web y múltiples navegadores",
                    "Un host mainframe y un terminal 'tonto' directamente conectado",
                    "Un servidor de aplicaciones y un servidor de bases de datos",
                    "Un cliente móvil y un servidor en la nube"
                ],
                correcta: 1,
                preguntaId: "3070301013"
            },
            {
                id: "3070301004",
                pregunta: "En una arquitectura cliente/servidor de dos capas, ¿dónde puede residir la lógica de negocio?",
                opciones: [
                    "Solo en el servidor de aplicaciones",
                    "Solo en el cliente",
                    "En el cliente o en el servidor de base de datos como procedimientos almacenados",
                    "Siempre en un middleware separado"
                ],
                correcta: 2,
                preguntaId: "3070301014"
            },
            {
                id: "3070301004",
                pregunta: "En una arquitectura de tres capas, ¿qué implementa el cliente?",
                opciones: [
                    "La lógica de negocio",
                    "La lógica de datos",
                    "La lógica de presentación (cliente 'fino')",
                    "El middleware completo"
                ],
                correcta: 2,
                preguntaId: "3070301015"
            },
            {
                id: "3070301004",
                pregunta: "¿Cuándo se puede extender una arquitectura de 3 capas a n capas?",
                opciones: [
                    "Cuando se utilizan múltiples clientes",
                    "Cuando la capa intermedia soporta conexiones a diferentes tipos de servicios",
                    "Cuando se utilizan múltiples servidores de bases de datos",
                    "Cuando se implementa en la nube"
                ],
                correcta: 1,
                preguntaId: "3070301016"
            },
            {
                id: "3070301005",
                pregunta: "¿Qué es el middleware en una arquitectura cliente/servidor?",
                opciones: [
                    "El software que proporciona la interfaz de usuario en el cliente",
                    "El software que proporciona el servicio principal en el servidor",
                    "Software distribuido para interacciones entre cliente y servidor",
                    "Un tipo específico de base de datos"
                ],
                correcta: 2,
                preguntaId: "3070301017"
            },
            {
                id: "3070301005",
                pregunta: "¿Cuál de los siguientes NO es un ejemplo de middleware en arquitecturas cliente/servidor?",
                opciones: [
                    "Protocolos de transporte como TCP/IP",
                    "Sistemas operativos de red como RPC",
                    "Middleware específico como HTTP",
                    "Interfaces gráficas de usuario (GUI)"
                ],
                correcta: 3,
                preguntaId: "3070301018"
            },
            {
                id: "3070301005",
                pregunta: "¿Cuál de los siguientes es un servidor de aplicación Java EE privativo?",
                opciones: [
                    "JOnAS",
                    "Wildfly",
                    "WebLogic de Oracle",
                    "GlassFish"
                ],
                correcta: 2,
                preguntaId: "3070301019"
            },
            {
                id: "3070301005",
                pregunta: "¿Cuál de los siguientes es un servidor de aplicaciones libre?",
                opciones: [
                    "WebSphere de IBM",
                    "WebLogic de Oracle",
                    "EAServer de Sybase",
                    "Geronimo de Apache"
                ],
                correcta: 3,
                preguntaId: "3070301020"
            }
        ]
    },
    "3070401000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "3070401001",
                pregunta: "¿Qué es el MVC o Modelo-Vista-Controlador?",
                opciones: [
                    "Un lenguaje de programación orientado a objetos",
                    "Un patrón de arquitectura de software que separa la lógica de la aplicación, de la vista y de los datos",
                    "Un sistema de gestión de bases de datos",
                    "Un protocolo de comunicación entre aplicaciones"
                ],
                correcta: 1,
                preguntaId: "3070401001"
            },
            {
                id: "3070401001",
                pregunta: "¿Cuáles son los tres componentes principales del patrón MVC?",
                opciones: [
                    "Modelo, Vista, Controlador",
                    "Método, Variable, Clase",
                    "Memoria, Velocidad, Capacidad",
                    "Módulo, Versión, Configuración"
                ],
                correcta: 0,
                preguntaId: "3070401002"
            },
            {
                id: "3070401001",
                pregunta: "¿En qué ideas se basa el patrón de arquitectura MVC?",
                opciones: [
                    "Complejidad de código y unificación de conceptos",
                    "Reutilización de código y separación de conceptos",
                    "Optimización de recursos y minimización de código",
                    "Centralización de funciones y maximización de rendimiento"
                ],
                correcta: 1,
                preguntaId: "3070401003"
            },
            {
                id: "3070401001",
                pregunta: "¿Cuál de los siguientes NO es un framework que utiliza MVC o alguna adaptación del MVC?",
                opciones: [
                    "Ruby on Rails",
                    "AngularJS",
                    "Django",
                    "MongoDB"
                ],
                correcta: 3,
                preguntaId: "3070401004"
            },
            {
                id: "3070401002",
                pregunta: "¿Qué representa el Modelo en el patrón MVC?",
                opciones: [
                    "La interfaz de usuario",
                    "La representación de la información con la cual el sistema opera",
                    "El componente que responde a eventos del usuario",
                    "El diseño visual de la aplicación"
                ],
                correcta: 1,
                preguntaId: "3070401005"
            },
            {
                id: "3070401002",
                pregunta: "¿Qué función cumple el Controlador en el patrón MVC?",
                opciones: [
                    "Gestiona todos los accesos a la información",
                    "Es la representación visual de los datos",
                    "Responde a eventos e invoca peticiones al modelo",
                    "Implementa los privilegios de acceso a la aplicación"
                ],
                correcta: 2,
                preguntaId: "3070401006"
            },
            {
                id: "3070401002",
                pregunta: "¿Qué representa la Vista en el patrón MVC?",
                opciones: [
                    "La lógica de negocio de la aplicación",
                    "La representación visual de los datos, las interfaces de usuario",
                    "El componente que gestiona las peticiones a la base de datos",
                    "El módulo que controla los eventos del sistema"
                ],
                correcta: 1,
                preguntaId: "3070401007"
            },
            {
                id: "3070401003",
                pregunta: "¿Quién diseñó el modelo de arquitectura 4+1?",
                opciones: [
                    "Tim Berners-Lee",
                    "Philippe Kruchten",
                    "Linus Torvalds",
                    "James Gosling"
                ],
                correcta: 1,
                preguntaId: "3070401008"
            },
            {
                id: "3070401003",
                pregunta: "¿Para qué fue diseñado el modelo 4+1?",
                opciones: [
                    "Para implementar bases de datos relacionales",
                    "Para describir la arquitectura de sistemas software basados en el uso de múltiples vistas concurrentes",
                    "Para optimizar el rendimiento de aplicaciones web",
                    "Para estandarizar los protocolos de comunicación entre sistemas"
                ],
                correcta: 1,
                preguntaId: "3070401009"
            },
            {
                id: "3070401003",
                pregunta: "¿Desde el punto de vista de qué interesados suelen describir las vistas del modelo 4+1 el sistema?",
                opciones: [
                    "Únicamente desarrolladores y arquitectos de software",
                    "Usuarios finales, desarrolladores y directores de proyecto",
                    "Solo administradores de sistemas y bases de datos",
                    "Exclusivamente clientes y proveedores"
                ],
                correcta: 1,
                preguntaId: "3070401010"
            },
            {
                id: "3070401003",
                pregunta: "¿Cuáles son las cuatro vistas principales del modelo 4+1?",
                opciones: [
                    "Vista lógica, vista de desarrollo, vista de proceso y vista física",
                    "Vista de usuario, vista de sistema, vista de datos y vista de red",
                    "Vista de cliente, vista de servidor, vista de base de datos y vista de aplicación",
                    "Vista frontal, vista trasera, vista lateral y vista superior"
                ],
                correcta: 0,
                preguntaId: "3070401011"
            },
            {
                id: "3070401003",
                pregunta: "¿Qué elemento constituye la quinta vista (el '+1') en el modelo 4+1?",
                opciones: [
                    "La vista de seguridad",
                    "La vista de rendimiento",
                    "Una selección de casos de uso o escenarios",
                    "La vista de mantenimiento"
                ],
                correcta: 2,
                preguntaId: "3070401012"
            }
        ]
    },
    "3070501000e": {
        minimoParaAprobar: 10,
        preguntas: [
            {
                id: "3070501002",
                pregunta: "¿Por qué surge REST como alternativa a SOAP?",
                opciones: [
                    "Porque SOAP no permite el tratamiento de datos masivos",
                    "Porque muchos desarrolladores consideran que SOAP es demasiado complicado",
                    "Porque REST fue desarrollado antes que SOAP",
                    "Porque SOAP no es compatible con aplicaciones web"
                ],
                correcta: 1,
                preguntaId: "3070501001"
            },
            {
                id: "3070501002",
                pregunta: "¿Qué significa REST?",
                opciones: [
                    "Representational State Transfer",
                    "Remote Entity Service Technology",
                    "Resource Exchange System Transfer",
                    "Reliable Enterprise Service Technology"
                ],
                correcta: 0,
                preguntaId: "3070501002"
            },
            {
                id: "3070501002",
                pregunta: "¿Qué característica principal tienen los servicios RESTful?",
                opciones: [
                    "Son muy complejos y seguros",
                    "Requieren el uso de XML obligatoriamente",
                    "Son simples y ligeros",
                    "Necesitan un middleware específico"
                ],
                correcta: 2,
                preguntaId: "3070501003"
            },
            {
                id: "3070501003",
                pregunta: "En REST, ¿cómo se definen las operaciones?",
                opciones: [
                    "En los puertos WSDL",
                    "En los mensajes",
                    "En un archivo de configuración separado",
                    "En el middleware"
                ],
                correcta: 1,
                preguntaId: "3070501004"
            },
            {
                id: "3070501003",
                pregunta: "¿Cuál de las siguientes NO es una característica de REST?",
                opciones: [
                    "Una dirección única para cada instancia del proceso",
                    "Componentes débilmente acoplados",
                    "No conserva el estado (stateless)",
                    "Componentes fuertemente acoplados"
                ],
                correcta: 3,
                preguntaId: "3070501005"
            },
            {
                id: "3070501003",
                pregunta: "¿Cuál de las siguientes NO es una característica de SOAP?",
                opciones: [
                    "Las operaciones son definidas como puertos WSDL",
                    "Dirección única para todas las operaciones",
                    "Múltiple instancias del proceso comparten la misma operación",
                    "No conserva el estado (stateless)"
                ],
                correcta: 3,
                preguntaId: "3070501006"
            },
            {
                id: "3070501003",
                pregunta: "¿Qué característica comparten REST y SOAP?",
                opciones: [
                    "Ambos son stateless (sin estado)",
                    "Ambos utilizan XML obligatoriamente",
                    "Ambos permiten la interoperabilidad entre sistemas heterogéneos",
                    "Ambos tienen componentes fuertemente acoplados"
                ],
                correcta: 2,
                preguntaId: "3070501007"
            },
            {
                id: "3070501004",
                pregunta: "¿Cuál es una ventaja de REST?",
                opciones: [
                    "Incrementa la privacidad",
                    "Bajo consumo de recursos",
                    "La depuración es posible",
                    "Las operaciones complejas pueden ser escondidas detrás de una fachada"
                ],
                correcta: 1,
                preguntaId: "3070501008"
            },
            {
                id: "3070501004",
                pregunta: "¿Cuál es una ventaja de SOAP?",
                opciones: [
                    "Bajo consumo de recursos",
                    "Las instancias del proceso son creadas explícitamente",
                    "Generalmente fácil de construir y adoptar",
                    "Las operaciones complejas pueden ser escondidas detrás de una fachada"
                ],
                correcta: 3,
                preguntaId: "3070501009"
            },
            {
                id: "3070501004",
                pregunta: "¿Cuál es un inconveniente de REST?",
                opciones: [
                    "Los clientes necesitan saber las operaciones y su semántica antes del uso",
                    "Las instancias del proceso son creadas implícitamente",
                    "Manejar el espacio de nombres (URIs) puede ser engorroso",
                    "Los clientes necesitan puertos dedicados para diferentes tipos de notificaciones"
                ],
                correcta: 2,
                preguntaId: "3070501010"
            },
            {
                id: "3070501004",
                pregunta: "¿Cuál es un inconveniente de SOAP?",
                opciones: [
                    "Gran número de objetos",
                    "Los clientes necesitan saber las operaciones y su semántica antes del uso",
                    "Pocas herramientas de desarrollo",
                    "La descripción sintáctica/semántica muy informal"
                ],
                correcta: 1,
                preguntaId: "3070501011"
            },
            {
                id: "3070501005",
                pregunta: "¿En qué se diferencian los servicios web SOAP y RESTful respecto a su complejidad?",
                opciones: [
                    "Ambos son igualmente complejos",
                    "SOAP es muy complejo mientras que REST es extremadamente simple",
                    "REST es muy complejo mientras que SOAP es extremadamente simple",
                    "La complejidad depende de la implementación específica"
                ],
                correcta: 1,
                preguntaId: "3070501012"
            },
            {
                id: "3070501005",
                pregunta: "¿A qué están orientados los servicios web SOAP?",
                opciones: [
                    "A recursos accesibles con identificadores (URIs)",
                    "A acciones basadas en métodos HTTP",
                    "A RPC (llamada a métodos remotos)",
                    "A intercambio de datos en formato JSON"
                ],
                correcta: 2,
                preguntaId: "3070501013"
            },
            {
                id: "3070501005",
                pregunta: "¿A qué están dirigidos los servicios web REST?",
                opciones: [
                    "A recursos accesibles con identificadores (URIs) y manejados con acciones basadas en métodos HTTP",
                    "A RPC (llamada a métodos remotos)",
                    "A operaciones definidas como puertos WSDL",
                    "A componentes fuertemente acoplados"
                ],
                correcta: 0,
                preguntaId: "3070501014"
            },
            {
                id: "3070501006",
                pregunta: "¿Qué es HTTP?",
                opciones: [
                    "Un formato de intercambio de datos",
                    "Un protocolo para el intercambio de información entre un cliente y un servidor",
                    "Un lenguaje de descripción de servicios web",
                    "Un tipo de arquitectura de software"
                ],
                correcta: 1,
                preguntaId: "3070501015"
            },
            {
                id: "3070501006",
                pregunta: "¿Qué contiene la parte inicial de una petición HTTP?",
                opciones: [
                    "Solo metadatos",
                    "La acción requerida (método de petición) y la URL del recurso",
                    "El cuerpo con los datos transmitidos",
                    "El código con el resultado de la operación"
                ],
                correcta: 1,
                preguntaId: "3070501016"
            },
            {
                id: "3070501006",
                pregunta: "¿Qué contiene la parte inicial de una respuesta HTTP?",
                opciones: [
                    "La acción requerida y la URL del recurso",
                    "Solo metadatos",
                    "El código con el resultado de la operación",
                    "El cuerpo con los datos transmitidos"
                ],
                correcta: 2,
                preguntaId: "3070501017"
            },
            {
                id: "3070501007",
                pregunta: "¿Qué formato se utiliza en los servicios web RESTful en lugar de XML?",
                opciones: [
                    "YAML",
                    "HTML",
                    "JSON",
                    "CSV"
                ],
                correcta: 2,
                preguntaId: "3070501018"
            },
            {
                id: "3070501007",
                pregunta: "¿Qué especificación puede utilizarse para describir un servicio web RESTful?",
                opciones: [
                    "WSDL",
                    "OpenAPI",
                    "SOAP",
                    "REST"
                ],
                correcta: 1,
                preguntaId: "3070501019"
            },
            {
                id: "3070501007",
                pregunta: "¿Cuál es la diferencia entre WADL y OpenAPI?",
                opciones: [
                    "WADL es para servicios SOAP y OpenAPI para servicios REST",
                    "WADL no tiene versión definitiva mientras que OpenAPI es un estándar de facto",
                    "OpenAPI solo funciona con JSON mientras que WADL funciona con XML",
                    "WADL es más reciente que OpenAPI"
                ],
                correcta: 1,
                preguntaId: "3070501020"
            }
        ]
    }
};