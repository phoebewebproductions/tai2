const preguntas = {
    "4030101000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4030101001",
                pregunta: "¿En qué año data el primer antecedente del correo electrónico según el texto?",
                opciones: [
                    "1960",
                    "1962",
                    "1965",
                    "1971"
                ],
                correcta: 1,
                preguntaId: "403010101"
            },
            {
                id: "4030101001",
                pregunta: "¿Qué contenía el primer mensaje de correo electrónico genuinamente enviado a través de una red?",
                opciones: [
                    "Hola Mundo",
                    "QWERTYUIOP",
                    "Mensaje de prueba",
                    "Hello"
                ],
                correcta: 1,
                preguntaId: "403010102"
            },
            {
                id: "4030101001",
                pregunta: "¿Quién incorporó el uso de la arroba (@) como divisor en las direcciones de correo electrónico?",
                opciones: [
                    "Bill Gates",
                    "Tim Berners-Lee",
                    "Ray Tomlinson",
                    "Vint Cerf"
                ],
                correcta: 2,
                preguntaId: "403010103"
            },
            {
                id: "4030101001",
                pregunta: "¿En qué año el correo electrónico se convirtió en un servicio de red estandarizado?",
                opciones: [
                    "1971",
                    "1975",
                    "1977",
                    "1982"
                ],
                correcta: 2,
                preguntaId: "403010104"
            },
            {
                id: "4030101002",
                pregunta: "¿Qué significa MUA en el contexto del correo electrónico?",
                opciones: [
                    "Mail Unified Access",
                    "Mail User Agent",
                    "Multiple User Application",
                    "Mail Utility Application"
                ],
                correcta: 1,
                preguntaId: "403010105"
            },
            {
                id: "4030101002",
                pregunta: "¿Cuál de los siguientes NO es un ejemplo de cliente de correo electrónico mencionado en el texto?",
                opciones: [
                    "Microsoft Outlook",
                    "Mozilla Thunderbird",
                    "Apple Mail",
                    "Gmail"
                ],
                correcta: 2,
                preguntaId: "403010106"
            },
            {
                id: "4030101002",
                pregunta: "¿Qué significa MTA en el contexto del correo electrónico?",
                opciones: [
                    "Mail Transfer Agent",
                    "Message Transfer Application",
                    "Mail Transmission Authority",
                    "Multiple Transfer Access"
                ],
                correcta: 0,
                preguntaId: "403010107"
            },
            {
                id: "4030101002",
                pregunta: "¿Qué protocolo se utiliza de forma predeterminada para la transferencia de correos entre agentes MTA?",
                opciones: [
                    "POP3",
                    "IMAP",
                    "SMTP",
                    "HTTP"
                ],
                correcta: 2,
                preguntaId: "403010108"
            },
            {
                id: "4030101002",
                pregunta: "¿Qué es un relé abierto (open relay) en el contexto de los servidores de correo?",
                opciones: [
                    "Un servidor que permite el envío de correos sin autenticación",
                    "Un servidor que filtra todos los correos entrantes",
                    "Un servidor que solo acepta correos de dominios conocidos",
                    "Un servidor que cifra automáticamente todos los mensajes"
                ],
                correcta: 0,
                preguntaId: "403010109"
            },
            {
                id: "4030101002",
                pregunta: "¿Qué riesgo suponen los servidores configurados como relés abiertos?",
                opciones: [
                    "Pueden ser utilizados para enviar SPAM",
                    "Consumen demasiados recursos del sistema",
                    "No pueden recibir correos de ciertos dominios",
                    "Cifran incorrectamente los mensajes"
                ],
                correcta: 0,
                preguntaId: "103010110"
            },
            {
                id: "4030101003",
                pregunta: "¿En qué año se diseñó el primer sistema basado en SMTP para intercambiar correos electrónicos en ARPANET?",
                opciones: [
                    "1971",
                    "1977",
                    "1982",
                    "1990"
                ],
                correcta: 2,
                preguntaId: "103010111"
            },
            {
                id: "4030101003",
                pregunta: "¿Cuál es el tamaño máximo permitido para las líneas de texto en la comunicación SMTP?",
                opciones: [
                    "100 caracteres",
                    "500 caracteres",
                    "1000 caracteres",
                    "2000 caracteres"
                ],
                correcta: 2,
                preguntaId: "103010112"
            },
            {
                id: "4030101003",
                pregunta: "¿Qué comando SMTP se utiliza para indicar quién envía el mensaje?",
                opciones: [
                    "HELO",
                    "MAIL FROM",
                    "RCPT TO",
                    "DATA"
                ],
                correcta: 1,
                preguntaId: "103010113"
            },
            {
                id: "4030101003",
                pregunta: "¿Qué comando SMTP se utiliza para indicar el destinatario del mensaje?",
                opciones: [
                    "HELO",
                    "MAIL FROM",
                    "RCPT TO",
                    "DATA"
                ],
                correcta: 2,
                preguntaId: "103010114"
            },
            {
                id: "4030101003",
                pregunta: "¿Qué protocolo se usa para evitar la falsificación de direcciones en el envío de correo electrónico?",
                opciones: [
                    "SPF (Sender Policy Framework)",
                    "DKIM (DomainKeys Identified Mail)",
                    "DMARC (Domain-based Message Authentication)",
                    "TLS (Transport Layer Security)"
                ],
                correcta: 0,
                preguntaId: "103010115"
            },
            {
                id: "4030101003",
                pregunta: "¿Qué código de respuesta SMTP indica que la operación solicitada ha sido concluida con éxito?",
                opciones: [
                    "1XX",
                    "2XX",
                    "3XX",
                    "4XX"
                ],
                correcta: 1,
                preguntaId: "103010116"
            },
            {
                id: "4030101003",
                pregunta: "¿Qué código de respuesta SMTP indica una condición de error permanente?",
                opciones: [
                    "2XX",
                    "3XX",
                    "4XX",
                    "5XX"
                ],
                correcta: 3,
                preguntaId: "103010117"
            },
            {
                id: "4030101003",
                pregunta: "¿Cuál es el puerto histórico utilizado por SMTP?",
                opciones: [
                    "21",
                    "25",
                    "110",
                    "143"
                ],
                correcta: 1,
                preguntaId: "103010118"
            },
            {
                id: "4030101003",
                pregunta: "¿Qué puerto SMTP permite la presentación sobre internet y también admite TLS?",
                opciones: [
                    "25",
                    "465",
                    "587",
                    "2525"
                ],
                correcta: 2,
                preguntaId: "103010119"
            },
            {
                id: "4030101003",
                pregunta: "¿Qué es SMTP AUTH?",
                opciones: [
                    "Un protocolo alternativo a SMTP",
                    "Una extensión de SMTP que permite la autenticación del cliente",
                    "Un tipo de cifrado para mensajes SMTP",
                    "Un mecanismo para verificar la identidad del remitente"
                ],
                correcta: 1,
                preguntaId: "103010120"
            }
        ]
    },
    "4030102000e": {
    minimoParaAprobar: 7,
    preguntas: [
        {
            id: "4030102001",
            pregunta: "¿Qué es POP3?",
            opciones: [
                "Un protocolo para enviar correos electrónicos",
                "Un protocolo cliente/servidor que permite descargar mensajes del servidor al ordenador del usuario",
                "Un protocolo para gestionar carpetas en el servidor de correo",
                "Un protocolo exclusivo de Microsoft Exchange"
            ],
            correcta: 1,
            preguntaId: "403010201"
        },
        {
            id: "4030102001",
            pregunta: "¿Qué puerto utiliza POP3 por defecto?",
            opciones: [
                "25",
                "110",
                "143",
                "587"
            ],
            correcta: 1,
            preguntaId: "403010202"
        },
        {
            id: "4030102001",
            pregunta: "¿Cuál es el puerto que utiliza POP3 cuando se usa con cifrado?",
            opciones: [
                "465",
                "587",
                "993",
                "995"
            ],
            correcta: 3,
            preguntaId: "403010203"
        },
        {
            id: "4030102001",
            pregunta: "¿En qué estado del protocolo POP3 se pueden utilizar las órdenes LIST, RETR y DELE?",
            opciones: [
                "Estado de autenticación",
                "Estado de transacción",
                "Estado de actualización",
                "Estado de conexión"
            ],
            correcta: 1,
            preguntaId: "403010204"
        },
        {
            id: "4030102001",
            pregunta: "¿Qué comando POP3 se utiliza para identificar al usuario?",
            opciones: [
                "USER",
                "PASS",
                "LOGIN",
                "AUTH"
            ],
            correcta: 0,
            preguntaId: "403010205"
        },
        {
            id: "4030102001",
            pregunta: "¿Qué comando POP3 solicita el envío de un mensaje específico?",
            opciones: [
                "GET",
                "FETCH",
                "RETR",
                "READ"
            ],
            correcta: 2,
            preguntaId: "403010206"
        },
        {
            id: "4030102001",
            pregunta: "¿Qué método de autenticación utiliza funciones MD5 para evitar los ataques de contraseñas en POP3?",
            opciones: [
                "APOP",
                "SSL/TLS",
                "SASL",
                "OAUTH"
            ],
            correcta: 0,
            preguntaId: "403010207"
        },
        {
            id: "4030102002",
            pregunta: "¿En qué año fue diseñado IMAP como alternativa a POP?",
            opciones: [
                "1982",
                "1986",
                "1990",
                "1995"
            ],
            correcta: 1,
            preguntaId: "403010208"
        },
        {
            id: "4030102002",
            pregunta: "¿Qué versión actual de IMAP está definida por el RFC 3501?",
            opciones: [
                "IMAP versión 3",
                "IMAP versión 4",
                "IMAP versión 4 revisión 1 (IMAP4rev1)",
                "IMAP versión 5"
            ],
            correcta: 2,
            preguntaId: "403010209"
        },
        {
            id: "4030102002",
            pregunta: "¿Qué puerto predeterminado utiliza el protocolo IMAP?",
            opciones: [
                "110",
                "143",
                "587",
                "993"
            ],
            correcta: 1,
            preguntaId: "403010210"
        },
        {
            id: "4030102002",
            pregunta: "¿Qué puerto utiliza IMAP para su forma segura con cifrado sobre TLS?",
            opciones: [
                "465",
                "587",
                "993",
                "995"
            ],
            correcta: 2,
            preguntaId: "403010211"
        },
        {
            id: "4030102002",
            pregunta: "¿Para qué sirve la extensión IMAP IDLE?",
            opciones: [
                "Para cifrar la comunicación entre cliente y servidor",
                "Para que el servidor avise al cliente cuando ha llegado un correo y se sincronicen",
                "Para comprimir los mensajes y ahorrar ancho de banda",
                "Para gestionar carpetas compartidas entre usuarios"
            ],
            correcta: 1,
            preguntaId: "403010212"
        },
        {
            id: "4030102002",
            pregunta: "¿Cuál es una ventaja de IMAP sobre POP3?",
            opciones: [
                "Menor consumo de ancho de banda",
                "Mayor velocidad de descarga de mensajes",
                "Posibilidad de especificar carpetas del lado del servidor",
                "Menor complejidad en la implementación"
            ],
            correcta: 2,
            preguntaId: "403010213"
        },
        {
            id: "4030102002",
            pregunta: "Según la tabla comparativa, ¿cuál es una desventaja de IMAP frente a POP3?",
            opciones: [
                "No permite el acceso desde múltiples dispositivos",
                "No soporta la búsqueda de mensajes por palabras clave",
                "Hay un retraso en la aparición del mensaje mientras se descarga",
                "No permite la gestión de carpetas en el servidor"
            ],
            correcta: 2,
            preguntaId: "403010214"
        },
        {
            id: "4030102002",
            pregunta: "¿Qué característica de conexión diferencia principalmente a IMAP de POP3?",
            opciones: [
                "IMAP trabaja en modo de conexión permanente mientras que POP3 se conecta brevemente",
                "IMAP solo funciona con conexiones cifradas mientras que POP3 no",
                "IMAP requiere autenticación mientras que POP3 no",
                "IMAP solo funciona en redes locales mientras que POP3 funciona en Internet"
            ],
            correcta: 0,
            preguntaId: "403010215"
        },
        {
            id: "4030102003",
            pregunta: "¿Qué es Exchange ActiveSync?",
            opciones: [
                "Un cliente de correo electrónico de Microsoft",
                "Un protocolo de sincronización de Microsoft Exchange optimizado para redes de alta latencia",
                "Un servidor de correo electrónico para dispositivos móviles",
                "Una extensión de IMAP para dispositivos móviles"
            ],
            correcta: 1,
            preguntaId: "403010216"
        },
        {
            id: "4030102003",
            pregunta: "¿En qué está basado el protocolo Exchange ActiveSync?",
            opciones: [
                "SMTP y POP3",
                "IMAP y SMTP",
                "HTTP y XML",
                "FTP y JSON"
            ],
            correcta: 2,
            preguntaId: "403010217"
        },
        {
            id: "4030102003",
            pregunta: "¿Cuál de las siguientes NO es una característica de Exchange ActiveSync?",
            opciones: [
                "Compatibilidad con mensajes HTML",
                "Sincronización de los mensajes SMS con el buzón de Exchange",
                "Compatibilidad con buzones compartidos",
                "Compatibilidad con la sincronización de tareas"
            ],
            correcta: 2,
            preguntaId: "403010218"
        },
        {
            id: "4030102003",
            pregunta: "¿Qué característica de seguridad permite borrar todos los datos de un dispositivo móvil perdido o robado?",
            opciones: [
                "Borrado remoto",
                "Directivas de contraseña de dispositivo",
                "Directivas de cifrado de dispositivos",
                "Cifrado SSL"
            ],
            correcta: 0,
            preguntaId: "403010219"
        },
        {
            id: "4030102003",
            pregunta: "¿Qué tipo de cifrado se puede configurar para establecer la comunicación entre el servidor Exchange y el dispositivo móvil?",
            opciones: [
                "PGP",
                "SSL",
                "MD5",
                "RSA"
            ],
            correcta: 1,
            preguntaId: "403010220"
        }
    ]
},
"4030201000e": {
    minimoParaAprobar: 7,
    preguntas: [
        {
            id: "4030201001",
            pregunta: "¿Quiénes crearon el concepto de microservicios?",
            opciones: [
                "Martin Fowler y Kent Beck",
                "James Lewis y Martin Fowler",
                "Eric Evans y Greg Young",
                "Robert C. Martin y James Gosling"
            ],
            correcta: 1,
            preguntaId: "403020101"
        },
        {
            id: "4030201001",
            pregunta: "¿Qué característica principal define a los microservicios?",
            opciones: [
                "Son aplicaciones monolíticas con componentes independientes",
                "Son pequeños servicios que se ejecutan en su propio proceso y se comunican con mecanismos ligeros",
                "Son servicios que comparten una única base de datos centralizada",
                "Son aplicaciones que solo pueden ser escritas en un único lenguaje de programación"
            ],
            correcta: 1,
            preguntaId: "403020102"
        },
        {
            id: "4030201001",
            pregunta: "¿Cuál es la diferencia principal entre una arquitectura monolítica y una de microservicios?",
            opciones: [
                "Los microservicios siempre son más rápidos que las aplicaciones monolíticas",
                "Las aplicaciones monolíticas son más fáciles de escalar que los microservicios",
                "En una arquitectura monolítica todo se integra en una única pieza, mientras que en microservicios los componentes son independientes",
                "Los microservicios solo pueden ser desarrollados por grandes empresas"
            ],
            correcta: 2,
            preguntaId: "403020103"
        },
        {
            id: "4030201002",
            pregunta: "¿Cuál de las siguientes NO es una ventaja de los microservicios?",
            opciones: [
                "Escalabilidad",
                "Versatilidad",
                "Tolerancia a fallos",
                "Simplicidad en las pruebas"
            ],
            correcta: 3,
            preguntaId: "403020104"
        },
        {
            id: "4030201002",
            pregunta: "¿Cuál es un inconveniente de los microservicios relacionado con la comunicación?",
            opciones: [
                "Los mensajes entre servicios tienen un costo mayor en términos de latencia",
                "No es posible la comunicación entre servicios escritos en diferentes lenguajes",
                "La comunicación solo puede realizarse mediante protocolos propietarios",
                "La comunicación entre servicios requiere siempre una base de datos compartida"
            ],
            correcta: 0,
            preguntaId: "403020105"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué principio aplican los microservicios para reducir el acoplamiento en la descomposición por capacidad empresarial?",
            opciones: [
                "Principio de inversión de dependencias (DIP)",
                "Principio de responsabilidad única (SRP)",
                "Principio de sustitución de Liskov (LSP)",
                "Principio de segregación de interfaces (ISP)"
            ],
            correcta: 1,
            preguntaId: "403020106"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué patrón de microservicios se utiliza para efectuar el paso de una arquitectura monolítica a una arquitectura basada en microservicios?",
            opciones: [
                "Bulkhead",
                "Sidecar",
                "Strangler",
                "API Gateway"
            ],
            correcta: 2,
            preguntaId: "403020107"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué patrón proporciona un único punto de entrada para todas las llamadas de los servicios a través de las APIs?",
            opciones: [
                "Aggregator",
                "API Gateway",
                "Proxy",
                "Chain"
            ],
            correcta: 1,
            preguntaId: "403020108"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué patrón de base de datos implica una única base de datos privada por microservicio?",
            opciones: [
                "Base de datos por microservicio",
                "Base de datos compartida por servicio",
                "CQRS",
                "Event Sourcing"
            ],
            correcta: 0,
            preguntaId: "403020109"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué patrón asegura la consistencia de los datos cuando una transacción de negocio afecta a diferentes servicios?",
            opciones: [
                "CQRS",
                "Event Sourcing",
                "Saga",
                "Base de datos compartida por servicio"
            ],
            correcta: 2,
            preguntaId: "403020110"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué patrón de observación introduce un endpoint para asegurar el funcionamiento de la aplicación?",
            opciones: [
                "Log Aggregation",
                "Performance metrics",
                "Distributed Tracing",
                "Health Check"
            ],
            correcta: 3,
            preguntaId: "403020111"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué patrón limita las llamadas a un servicio remoto a un determinado umbral y por un tiempo?",
            opciones: [
                "Circuit Breaker",
                "Service Discovery",
                "External Configuration",
                "Blue-Green Deployment"
            ],
            correcta: 0,
            preguntaId: "403020112"
        },
        {
            id: "4030201003",
            pregunta: "¿Qué patrón contempla dos entornos idénticos de producción, donde solo uno está ejecutándose?",
            opciones: [
                "Circuit Breaker",
                "Service Discovery",
                "External Configuration",
                "Blue-Green Deployment"
            ],
            correcta: 3,
            preguntaId: "403020113"
        },
        {
            id: "4030201004",
            pregunta: "¿Qué enfoque de integración de servicios representa un único proceso ejecutable centralizado que coordina la interacción entre los diferentes servicios?",
            opciones: [
                "Orquestación",
                "Coreografía",
                "Mediación",
                "Federación"
            ],
            correcta: 0,
            preguntaId: "403020114"
        },
        {
            id: "4030201004",
            pregunta: "¿Qué enfoque de integración de servicios se define mediante el intercambio de mensajes, reglas de interacción y acuerdos entre dos o más puntos finales?",
            opciones: [
                "Orquestación",
                "Coreografía",
                "Mediación",
                "Federación"
            ],
            correcta: 1,
            preguntaId: "403020115"
        },
        {
            id: "4030201004",
            pregunta: "¿Cuál es una ventaja de la orquestación de servicios?",
            opciones: [
                "Mayor desacoplamiento entre servicios",
                "No hay un único punto de fallo",
                "Es simple y fácil de mantener",
                "Permite la utilización de patrones de diseño orientados a eventos"
            ],
            correcta: 2,
            preguntaId: "403020116"
        },
        {
            id: "4030201004",
            pregunta: "¿Cuál es un inconveniente de la orquestación de servicios?",
            opciones: [
                "Es más complejo de implementar y mantener",
                "Si el orquestador se cae, se vendría abajo todo el sistema",
                "No permite el control del flujo de la aplicación",
                "No es compatible con microservicios"
            ],
            correcta: 1,
            preguntaId: "403020117"
        },
        {
            id: "4030201004",
            pregunta: "¿Cuál es una ventaja de la coreografía de servicios?",
            opciones: [
                "Es simple y fácil de mantener",
                "Proporciona un control centralizado del flujo",
                "El control del sistema es distribuido, por lo que no hay un único punto de fallo",
                "Reduce la latencia en las comunicaciones"
            ],
            correcta: 2,
            preguntaId: "403020118"
        },
        {
            id: "4030201004",
            pregunta: "¿Qué tipo de sistemas están débilmente acoplados, son más flexibles y más susceptibles de cambiar?",
            opciones: [
                "Sistemas que utilizan el enfoque de orquestación",
                "Sistemas que utilizan el enfoque de coreografía",
                "Sistemas monolíticos",
                "Sistemas con base de datos compartida"
            ],
            correcta: 1,
            preguntaId: "403020119"
        },
        {
            id: "4030201004",
            pregunta: "¿Qué necesitan los sistemas que utilizan el enfoque de coreografía para controlar y seguir los procesos?",
            opciones: [
                "Un orquestador central",
                "Una base de datos compartida",
                "Un sistema de monitorización",
                "Un único lenguaje de programación"
            ],
            correcta: 2,
            preguntaId: "403020120"
        }
    ]
},
"4030202000e": {
    minimoParaAprobar: 7,
    preguntas: [
        {
            id: "4030202001",
            pregunta: "¿Qué es la virtualización basada en contenedores?",
            opciones: [
                "Un método de virtualización que requiere un hipervisor para funcionar",
                "Un método de virtualización en el que sobre el núcleo del sistema operativo se ejecuta una capa que permite múltiples instancias aisladas de espacios de usuario",
                "Un método de virtualización que requiere hardware especializado",
                "Un método de virtualización que solo funciona en sistemas Linux"
            ],
            correcta: 1,
            preguntaId: "403020201"
        },
        {
            id: "4030202001",
            pregunta: "¿Cómo se llama al software que permite el alojamiento de distintos contenedores?",
            opciones: [
                "Hipervisor",
                "Sistema operativo virtual",
                "Motor de contenedores",
                "Gestor de máquinas virtuales"
            ],
            correcta: 2,
            preguntaId: "403020202"
        },
        {
            id: "4030202001",
            pregunta: "¿Cuál es la principal diferencia entre máquinas virtuales y contenedores?",
            opciones: [
                "Los contenedores requieren hardware especializado mientras que las máquinas virtuales no",
                "Las máquinas virtuales son más rápidas que los contenedores",
                "En las máquinas virtuales cada instancia incluye una copia completa del sistema operativo, mientras que en los contenedores todas las instancias comparten el mismo kernel",
                "Los contenedores solo funcionan en sistemas Linux"
            ],
            correcta: 2,
            preguntaId: "403020203"
        },
        {
            id: "4030202002",
            pregunta: "¿Por qué los contenedores imponen poca o ninguna sobrecarga?",
            opciones: [
                "Porque utilizan hardware especializado",
                "Porque los programas en particiones virtuales utilizan la interfaz de llamada del sistema operativo y no necesitan emulación",
                "Porque solo pueden ejecutar aplicaciones ligeras",
                "Porque están limitados en cuanto a recursos"
            ],
            correcta: 1,
            preguntaId: "403020204"
        },
        {
            id: "4030202002",
            pregunta: "¿Cuál es una limitación de flexibilidad de los contenedores?",
            opciones: [
                "No pueden ejecutar aplicaciones complejas",
                "No pueden comunicarse con otros contenedores",
                "No pueden hospedar un sistema operativo diferente del anfitrión o un kernel distinto",
                "No pueden acceder a los recursos del sistema"
            ],
            correcta: 2,
            preguntaId: "403020205"
        },
        {
            id: "4030202002",
            pregunta: "¿Qué mecanismo de almacenamiento proporcionan algunas implementaciones de contenedores?",
            opciones: [
                "Copy-on-write a nivel de archivos",
                "Copy-on-write a nivel de bloque",
                "Sistemas de archivos distribuidos",
                "Almacenamiento en la nube"
            ],
            correcta: 0,
            preguntaId: "403020206"
        },
        {
            id: "4030202003",
            pregunta: "¿Qué tipo de contenedores ofrecen un servicio que permite ejecutar múltiples instancias de sistemas operativos de manera aislada?",
            opciones: [
                "Contenedores de procesos",
                "Contenedores sandbox",
                "Contenedores de infraestructura o sistema",
                "Contenedores de aplicaciones"
            ],
            correcta: 2,
            preguntaId: "403020207"
        },
        {
            id: "4030202003",
            pregunta: "¿Cuáles son ejemplos de contenedores de procesos o de aplicaciones?",
            opciones: [
                "LXC y LXD",
                "Docker y systemd-nspawn",
                "Firejail y nsroot",
                "FreeBSD jail y sandboxie"
            ],
            correcta: 1,
            preguntaId: "403020208"
        },
        {
            id: "4030202003",
            pregunta: "¿Qué tipo de contenedores están enfocados en proveer aislamiento mediante un entorno que permita ejecutar contenedores en un espacio encapsulado?",
            opciones: [
                "Contenedores de procesos",
                "Contenedores de infraestructura",
                "Contenedores sandbox",
                "Contenedores de sistema"
            ],
            correcta: 2,
            preguntaId: "403020209"
        },
        {
            id: "4030202004",
            pregunta: "¿Cuál es una ventaja de los contenedores respecto al rendimiento?",
            opciones: [
                "Pueden llegar a tener un rendimiento en la ejecución muy próximo al nativo",
                "Son más rápidos que las aplicaciones nativas",
                "Consumen menos memoria que las aplicaciones nativas",
                "Utilizan menos CPU que las aplicaciones nativas"
            ],
            correcta: 0,
            preguntaId: "403020210"
        },
        {
            id: "4030202004",
            pregunta: "¿Qué componente NO requieren los contenedores para funcionar?",
            opciones: [
                "Sistema operativo",
                "Hipervisor",
                "Motor de contenedores",
                "Hardware"
            ],
            correcta: 1,
            preguntaId: "403020211"
        },
        {
            id: "4030202004",
            pregunta: "¿Cuál es un inconveniente de los contenedores relacionado con fallos?",
            opciones: [
                "No pueden ejecutar aplicaciones complejas",
                "Un fallo en el kernel puede provocar la caída de la totalidad de los contenedores alojados",
                "No pueden comunicarse entre sí",
                "Consumen demasiados recursos"
            ],
            correcta: 1,
            preguntaId: "403020212"
        },
        {
            id: "4030202004",
            pregunta: "¿Qué limitación tienen los contenedores respecto a las librerías y herramientas?",
            opciones: [
                "No pueden utilizar librerías externas",
                "Solo pueden utilizar librerías específicas para contenedores",
                "Deben estar compilados para el mismo juego de instrucciones y hardware que utiliza el sistema operativo anfitrión",
                "No pueden utilizar herramientas del sistema operativo"
            ],
            correcta: 2,
            preguntaId: "403020213"
        },
        {
            id: "4030202005",
            pregunta: "¿Cómo están relacionados los microservicios y los contenedores?",
            opciones: [
                "Los microservicios solo pueden ejecutarse en contenedores",
                "Los contenedores solo pueden ejecutar microservicios",
                "Los contenedores permiten empaquetar todo lo necesario para que un servicio se ejecute de manera encapsulada",
                "Los microservicios y los contenedores son conceptos independientes sin relación"
            ],
            correcta: 2,
            preguntaId: "403020214"
        },
        {
            id: "4030202005",
            pregunta: "En el ejemplo de la tienda virtual en un contenedor, ¿qué elementos contiene cada servicio?",
            opciones: [
                "Solo el código de la aplicación",
                "El código de la aplicación y la API",
                "El código de la aplicación y los servicios horizontales",
                "El código de la aplicación y su propia base de datos"
            ],
            correcta: 3,
            preguntaId: "403020215"
        },
        {
            id: "4030202005",
            pregunta: "Además de los servicios específicos, ¿qué otros componentes se incluyen en el contenedor Docker Host del ejemplo?",
            opciones: [
                "Solo las bases de datos",
                "API, App, sistema de intercambio de mensajes y servicios horizontales",
                "Solo el sistema operativo",
                "Solo el motor de contenedores"
            ],
            correcta: 1,
            preguntaId: "403020216"
        },
        {
            id: "4030202001",
            pregunta: "¿Qué ventaja ofrecen los contenedores respecto a la portabilidad?",
            opciones: [
                "Los contenedores solo funcionan en un tipo específico de sistema operativo",
                "Las aplicaciones en contenedores se pueden poner en marcha fácilmente en diferentes sistemas operativos y plataformas de hardware",
                "Los contenedores requieren configuración específica para cada sistema operativo",
                "Los contenedores solo son portables dentro del mismo tipo de sistema operativo"
            ],
            correcta: 1,
            preguntaId: "403020217"
        },
        {
            id: "4030202003",
            pregunta: "¿Cuál es la principal utilidad de los contenedores de procesos o de aplicaciones?",
            opciones: [
                "Ejecutar sistemas operativos completos",
                "Proporcionar aislamiento de seguridad",
                "Empaquetar aplicaciones y todas sus dependencias para desarrollo y distribución",
                "Ejecutar aplicaciones legacy"
            ],
            correcta: 2,
            preguntaId: "403020218"
        },
        {
            id: "4030202004",
            pregunta: "¿Qué ventaja ofrecen los contenedores respecto al control?",
            opciones: [
                "Permiten un mayor control desde fuera (desde el anfitrión) que las máquinas virtuales",
                "Ofrecen menos control que las máquinas virtuales",
                "El control es idéntico al de las máquinas virtuales",
                "No permiten ningún tipo de control externo"
            ],
            correcta: 0,
            preguntaId: "403020219"
        },
        {
            id: "4030202004",
            pregunta: "¿Qué ventaja ofrecen los contenedores respecto a la velocidad de despliegue?",
            opciones: [
                "Los contenedores tardan más en desplegarse que las máquinas virtuales",
                "Los contenedores y las máquinas virtuales tienen el mismo tiempo de despliegue",
                "Permiten poner en marcha, aplicar parches o escalar las aplicaciones con mayor rapidez",
                "Los contenedores solo se pueden desplegar una vez"
            ],
            correcta: 2,
            preguntaId: "403020220"
        }
    ]
},
"4030301000e": {
    minimoParaAprobar: 7,
    preguntas: [
        {
            id: "4030301001",
            pregunta: "¿Qué funcionalidades ofrece una plataforma de microservicios?",
            opciones: [
                "Solo balanceo de carga",
                "Solo escalado automático",
                "Descubrimiento, directorio y monitorización de servicios",
                "Solo gestión de bases de datos"
            ],
            correcta: 2,
            preguntaId: "403030101"
        },
        {
            id: "4030301001",
            pregunta: "¿Qué hace una plataforma de microservicios cuando el software o hardware en el que se ejecutan los servicios fallan?",
            opciones: [
                "Detiene todos los servicios",
                "Traslada automáticamente las instancias a máquinas virtuales o a otros servidores",
                "Notifica al administrador y espera instrucciones",
                "Reinicia el sistema completo"
            ],
            correcta: 1,
            preguntaId: "403030102"
        },
        {
            id: "4030301002",
            pregunta: "¿Qué es Docker?",
            opciones: [
                "Un sistema operativo para contenedores",
                "Un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software",
                "Un tipo de máquina virtual",
                "Un lenguaje de programación para microservicios"
            ],
            correcta: 1,
            preguntaId: "403030103"
        },
        {
            id: "4030301002",
            pregunta: "¿Sobre qué facilidades del kernel Linux está construido Docker?",
            opciones: [
                "systemd y udev",
                "cgroups y namespaces",
                "iptables y netfilter",
                "SELinux y AppArmor"
            ],
            correcta: 1,
            preguntaId: "403030104"
        },
        {
            id: "4030301002",
            pregunta: "¿Qué característica distingue a un contenedor Docker de una máquina virtual tradicional?",
            opciones: [
                "Docker requiere un hipervisor para funcionar",
                "Docker no puede ejecutar aplicaciones complejas",
                "Docker no requiere incluir un sistema operativo independiente",
                "Docker solo funciona en sistemas Linux"
            ],
            correcta: 2,
            preguntaId: "403030105"
        },
        {
            id: "4030301003",
            pregunta: "¿Qué es Docker Swarm?",
            opciones: [
                "Un tipo de contenedor Docker",
                "Una herramienta para crear imágenes Docker",
                "El soporte integrado de Docker para administrar colecciones de motores Docker",
                "Un sistema de archivos para Docker"
            ],
            correcta: 2,
            preguntaId: "403030106"
        },
        {
            id: "4030301003",
            pregunta: "¿Cuántos tipos de nodos reconoce el sistema Docker Swarm?",
            opciones: [
                "Uno",
                "Dos",
                "Tres",
                "Cuatro"
            ],
            correcta: 1,
            preguntaId: "403030107"
        },
        {
            id: "4030301003",
            pregunta: "¿Cuál es la función principal de los nodos administradores (manager) en Docker Swarm?",
            opciones: [
                "Ejecutar contenedores",
                "Manejar la asignación de tareas a los nodos trabajadores",
                "Almacenar imágenes Docker",
                "Gestionar las redes virtuales"
            ],
            correcta: 1,
            preguntaId: "403030108"
        },
        {
            id: "4030301003",
            pregunta: "¿Qué es un servicio en Docker Swarm?",
            opciones: [
                "Un tipo de contenedor",
                "Una imagen Docker",
                "La definición de las tareas que se ejecutarán en los nodos",
                "Un tipo de red virtual"
            ],
            correcta: 2,
            preguntaId: "403030109"
        },
        {
            id: "4030301003",
            pregunta: "¿Qué es una tarea en Docker Swarm?",
            opciones: [
                "Un tipo de nodo",
                "Un contenedor Docker y los comandos que se ejecutarán dentro del contenedor",
                "Un servicio de red",
                "Un tipo de volumen"
            ],
            correcta: 1,
            preguntaId: "403030110"
        },
        {
            id: "4030301004",
            pregunta: "¿Qué es Kubernetes?",
            opciones: [
                "Un tipo de contenedor",
                "Un sistema de código abierto que automatiza la implementación, las operaciones y el escalado de las aplicaciones en contenedores",
                "Un sistema operativo para contenedores",
                "Un lenguaje de programación para microservicios"
            ],
            correcta: 1,
            preguntaId: "403030111"
        },
        {
            id: "4030301004",
            pregunta: "¿Quién desarrolló originalmente Kubernetes?",
            opciones: [
                "Microsoft",
                "Amazon",
                "Google",
                "IBM"
            ],
            correcta: 2,
            preguntaId: "403030112"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué son los Objetos de Kubernetes?",
            opciones: [
                "Tipos de contenedores",
                "Entidades persistentes dentro del sistema de Kubernetes que representan el estado del clúster",
                "Herramientas de línea de comandos",
                "Tipos de redes virtuales"
            ],
            correcta: 1,
            preguntaId: "403030113"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué campos incluye cada objeto de Kubernetes para determinar su configuración?",
            opciones: [
                "name y type",
                "id y version",
                "spec y status",
                "config y metadata"
            ],
            correcta: 2,
            preguntaId: "403030114"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué describe el campo 'spec' en un objeto de Kubernetes?",
            opciones: [
                "El estado actual del objeto",
                "El estado deseado del objeto",
                "La versión del objeto",
                "Los metadatos del objeto"
            ],
            correcta: 1,
            preguntaId: "403030115"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué es un pod en Kubernetes?",
            opciones: [
                "Un tipo de servicio",
                "Un tipo de volumen",
                "El objeto básico que consta de uno o más contenedores ubicados en el mismo equipo anfitrión",
                "Un tipo de red virtual"
            ],
            correcta: 2,
            preguntaId: "403030116"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué son los namespaces en Kubernetes?",
            opciones: [
                "Tipos de contenedores",
                "Objetos que proporcionan un mecanismo para aislar grupos de recursos dentro de un mismo cluster",
                "Tipos de volúmenes",
                "Tipos de redes virtuales"
            ],
            correcta: 1,
            preguntaId: "403030117"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué es un servicio en Kubernetes?",
            opciones: [
                "Un tipo de contenedor",
                "Un objeto que representa un conjunto de pods que trabajan en conjunto",
                "Un tipo de volumen",
                "Un tipo de red virtual"
            ],
            correcta: 1,
            preguntaId: "403030118"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué es un volumen en Kubernetes?",
            opciones: [
                "Un tipo de contenedor",
                "Un tipo de servicio",
                "Un directorio accesible a todos los contenedores en un pod",
                "Un tipo de red virtual"
            ],
            correcta: 2,
            preguntaId: "403030119"
        },
        {
            id: "4030301005",
            pregunta: "¿Qué controlador de Kubernetes mantiene un conjunto estable de réplicas de Pods ejecutándose en todo momento?",
            opciones: [
                "Deployment",
                "StatefulSet",
                "DaemonSet",
                "ReplicaSet"
            ],
            correcta: 3,
            preguntaId: "403030120"
        }
    ]
},
"4030302000e": {
    minimoParaAprobar: 7,
    preguntas: [
        {
            id: "4030302001",
            pregunta: "¿Qué tipo de arquitectura sigue Kubernetes?",
            opciones: [
                "Cliente-servidor",
                "Maestro-esclavo",
                "Peer-to-peer",
                "Microservicios"
            ],
            correcta: 1,
            preguntaId: "403030201"
        },
        {
            id: "4030302001",
            pregunta: "¿Cómo se denomina al conjunto del panel de control y el nodo o nodos en Kubernetes?",
            opciones: [
                "Swarm",
                "Cluster",
                "Datacenter",
                "Namespace"
            ],
            correcta: 1,
            preguntaId: "403030202"
        },
        {
            id: "4030302002",
            pregunta: "¿Qué es etcd en Kubernetes?",
            opciones: [
                "Un sistema de monitorización",
                "Un almacén de datos persistente, liviano, distribuido de clave-valor",
                "Un sistema de balanceo de carga",
                "Un sistema de gestión de contenedores"
            ],
            correcta: 1,
            preguntaId: "403030203"
        },
        {
            id: "4030302002",
            pregunta: "¿Cuál es la función principal del Servidor de API (API server) en Kubernetes?",
            opciones: [
                "Monitorizar el estado de los nodos",
                "Asignar pods a nodos",
                "Procesar y validar las peticiones REST y actualizar el estado de los objetos API en etcd",
                "Gestionar el almacenamiento persistente"
            ],
            correcta: 2,
            preguntaId: "403030204"
        },
        {
            id: "4030302002",
            pregunta: "¿Qué componente de Kubernetes selecciona sobre qué nodo deberá correr un pod?",
            opciones: [
                "API Server",
                "Controller Manager",
                "Scheduler",
                "Kubelet"
            ],
            correcta: 2,
            preguntaId: "403030205"
        },
        {
            id: "4030302002",
            pregunta: "¿Qué es el Administrador de controladores (Controller Manager) en Kubernetes?",
            opciones: [
                "El proceso sobre el cual el núcleo de los controladores Kubernetes se ejecuta",
                "El componente que gestiona las redes virtuales",
                "El componente que gestiona el almacenamiento persistente",
                "El componente que monitoriza el estado de los nodos"
            ],
            correcta: 0,
            preguntaId: "403030206"
        },
        {
            id: "4030302003",
            pregunta: "¿Cómo se denomina también al nodo en Kubernetes?",
            opciones: [
                "Master o controlador",
                "Esclavo o worker",
                "Cliente o servidor",
                "Host o anfitrión"
            ],
            correcta: 1,
            preguntaId: "403030207"
        },
        {
            id: "4030302003",
            pregunta: "¿Qué componente es responsable por el estado de ejecución de cada nodo en Kubernetes?",
            opciones: [
                "Kube-Proxy",
                "cAdvisor",
                "Kubelet",
                "Docker"
            ],
            correcta: 2,
            preguntaId: "403030208"
        },
        {
            id: "4030302003",
            pregunta: "¿Qué hace Kubelet cuando detecta que un pod no se encuentra en el estado deseado?",
            opciones: [
                "Notifica al administrador",
                "Detiene el pod",
                "Despliega nuevamente el pod al mismo nodo",
                "Migra el pod a otro nodo"
            ],
            correcta: 2,
            preguntaId: "403030209"
        },
        {
            id: "4030302003",
            pregunta: "¿Cuál es la función principal de Kube-Proxy en Kubernetes?",
            opciones: [
                "Monitorizar el estado de los pods",
                "Implementar un proxy de red y balanceador de carga",
                "Gestionar el almacenamiento persistente",
                "Asignar pods a nodos"
            ],
            correcta: 1,
            preguntaId: "403030210"
        },
        {
            id: "4030302003",
            pregunta: "¿Qué métricas recoge cAdvisor en Kubernetes?",
            opciones: [
                "Solo uso de CPU",
                "Solo uso de memoria",
                "CPU, memoria, uso de archivos y red",
                "Solo uso de red"
            ],
            correcta: 2,
            preguntaId: "403030211"
        },
        {
            id: "4030302004",
            pregunta: "¿Qué es Apache Mesos?",
            opciones: [
                "Un tipo de contenedor",
                "Un administrador de clúster de código abierto escalable",
                "Un sistema operativo para contenedores",
                "Un lenguaje de programación para microservicios"
            ],
            correcta: 1,
            preguntaId: "403030212"
        },
        {
            id: "4030302004",
            pregunta: "¿Qué mecanismo de planificación utiliza Mesos?",
            opciones: [
                "Un mecanismo de un nivel",
                "Un mecanismo de dos niveles",
                "Un mecanismo de tres niveles",
                "Un mecanismo de cuatro niveles"
            ],
            correcta: 1,
            preguntaId: "403030213"
        },
        {
            id: "4030302004",
            pregunta: "¿Cómo se denominan los sistemas distribuidos que se basan en Mesos?",
            opciones: [
                "Contenedores",
                "Pods",
                "Frameworks",
                "Servicios"
            ],
            correcta: 2,
            preguntaId: "403030214"
        },
        {
            id: "4030302004",
            pregunta: "¿Cuáles son algunos de los frameworks de Mesos?",
            opciones: [
                "Docker, Kubernetes, OpenShift",
                "Apache Aurora, Chronos, Cloud Foundry, Marathon",
                "etcd, API Server, Scheduler",
                "Kubelet, Kube-Proxy, cAdvisor"
            ],
            correcta: 1,
            preguntaId: "403030215"
        },
        {
            id: "4030302005",
            pregunta: "¿Qué es OpenShift?",
            opciones: [
                "Un tipo de contenedor",
                "Un sistema operativo para contenedores",
                "Una plataforma como servicio (PaaS) de RedHat",
                "Un lenguaje de programación para microservicios"
            ],
            correcta: 2,
            preguntaId: "403030216"
        },
        {
            id: "4030302005",
            pregunta: "¿Qué tecnologías aprovecha OpenShift?",
            opciones: [
                "Solo Docker",
                "Solo Kubernetes",
                "Docker y Kubernetes",
                "Apache Mesos"
            ],
            correcta: 2,
            preguntaId: "403030217"
        },
        {
            id: "4030302005",
            pregunta: "¿Qué tipo de aplicaciones soporta OpenShift?",
            opciones: [
                "Solo aplicaciones Java",
                "Solo aplicaciones .NET",
                "Programas binarios que sean aplicaciones Web que se puedan ejecutar en RHEL Linux",
                "Solo aplicaciones Python"
            ],
            correcta: 2,
            preguntaId: "403030218"
        },
        {
            id: "4030302001",
            pregunta: "¿Qué componentes de Kubernetes administran un nodo individual?",
            opciones: [
                "etcd, API Server, Scheduler, Controller Manager",
                "Kubelet, Kube-Proxy, cAdvisor",
                "Docker, containerd, CRI-O",
                "Apache Aurora, Chronos, Marathon"
            ],
            correcta: 1,
            preguntaId: "403030219"
        },
        {
            id: "4030302002",
            pregunta: "¿Qué componentes forman parte del panel de control (Control Plane) de Kubernetes?",
            opciones: [
                "Kubelet, Kube-Proxy, cAdvisor",
                "Docker, containerd, CRI-O",
                "etcd, API Server, Scheduler, Controller Manager",
                "Apache Aurora, Chronos, Marathon"
            ],
            correcta: 2,
            preguntaId: "403030220"
        }
    ]
}


    };