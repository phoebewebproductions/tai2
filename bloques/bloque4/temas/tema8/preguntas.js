const preguntas = {
    "4080101000e": {
      minimoParaAprobar: 7,
      preguntas: [
        {
          id: "4080101000",
          pregunta: "¿Qué es Internet según la RAE?",
          opciones: [
            "Una red de ordenadores conectados entre sí",
            "Una red informática mundial, descentralizada, formada por la conexión directa entre computadoras mediante un protocolo especial de comunicación",
            "Un conjunto de servicios web accesibles desde cualquier dispositivo",
            "Un sistema de comunicación basado en protocolos TCP/IP",
          ],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101000",
          pregunta: "¿De qué expresión es contracción la palabra 'Internet'?",
          opciones: ["Internal Network", "International Network", "Interconnected Networks", "Information Network"],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101002",
          pregunta: "¿Qué significa que Internet es una 'red de redes'?",
          opciones: [
            "Que está formada por múltiples redes sociales",
            "Que es una red con múltiples capas",
            "Que es un enjambre de redes heterogéneas organizadas jerárquicamente",
            "Que tiene múltiples servidores conectados entre sí",
          ],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101003",
          pregunta: "¿Qué organización elaboró el modelo de referencia OSI?",
          opciones: ["IEEE", "IETF", "ISO", "ICANN"],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101003",
          pregunta: "¿Qué entidad creó el modelo TCP/IP?",
          opciones: [
            "La Organización Internacional para la Normalización (ISO)",
            "El Departamento de Defensa de EE.UU.",
            "La Fundación Nacional de Ciencia (NSF)",
            "El Consorcio World Wide Web (W3C)",
          ],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101003",
          pregunta: "¿Cuál fue uno de los requisitos principales de diseño del modelo TCP/IP?",
          opciones: [
            "Maximizar la velocidad de transmisión",
            "Minimizar el consumo de recursos",
            "Entregar el mensaje a destino incluso en situaciones adversas (best-effort)",
            "Garantizar la seguridad de las comunicaciones",
          ],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101003",
          pregunta: "¿Cuántas capas tiene el modelo TCP/IP?",
          opciones: ["3 capas", "4 capas", "5 capas", "7 capas"],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101004",
          pregunta: "¿Cuál de las siguientes NO es una ventaja de una arquitectura de red?",
          opciones: [
            "Separación de funciones",
            "Conexiones estables y seguras",
            "Mayor velocidad de transmisión",
            "Tareas de administración simplificadas",
          ],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101005",
          pregunta: "¿Cuál de las siguientes NO es una característica de la arquitectura de red de Internet?",
          opciones: [
            "Basada en capas",
            "Nivel de red fiable",
            "Enfocada al encaminamiento",
            "Basada en el encapsulamiento",
          ],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Qué significa 'best effort' en el contexto de la arquitectura de Internet?",
          opciones: [
            "Que la red siempre entrega los paquetes en el menor tiempo posible",
            "Que la red hace lo que puede por entregar el mensaje a destino, sin garantías",
            "Que la red utiliza el mejor camino disponible",
            "Que la red garantiza la entrega de todos los paquetes",
          ],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Cuál de las siguientes tecnologías pertenece a la capa de acceso a red?",
          opciones: ["HTTP", "TCP", "IP", "Ethernet"],
          correcta: 3,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Cuántos bits tienen las direcciones IPv4?",
          opciones: ["16 bits", "32 bits", "64 bits", "128 bits"],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Cuántos bits tienen las direcciones IPv6?",
          opciones: ["32 bits", "64 bits", "96 bits", "128 bits"],
          correcta: 3,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Cuál de los siguientes NO es un protocolo de la capa de transporte?",
          opciones: ["TCP", "UDP", "HTTP", "SCTP"],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Cuál de las siguientes características corresponde a TCP?",
          opciones: ["No orientado a conexión", "No fiable", "Control de flujo", "Sin acuses de recibo"],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Cuál de las siguientes características corresponde a UDP?",
          opciones: ["Orientado a conexión", "No fragmentación", "Control de congestión", "Receptor ordena segmentos"],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Cuál de los siguientes NO es un protocolo de la capa de aplicación?",
          opciones: ["HTTP", "SMTP", "IP", "FTP"],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Qué tipo de comunicación proporciona la capa de transporte?",
          opciones: [
            "De host a host",
            "De red a red",
            "De extremo a extremo (aplicación a aplicación)",
            "De salto a salto",
          ],
          correcta: 2,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Qué tipo de comunicación proporciona la capa de red IP?",
          opciones: ["De extremo a extremo", "De salto a salto", "De aplicación a aplicación", "De usuario a usuario"],
          correcta: 1,
          preguntaId: "40801010",
        },
        {
          id: "4080101006",
          pregunta: "¿Qué proceso ocurre cuando los datos bajan por las capas del modelo TCP/IP?",
          opciones: ["Encapsulamiento", "Desencapsulamiento", "Fragmentación", "Compresión"],
          correcta: 0,
          preguntaId: "40801010",
        },
      ],
    },
    "4080201000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4080201001",
            pregunta: "¿Qué es la gobernanza de Internet?",
            opciones: [
              "El control total de Internet por parte de los gobiernos",
              "El desarrollo y la aplicación de principios, normas y procedimientos por parte de gobiernos, sector privado y sociedad civil que dan forma a la evolución y uso de Internet",
              "La gestión técnica de los servidores raíz de Internet",
              "El conjunto de leyes internacionales que regulan el uso de Internet",
            ],
            correcta: 1,
            preguntaId: "40802010",
          },
          {
            id: "4080201003",
            pregunta: "¿Cuáles son las principales formas de acceso a Internet?",
            opciones: [
              "Solo mediante ISP",
              "Solo mediante LAN corporativa",
              "Mediante pertenencia a una LAN o mediante un ISP",
              "Solo mediante conexión satelital",
            ],
            correcta: 2,
            preguntaId: "40802010",
          },
          {
            id: "4080201003",
            pregunta: "¿Cuál de los siguientes NO es un medio de acceso a Internet?",
            opciones: ["5G", "xDSL", "Fibra óptica", "Bluetooth"],
            correcta: 3,
            preguntaId: "40802010",
          },
          {
            id: "4080201004",
            pregunta: "En la arquitectura cliente-servidor, ¿qué son los servidores?",
            opciones: [
              "Usuarios que acceden a los servicios",
              "Programas que permiten la conexión a Internet",
              "Ordenadores conectados a Internet que ejecutan programas que ofrecen servicios",
              "Dispositivos que conectan redes locales a Internet",
            ],
            correcta: 2,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-1",
            pregunta: "¿Cuál es el objetivo principal del DNS?",
            opciones: [
              "Asignar direcciones IP a los dispositivos",
              "Convertir nombres de dominio en direcciones IP y viceversa",
              "Gestionar el tráfico de Internet",
              "Proteger la seguridad de las comunicaciones",
            ],
            correcta: 1,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-1",
            pregunta: "¿En qué puerto opera el servicio DNS?",
            opciones: ["Puerto 21", "Puerto 25", "Puerto 53", "Puerto 80"],
            correcta: 2,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-2-1",
            pregunta: "¿Qué significa URI?",
            opciones: [
              "Universal Resource Indicator",
              "Uniform Resource Identifier",
              "Unique Resource Index",
              "Universal Resource Internet",
            ],
            correcta: 1,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-2-1",
            pregunta: "¿Cuál de los siguientes NO es un componente de un URI?",
            opciones: ["Esquema", "Autoridad", "Ruta", "Protocolo"],
            correcta: 3,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-2-2",
            pregunta: "¿Qué significa TLD?",
            opciones: ["Top Level Domain", "Transfer Level Domain", "Technical Level Domain", "Type Level Domain"],
            correcta: 0,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-2-2",
            pregunta: "¿Cuál de los siguientes es un ejemplo de gTLD sin restricciones?",
            opciones: [".edu", ".gov", ".com", ".mil"],
            correcta: 2,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-2-2",
            pregunta: "¿Qué es el dominio in-addr.arpa?",
            opciones: [
              "Un dominio para servicios de correo electrónico",
              "Un dominio para resolución inversa de DNS",
              "Un dominio para servicios gubernamentales",
              "Un dominio para pruebas de DNS",
            ],
            correcta: 1,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-3",
            pregunta: "¿Qué tipo de consultas lanzan los usuarios iniciales en DNS?",
            opciones: ["Consultas iterativas", "Consultas recursivas", "Consultas directas", "Consultas indirectas"],
            correcta: 1,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-3",
            pregunta: "¿Cuál de los siguientes NO es un fichero relacionado con el cliente DNS en sistemas UNIX?",
            opciones: ["/etc/hosts", "/etc/host.conf", "/etc/resolv.conf", "/etc/dns.conf"],
            correcta: 3,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-4",
            pregunta: "¿Cuál es el servidor DNS más común en sistemas Unix?",
            opciones: ["BIND", "DNS Server", "Apache DNS", "Unix DNS"],
            correcta: 0,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-4",
            pregunta: "¿Cuál de los siguientes NO es un tipo de servidor DNS según su naturaleza?",
            opciones: [
              "Servidores maestros o primarios",
              "Servidores secundarios o esclavos",
              "Servidores caché",
              "Servidores raíz",
            ],
            correcta: 3,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-5-1",
            pregunta: "¿Qué significa SOA en el contexto de los registros DNS?",
            opciones: [
              "Service Oriented Architecture",
              "Start Of Authority",
              "System Of Administration",
              "Source Of Address",
            ],
            correcta: 1,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-5-1",
            pregunta: "¿Qué tipo de registro DNS se utiliza para establecer direcciones IPv4 del servidor?",
            opciones: ["Registro A", "Registro AAAA", "Registro MX", "Registro CNAME"],
            correcta: 0,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-6",
            pregunta: "¿Cuál de las siguientes NO es una herramienta de consulta DNS?",
            opciones: ["nslookup", "dig", "host", "ping"],
            correcta: 3,
            preguntaId: "40802010",
          },
          {
            id: "4080201005-6",
            pregunta: "¿Cuál de los siguientes es un protocolo DNS más seguro impulsado por el IETF?",
            opciones: ["DNSSEC", "DoT (DNS mediante TLS)", "DNS+", "SecureDNS"],
            correcta: 1,
            preguntaId: "40802010",
          },
          {
            id: "4080201006",
            pregunta: "¿En qué puerto opera el protocolo HTTP?",
            opciones: ["Puerto 21", "Puerto 25", "Puerto 53", "Puerto 80"],
            correcta: 3,
            preguntaId: "40802010",
          },
          {
            id: "4080201007",
            pregunta: "¿Qué organización gestiona los números y las designaciones para los protocolos de Internet?",
            opciones: ["ICANN", "IANA", "W3C", "IEEE"],
            correcta: 1,
            preguntaId: "40802010",
          },
        ],
      },
      "4080301000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4080301001",
                pregunta: "¿En qué año fue concebida la Web por Tim Berners-Lee?",
                opciones: [
                    "1989",
                    "1991",
                    "1993",
                    "1995"
                ],
                correcta: 0,
                preguntaId: "40803010"
            },
            {
                id: "4080301001",
                pregunta: "¿Cuál fue el primer navegador que ayudó a disparar la popularidad de la Web fuera de los círculos científicos?",
                opciones: [
                    "Internet Explorer",
                    "Mosaic",
                    "Netscape Navigator",
                    "Firefox"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301001",
                pregunta: "¿Cuántas generaciones de la Web identifican la mayoría de autores?",
                opciones: [
                    "2 generaciones",
                    "3 generaciones",
                    "4 generaciones",
                    "5 generaciones"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301001",
                pregunta: "¿Cómo se caracteriza la 1ª Generación de la Web?",
                opciones: [
                    "Contenido Dinámico y Colaborativo",
                    "Contenido Estático",
                    "Generación Semántica",
                    "Contenido Interactivo"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301002",
                pregunta: "Según el Consejo de Arquitectura de Internet (IAB), ¿qué denota el término 'Internet de las Cosas'?",
                opciones: [
                    "Una red de ordenadores interconectados",
                    "Una tendencia en que un gran número de dispositivos embebidos utilizan los servicios de comunicación que ofrecen los protocolos de Internet",
                    "Un sistema de comunicación entre personas",
                    "Una red de servidores que almacenan información"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301002",
                pregunta: "¿Cuál es la diferencia principal entre IoT y M2M?",
                opciones: [
                    "IoT es más antiguo que M2M",
                    "M2M solo funciona con dispositivos móviles",
                    "En IoT una máquina se conecta a Internet a través de un servidor que gestiona la información",
                    "M2M no permite la comunicación entre dispositivos"
                ],
                correcta: 2,
                preguntaId: "40803010"
            },
            {
                id: "4080301002",
                pregunta: "¿Cuál de los siguientes es un ejemplo de servicio IoT?",
                opciones: [
                    "Localización mediante GPS de vehículos",
                    "Monitorización de temperatura y ejecución de acciones según los valores registrados",
                    "Comunicación entre dos ordenadores",
                    "Envío de correos electrónicos"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301002",
                pregunta: "¿Qué tipo de red IoT se utiliza típicamente en domótica?",
                opciones: [
                    "Device to Device",
                    "Device to Cloud",
                    "Device to Gateway",
                    "Backend Sharing"
                ],
                correcta: 0,
                preguntaId: "40803010"
            },
            {
                id: "4080301002",
                pregunta: "¿Qué es WoT según el texto?",
                opciones: [
                    "Un tipo de red IoT",
                    "Un protocolo de nivel físico",
                    "La apuesta del W3C para orquestar e integrar tecnologías y protocolos IoT",
                    "Un estándar de comunicación inalámbrica"
                ],
                correcta: 2,
                preguntaId: "40803010"
            },
            {
                id: "4080301003",
                pregunta: "¿En qué año fue lanzado el protocolo HTTP?",
                opciones: [
                    "1989",
                    "1991",
                    "1993",
                    "1996"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301003",
                pregunta: "¿Qué métodos HTTP se incorporaron en la versión HTTP 1.0?",
                opciones: [
                    "GET y POST",
                    "POST y HEAD",
                    "PUT y DELETE",
                    "GET, POST y HEAD"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301003",
                pregunta: "¿Qué característica principal introduce HTTP 2?",
                opciones: [
                    "Nuevos métodos HTTP",
                    "Orientación a recursos REST",
                    "Multiplexed streams y server push",
                    "Abandono del protocolo TCP"
                ],
                correcta: 2,
                preguntaId: "40803010"
            },
            {
                id: "4080301003",
                pregunta: "¿Qué protocolo de transporte utiliza HTTP 3?",
                opciones: [
                    "TCP",
                    "UDP",
                    "QUIC sobre UDP",
                    "QUIC sobre TCP"
                ],
                correcta: 2,
                preguntaId: "40803010"
            },
            {
                id: "4080301004",
                pregunta: "¿Qué puerto está asignado por IANA para HTTPS?",
                opciones: [
                    "80",
                    "443",
                    "8080",
                    "8443"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301004",
                pregunta: "¿Cuáles son las tres dimensiones de seguridad principales que proporciona HTTPS?",
                opciones: [
                    "Cifrado, compresión y autenticación",
                    "Cifrado, integridad de los datos y autenticación",
                    "Integridad, disponibilidad y confidencialidad",
                    "Autenticación, autorización y auditoría"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301004",
                pregunta: "¿Qué es HSTS en el contexto de HTTPS?",
                opciones: [
                    "Un tipo de certificado digital",
                    "Un algoritmo de cifrado",
                    "Una característica de seguridad que indica a los navegadores que solo se debe comunicar con HTTPS",
                    "Un protocolo de autenticación"
                ],
                correcta: 2,
                preguntaId: "40803010"
            },
            {
                id: "4080301005",
                pregunta: "¿Qué empresa desarrolló originalmente SSL?",
                opciones: [
                    "Microsoft",
                    "Netscape",
                    "Mozilla",
                    "Apple"
                ],
                correcta: 1,
                preguntaId: "40803010"
            },
            {
                id: "4080301005",
                pregunta: "¿En qué año se publicó TLS 1.3?",
                opciones: [
                    "2008",
                    "2013",
                    "2018",
                    "2020"
                ],
                correcta: 2,
                preguntaId: "40803010"
            },
            {
                id: "4080301005",
                pregunta: "¿Cuántos protocolos componen TLS?",
                opciones: [
                    "2 protocolos",
                    "3 protocolos",
                    "4 protocolos",
                    "5 protocolos"
                ],
                correcta: 2,
                preguntaId: "40803010"
            },
            {
                id: "4080301005",
                pregunta: "¿Qué significa AEAD en el contexto de TLS 1.3?",
                opciones: [
                    "Advanced Encryption And Decryption",
                    "Authenticated Encryption with Additional Data",
                    "Asymmetric Encryption Algorithm Design",
                    "Automated Encryption And Decryption"
                ],
                correcta: 1,
                preguntaId: "40803010"
            }
        ]
    }
  }
  
  