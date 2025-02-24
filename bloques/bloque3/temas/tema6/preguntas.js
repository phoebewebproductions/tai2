const preguntas = {
    "3060101000e": {
      minimoParaAprobar: 8,
      preguntas: [
        {
          id: 3060101001,
          pregunta: "¿Qué características principales tiene Java según el texto?",
          opciones: [
            "Es un lenguaje monoplataforma y secuencial",
            "Es multiplataforma, concurrente y de propósito general",
            "Es un lenguaje exclusivo para aplicaciones web",
            "Es un lenguaje interpretado puro"
          ],
          correcta: 1,
          preguntaId: "3060101001"
        },
        {
          id: 3060101002,
          pregunta: "¿Qué se necesita en el cliente para ejecutar Java?",
          opciones: [
            "Solo el código fuente",
            "JRE (Java Runtime Environment) que aporta JVM",
            "Un compilador de Java",
            "El SDK completo"
          ],
          correcta: 1,
          preguntaId: "3060101002"
        },
        {
          id: 3060101004,
          pregunta: "¿Qué característica tiene el bytecode de Java?",
          opciones: [
            "Genera código máquina específico para cada CPU",
            "Solo funciona en sistemas Windows",
            "Es código binario intermedio interpretado por la JVM",
            "Es código fuente en texto plano"
          ],
          correcta: 2,
          preguntaId: "3060101003"
        },
        {
          id: 3060101005,
          pregunta: "¿Qué es un archivo JAR?",
          opciones: [
            "Un archivo de texto plano",
            "Un fichero que reúne clases, imágenes, sonidos, etc. para la ejecución de aplicaciones Java",
            "Un archivo de configuración del sistema",
            "Un compilador de Java"
          ],
          correcta: 1,
          preguntaId: "3060101004"
        },
        {
          id: 3060101006,
          pregunta: "¿Qué es JIT (Just In Time) compilation?",
          opciones: [
            "Un tipo de archivo JAR",
            "Una forma de compilación que ocurre durante la ejecución del programa",
            "Un sistema de gestión de memoria",
            "Un tipo de máquina virtual"
          ],
          correcta: 1,
          preguntaId: "3060101005"
        },
        {
          id: 3060101007,
          pregunta: "¿Qué es Java EE según el texto?",
          opciones: [
            "Un lenguaje de programación",
            "Una especificación detallada de tecnologías",
            "Un sistema operativo",
            "Un compilador de Java"
          ],
          correcta: 1,
          preguntaId: "3060101006"
        },
        {
          id: 3060101008,
          pregunta: "¿Qué permite Java EE en términos de arquitectura?",
          opciones: [
            "Solo arquitecturas monolíticas",
            "Arquitecturas de N capas distribuidas",
            "Solo arquitecturas cliente-servidor",
            "Únicamente arquitecturas de dos capas"
          ],
          correcta: 1,
          preguntaId: "3060101007"
        },
        {
          id: 3060101009,
          pregunta: "¿Java EE es un producto de Sun (Oracle)?",
          opciones: [
            "Sí, es un producto exclusivo de Oracle",
            "No, es un conjunto de especificaciones que cualquier fabricante puede implementar",
            "Sí, pero solo la versión empresarial",
            "No, es un producto de Microsoft"
          ],
          correcta: 1,
          preguntaId: "3060101008"
        },
        {
          id: 3060101010,
          pregunta: "¿Por qué Java EE es considerado un estándar?",
          opciones: [
            "Porque es propiedad de Oracle",
            "Porque los proveedores deben cumplir requisitos de conformidad",
            "Porque es gratuito",
            "Porque es el único framework empresarial de Java"
          ],
          correcta: 1,
          preguntaId: "3060101009"
        },
        {
          id: 3060101004,
          pregunta: "¿Cómo funciona la compilación en Java según el texto?",
          opciones: [
            "Se compila directamente a código máquina",
            "Se interpreta línea por línea sin compilación",
            "Se compila una vez y se ejecuta una, siendo el intérprete quien va línea a línea",
            "Solo utiliza interpretación sin compilación"
          ],
          correcta: 2,
          preguntaId: "3060101010"
        }
      ]
    },
    "3060102000e": {
    minimoParaAprobar: 8,
    preguntas: [
      {
        id: 3060102001,
        pregunta: "¿Quién desarrolló la especificación original de J2EE?",
        opciones: [
          "Oracle Corporation",
          "Sun Microsystems",
          "IBM",
          "Microsoft"
        ],
        correcta: 1,
        preguntaId: "3060102001"
      },
      {
        id: 3060102001,
        pregunta: "¿A partir de qué versión la especificación J2EE fue desarrollada bajo el Java Community Process?",
        opciones: [
          "J2EE 1.2",
          "J2EE 1.3",
          "J2EE 1.4",
          "Java EE 5"
        ],
        correcta: 1,
        preguntaId: "3060102002"
      },
      {
        id: 3060102001,
        pregunta: "¿Qué especificación sigue Java EE 8?",
        opciones: [
          "JSR 244",
          "JSR 316",
          "JSR 342",
          "JSR 366"
        ],
        correcta: 3,
        preguntaId: "3060102003"
      },
      {
        id: 3060102002,
        pregunta: "¿Cuántas plataformas de desarrollo principales tenía Java hasta 2006?",
        opciones: [
          "Dos",
          "Tres",
          "Cuatro",
          "Cinco"
        ],
        correcta: 1,
        preguntaId: "3060102004"
      },
      {
        id: 3060102002,
        pregunta: "¿Por qué se creó Java Enterprise Edition?",
        opciones: [
          "Para reemplazar Java SE",
          "Para desarrollar aplicaciones móviles",
          "Para desarrollar arquitecturas multicapa o multinivel",
          "Para competir con Microsoft .NET"
        ],
        correcta: 2,
        preguntaId: "3060102005"
      },
      {
        id: 3060102003,
        pregunta: "¿Qué elementos contempla la especificación JavaEE?",
        opciones: [
          "Solo especificaciones para servidores de aplicaciones",
          "Únicamente librerías para desarrollo",
          "Especificaciones, librerías y manuales de buenas prácticas",
          "Solamente documentación técnica"
        ],
        correcta: 2,
        preguntaId: "3060102006"
      },
      {
        id: 3060102004,
        pregunta: "¿Qué servidor de código abierto se incluye en la plataforma Java EE 8?",
        opciones: [
          "Tomcat",
          "JBoss",
          "Glassfish",
          "WebLogic"
        ],
        correcta: 2,
        preguntaId: "3060102007"
      },
      {
        id: 3060102004,
        pregunta: "¿Qué son los Java EE BluePrints?",
        opciones: [
          "Un tipo de servidor de aplicaciones",
          "Un conjunto de buenas prácticas y manuales para desarrollo de aplicaciones multicapa",
          "Una herramienta de desarrollo",
          "Un sistema de gestión de bases de datos"
        ],
        correcta: 1,
        preguntaId: "3060102008"
      },
      {
        id: 3060102001,
        pregunta: "¿En qué año se lanzó Java EE 7?",
        opciones: [
          "2009",
          "2011",
          "2013",
          "2015"
        ],
        correcta: 2,
        preguntaId: "3060102009"
      },
      {
        id: 3060102004,
        pregunta: "¿Qué herramienta se incluye en Java EE 8 para verificar la compatibilidad de una plataforma?",
        opciones: [
          "Java EE BluePrints",
          "Test de compatibilidad",
          "SDK",
          "Your first cup"
        ],
        correcta: 1,
        preguntaId: "3060102010"
      }
    ]
  },
  "3060201000e": {
    minimoParaAprobar: 9,
    preguntas: [
      {
        id: 3060201001,
        pregunta: "¿Cuál de las siguientes NO es una tecnología de la plataforma Java EE?",
        opciones: [
          "Enterprise JavaBeans (EJB)",
          "Java Servlet",
          "Java Virtual Machine (JVM)",
          "JavaServer Faces (JSF)"
        ],
        correcta: 2,
        preguntaId: "3060201001"
      },
      {
        id: 3060201001,
        pregunta: "¿Qué tecnología se utiliza para el manejo de transacciones en Java EE?",
        opciones: [
          "JMS",
          "JTA",
          "JNDI",
          "JAAS"
        ],
        correcta: 1,
        preguntaId: "3060201002"
      },
      {
        id: 3060201002,
        pregunta: "¿Cuál es la característica más importante de una aplicación web según el texto?",
        opciones: [
          "Es una aplicación monolítica",
          "Se ejecuta solo en el servidor",
          "Es un conjunto de componentes en diferentes capas",
          "Solo requiere un navegador web"
        ],
        correcta: 2,
        preguntaId: "3060201003"
      },
      {
        id: 3060201003,
        pregunta: "¿Cuántas capas principales tiene la arquitectura multicapa según el texto?",
        opciones: [
          "Dos",
          "Tres",
          "Cuatro",
          "Cinco"
        ],
        correcta: 1,
        preguntaId: "3060201004"
      },
      {
        id: 3060201003,
        pregunta: "¿Cuál de las siguientes NO es una característica de las arquitecturas multicapa?",
        opciones: [
          "Escalabilidad",
          "Robustez",
          "Simplicidad de desarrollo",
          "Interoperabilidad"
        ],
        correcta: 2,
        preguntaId: "3060201005"
      },
      {
        id: 3060201003,
        pregunta: "¿Qué capa es responsable de la interacción cliente-interfaz?",
        opciones: [
          "Capa de datos",
          "Capa de presentación",
          "Capa de lógica de negocio",
          "Capa de persistencia"
        ],
        correcta: 1,
        preguntaId: "3060201006"
      },
      {
        id: 3060201004,
        pregunta: "¿Qué significa MVC?",
        opciones: [
          "Modelo-Vista-Conexión",
          "Modelo-Vista-Controlador",
          "Módulo-Vista-Contenedor",
          "Modelo-Validación-Controlador"
        ],
        correcta: 1,
        preguntaId: "3060201007"
      },
      {
        id: 3060201004,
        pregunta: "¿Qué patrón es habitual usar para el desarrollo del modelo en MVC?",
        opciones: [
          "DAO (Data Access Object)",
          "MVC",
          "JSP",
          "XML"
        ],
        correcta: 0,
        preguntaId: "3060201008"
      },
      {
        id: 3060201004,
        pregunta: "¿Qué tecnologías se mencionan para implementar el nivel 'vista' en MVC?",
        opciones: [
          "Solo JSP",
          "Solo XML",
          "JSP, páginas ASP, XML/XSL",
          "Solo páginas HTML"
        ],
        correcta: 2,
        preguntaId: "3060201009"
      },
      {
        id: 3060201004,
        pregunta: "¿Cuál es una característica clave de los niveles en MVC?",
        opciones: [
          "Todos los niveles son dependientes entre sí",
          "Los cambios en un nivel afectan directamente a los otros",
          "Cada nivel es independiente del resto",
          "Solo el nivel vista es independiente"
        ],
        correcta: 2,
        preguntaId: "3060201010"
      },
      {
        id: 3060201001,
        pregunta: "¿Qué tecnologías XML se incluyen en Java EE?",
        opciones: [
          "Solo JAXP y JAXB",
          "JAXP, JAX-RPC, JAX-WS, JAXB, SAAJ, JAXR",
          "Únicamente JAX-WS",
          "XML y XSLT solamente"
        ],
        correcta: 1,
        preguntaId: "3060201011"
      },
      {
        id: 3060201003,
        pregunta: "¿Dónde se ejecuta la lógica transaccional del sistema?",
        opciones: [
          "En la capa de presentación",
          "En la capa de persistencia",
          "En la capa de lógica de negocio",
          "En todas las capas por igual"
        ],
        correcta: 2,
        preguntaId: "3060201012"
      }
    ]
  },
  "3060301000e": {
    minimoParaAprobar: 9,
    preguntas: [
      {
        id: 3060301001,
        pregunta: "¿Cuántos tipos de contenedores se definen en la arquitectura J2EE según el texto?",
        opciones: [
          "Uno en cliente y uno en servidor",
          "Dos en cliente y dos en servidor",
          "Tres en cliente y uno en servidor",
          "Uno en cliente y tres en servidor"
        ],
        correcta: 1,
        preguntaId: "3060301001"
      },
      {
        id: 3060301002,
        pregunta: "¿Cuál es el objetivo principal de un Servlet?",
        opciones: [
          "Servir contenido estático",
          "Generar contenido dinámico para que lo maquete otro",
          "Almacenar datos en la base de datos",
          "Gestionar la lógica de negocio"
        ],
        correcta: 1,
        preguntaId: "3060301002"
      },
      {
        id: 3060301002,
        pregunta: "¿Qué métodos se mencionan para gestionar peticiones en un Servlet?",
        opciones: [
          "get() y post()",
          "doGet() y doPost()",
          "execute() y run()",
          "start() y stop()"
        ],
        correcta: 1,
        preguntaId: "3060301003"
      },
      {
        id: 3060301003,
        pregunta: "¿Qué es una página JSP?",
        opciones: [
          "Un archivo de configuración Java",
          "Un documento de texto que contiene HTML y bloques de código Java embebido",
          "Una base de datos Java",
          "Un servidor web"
        ],
        correcta: 1,
        preguntaId: "3060301004"
      },
      {
        id: 3060301004,
        pregunta: "¿Qué son los EJB (Enterprise JavaBeans)?",
        opciones: [
          "Componentes de servidor que encapsulan la lógica de negocio",
          "Componentes de cliente que manejan la interfaz de usuario",
          "Sistemas de gestión de bases de datos",
          "Servidores web Java"
        ],
        correcta: 0,
        preguntaId: "3060301005"
      },
      {
        id: 3060301004,
        pregunta: "¿Qué versión de EJB introdujo el soporte para Clúster?",
        opciones: [
          "EJB 2.1",
          "EJB 3.0",
          "EJB 3.1",
          "EJB 3.2"
        ],
        correcta: 1,
        preguntaId: "3060301006"
      },
      {
        id: 3060301004,
        pregunta: "¿Cuál es la diferencia principal entre SLSB y SFSB?",
        opciones: [
          "El tipo de datos que manejan",
          "La velocidad de ejecución",
          "El mantenimiento del estado entre llamadas del cliente",
          "El servidor donde se ejecutan"
        ],
        correcta: 2,
        preguntaId: "3060301007"
      },
      {
        id: 3060301005,
        pregunta: "¿Qué diferencia principal existe entre un contenedor web y un servidor web?",
        opciones: [
          "El contenedor web solo sirve contenido estático",
          "El servidor web actúa como capa intermedia",
          "El contenedor web actúa como capa intermedia entre el servidor web y el servlet",
          "No hay diferencia significativa"
        ],
        correcta: 2,
        preguntaId: "3060301008"
      },
      {
        id: 3060301005,
        pregunta: "¿Qué servicios proporciona un contenedor EJB?",
        opciones: [
          "Solo gestión de transacciones",
          "Únicamente seguridad",
          "Caché, concurrencia, persistencia, seguridad, gestión de transacciones y bloqueos",
          "Solo servicios de red"
        ],
        correcta: 2,
        preguntaId: "3060301009"
      },
      {
        id: 3060301003,
        pregunta: "¿Qué sucede la primera vez que se solicita una página JSP?",
        opciones: [
          "Se sirve directamente como HTML",
          "Se genera un servlet, se compila y se carga en memoria",
          "Se rechaza la petición",
          "Se redirecciona a una página estática"
        ],
        correcta: 1,
        preguntaId: "3060301010"
      },
      {
        id: 3060301004,
        pregunta: "¿Cuál es la característica principal de los Message-driven beans?",
        opciones: [
          "Son síncronos",
          "Trabajan de forma asíncrona",
          "No pueden realizar operaciones costosas",
          "Solo manejan datos simples"
        ],
        correcta: 1,
        preguntaId: "3060301011"
      },
      {
        id: 3060301002,
        pregunta: "¿Qué contiene el directorio WEB-INF de un archivo WAR?",
        opciones: [
          "Solo archivos HTML",
          "Solo imágenes y recursos estáticos",
          "Classes, lib y web.xml",
          "Solo archivos JavaScript"
        ],
        correcta: 2,
        preguntaId: "3060301012"
      }
    ]
  },
  "3060401000e": {
    minimoParaAprobar: 9,
    preguntas: [
      {
        id: 3060401001,
        pregunta: "¿Qué aporta el servicio JNDI en Java EE?",
        opciones: [
          "Solo seguridad",
          "Portabilidad y mantenibilidad",
          "Únicamente persistencia",
          "Comunicación entre servicios"
        ],
        correcta: 1,
        preguntaId: "3060401001"
      },
      {
        id: 3060401001,
        pregunta: "¿Cuáles son los dos pasos del control de acceso en JAAS?",
        opciones: [
          "Entrada y salida",
          "Lectura y escritura",
          "Autentificación y autorización",
          "Conexión y desconexión"
        ],
        correcta: 2,
        preguntaId: "3060401002"
      },
      {
        id: 3060401001,
        pregunta: "¿Qué tipos de persistencia existen en Java EE?",
        opciones: [
          "Solo declarativa",
          "Solo programática",
          "Declarativa (CMP) y programática (BMP)",
          "Ninguna de las anteriores"
        ],
        correcta: 2,
        preguntaId: "3060401003"
      },
      {
        id: 3060401001,
        pregunta: "¿Qué protocolos se incluyen en las comunicaciones Web de Java EE?",
        opciones: [
          "Solo HTTP",
          "TCP/IP, UDP/IP, HTTP y HTTPS",
          "Únicamente HTTPS",
          "Solo TCP/IP"
        ],
        correcta: 1,
        preguntaId: "3060401004"
      },
      {
        id: 3060401002,
        pregunta: "¿Qué es JAX-WS?",
        opciones: [
          "Un sistema de persistencia",
          "La evolución de JAX-RPC para servicios web",
          "Un protocolo de seguridad",
          "Un sistema de mensajería"
        ],
        correcta: 1,
        preguntaId: "3060401005"
      },
      {
        id: 3060401002,
        pregunta: "¿Para qué se utiliza SAAJ?",
        opciones: [
          "Para procesar XML",
          "Para gestionar bases de datos",
          "Para generar y recoger mensajes SOAP",
          "Para manejar la seguridad"
        ],
        correcta: 2,
        preguntaId: "3060401006"
      },
      {
        id: 3060401003,
        pregunta: "¿Cuál es la función principal de JDBC?",
        opciones: [
          "Procesar XML",
          "Conectar programas Java con SGBD",
          "Manejar mensajes",
          "Gestionar la seguridad"
        ],
        correcta: 1,
        preguntaId: "3060401007"
      },
      {
        id: 3060401003,
        pregunta: "¿Qué permite hacer Java IDL?",
        opciones: [
          "Procesar XML",
          "Conectar con bases de datos",
          "Invocar objetos CORBA externos usando IIOP",
          "Manejar correos electrónicos"
        ],
        correcta: 2,
        preguntaId: "3060401008"
      },
      {
        id: 3060401003,
        pregunta: "¿Cuál es el propósito de StAX?",
        opciones: [
          "Manejar bases de datos",
          "Procesar documentos XML de forma iterativa",
          "Gestionar la seguridad",
          "Enviar correos electrónicos"
        ],
        correcta: 1,
        preguntaId: "3060401009"
      },
      {
        id: 3060401003,
        pregunta: "¿Qué función cumple el JMX?",
        opciones: [
          "Gestionar bases de datos",
          "Procesar XML",
          "Crear sistemas de gestión y monitoreo",
          "Manejar la persistencia"
        ],
        correcta: 2,
        preguntaId: "3060401010"
      },
      {
        id: 3060401002,
        pregunta: "¿Qué proporciona XMSS en los servicios web?",
        opciones: [
          "Procesamiento de XML",
          "Seguridad a nivel de mensaje",
          "Gestión de bases de datos",
          "Manejo de correos electrónicos"
        ],
        correcta: 1,
        preguntaId: "3060401011"
      },
      {
        id: 3060401001,
        pregunta: "¿Qué servicio se encarga de la ejecución atómica y aislada mediante descriptores?",
        opciones: [
          "JNDI",
          "JTS (Java Transaction Service)",
          "JAAS",
          "JMS"
        ],
        correcta: 1,
        preguntaId: "3060401012"
      }
    ]
  },
  "3060501000e": {
    minimoParaAprobar: 9,
    preguntas: [
      {
        id: 3060501001,
        pregunta: "¿Cuál de los siguientes frameworks NO es de código abierto?",
        opciones: [
          "Apache Struts",
          "Spring",
          "Hibernate",
          "Ninguno, todos son de código abierto"
        ],
        correcta: 3,
        preguntaId: "3060501001"
      },
      {
        id: 3060501001,
        pregunta: "¿Qué característica define a WebWork?",
        opciones: [
          "Es un framework cerrado",
          "Utiliza HMVC (Hierarchical Model View Controller)",
          "No tiene relación con Struts",
          "Es exclusivo para bases de datos"
        ],
        correcta: 1,
        preguntaId: "3060501002"
      },
      {
        id: 3060501002,
        pregunta: "¿En cuántas capas se dividen los patrones de diseño de Java EE?",
        opciones: [
          "Tres",
          "Cuatro",
          "Cinco",
          "Seis"
        ],
        correcta: 2,
        preguntaId: "3060501003"
      },
      {
        id: 3060501002,
        pregunta: "¿Cuál es la función principal del patrón Front Controller?",
        opciones: [
          "Manejar bases de datos",
          "Procesar validaciones de sesión",
          "Aceptar y direccionar todas las peticiones del cliente",
          "Componer vistas"
        ],
        correcta: 2,
        preguntaId: "3060501004"
      },
      {
        id: 3060501002,
        pregunta: "¿Qué diferencia principal existe entre Service to Worker y Dispatcher View?",
        opciones: [
          "No hay diferencia",
          "El Controller no realiza acciones sobre el Helper en Dispatcher View",
          "Service to Worker no usa MVC",
          "Dispatcher View no usa patrones"
        ],
        correcta: 1,
        preguntaId: "3060501005"
      },
      {
        id: 3060501003,
        pregunta: "¿Qué hace el patrón Transfer Object?",
        opciones: [
          "Maneja bases de datos",
          "Encapsula la serialización de objetos para red",
          "Controla el acceso a recursos",
          "Gestiona las vistas"
        ],
        correcta: 1,
        preguntaId: "3060501006"
      },
      {
        id: 3060501003,
        pregunta: "¿Cuál es el propósito del Service Locator?",
        opciones: [
          "Localizar servicios web",
          "Abstraer la utilización de JNDI y la creación de contextos iniciales",
          "Manejar bases de datos",
          "Gestionar vistas"
        ],
        correcta: 1,
        preguntaId: "3060501007"
      },
      {
        id: 3060501004,
        pregunta: "¿Qué propósito tiene el patrón DAO?",
        opciones: [
          "Manejar vistas",
          "Gestionar sesiones",
          "Abstraer y encapsular el acceso a bases de datos",
          "Controlar peticiones del cliente"
        ],
        correcta: 2,
        preguntaId: "3060501008"
      },
      {
        id: 3060501004,
        pregunta: "¿Para qué se utiliza el Service Activator?",
        opciones: [
          "Para activar servicios web",
          "Para recibir peticiones y mensajes asíncronos",
          "Para manejar bases de datos",
          "Para gestionar vistas"
        ],
        correcta: 1,
        preguntaId: "3060501009"
      },
      {
        id: 3060501003,
        pregunta: "¿Qué patrón combina Transfer Object y Session Facade?",
        opciones: [
          "Business Delegate",
          "Transfer Object Assembler",
          "Aggregate Entity",
          "Value List Handler"
        ],
        correcta: 1,
        preguntaId: "3060501010"
      },
      {
        id: 3060501002,
        pregunta: "¿Qué patrón se utiliza especialmente para validación de sesión?",
        opciones: [
          "Front Controller",
          "Decorating Filter/Intercepting Filter",
          "View Helper",
          "Composite View"
        ],
        correcta: 1,
        preguntaId: "3060501011"
      },
      {
        id: 3060501003,
        pregunta: "¿Qué patrón maneja la ejecución de sentencias SQL usando Beans de Sesión?",
        opciones: [
          "DAO",
          "Service Locator",
          "Value List Handler",
          "Business Delegate"
        ],
        correcta: 2,
        preguntaId: "3060501012"
      }
    ]
  },
  "3060601000e": {
    minimoParaAprobar: 8,
    preguntas: [
      {
        id: 3060601001,
        pregunta: "¿En qué se basa el modelo de seguridad híbrido de J2EE y EJBs?",
        opciones: [
          "Solo en autenticación",
          "En autentificación, autorización y confidencialidad/integridad",
          "Solo en autorización",
          "Solo en confidencialidad"
        ],
        correcta: 1,
        preguntaId: "3060601001"
      },
      {
        id: 3060601002,
        pregunta: "¿Cuántos roles principales se mencionan en la arquitectura de seguridad J2EE?",
        opciones: [
          "Dos",
          "Tres",
          "Cuatro",
          "Cinco"
        ],
        correcta: 2,
        preguntaId: "3060601002"
      },
      {
        id: 3060601003,
        pregunta: "¿Qué sucede después de que un usuario se autentica?",
        opciones: [
          "Se le asigna un password",
          "Se le asigna un rol",
          "Se le da acceso total",
          "Se cierra su sesión"
        ],
        correcta: 1,
        preguntaId: "3060601003"
      },
      {
        id: 3060601003,
        pregunta: "¿Quién es responsable del proceso de autenticación en los EJBs?",
        opciones: [
          "El desarrollador",
          "El servidor de aplicaciones",
          "El usuario final",
          "El administrador de sistemas"
        ],
        correcta: 1,
        preguntaId: "3060601004"
      },
      {
        id: 3060601004,
        pregunta: "¿Sobre qué se aplican las políticas de seguridad en J2EE?",
        opciones: [
          "Sobre usuarios individuales",
          "Sobre roles",
          "Sobre passwords",
          "Sobre aplicaciones"
        ],
        correcta: 1,
        preguntaId: "3060601005"
      },
      {
        id: 3060601005,
        pregunta: "¿Qué alternativas ofrece J2EE para la seguridad EIS?",
        opciones: [
          "Solo Container-Managed Sign-On",
          "Solo Component-Managed Sign-On",
          "Container-Managed Sign-On y Component-Managed Sign-On",
          "Ninguna de las anteriores"
        ],
        correcta: 2,
        preguntaId: "3060601006"
      },
      {
        id: 3060601003,
        pregunta: "¿Qué servicios se pueden usar para la autenticación según el texto?",
        opciones: [
          "Solo JNDI",
          "Solo JAAS",
          "JNDI y JAAS",
          "Ninguno de los anteriores"
        ],
        correcta: 2,
        preguntaId: "3060601007"
      },
      {
        id: 3060601001,
        pregunta: "¿Qué tipo de modelo de seguridad implementa J2EE?",
        opciones: [
          "Solo programático",
          "Solo declarativo",
          "Híbrido (programático y declarativo)",
          "Ninguno de los anteriores"
        ],
        correcta: 2,
        preguntaId: "3060601008"
      },
      {
        id: 3060601005,
        pregunta: "En el Container-Managed Sign-On, ¿quién es responsable de enviar los datos de autenticación?",
        opciones: [
          "El usuario",
          "El programador",
          "El servidor",
          "El administrador"
        ],
        correcta: 1,
        preguntaId: "3060601009"
      },
      {
        id: 3060601001,
        pregunta: "¿Qué ejemplo de soporte contra ataques se menciona en el texto?",
        opciones: [
          "Firewall",
          "SSL",
          "Antivirus",
          "VPN"
        ],
        correcta: 1,
        preguntaId: "3060601010"
      }
    ]
  },
  "3060701000e": {
    minimoParaAprobar: 8,
    preguntas: [
      {
        id: 3060701001,
        pregunta: "¿En qué versión de Java EE se incluye JPA?",
        opciones: [
          "Java EE 4",
          "Java EE 5",
          "Java EE 6",
          "Java EE 7"
        ],
        correcta: 1,
        preguntaId: "3060701001"
      },
      {
        id: 3060701001,
        pregunta: "¿En qué JSR está definida la especificación de JPA?",
        opciones: [
          "JSR 210",
          "JSR 220",
          "JSR 230",
          "JSR 240"
        ],
        correcta: 1,
        preguntaId: "3060701002"
      },
      {
        id: 3060701002,
        pregunta: "¿Qué tipos de sistemas de bases de datos se mencionan en el texto?",
        opciones: [
          "Solo SQL",
          "Solo No-SQL",
          "SQL y No-SQL",
          "Ninguno de los anteriores"
        ],
        correcta: 2,
        preguntaId: "3060701003"
      },
      {
        id: 3060701003,
        pregunta: "¿Qué es el 'desfase de impedancia'?",
        opciones: [
          "Un error en la base de datos",
          "La diferencia entre la forma de programar con objetos y la forma de almacenar en bases de datos",
          "Un problema de rendimiento",
          "Un tipo de base de datos"
        ],
        correcta: 1,
        preguntaId: "3060701004"
      },
      {
        id: 3060701003,
        pregunta: "¿Qué son los ORMs?",
        opciones: [
          "Bases de datos relacionales",
          "Mapeadores Objeto-Relacionales",
          "Sistemas de archivos",
          "Lenguajes de programación"
        ],
        correcta: 1,
        preguntaId: "3060701005"
      },
      {
        id: 3060701004,
        pregunta: "¿Qué es JPA fundamentalmente?",
        opciones: [
          "Una base de datos",
          "Una implementación",
          "Una especificación",
          "Un lenguaje de programación"
        ],
        correcta: 2,
        preguntaId: "3060701006"
      },
      {
        id: 3060701005,
        pregunta: "¿Qué proporciona JPA para trabajar con la información?",
        opciones: [
          "Clases concretas",
          "Interfaces",
          "Bases de datos",
          "Implementaciones completas"
        ],
        correcta: 1,
        preguntaId: "3060701007"
      },
      {
        id: 3060701005,
        pregunta: "En la práctica, ¿qué se utiliza para trabajar con JPA?",
        opciones: [
          "JPA directamente",
          "Una biblioteca de persistencia que implemente JPA",
          "Una base de datos SQL",
          "Un sistema NoSQL"
        ],
        correcta: 1,
        preguntaId: "3060701008"
      },
      {
        id: 3060701001,
        pregunta: "¿De qué estándar forma parte JPA?",
        opciones: [
          "Java SE",
          "EJB 2.0",
          "EJB 3.0",
          "Java ME"
        ],
        correcta: 2,
        preguntaId: "3060701009"
      },
      {
        id: 3060701002,
        pregunta: "¿Cuál es el principal objetivo de la persistencia en una aplicación?",
        opciones: [
          "Mejorar el rendimiento",
          "Almacenar datos fuera de la aplicación para su uso posterior",
          "Crear bases de datos",
          "Programar en objetos"
        ],
        correcta: 1,
        preguntaId: "3060701010"
      }
    ]
  },
  "3060801000e": {
    minimoParaAprobar: 9,
    preguntas: [
      {
        id: 3060801001,
        pregunta: "¿Cuál es el propósito principal de la arquitectura .NET?",
        opciones: [
          "Reemplazar Java",
          "Dar solución al cambio de paradigma cliente/servidor hacia el modelo Web",
          "Crear aplicaciones móviles únicamente",
          "Gestionar bases de datos"
        ],
        correcta: 1,
        preguntaId: "3060801001"
      },
      {
        id: 3060801001,
        pregunta: "¿Qué significa que las capas están 'loosely connected'?",
        opciones: [
          "Que están fuertemente acopladas",
          "Que presentan pocas dependencias entre ellas",
          "Que no se pueden comunicar",
          "Que solo funcionan en Windows"
        ],
        correcta: 1,
        preguntaId: "3060801002"
      },
      {
        id: 3060801002,
        pregunta: "¿Qué característica del desarrollo actual NO se menciona en el texto?",
        opciones: [
          "Desarrollo rápido de aplicaciones",
          "Servicio 24/7/365",
          "Programación en ensamblador",
          "Gran número de publicadores de contenido"
        ],
        correcta: 2,
        preguntaId: "3060801003"
      },
      {
        id: 3060801003,
        pregunta: "¿Qué tecnología ofrece .NET para aplicaciones en la nube?",
        opciones: [
          "WinForms",
          "Azure",
          "ASP.NET",
          "SilverLight"
        ],
        correcta: 1,
        preguntaId: "3060801004"
      },
      {
        id: 3060801004,
        pregunta: "¿Qué tipos de clientes se mencionan en la capa de presentación?",
        opciones: [
          "Solo cliente pesado",
          "Solo cliente ligero",
          "Cliente pesado y cliente ligero",
          "Ninguno de los anteriores"
        ],
        correcta: 2,
        preguntaId: "3060801005"
      },
      {
        id: 3060801004,
        pregunta: "¿Qué tecnología se utiliza para el acceso fácil a los datos?",
        opciones: [
          "ADO.NET",
          "XML",
          "OLE.DB",
          "COM+"
        ],
        correcta: 0,
        preguntaId: "3060801006"
      },
      {
        id: 3060801005,
        pregunta: "¿Qué aspectos incluyen las políticas de seguridad?",
        opciones: [
          "Solo autenticación",
          "Autenticación, Autorización, Manejo de Perfiles y Auditoría",
          "Solo autorización",
          "Únicamente manejo de perfiles"
        ],
        correcta: 1,
        preguntaId: "3060801007"
      },
      {
        id: 3060801005,
        pregunta: "¿Qué requisito operacional está relacionado con el tiempo de respuesta de la aplicación?",
        opciones: [
          "Seguridad",
          "Rendimiento",
          "Disponibilidad",
          "Escalabilidad"
        ],
        correcta: 1,
        preguntaId: "3060801008"
      },
      {
        id: 3060801004,
        pregunta: "¿Qué componentes incluye la capa de lógica de negocio?",
        opciones: [
          "Solo Workflows",
          "Workflows, Componentes, Entidades e interfaz de servicios",
          "Solo Componentes",
          "Únicamente interfaces"
        ],
        correcta: 1,
        preguntaId: "3060801009"
      },
      {
        id: 3060801005,
        pregunta: "¿Qué significa la escalabilidad según el texto?",
        opciones: [
          "Aumentar el número de usuarios",
          "Necesidad de recursos adicionales para una carga adicional sin modificar sustancialmente la aplicación",
          "Mejorar el rendimiento",
          "Aumentar la seguridad"
        ],
        correcta: 1,
        preguntaId: "3060801010"
      },
      {
        id: 3060801003,
        pregunta: "¿Qué tecnologías ofrece .NET para aplicaciones de escritorio?",
        opciones: [
          "Solo WinForms",
          "WinForms y WPF",
          "Solo WPF",
          "Azure y WinForms"
        ],
        correcta: 1,
        preguntaId: "3060801011"
      },
      {
        id: 3060801004,
        pregunta: "¿Cuál es el proveedor de datos universal en .NET?",
        opciones: [
          "ADO.NET",
          "XML",
          "OLE.DB",
          "COM+"
        ],
        correcta: 2,
        preguntaId: "3060801012"
      }
    ]
  },
  "3060901000e": {
    minimoParaAprobar: 9,
    preguntas: [
      {
        id: 3060901001,
        pregunta: "¿Cuál fue el motivo principal para el desarrollo de la arquitectura .NET?",
        opciones: [
          "Reemplazar a Linux",
          "Competir con la plataforma Java de Sun Microsystems en el mercado web",
          "Crear un nuevo sistema operativo",
          "Desarrollar solo aplicaciones móviles"
        ],
        correcta: 1,
        preguntaId: "3060901001"
      },
      {
        id: 3060901001,
        pregunta: "¿Qué estándar establece .NET para el transporte de información?",
        opciones: [
          "HTML",
          "JSON",
          "XML",
          "YAML"
        ],
        correcta: 2,
        preguntaId: "3060901002"
      },
      {
        id: 3060901002,
        pregunta: "¿Cuántos componentes principales tiene la infraestructura .NET?",
        opciones: [
          "Dos",
          "Tres",
          "Cuatro",
          "Cinco"
        ],
        correcta: 2,
        preguntaId: "3060901003"
      },
      {
        id: 3060901002,
        pregunta: "¿Cuál es uno de los objetivos principales del Framework .NET?",
        opciones: [
          "Crear aplicaciones solo para Windows",
          "Proporcionar un entorno de ejecución de código seguro",
          "Limitar el uso a un solo lenguaje de programación",
          "Funcionar exclusivamente en servidores Microsoft"
        ],
        correcta: 1,
        preguntaId: "3060901004"
      },
      {
        id: 3060901003,
        pregunta: "¿Qué característica define a J# en .NET?",
        opciones: [
          "Es el único lenguaje soportado",
          "Es un lenguaje transicional para programadores Java y J++",
          "Es incompatible con Java",
          "Es el sucesor de C#"
        ],
        correcta: 1,
        preguntaId: "3060901005"
      },
      {
        id: 3060901004,
        pregunta: "¿Qué tecnología se utiliza en .NET para el manejo de datos?",
        opciones: [
          "ADO.NET",
          "JDBC",
          "MySQL",
          "Oracle"
        ],
        correcta: 0,
        preguntaId: "3060901006"
      },
      {
        id: 3060901004,
        pregunta: "¿Qué componente se utiliza para la administración de componentes Web?",
        opciones: [
          "WebForms",
          "ASP.NET",
          "HTML5",
          "JavaScript"
        ],
        correcta: 1,
        preguntaId: "3060901007"
      },
      {
        id: 3060901005,
        pregunta: "¿Qué es el CLR en .NET?",
        opciones: [
          "Un lenguaje de programación",
          "Una base de datos",
          "El entorno donde se ejecutan todas las aplicaciones .NET",
          "Un sistema operativo"
        ],
        correcta: 2,
        preguntaId: "3060901008"
      },
      {
        id: 3060901005,
        pregunta: "¿Qué tipo de compilador utiliza el CLR para generar código máquina?",
        opciones: [
          "Compilador estático",
          "JIT (Just-In-Time)",
          "Compilador incremental",
          "Compilador interpretado"
        ],
        correcta: 1,
        preguntaId: "3060901009"
      },
      {
        id: 3060901005,
        pregunta: "¿Qué ventaja proporciona el CLR respecto a la plataforma hardware?",
        opciones: [
          "Mayor velocidad de ejecución",
          "Menor uso de memoria",
          "Independencia de la plataforma hardware",
          "Mejor rendimiento gráfico"
        ],
        correcta: 2,
        preguntaId: "3060901010"
      },
      {
        id: 3060901003,
        pregunta: "¿Cuál es el estándar de especificación para C#?",
        opciones: [
          "ISO 9001",
          "ECMA334",
          "IEEE 802",
          "ISO 27001"
        ],
        correcta: 1,
        preguntaId: "3060901011"
      },
      {
        id: 3060901004,
        pregunta: "¿Qué tecnología se utiliza para el despliegue de gráficos en .NET?",
        opciones: [
          "OpenGL",
          "DirectX",
          "GDI+",
          "Vulkan"
        ],
        correcta: 2,
        preguntaId: "3060901012"
      }
    ]
  },
  "3061001000e": {
    minimoParaAprobar: 8,
    preguntas: [
      {
        id: 3061001001,
        pregunta: "¿Qué es ASP.NET?",
        opciones: [
          "Un sistema operativo",
          "Una plataforma para desarrollar y ejecutar aplicaciones en un servidor Web",
          "Un lenguaje de programación",
          "Una base de datos"
        ],
        correcta: 1,
        preguntaId: "3061001001"
      },
      {
        id: 3061001001,
        pregunta: "¿A través de qué servicio se comunican los clientes Web con las aplicaciones ASP.NET?",
        opciones: [
          "Apache",
          "Nginx",
          "Microsoft Internet Information Server (IIS)",
          "Tomcat"
        ],
        correcta: 2,
        preguntaId: "3061001002"
      },
      {
        id: 3061001001,
        pregunta: "¿Qué significa WYSIWYG en el contexto de ASP.NET?",
        opciones: [
          "What You See Is What You Get",
          "Where You Save Is Where You Go",
          "When You Start Is When You Go",
          "Why You See Is What You Get"
        ],
        correcta: 0,
        preguntaId: "3061001003"
      },
      {
        id: 3061001001,
        pregunta: "¿De qué tecnología es evolución ASP.NET?",
        opciones: [
          "PHP",
          "JSP",
          "ASP (Active Server Page)",
          "CGI"
        ],
        correcta: 2,
        preguntaId: "3061001004"
      },
      {
        id: 3061001002,
        pregunta: "¿Cuántas fases principales se mencionan en el ciclo de vida de una página ASP.NET?",
        opciones: [
          "Tres",
          "Cuatro",
          "Cinco",
          "Seis"
        ],
        correcta: 2,
        preguntaId: "3061001005"
      },
      {
        id: 3061001002,
        pregunta: "¿Qué ocurre durante la fase de inicialización en el ciclo de vida de ASP.NET?",
        opciones: [
          "Se ejecuta el código del controlador",
          "Se crean instancias de controles",
          "Se inicia el ciclo de vida de la página",
          "Se realiza la representación"
        ],
        correcta: 2,
        preguntaId: "3061001006"
      },
      {
        id: 3061001001,
        pregunta: "¿Qué elementos incluye ASP.NET para el desarrollo?",
        opciones: [
          "Solo objetos de tiempo de diseño",
          "Solo contexto de tiempo de ejecución",
          "Objetos y controles de tiempo de diseño y un contexto de tiempo de ejecución",
          "Ninguno de los anteriores"
        ],
        correcta: 2,
        preguntaId: "3061001007"
      },
      {
        id: 3061001002,
        pregunta: "¿Qué permite controlar los eventos del ciclo de vida en ASP.NET?",
        opciones: [
          "Ejecutar código propio en cada fase",
          "Solo modificar la interfaz de usuario",
          "Únicamente manejar errores",
          "Cambiar el orden de las fases"
        ],
        correcta: 0,
        preguntaId: "3061001008"
      },
      {
        id: 3061001002,
        pregunta: "¿En qué momento se realiza la restauración y mantenimiento del estado?",
        opciones: [
          "Antes de la inicialización",
          "Después de la creación de instancias de controles",
          "Al final del ciclo de vida",
          "Durante la representación"
        ],
        correcta: 1,
        preguntaId: "3061001009"
      },
      {
        id: 3061001001,
        pregunta: "¿Qué relación tiene ASP.NET con .NET Framework?",
        opciones: [
          "Son tecnologías independientes",
          "Forma parte de .NET Framework y tiene acceso a todas sus funciones",
          "Solo comparten el nombre",
          "Es una alternativa a .NET Framework"
        ],
        correcta: 1,
        preguntaId: "3061001010"
      }
    ]
  },
  "3061101000e": {
    minimoParaAprobar: 15,
    preguntas: [
      {
        id: 3061101001,
        pregunta: "¿Qué característica principal define a ODBC?",
        opciones: [
          "Es una interfaz de alto nivel",
          "Es una interfaz común de acceso a múltiples Bases de Datos usando SQL",
          "Solo funciona con bases de datos Microsoft",
          "No requiere drivers específicos"
        ],
        correcta: 1,
        preguntaId: "3061101001"
      },
      {
        id: 3061101002,
        pregunta: "¿En qué se basa DAO?",
        opciones: [
          "En ODBC directamente",
          "En el Motor Jet (Access)",
          "En OleDB",
          "En ADO.NET"
        ],
        correcta: 1,
        preguntaId: "3061101002"
      },
      {
        id: 3061101003,
        pregunta: "¿Qué mejora introduce RDS sobre ADO?",
        opciones: [
          "Mayor velocidad",
          "Mejor seguridad",
          "Permite RecordSets desconectados",
          "Acceso directo a la base de datos"
        ],
        correcta: 2,
        preguntaId: "3061101003"
      },
      {
        id: 3061101004,
        pregunta: "¿Qué característica principal tiene Entity Framework?",
        opciones: [
          "Solo trabaja con SQL Server",
          "Permite trabajar con datos en forma de objetos y propiedades",
          "No requiere base de datos",
          "Solo funciona con XML"
        ],
        correcta: 1,
        preguntaId: "3061101004"
      },
      {
        id: 3061101005,
        pregunta: "¿Qué función cumple el DataAdapter en ADO.NET?",
        opciones: [
          "Almacena datos",
          "Ejecuta consultas",
          "Actúa como puente entre el DataSet y el origen de datos",
          "Gestiona la seguridad"
        ],
        correcta: 2,
        preguntaId: "3061101005"
      },
      {
        id: 3061101006,
        pregunta: "¿Cuál es la principal característica de ASP.NET Web Forms?",
        opciones: [
          "Usa el patrón MVC",
          "Es el más simple de aprender",
          "Favorece la productividad mediante programación declarativa",
          "No tiene interfaz visual"
        ],
        correcta: 2,
        preguntaId: "3061101006"
      },
      {
        id: 3061101006,
        pregunta: "¿Qué característica define a ASP.NET MVC?",
        opciones: [
          "Programación basada en eventos",
          "No permite pruebas unitarias",
          "Separación entre lógica de presentación, negocio y datos",
          "Es el modelo más antiguo"
        ],
        correcta: 2,
        preguntaId: "3061101007"
      },
      {
        id: 3061101007,
        pregunta: "¿Qué mecanismos de seguridad existen en servicios Web XML?",
        opciones: [
          "Solo SSL",
          "Solo WS-Security",
          "SSL y WS-Security",
          "Ninguno específico"
        ],
        correcta: 2,
        preguntaId: "3061101008"
      },
      {
        id: 3061101008,
        pregunta: "¿Qué característica define a Azure IaaS?",
        opciones: [
          "Solo ofrece software",
          "Proporciona infraestructura segura y escalable",
          "Es más cara que la infraestructura tradicional",
          "No permite entornos híbridos"
        ],
        correcta: 1,
        preguntaId: "3061101009"
      },
      {
        id: 3061101008,
        pregunta: "¿Qué ventaja ofrece Azure PaaS?",
        opciones: [
          "Mayor control sobre el hardware",
          "Menor seguridad",
          "No preocuparse por el mantenimiento de servidores",
          "Costos fijos mensuales"
        ],
        correcta: 2,
        preguntaId: "3061101010"
      },
      {
        id: 3061101009,
        pregunta: "¿Qué función cumple Team Foundation Server?",
        opciones: [
          "Solo control de versiones",
          "Solo pruebas de software",
          "Cubre todo el ciclo de vida de la aplicación",
          "Solo compilación de código"
        ],
        correcta: 2,
        preguntaId: "3061101011"
      },
      {
        id: 3061101009,
        pregunta: "¿Qué característica tiene Visual Studio.NET?",
        opciones: [
          "Solo soporta C#",
          "No tiene depurador",
          "Soporte para múltiples lenguajes .NET",
          "No permite diseño visual"
        ],
        correcta: 2,
        preguntaId: "3061101012"
      },
      {
        id: 3061101010,
        pregunta: "¿Para qué sirve la herramienta SignTool.exe?",
        opciones: [
          "Para compilar código",
          "Para firmar digitalmente archivos",
          "Para depurar aplicaciones",
          "Para crear bases de datos"
        ],
        correcta: 1,
        preguntaId: "3061101013"
      },
      {
        id: 3061101010,
        pregunta: "¿Qué función cumple Ngen.exe?",
        opciones: [
          "Firma digital de archivos",
          "Generación de imágenes nativas",
          "Gestión de ensamblados",
          "Compilación de código fuente"
        ],
        correcta: 1,
        preguntaId: "3061101014"
      },
      {
        id: 3061101007,
        pregunta: "¿Qué modelos de intercambio de mensajes soporta WCF?",
        opciones: [
          "Solo síncrono",
          "Solo asíncrono",
          "Petición-Respuesta, Asíncrono y Duplex",
          "Solo Duplex"
        ],
        correcta: 2,
        preguntaId: "3061101015"
      }
    ]
  },
  "3061201000e": {
    minimoParaAprobar: 12,
    preguntas: [
      {
        id: 3061201001,
        pregunta: "¿Qué es la persistencia del flujo de trabajo?",
        opciones: [
          "Un sistema de archivos",
          "La captura duradera de un estado de la instancia de flujo de trabajo",
          "Una base de datos SQL",
          "Un sistema de backup"
        ],
        correcta: 1,
        preguntaId: "3061201001"
      },
      {
        id: 3061201001,
        pregunta: "¿Qué se necesita para habilitar la persistencia en un flujo de trabajo?",
        opciones: [
          "Una base de datos NoSQL",
          "Un archivo de configuración XML",
          "Asociar un almacén de instancias a WorkflowApplication o WorkflowServiceHost",
          "Un servidor web"
        ],
        correcta: 2,
        preguntaId: "3061201002"
      },
      {
        id: 3061201002,
        pregunta: "¿Cuándo se produce un punto de persistencia implícito?",
        opciones: [
          "Solo al iniciar la aplicación",
          "Al completar actividades TransactionScope",
          "Solo durante el backup",
          "Únicamente al cerrar la aplicación"
        ],
        correcta: 1,
        preguntaId: "3061201003"
      },
      {
        id: 3061201003,
        pregunta: "¿Qué cambio importante se introdujo en la seguridad de .NET Framework 4?",
        opciones: [
          "Eliminación de toda la seguridad",
          "Las aplicaciones de escritorio se ejecutan como aplicaciones de plena confianza",
          "Mayor restricción en los permisos",
          "Eliminación de la autenticación"
        ],
        correcta: 1,
        preguntaId: "3061201004"
      },
      {
        id: 3061201004,
        pregunta: "¿Qué tipos de autenticación Windows soporta ASP.NET?",
        opciones: [
          "Solo básica",
          "Solo NTLM",
          "Básica, implícita y autenticación integrada (NTLM o Kerberos)",
          "Ninguna de las anteriores"
        ],
        correcta: 2,
        preguntaId: "3061201005"
      },
      {
        id: 3061201005,
        pregunta: "¿Para qué sirve la herramienta Certmgr.exe?",
        opciones: [
          "Para firmar código",
          "Para administrar certificados, CTLs y CRLs",
          "Para crear bases de datos",
          "Para gestionar usuarios"
        ],
        correcta: 1,
        preguntaId: "3061201006"
      },
      {
        id: 3061201005,
        pregunta: "¿Qué función cumple SignTool.exe?",
        opciones: [
          "Gestionar usuarios",
          "Crear certificados",
          "Firmar digitalmente archivos y agregar marcas de tiempo",
          "Administrar bases de datos"
        ],
        correcta: 2,
        preguntaId: "3061201007"
      },
      {
        id: 3061201006,
        pregunta: "¿Qué proporciona el espacio de nombres System.Security.Cryptography?",
        opciones: [
          "Solo cifrado básico",
          "Clases para administrar detalles de criptografía",
          "Únicamente autenticación",
          "Solo gestión de usuarios"
        ],
        correcta: 1,
        preguntaId: "3061201008"
      },
      {
        id: 3061201006,
        pregunta: "¿Qué tipos de cifrado soporta .NET Framework?",
        opciones: [
          "Solo cifrado simétrico",
          "Solo cifrado asimétrico",
          "Cifrado de clave secreta, pública, firmas digitales y valores hash",
          "Ninguno de los anteriores"
        ],
        correcta: 2,
        preguntaId: "3061201009"
      },
      {
        id: 3061201001,
        pregunta: "¿Qué permite hacer un participante de persistencia?",
        opciones: [
          "Solo almacenar datos",
          "Guardar datos serializables personalizados y cargarlos del almacén",
          "Únicamente eliminar datos",
          "Modificar el flujo de trabajo"
        ],
        correcta: 1,
        preguntaId: "3061201010"
      },
      {
        id: 3061201003,
        pregunta: "¿Dónde deben ejecutarse las aplicaciones de confianza parcial en .NET Framework 4?",
        opciones: [
          "En cualquier lugar",
          "En un espacio aislado",
          "Solo en servidores",
          "En la nube"
        ],
        correcta: 1,
        preguntaId: "3061201011"
      },
      {
        id: 3061201006,
        pregunta: "¿Qué característica tienen las clases de algoritmos de cifrado en .NET?",
        opciones: [
          "Requieren configuración manual",
          "No generan claves",
          "Generan automáticamente claves con propiedades predeterminadas seguras",
          "Solo funcionan con cifrado simétrico"
        ],
        correcta: 2,
        preguntaId: "3061201012"
      }
    ]
  },
  "3061301000e": {
    minimoParaAprobar: 8,
    preguntas: [
      {
        id: 3061301001,
        pregunta: "¿Cuál es la diferencia fundamental en el tipo de tecnología entre .NET y J2EE?",
        opciones: [
          ".NET es un estándar y J2EE un producto",
          ".NET es un producto y J2EE un estándar",
          "Ambos son productos",
          "Ambos son estándares"
        ],
        correcta: 1,
        preguntaId: "3061301001"
      },
      {
        id: 3061301001,
        pregunta: "¿Qué diferencia existe en cuanto a los proveedores de cada tecnología?",
        opciones: [
          "Ambas son ofrecidas por múltiples empresas",
          ".NET es ofrecido por Microsoft mientras J2EE por más de 35 empresas",
          "J2EE es ofrecido por Microsoft mientras .NET por múltiples empresas",
          "Ambas son ofrecidas solo por Microsoft"
        ],
        correcta: 1,
        preguntaId: "3061301002"
      },
      {
        id: 3061301001,
        pregunta: "¿Qué similitud existe en los servicios web entre .NET y J2EE?",
        opciones: [
          "Usan diferentes estándares",
          "Solo .NET soporta SOAP",
          "Ambos utilizan SOAP, WSDL y UDDI",
          "Solo J2EE soporta servicios web"
        ],
        correcta: 2,
        preguntaId: "3061301003"
      },
      {
        id: 3061301001,
        pregunta: "¿Cómo se diferencian en el acceso a bases de datos?",
        opciones: [
          ".NET usa ADO.Net mientras J2EE usa JDBC y SQL/J",
          "Ambos usan JDBC",
          "Ambos usan ADO.Net",
          "No hay diferencia en el acceso a bases de datos"
        ],
        correcta: 0,
        preguntaId: "3061301004"
      },
      {
        id: 3061301001,
        pregunta: "¿Qué diferencia existe en los entornos de desarrollo?",
        opciones: [
          "Ambos usan Visual Studio",
          ".NET usa Visual Studio mientras J2EE depende del fabricante",
          "Ambos dependen del fabricante",
          "J2EE usa Visual Studio mientras .NET depende del fabricante"
        ],
        correcta: 1,
        preguntaId: "3061301005"
      },
      {
        id: 3061301001,
        pregunta: "¿Cómo se comparan los intérpretes de ambas tecnologías?",
        opciones: [
          "Son el mismo intérprete",
          ".NET usa JRE y J2EE usa CLR",
          ".NET usa CLR y J2EE usa JRE",
          "No utilizan intérpretes"
        ],
        correcta: 2,
        preguntaId: "3061301006"
      },
      {
        id: 3061301001,
        pregunta: "¿Qué diferencia existe en el manejo de páginas dinámicas?",
        opciones: [
          ".NET usa JSP y J2EE usa ASP.Net",
          ".NET usa ASP.Net mientras J2EE usa Servlets y JSP",
          "Ambos usan ASP.Net",
          "Ambos usan JSP"
        ],
        correcta: 1,
        preguntaId: "3061301007"
      },
      {
        id: 3061301001,
        pregunta: "¿Cómo se diferencian en el lenguaje intermedio?",
        opciones: [
          ".NET usa Bytecode y J2EE usa IL",
          "Ambos usan Bytecode",
          ".NET usa IL y J2EE usa Bytecode",
          "No utilizan lenguaje intermedio"
        ],
        correcta: 2,
        preguntaId: "3061301008"
      },
      {
        id: 3061301001,
        pregunta: "¿Qué diferencia existe en los servicios de directorio?",
        opciones: [
          ".NET usa JNDI y J2EE usa ADSI",
          ".NET usa ADSI y J2EE usa JNDI",
          "Ambos usan JNDI",
          "Ambos usan ADSI"
        ],
        correcta: 1,
        preguntaId: "3061301009"
      },
      {
        id: 3061301001,
        pregunta: "¿Cómo se comparan en términos de lenguajes de programación soportados?",
        opciones: [
          ".NET soporta solo C# mientras J2EE soporta múltiples lenguajes",
          "Ambos soportan múltiples lenguajes",
          ".NET soporta múltiples lenguajes mientras J2EE usa solo Java",
          "Ambos soportan solo un lenguaje"
        ],
        correcta: 2,
        preguntaId: "3061301010"
      }
    ]
  }

  


  };