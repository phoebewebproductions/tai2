const preguntas = {
    "4050101000e": {
      minimoParaAprobar: 7,
      preguntas: [
        {
          id: "4050101001",
          pregunta: "¿Qué es un activo según el Anexo IV del Esquema Nacional de Seguridad?",
          opciones: [
            "Un componente o funcionalidad de un sistema de información susceptible de ser atacado con consecuencias para la organización",
            "Un elemento físico que forma parte del inventario de la organización",
            "Un recurso económico que genera beneficios a la organización",
            "Un componente de hardware que almacena información crítica"
          ],
          correcta: 0,
          preguntaId: "40501010"
        },
        {
          id: "4050101001",
          pregunta: "¿Cómo se define el riesgo en el contexto de seguridad de la información?",
          opciones: [
            "La probabilidad de que ocurra un desastre natural que afecte a los sistemas",
            "El coste económico asociado a un incidente de seguridad",
            "Estimación del grado de exposición a que una amenaza se materialice sobre uno o más activos",
            "La cantidad de vulnerabilidades detectadas en un sistema informático"
          ],
          correcta: 2,
          preguntaId: "40501010"
        },
        {
          id: "4050101001",
          pregunta: "¿Qué es el análisis de riesgos según la definición proporcionada?",
          opciones: [
            "La evaluación económica de las pérdidas potenciales por fallos de seguridad",
            "El estudio de las consecuencias previsibles de un posible incidente de seguridad",
            "La identificación de todas las vulnerabilidades de un sistema",
            "El proceso de documentación de incidentes de seguridad pasados"
          ],
          correcta: 1,
          preguntaId: "40501010"
        },
        {
          id: "4050101002",
          pregunta: "¿Qué es OWASP?",
          opciones: [
            "Un software antivirus para aplicaciones web",
            "Una organización sin ánimo de lucro que ayuda con la seguridad de las aplicaciones",
            "Un estándar internacional de seguridad informática",
            "Un protocolo de seguridad para redes corporativas"
          ],
          correcta: 1,
          preguntaId: "40501010"
        },
        {
          id: "4050101002",
          pregunta: "¿Con qué frecuencia se actualiza el OWASP Top 10?",
          opciones: [
            "Anualmente",
            "Cada dos años",
            "Cada tres o cuatro años",
            "Cada cinco años"
          ],
          correcta: 2,
          preguntaId: "40501010"
        },
        {
          id: "4050101002",
          pregunta: "¿Cuál de los siguientes NO es un riesgo incluido en el OWASP Top 10 de 2021?",
          opciones: [
            "Broken Access Control",
            "Injection",
            "Cross-Site Scripting (XSS)",
            "Insecure Design"
          ],
          correcta: 2,
          preguntaId: "40501010"
        },
        {
          id: "4050101003",
          pregunta: "¿Qué estándar determina las dimensiones que debe abarcar la seguridad de la información?",
          opciones: [
            "ISO/IEC 27001",
            "OWASP Top 10",
            "NIST 800-53",
            "ENS (Esquema Nacional de Seguridad)"
          ],
          correcta: 0,
          preguntaId: "40501010"
        },
        {
          id: "4050101003",
          pregunta: "¿Qué significa el acrónimo CIA en el contexto de seguridad de la información?",
          opciones: [
            "Critical Information Assets",
            "Computer Intelligence Agency",
            "Confidentiality, Integrity, Availability",
            "Cyber Infrastructure Assessment"
          ],
          correcta: 2,
          preguntaId: "40501010"
        },
        {
          id: "4050101003",
          pregunta: "¿Qué dimensiones adicionales añade el ENS a las tres dimensiones básicas de seguridad?",
          opciones: [
            "Autenticidad y Trazabilidad",
            "Responsabilidad y Cumplimiento",
            "Privacidad y No repudio",
            "Auditabilidad y Resiliencia"
          ],
          correcta: 0,
          preguntaId: "40501010"
        },
        {
          id: "4050101003",
          pregunta: "¿A qué se refiere la dimensión de disponibilidad en seguridad de la información?",
          opciones: [
            "A que la información no ha sido manipulada de manera no autorizada",
            "Al acceso a la información únicamente por aquellos que están autorizados",
            "Al acceso a la información y sistemas por las personas autorizadas cuando lo necesitan",
            "A que los usuarios que tienen acceso son quienes dicen ser"
          ],
          correcta: 2,
          preguntaId: "40501010"
        },
        {
          id: "4050101004",
          pregunta: "¿Qué es la seguridad física en los sistemas de información?",
          opciones: [
            "Aspectos relacionados con la preservación de los datos frente a amenazas de naturaleza física",
            "Medidas para proteger el software contra virus y malware",
            "Políticas de contraseñas y control de acceso lógico",
            "Protocolos de comunicación segura entre sistemas"
          ],
          correcta: 0,
          preguntaId: "40501010"
        },
        {
          id: "4050101004",
          pregunta: "¿Cuál de las siguientes NO es una amenaza de naturaleza física?",
          opciones: [
            "Incendios",
            "Inundaciones",
            "Ataques de denegación de servicio",
            "Corte del fluido eléctrico"
          ],
          correcta: 2,
          preguntaId: "40501010"
        },
        {
          id: "4050101004",
          pregunta: "¿Qué es la seguridad lógica en los sistemas de información?",
          opciones: [
            "Medidas para proteger los equipos físicos",
            "Aspectos relacionados con la protección de datos frente a ciberataques y amenazas lógicas",
            "Sistemas de vigilancia y control de acceso físico",
            "Protección contra desastres naturales"
          ],
          correcta: 1,
          preguntaId: "40501010"
        },
        {
          id: "4050101005",
          pregunta: "Según ISO/IEC 27001, ¿qué se debe utilizar para proteger áreas que contienen información o infraestructuras de procesamiento?",
          opciones: [
            "Un perímetro de seguridad física",
            "Sistemas de detección de intrusos",
            "Software antivirus",
            "Políticas de contraseñas robustas"
          ],
          correcta: 0,
          preguntaId: "40501010"
        },
        {
          id: "4050101005",
          pregunta: "¿Qué medida de seguridad física se debe aplicar a los puntos de acceso al público?",
          opciones: [
            "Deben estar abiertos para facilitar el acceso",
            "Deben estar controlados o aislados para prevenir el acceso no autorizado",
            "Deben tener sistemas de autenticación biométrica obligatoriamente",
            "Deben estar cerrados permanentemente"
          ],
          correcta: 1,
          preguntaId: "40501010"
        },
        {
          id: "4050101006",
          pregunta: "Según las medidas de seguridad del equipamiento, ¿qué debe hacerse con los equipos sin personal asignado?",
          opciones: [
            "Deben apagarse completamente",
            "Deben contar con protección segura",
            "Deben ser desconectados de la red",
            "Deben ser trasladados a un área segura"
          ],
          correcta: 1,
          preguntaId: "40501010"
        },
        {
          id: "4050101006",
          pregunta: "¿Qué debe verificarse en los equipos que contienen medios de almacenamiento antes de su eliminación definitiva?",
          opciones: [
            "Que estén completamente funcionales",
            "Que los datos confidenciales y software con licencia se hayan eliminado o sobrescrito de manera segura",
            "Que tengan todas sus piezas originales",
            "Que estén registrados en el inventario de la organización"
          ],
          correcta: 1,
          preguntaId: "40501010"
        },
        {
          id: "4050101006",
          pregunta: "¿A qué se refiere la política de 'escritorio y pantallas limpios'?",
          opciones: [
            "A la limpieza física de los equipos informáticos",
            "A no dejar información sensible visible en escritorios o pantallas",
            "A la organización del espacio de trabajo",
            "A la eliminación de archivos temporales del sistema"
          ],
          correcta: 1,
          preguntaId: "40501010"
        },
        {
          id: "4050101007",
          pregunta: "¿Cuál de las siguientes es una medida de seguridad lógica?",
          opciones: [
            "Protección contra incendios",
            "Control de temperatura en salas de servidores",
            "Uso de programas antivirus",
            "Perímetro de seguridad física"
          ],
          correcta: 2,
          preguntaId: "40501010"
        },
        {
          id: "4050101007",
          pregunta: "¿Qué elemento de seguridad perimetral se utiliza para proteger las redes de comunicaciones?",
          opciones: [
            "Sistemas de alimentación ininterrumpida (SAI)",
            "Firewalls y sistemas de detección de intrusiones",
            "Tarjetas identificativas",
            "Cámaras de vigilancia"
          ],
          correcta: 1,
          preguntaId: "40501010"
        }
      ]
    },
    "4050102000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050102001",
            pregunta: "Según la norma ISO/IEC 27001, ¿qué es una vulnerabilidad?",
            opciones: [
              "Debilidad de un activo o control que puede ser explotada por una o más amenazas",
              "Causa potencial de un incidente no deseado que puede provocar daños a un sistema",
              "Programa malicioso que aprovecha fallos de seguridad",
              "Consecuencia de la materialización de una amenaza sobre un activo"
            ],
            correcta: 0,
            preguntaId: "40501020"
          },
          {
            id: "4050102001",
            pregunta: "¿Qué caracteriza a una vulnerabilidad de día cero o Zero Day?",
            opciones: [
              "Es una vulnerabilidad que solo afecta a sistemas operativos antiguos",
              "Es una vulnerabilidad que acaba de ser descubierta y que aún no tiene un parche que la solucione",
              "Es una vulnerabilidad que solo puede ser explotada durante el primer día de su descubrimiento",
              "Es una vulnerabilidad que afecta exclusivamente a dispositivos móviles"
            ],
            correcta: 1,
            preguntaId: "40501020"
          },
          {
            id: "4050102002",
            pregunta: "¿Qué es un exploit en el contexto de la seguridad informática?",
            opciones: [
              "Un tipo de malware que cifra los archivos del sistema",
              "Un programa antivirus especializado en detectar vulnerabilidades",
              "Un fragmento de código destinado a aprovechar una vulnerabilidad conocida de una aplicación",
              "Un sistema de autenticación de doble factor"
            ],
            correcta: 2,
            preguntaId: "40501020"
          },
          {
            id: "4050102002",
            pregunta: "¿Qué es un payload en el contexto de los exploits?",
            opciones: [
              "El código que detecta la vulnerabilidad en el sistema",
              "La carga útil que ofrece al atacante algún tipo de acceso y/o control del equipo comprometido",
              "El programa que repara la vulnerabilidad explotada",
              "El mensaje de error que aparece cuando falla un exploit"
            ],
            correcta: 1,
            preguntaId: "40501020"
          },
          {
            id: "4050102002",
            pregunta: "¿Qué es un backdoor o puerta trasera?",
            opciones: [
              "Un método por el que un usuario no autorizado es capaz de evitar las medidas de seguridad usuales",
              "Una vulnerabilidad que solo afecta a la parte trasera de los servidores",
              "Un tipo de firewall que protege contra accesos no autorizados",
              "Un programa que detecta intentos de acceso no autorizados"
            ],
            correcta: 0,
            preguntaId: "40501020"
          },
          {
            id: "4050102003",
            pregunta: "¿Qué tipo de ataque envía un paquete TCP SYN con la misma dirección IP y número de puerto en los campos origen y destino?",
            opciones: [
              "Ping de la muerte",
              "Land attack",
              "Wannacry",
              "Smurf attack"
            ],
            correcta: 1,
            preguntaId: "40501020"
          },
          {
            id: "4050102003",
            pregunta: "¿Qué caracteriza al ataque conocido como 'Ping de la muerte'?",
            opciones: [
              "Envía un paquete ping cuyo tamaño real supera el máximo autorizado (64 KB)",
              "Envía múltiples paquetes ping a una dirección de broadcast",
              "Cifra los archivos del sistema y pide un rescate",
              "Utiliza paquetes ping para saturar el ancho de banda de la red"
            ],
            correcta: 0,
            preguntaId: "40501020"
          },
          {
            id: "4050102004",
            pregunta: "Según la norma ISO/IEC 27001, ¿qué es una amenaza?",
            opciones: [
              "Un programa malicioso que afecta a los sistemas informáticos",
              "Una debilidad en un activo o control que puede ser explotada",
              "Causa potencial de un incidente no deseado, que puede provocar daños a un sistema o a la organización",
              "La consecuencia de un ataque informático exitoso"
            ],
            correcta: 2,
            preguntaId: "40501020"
          },
          {
            id: "4050102004",
            pregunta: "¿Cómo se denomina la consecuencia de la materialización de una amenaza sobre un activo?",
            opciones: [
              "Vulnerabilidad",
              "Riesgo",
              "Impacto",
              "Exploit"
            ],
            correcta: 2,
            preguntaId: "40501020"
          },
          {
            id: "4050102005",
            pregunta: "¿Cuál de las siguientes NO es una amenaza accidental?",
            opciones: [
              "Terremotos",
              "Corte del fluido eléctrico",
              "Ataque de denegación de servicio (DoS)",
              "Avería de servidores"
            ],
            correcta: 2,
            preguntaId: "40501020"
          },
          {
            id: "4050102006",
            pregunta: "¿Qué significa APT en el contexto de la seguridad informática?",
            opciones: [
              "Advanced Persistent Threats (Amenazas Persistentes Avanzadas)",
              "Automatic Protection Technology (Tecnología de Protección Automática)",
              "Application Programming Toolkit (Kit de Programación de Aplicaciones)",
              "Authorized Penetration Testing (Pruebas de Penetración Autorizadas)"
            ],
            correcta: 0,
            preguntaId: "40501020"
          },
          {
            id: "4050102006",
            pregunta: "¿En qué consiste el ataque conocido como 'Baiting'?",
            opciones: [
              "Enviar correos electrónicos suplantando la identidad de un sitio confiable",
              "Ofrecer un cebo (como un disco USB infectado) que la víctima desee",
              "Saturar los servicios del sistema para que queden inhabilitados",
              "Escuchar la conversación no cifrada entre dos extremos"
            ],
            correcta: 1,
            preguntaId: "40501020"
          },
          {
            id: "4050102006",
            pregunta: "¿Qué técnica consiste en determinar si un puerto en un servidor está abierto, cerrado o protegido por un firewall?",
            opciones: [
              "Port mapping",
              "Sniffing",
              "SQL injection",
              "Path traversal"
            ],
            correcta: 0,
            preguntaId: "40501020"
          },
          {
            id: "4050102007",
            pregunta: "¿Qué ataque consiste en escuchar la conversación no cifrada entre dos extremos que usan claves para identificarse?",
            opciones: [
              "Phishing",
              "Spoofing",
              "Man-in-the-middle",
              "Session Hijacking"
            ],
            correcta: 2,
            preguntaId: "40501020"
          },
          {
            id: "4050102007",
            pregunta: "¿Qué diferencia principal existe entre Phishing y Smshing?",
            opciones: [
              "El phishing es más efectivo que el smshing",
              "El phishing utiliza correos electrónicos mientras que el smshing utiliza mensajes SMS",
              "El phishing afecta solo a empresas mientras que el smshing afecta a particulares",
              "El phishing es ilegal mientras que el smshing es una técnica de marketing permitida"
            ],
            correcta: 1,
            preguntaId: "40501020"
          },
          {
            id: "4050102007",
            pregunta: "¿Qué ataque se basa en engañar al usuario para que haga clic en un objeto diferente al que está percibiendo?",
            opciones: [
              "Clickjacking",
              "Pharming",
              "Whaling",
              "Vishing"
            ],
            correcta: 0,
            preguntaId: "40501020"
          },
          {
            id: "4050102008",
            pregunta: "¿Cuál es el objetivo principal de un ataque de Denegación de Servicio (DoS)?",
            opciones: [
              "Robar información confidencial",
              "Suplantar la identidad de un usuario legítimo",
              "Saturar los servicios del sistema para que queden inhabilitados",
              "Cifrar los archivos del sistema para pedir un rescate"
            ],
            correcta: 2,
            preguntaId: "40501020"
          },
          {
            id: "4050102008",
            pregunta: "¿En qué consiste un ataque Smurf?",
            opciones: [
              "Enviar un paquete ping de gran tamaño para provocar la caída del sistema",
              "Dirigir paquetes ICMP tipo 'echo request' a una dirección IP de difusión usando como origen la IP de la víctima",
              "Utilizar los recursos de la máquina para extraer criptomonedas",
              "Cifrar los archivos del sistema y pedir un rescate"
            ],
            correcta: 1,
            preguntaId: "40501020"
          },
          {
            id: "4050102009",
            pregunta: "¿Qué tipo de malware necesita ser ejecutado por el usuario pensando que es una aplicación legítima?",
            opciones: [
              "Virus",
              "Gusano (worm)",
              "Rootkit",
              "Ransomware"
            ],
            correcta: 0,
            preguntaId: "40501020"
          },
          {
            id: "4050102009",
            pregunta: "¿Qué tipo de malware efectúa una encriptación con clave de los archivos de una red y suele pedir un rescate?",
            opciones: [
              "Troyano",
              "Gusano",
              "Ransomware",
              "Keylogger"
            ],
            correcta: 2,
            preguntaId: "40501020"
          }
        ]
      },
      "4050201000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050201001",
            pregunta: "¿Qué es la criptografía?",
            opciones: [
              "La alteración de la información mediante su combinación con otra información a la que denominamos clave",
              "El estudio de los sistemas de comunicación seguros",
              "La técnica para ocultar mensajes en objetos de forma que pasen inadvertidos",
              "El proceso de cifrado de datos mediante algoritmos matemáticos"
            ],
            correcta: 0,
            preguntaId: "40502010"
          },
          {
            id: "4050201002",
            pregunta: "¿Cuál es el punto débil de la criptografía simétrica?",
            opciones: [
              "La velocidad de cifrado y descifrado",
              "El intercambio de la clave, ya que en ese proceso la clave puede ser interceptada",
              "La complejidad de los algoritmos utilizados",
              "El tamaño de los bloques de cifrado"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201003",
            pregunta: "¿Qué caracteriza al modo de operación Cipher-block chaining (CBC)?",
            opciones: [
              "Cada bloque se cifra por separado utilizando la misma clave",
              "A cada bloque de texto plano antes de ser cifrado se le aplica una operación XOR con el bloque cifrado anterior",
              "Se usa un contador combinado con un número aleatorio para generar el flujo de claves",
              "El flujo de claves se genera cifrando el bloque anterior del flujo de claves"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201004",
            pregunta: "¿Cuál de los siguientes algoritmos de cifrado simétrico utiliza bloques de 128 bits y claves de 128, 192 y 256 bits?",
            opciones: [
              "DES",
              "3DES",
              "IDEA",
              "AES (Rijndael)"
            ],
            correcta: 3,
            preguntaId: "40502010"
          },
          {
            id: "4050201004",
            pregunta: "¿Qué algoritmo de cifrado simétrico es considerado actualmente inseguro?",
            opciones: [
              "AES",
              "DES",
              "Twofish",
              "Camellia"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201005",
            pregunta: "¿Qué caracteriza al cifrado de flujo frente al cifrado por bloques?",
            opciones: [
              "Es más seguro que el cifrado por bloques",
              "No existen bloques, sino que un flujo de claves opera sobre dígitos individuales",
              "Siempre utiliza claves más largas",
              "Solo puede ser utilizado en comunicaciones síncronas"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201005",
            pregunta: "¿Qué algoritmo es un ejemplo de uso de cifrado de flujo?",
            opciones: [
              "AES",
              "RSA",
              "ChaCha20",
              "MD5"
            ],
            correcta: 2,
            preguntaId: "40502010"
          },
          {
            id: "4050201006",
            pregunta: "En la criptografía asimétrica, ¿qué se consigue al cifrar un mensaje con la clave pública del destinatario?",
            opciones: [
              "Autenticación del emisor",
              "Confidencialidad",
              "Integridad del mensaje",
              "No repudio"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201006",
            pregunta: "En la criptografía asimétrica, ¿qué se consigue al cifrar un mensaje con la clave privada del emisor?",
            opciones: [
              "Confidencialidad",
              "Autenticación del emisor",
              "Ocultación del mensaje",
              "Cifrado más rápido"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201007",
            pregunta: "¿Qué significa PKCS en el contexto de la criptografía?",
            opciones: [
              "Public Key Cryptographic Standard",
              "Private Key Certification System",
              "Protected Key Control Service",
              "Public Key Control System"
            ],
            correcta: 0,
            preguntaId: "40502010"
          },
          {
            id: "4050201008",
            pregunta: "¿En qué función matemática se basa el algoritmo RSA?",
            opciones: [
              "Logaritmos discretos",
              "Factorización de enteros",
              "Logaritmos discretos de curva elíptica",
              "Transformada rápida de Fourier"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201008",
            pregunta: "¿Qué algoritmo asimétrico puede usar tanto logaritmos discretos como logaritmos discretos de curva elíptica?",
            opciones: [
              "RSA",
              "ElGamal",
              "DSA",
              "Diffie-Hellman"
            ],
            correcta: 3,
            preguntaId: "40502010"
          },
          {
            id: "4050201009",
            pregunta: "¿Qué es la criptografía híbrida?",
            opciones: [
              "Un método que usa tanto el cifrado simétrico como el asimétrico",
              "Un tipo de cifrado que combina algoritmos de diferentes países",
              "Un sistema que utiliza múltiples claves simétricas",
              "Un enfoque que mezcla cifrado por bloques y cifrado de flujo"
            ],
            correcta: 0,
            preguntaId: "40502010"
          },
          {
            id: "4050201009",
            pregunta: "¿Cuál de los siguientes es un ejemplo del uso de la criptografía híbrida?",
            opciones: [
              "AES",
              "RSA",
              "PGP (Pretty Good Privacy)",
              "MD5"
            ],
            correcta: 2,
            preguntaId: "40502010"
          },
          {
            id: "4050201010",
            pregunta: "¿Qué es una función hash?",
            opciones: [
              "Un algoritmo de cifrado simétrico",
              "Una función que tiene como entrada un conjunto de caracteres y lo convierte en otro conjunto de caracteres de longitud fija",
              "Un método para intercambiar claves de forma segura",
              "Un sistema de autenticación de usuarios"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201010",
            pregunta: "¿Cuál de las siguientes NO es una propiedad fundamental de las funciones hash en criptografía?",
            opciones: [
              "Resistencia a las colisiones",
              "Función de un único sentido",
              "Velocidad de procesamiento",
              "Distribución uniforme de los resultados"
            ],
            correcta: 3,
            preguntaId: "40502010"
          },
          {
            id: "4050201011",
            pregunta: "¿Cuál de las siguientes funciones hash tiene un tamaño de resumen de 160 bits?",
            opciones: [
              "MD5",
              "SHA1",
              "SHA-256",
              "BLAKE-512"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201011",
            pregunta: "¿Qué función hash está basada en el cifrado de flujo ChaCha y es más rápida que MD-5, SHA1 y SHA2?",
            opciones: [
              "SHA3",
              "BLAKE",
              "Poly1305",
              "RIPEMD-160"
            ],
            correcta: 1,
            preguntaId: "40502010"
          },
          {
            id: "4050201012",
            pregunta: "¿Qué es la esteganografía?",
            opciones: [
              "Una técnica de cifrado de datos",
              "Un método para generar claves criptográficas",
              "Una técnica que permite ocultar mensajes en objetos de forma que pasen inadvertidos",
              "Un sistema para detectar intrusiones en redes"
            ],
            correcta: 2,
            preguntaId: "40502010"
          },
          {
            id: "4050201012",
            pregunta: "¿Cuál de las siguientes es una técnica de esteganografía?",
            opciones: [
              "Cifrado por bloques",
              "Uso del bit menos significativo (LSB) en cada pixel de una imagen digital",
              "Generación de funciones hash",
              "Intercambio de claves Diffie-Hellman"
            ],
            correcta: 1,
            preguntaId: "40502010"
          }
        ]
      },
      "4050202000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050202001",
            pregunta: "¿En qué capa del modelo OSI opera IPsec?",
            opciones: [
              "Capa 2 (Enlace de datos)",
              "Capa 3 (Red)",
              "Capa 4 (Transporte)",
              "Capa 7 (Aplicación)"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202002",
            pregunta: "¿Qué tipo de intercambio de claves emplea IKE en IPsec?",
            opciones: [
              "RSA",
              "Diffie-Hellman",
              "ElGamal",
              "DSA"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202002",
            pregunta: "¿Cuál es el objetivo principal de IKE en IPsec?",
            opciones: [
              "Cifrar los datos transmitidos",
              "Autenticar a los usuarios",
              "Generar la asociación de seguridad (SA) con el conjunto de algoritmos y parámetros necesarios para AH y ESP",
              "Establecer un túnel VPN"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202003",
            pregunta: "¿Cuántos mensajes necesita IKEv2 en la fase 1, en comparación con la versión inicial?",
            opciones: [
              "2 mensajes, en la versión inicial se necesitaban 4",
              "4 mensajes, en la versión inicial se necesitaban 8",
              "6 mensajes, en la versión inicial se necesitaban 12",
              "8 mensajes, en la versión inicial se necesitaban 16"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202004",
            pregunta: "¿Qué garantiza el protocolo Authentication Header (AH) en IPsec?",
            opciones: [
              "Confidencialidad, integridad y autenticación",
              "Solo confidencialidad",
              "Integridad, sin conexión y autenticación de los datos de origen",
              "Solo cifrado de datos"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202004",
            pregunta: "¿Por qué el protocolo AH no funciona bien con NAT?",
            opciones: [
              "Porque AH no es compatible con IPv4",
              "Porque hace el hash de la dirección IP y el número de puerto del paquete, y como estos pueden cambiar con NAT, la comprobación del hash fallará",
              "Porque AH solo funciona en modo túnel",
              "Porque AH requiere más ancho de banda que ESP"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202005",
            pregunta: "¿Qué característica tiene el protocolo ESP que no tiene AH?",
            opciones: [
              "Autenticación de origen",
              "Integridad de datos",
              "Protección de confidencialidad (cifrado de datos)",
              "Compatibilidad con IPv6"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202006",
            pregunta: "En el modo transporte de IPsec, ¿qué parte del paquete IP es cifrada o autenticada?",
            opciones: [
              "Todo el paquete IP (datos más cabeceras)",
              "Solo la cabecera IP",
              "Solo la carga útil del paquete IP",
              "Solo la información de enrutamiento"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202006",
            pregunta: "¿Para qué tipo de comunicaciones se utiliza el modo túnel de IPsec?",
            opciones: [
              "Comunicaciones ordenador a ordenador",
              "Comunicaciones red a red (túneles seguros entre routers)",
              "Solo para comunicaciones IPv6",
              "Solo para comunicaciones inalámbricas"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202007",
            pregunta: "¿En qué nivel del modelo OSI opera SSL?",
            opciones: [
              "Nivel 3 (Red)",
              "Nivel 4 (Transporte)",
              "Nivel 5 (Sesión)",
              "Nivel 7 (Aplicación)"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202008",
            pregunta: "¿Cuál es la primera fase del funcionamiento de SSL?",
            opciones: [
              "Cifrado del tráfico basado en cifrado simétrico",
              "Obtención de una clave maestra",
              "Opcionalmente el servidor anuncia su disponibilidad con el mensaje HelloRequest",
              "Intercambio de certificados digitales"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202009",
            pregunta: "¿Cuál de las siguientes NO es una opción criptográfica disponible en SSL/TLS?",
            opciones: [
              "RSA para criptografía de clave pública",
              "AES para cifrado simétrico",
              "SHA para funciones hash",
              "ElGamal para cifrado simétrico"
            ],
            correcta: 3,
            preguntaId: "40502020"
          },
          {
            id: "4050202010",
            pregunta: "¿Qué mejora introduce TLS sobre SSL?",
            opciones: [
              "Usa MAC en vez de HMAC",
              "Usa una función pseudoaleatoria más débil",
              "Introduce defensa contra ataques CBC (ataque Poodle)",
              "Elimina la autenticación del servidor"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202010",
            pregunta: "¿A partir de qué versión de TLS se introduce defensa contra ataques Beast?",
            opciones: [
              "TLS 1.0",
              "TLS 1.1",
              "TLS 1.2",
              "TLS 1.3"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202011",
            pregunta: "¿Qué protocolo usa HTTPS para crear un canal seguro?",
            opciones: [
              "IPsec",
              "SSH",
              "SSL/TLS",
              "S/MIME"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202012",
            pregunta: "¿Qué significa HSTS en el contexto de HTTPS?",
            opciones: [
              "High Security Transfer System",
              "HTTP Secure Transfer Socket",
              "HTTP Strict Transport Security",
              "Hypertext Secure Transfer Standard"
            ],
            correcta: 2,
            preguntaId: "40502020"
          },
          {
            id: "4050202012",
            pregunta: "¿Cuál es el propósito principal de HSTS?",
            opciones: [
              "Cifrar las comunicaciones HTTP",
              "Evitar ataques que puedan interceptar comunicaciones, cookies, etc.",
              "Mejorar la velocidad de las conexiones HTTPS",
              "Permitir conexiones HTTP y HTTPS simultáneamente"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202013",
            pregunta: "¿Qué tipo de tráfico transporta SSTP a través de un canal SSL/TLS?",
            opciones: [
              "Tráfico HTTP",
              "Tráfico PPP",
              "Tráfico SMTP",
              "Tráfico FTP"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202014",
            pregunta: "¿Cuál es el puerto TCP asignado para SSH?",
            opciones: [
              "21",
              "22",
              "23",
              "25"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202015",
            pregunta: "¿Qué tipo de criptografía utiliza S/MIME para el cifrado de mensajes?",
            opciones: [
              "Criptografía simétrica",
              "Criptografía asimétrica",
              "Criptografía híbrida",
              "Funciones hash"
            ],
            correcta: 1,
            preguntaId: "40502020"
          },
          {
            id: "4050202015",
            pregunta: "¿Cuáles son las dos funciones de seguridad que incluye S/MIME?",
            opciones: [
              "Cifrado de datos y compresión de mensajes",
              "Encriptado de correo electrónico y firma digital",
              "Autenticación de usuario y cifrado de archivos adjuntos",
              "Verificación de identidad y cifrado de cabeceras"
            ],
            correcta: 1,
            preguntaId: "40502020"
          }
        ]
      },
      "4050301000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050301001",
            pregunta: "¿Qué es la firma digital?",
            opciones: [
              "Un método criptográfico que asocia la identidad de una persona o dispositivo electrónico a un mensaje o documento",
              "Un documento legal que certifica la identidad de una persona",
              "Un sistema de autenticación basado en contraseñas",
              "Un tipo de certificado digital emitido por una autoridad de certificación"
            ],
            correcta: 0,
            preguntaId: "40503010"
          },
          {
            id: "4050301001",
            pregunta: "¿En qué estándar están definidas las especificaciones de la firma digital?",
            opciones: [
              "PKCS #1",
              "PKCS #5",
              "PKCS #7",
              "PKCS #11"
            ],
            correcta: 2,
            preguntaId: "40503010"
          },
          {
            id: "4050301001",
            pregunta: "¿Cuál es la diferencia principal entre firma digital y firma electrónica?",
            opciones: [
              "La firma digital utiliza criptografía simétrica mientras que la firma electrónica utiliza criptografía asimétrica",
              "La firma digital es un concepto técnico que se refiere a los procedimientos de cifrado y autenticación, mientras que la firma electrónica es un concepto legal con implicaciones sobre la identidad del firmante",
              "La firma digital solo puede ser utilizada por personas físicas, mientras que la firma electrónica puede ser utilizada por personas jurídicas",
              "La firma digital no asegura la integridad del documento, mientras que la firma electrónica sí lo hace"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301002",
            pregunta: "¿Cuál es el primer paso en el procedimiento de firma digital de un documento?",
            opciones: [
              "Cifrar el documento con la clave privada del firmante",
              "Aplicar una función hash al contenido del documento para obtener un resumen",
              "Generar un certificado digital",
              "Añadir un sello de tiempo al documento"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301003",
            pregunta: "¿Qué normativa europea regula actualmente la firma electrónica?",
            opciones: [
              "Reglamento (UE) Nº 910/2014 (eIDAS)",
              "Directiva 1999/93/CE",
              "Reglamento (UE) 2016/679 (GDPR)",
              "Directiva 2006/123/CE"
            ],
            correcta: 0,
            preguntaId: "40503010"
          },
          {
            id: "4050301004",
            pregunta: "¿Qué entidad comprueba que la clave pública de un firmante se corresponde a su identidad para emitir un certificado electrónico?",
            opciones: [
              "El propio firmante",
              "Una tercera parte de confianza o prestador de servicios de certificación",
              "El destinatario del documento firmado",
              "Una autoridad gubernamental"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301005",
            pregunta: "¿Qué formato de firma es el más adecuado cuando el documento original es un PDF?",
            opciones: [
              "CAdES",
              "XAdES",
              "PAdES",
              "OOXML"
            ],
            correcta: 2,
            preguntaId: "40503010"
          },
          {
            id: "4050301005",
            pregunta: "¿Qué característica tiene el formato CAdES que lo hace apropiado para firmar ficheros grandes?",
            opciones: [
              "Utiliza algoritmos de compresión avanzados",
              "Optimiza el espacio de la información",
              "Convierte el documento a formato XML",
              "Permite la visualización directa del documento firmado"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301006",
            pregunta: "En el formato CAdES, ¿cómo se denomina a las firmas que incluyen el documento original?",
            opciones: [
              "Firmas explícitas",
              "Firmas implícitas",
              "Firmas envolventes",
              "Firmas despegadas"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301006",
            pregunta: "En el formato XAdES, ¿cómo se denomina a las firmas que están separadas del documento original?",
            opciones: [
              "Firmas despegadas (detached)",
              "Firmas envolventes (enveloping)",
              "Firmas envueltas (enveloped)",
              "Firmas explícitas"
            ],
            correcta: 0,
            preguntaId: "40503010"
          },
          {
            id: "4050301007",
            pregunta: "¿Qué tipo de firma múltiple se utiliza cuando todos los firmantes están al mismo nivel y no importa el orden en el que se firma?",
            opciones: [
              "Firma simple",
              "Co-firma o firma en línea",
              "Contra-firma o firma en cascada",
              "Firma paralela"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301007",
            pregunta: "¿En qué aplicaciones se utiliza especialmente la contra-firma o firma en cascada?",
            opciones: [
              "En la firma de documentos que son resultados de reuniones o comités",
              "En aplicaciones como los Porta Firmas, donde un documento debe seguir una línea específica a través de varios firmantes",
              "En la firma de contratos entre dos partes",
              "En la autenticación de usuarios en sistemas informáticos"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301008",
            pregunta: "¿Qué es un Sello de Tiempo en el contexto de la firma digital?",
            opciones: [
              "Un mecanismo que limita la validez temporal de una firma",
              "Una firma de una Autoridad de Sellado de Tiempo (TSA) que testifica la existencia de datos electrónicos en una fecha y hora concretos",
              "Un sistema que verifica la integridad de los datos firmados",
              "Un método para comprobar el estado de revocación de un certificado"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301008",
            pregunta: "¿Por qué es necesario resellar o aplicar de nuevo el Sello Temporal en una firma?",
            opciones: [
              "Porque el documento original puede cambiar con el tiempo",
              "Porque el algoritmo de firma puede quedar obsoleto",
              "Porque cuando el certificado de la TSA caduca, el sello y la firma dejan de ser válidas",
              "Porque es un requisito legal renovar los sellos cada cierto tiempo"
            ],
            correcta: 2,
            preguntaId: "40503010"
          },
          {
            id: "4050301009",
            pregunta: "¿Qué significa la sigla AdES en el contexto de los formatos de firma?",
            opciones: [
              "Advanced Electronic Signature",
              "Authorized Digital Encryption Standard",
              "Automated Document Encryption System",
              "Approved Digital Electronic Signature"
            ],
            correcta: 0,
            preguntaId: "40503010"
          },
          {
            id: "4050301009",
            pregunta: "¿Qué formato de firma añade un sellado de tiempo con el fin de situar en el tiempo el instante en que se firma un documento?",
            opciones: [
              "AdES-BES",
              "AdES-T",
              "AdES-C",
              "AdES-X"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301009",
            pregunta: "¿Qué formato de firma permite la adición de sellos de tiempo periódicos para garantizar la integridad de la firma archivada?",
            opciones: [
              "AdES-X",
              "AdES-XL",
              "AdES-A",
              "AdES-C"
            ],
            correcta: 2,
            preguntaId: "40503010"
          },
          {
            id: "4050301010",
            pregunta: "¿Cómo se denomina el formato de resellado para el caso del formato PAdES?",
            opciones: [
              "LTV (Long-Time Validation)",
              "TSA (Time Stamp Authority)",
              "OCSP (Online Certificate Status Protocol)",
              "PKI (Public Key Infrastructure)"
            ],
            correcta: 0,
            preguntaId: "40503010"
          },
          {
            id: "4050301010",
            pregunta: "¿Qué informaciones se incrustan en el cálculo del algoritmo de firma electrónica para la validación a largo plazo?",
            opciones: [
              "La clave pública del firmante y el algoritmo de cifrado utilizado",
              "La validación del estado de revocación del certificado y el sello de tiempo",
              "El certificado digital completo y la identidad del firmante",
              "La función hash utilizada y la longitud de la clave"
            ],
            correcta: 1,
            preguntaId: "40503010"
          },
          {
            id: "4050301011",
            pregunta: "¿Qué normativa incluye la definición de los nuevos tipos de firma Baseline?",
            opciones: [
              "La Ley 6/2020, de 11 de noviembre",
              "La Directiva 2006/123/CE",
              "La normativa de desarrollo del Reglamento (UE) nº 910/2014 (eIDAS)",
              "La Ley 59/2003, de 19 de diciembre"
            ],
            correcta: 2,
            preguntaId: "40503010"
          }
        ]
      },
      "4050401000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050401001",
            pregunta: "¿Cuáles son las funciones principales de un Centro de Proceso de Datos (CPD)?",
            opciones: [
              "Almacenar equipos informáticos y proporcionar conectividad a Internet",
              "Preservar la información de una organización y garantizar la operativa diaria del personal sobre la misma",
              "Gestionar las redes de comunicación y proporcionar soporte técnico",
              "Desarrollar software y realizar pruebas de calidad"
            ],
            correcta: 1,
            preguntaId: "40504010"
          },
          {
            id: "4050401002",
            pregunta: "Según el estándar ANSI/TIA/EIA-942, ¿cuántos subsistemas componen la infraestructura de soporte de un Data Center?",
            opciones: [
              "Dos subsistemas",
              "Tres subsistemas",
              "Cuatro subsistemas",
              "Cinco subsistemas"
            ],
            correcta: 2,
            preguntaId: "40504010"
          },
          {
            id: "4050401002",
            pregunta: "¿Cuál de los siguientes elementos NO forma parte del subsistema de Telecomunicaciones de un CPD?",
            opciones: [
              "Cableado de armarios y horizontal",
              "Patch panels y latiguillos",
              "Sistemas de climatización con control diferenciado",
              "Elementos activos y alimentación redundantes"
            ],
            correcta: 2,
            preguntaId: "40504010"
          },
          {
            id: "4050401002",
            pregunta: "¿Qué significa la sigla HVAC en el contexto del sistema mecánico de un CPD?",
            opciones: [
              "High Voltage Alternate Current",
              "High Ventilating Air Conditionning",
              "Heating, Ventilation and Air Conditioning",
              "Horizontal Ventilation and Cooling"
            ],
            correcta: 1,
            preguntaId: "40504010"
          },
          {
            id: "4050401003",
            pregunta: "¿Qué significa la sigla MDA en el contexto de las áreas funcionales de un CPD?",
            opciones: [
              "Main Distribution Area (Área de Distribución Principal)",
              "Multiple Device Access (Acceso a Múltiples Dispositivos)",
              "Managed Data Architecture (Arquitectura de Datos Gestionada)",
              "Modular Distribution Array (Array de Distribución Modular)"
            ],
            correcta: 0,
            preguntaId: "40504010"
          },
          {
            id: "4050401003",
            pregunta: "¿Cuál de las siguientes NO es un área funcional de un CPD según el estándar ANSI/TIA/EIA-942?",
            opciones: [
              "Área de distribución horizontal (HDA)",
              "Área de equipo de distribución (EDA)",
              "Zona de distribución (ZDA)",
              "Área de almacenamiento de datos (DSA)"
            ],
            correcta: 3,
            preguntaId: "40504010"
          },
          {
            id: "4050401004",
            pregunta: "¿Qué nivel de fiabilidad Rated tiene un centro de datos con componentes de capacidad redundante y una única ruta de distribución no redundante?",
            opciones: [
              "Rated-1",
              "Rated-2",
              "Rated-3",
              "Rated-4"
            ],
            correcta: 1,
            preguntaId: "40504010"
          },
          {
            id: "4050401004",
            pregunta: "¿Qué porcentaje de disponibilidad tiene un CPD de nivel Rated-3?",
            opciones: [
              "99,67%",
              "99,74%",
              "99,982%",
              "100,00%"
            ],
            correcta: 2,
            preguntaId: "40504010"
          },
          {
            id: "4050401004",
            pregunta: "¿Cuál es el tiempo anual de parada aproximado para un CPD de nivel Rated-4?",
            opciones: [
              "28,82 horas",
              "22,68 horas",
              "1,57 horas",
              "52,56 minutos"
            ],
            correcta: 3,
            preguntaId: "40504010"
          },
          {
            id: "4050401005",
            pregunta: "¿Cuál de las siguientes condiciones NO es deseable para la ubicación geográfica de un CPD?",
            opciones: [
              "Baja actividad sísmica",
              "Clima relativamente frío durante la mayor parte del año",
              "Ausencia de riesgos de inundaciones",
              "Proximidad a zonas costeras con alta humedad"
            ],
            correcta: 3,
            preguntaId: "40504010"
          },
          {
            id: "4050401005",
            pregunta: "¿Por qué es preferible un clima relativamente frío para la ubicación de un CPD?",
            opciones: [
              "Porque los equipos informáticos funcionan mejor a bajas temperaturas",
              "Porque uno de los principales gastos del mantenimiento del CPD es el consumo energético asociado a la refrigeración",
              "Porque el personal trabaja más eficientemente en ambientes fríos",
              "Porque los sistemas de almacenamiento requieren temperaturas bajas para funcionar correctamente"
            ],
            correcta: 1,
            preguntaId: "40504010"
          },
          {
            id: "4050401006",
            pregunta: "¿Cuál de las siguientes NO es una facilidad logística que debe tener el edificio de un CPD?",
            opciones: [
              "Aparcamiento y muelle de carga",
              "Rampas, ascensores y montacargas",
              "Puertas lo suficientemente anchas",
              "Sistemas de extinción por agua"
            ],
            correcta: 3,
            preguntaId: "40504010"
          },
          {
            id: "4050401006",
            pregunta: "¿Por qué es importante que las estancias de un CPD sean amplias y modulares?",
            opciones: [
              "Para facilitar la limpieza y el mantenimiento",
              "Para mejorar la estética del centro de datos",
              "Para que puedan reconfigurarse, previendo la posible ampliación del CPD",
              "Para reducir los costes de construcción"
            ],
            correcta: 2,
            preguntaId: "40504010"
          },
          {
            id: "4050401007",
            pregunta: "¿Qué significa la sigla UPS en el contexto de la infraestructura eléctrica de un CPD?",
            opciones: [
              "Universal Power System",
              "Uninterruptible Power Supply (Sistema de Alimentación Ininterrumpida)",
              "Unified Power Source",
              "Utility Power Service"
            ],
            correcta: 1,
            preguntaId: "40504010"
          },
          {
            id: "4050401007",
            pregunta: "¿Dónde deben ubicarse preferentemente el grupo electrógeno y el Sistema de Alimentación Ininterrumpida en un CPD?",
            opciones: [
              "En la planta baja, cerca del cuadro eléctrico principal",
              "En la azotea del edificio",
              "En una sala adyacente a la sala de servidores",
              "En un edificio separado"
            ],
            correcta: 0,
            preguntaId: "40504010"
          },
          {
            id: "4050401007",
            pregunta: "¿Cuántas acometidas debe tener, como mínimo, el cuadro eléctrico general de un CPD?",
            opciones: [
              "Una acometida",
              "Dos acometidas",
              "Tres acometidas",
              "Cuatro acometidas"
            ],
            correcta: 1,
            preguntaId: "40504010"
          },
          {
            id: "4050401008",
            pregunta: "¿Cuál de los siguientes elementos NO forma parte del sistema de control de acceso al edificio de un CPD?",
            opciones: [
              "Servicio de seguridad y medidas de identificación",
              "Cámaras de videovigilancia",
              "Detectores de movimiento y alarma",
              "Sistemas de extinción de incendios"
            ],
            correcta: 3,
            preguntaId: "40504010"
          },
          {
            id: "4050401008",
            pregunta: "¿Qué significa la sigla CCTV en el contexto del control de acceso a un CPD?",
            opciones: [
              "Closed Circuit Television (Circuito Cerrado de Televisión)",
              "Computer Control and Technical Verification",
              "Central Control for Technical Vigilance",
              "Continuous Control of Thermal Variation"
            ],
            correcta: 0,
            preguntaId: "40504010"
          },
          {
            id: "4050401002",
            pregunta: "¿Qué significa la sigla NOC en el contexto del subsistema de Arquitectura de un CPD?",
            opciones: [
              "New Operation Center",
              "Network Operations Center (Centro Operativo de Red)",
              "National Organization for Computing",
              "Non-Operational Computing"
            ],
            correcta: 1,
            preguntaId: "40504010"
          },
          {
            id: "4050401004",
            pregunta: "¿Qué característica define a un CPD de nivel Rated-3?",
            opciones: [
              "Tiene componentes de capacidad única y una única ruta de distribución no redundante",
              "Tiene componentes de capacidad redundantes y una única ruta de distribución no redundante",
              "Tiene componentes de capacidad redundante y múltiples rutas de distribución independientes, permitiendo mantenimiento concurrente",
              "Tiene componentes de capacidad redundante y múltiples rutas de distribución independientes todas activas, siendo tolerante a fallos"
            ],
            correcta: 2,
            preguntaId: "40504010"
          }
        ]
      },
      "4050402000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050402001",
            pregunta: "¿Qué elementos debe tener la sala de servidores para facilitar el tendido del cableado?",
            opciones: [
              "Paredes y techos reforzados",
              "Suelo y techo técnicos",
              "Ventanas y puertas amplias",
              "Paneles acústicos y térmicos"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402002",
            pregunta: "¿De cuántas fuentes diferentes debe venir la alimentación eléctrica de una sala de servidores?",
            opciones: [
              "Una fuente",
              "Dos fuentes",
              "Tres fuentes",
              "Cuatro fuentes"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402002",
            pregunta: "¿Cuál es la autonomía mínima recomendada para el Sistema de Alimentación Ininterrumpida (UPS) de una sala de servidores?",
            opciones: [
              "5-10 minutos",
              "15-20 minutos",
              "30-45 minutos",
              "60-90 minutos"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402002",
            pregunta: "¿Dónde debe estar ubicado el Sistema de Alimentación Ininterrumpida (UPS) en relación con la sala de servidores?",
            opciones: [
              "Dentro de la sala de servidores",
              "En el edificio, pero no en la misma sala",
              "En un edificio separado",
              "No importa la ubicación mientras esté conectado"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402003",
            pregunta: "Según ANSI/TIA-942, ¿cuál es el ancho mínimo que deben tener las puertas de acceso a la sala de servidores?",
            opciones: [
              "2 pies (0,6m)",
              "3 pies (1m)",
              "4 pies (1,2m)",
              "5 pies (1,5m)"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402003",
            pregunta: "Según ANSI/TIA-942, ¿cuál es la altura mínima que deben tener las puertas de acceso a la sala de servidores?",
            opciones: [
              "6 pies (1,83m)",
              "7 pies (2,13m)",
              "8 pies (2,44m)",
              "9 pies (2,74m)"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402004",
            pregunta: "¿En qué planta del edificio NO es recomendable ubicar la sala del CPD?",
            opciones: [
              "En plantas intermedias",
              "En la planta baja o subsuelo",
              "En plantas con acceso directo a montacargas",
              "En plantas con sistemas de climatización independientes"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402004",
            pregunta: "¿Qué tipo de sistema de control de acceso se recomienda para evitar el robo o sustracción de dispositivos de almacenamiento de la información?",
            opciones: [
              "Solo cámaras de videovigilancia",
              "Únicamente cerraduras con llave",
              "Sistemas de identificación mediante tarjeta, biométricos y dispositivos de doble puerta tipo mantrap",
              "Guardias de seguridad las 24 horas"
            ],
            correcta: 2,
            preguntaId: "40504020"
          },
          {
            id: "4050402004",
            pregunta: "¿Cuál es el rango de temperatura recomendado para mantener en la sala de servidores según el texto?",
            opciones: [
              "Entre 15 y 20°C",
              "Entre 20 y 25°C",
              "Entre 25 y 30°C",
              "Entre 30 y 35°C"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402004",
            pregunta: "Según las recomendaciones de la ASHRAE en 2021, ¿cuál es el rango de temperatura recomendado para un CPD?",
            opciones: [
              "Entre 15 y 20°C",
              "Entre 18 y 27°C",
              "Entre 25 y 30°C",
              "Entre 20 y 22°C"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402004",
            pregunta: "¿Cómo deben ubicarse los armarios o racks de servidores para favorecer la circulación del aire?",
            opciones: [
              "Todos en línea recta",
              "En forma de U",
              "Fondo contra fondo y frontal contra frontal, creando pasillos de frío-calor",
              "Separados al menos 2 metros entre sí"
            ],
            correcta: 2,
            preguntaId: "40504020"
          },
          {
            id: "4050402005",
            pregunta: "¿Cuál es la principal causa de incendios en un CPD?",
            opciones: [
              "La electricidad",
              "El sobrecalentamiento de los equipos",
              "Los materiales inflamables",
              "Los errores humanos"
            ],
            correcta: 0,
            preguntaId: "40504020"
          },
          {
            id: "4050402005",
            pregunta: "¿Qué características debe tener el agente extintor en los sistemas contra incendios de un CPD?",
            opciones: [
              "Debe ser económico y fácil de recargar",
              "Debe ser visible para poder comprobar su funcionamiento",
              "No debe afectar a la electrónica, con propiedades dieléctricas, y seguro para personas y medioambiente",
              "Debe ser capaz de extinguir cualquier tipo de incendio en menos de 30 segundos"
            ],
            correcta: 2,
            preguntaId: "40504020"
          },
          {
            id: "4050402005",
            pregunta: "¿Qué característica tiene el agente extintor Novec 1230?",
            opciones: [
              "Se almacena en estado gaseoso y ocupa mucho espacio",
              "Funciona mediante el desplazamiento del oxígeno y se almacena en estado líquido",
              "Es tóxico para las personas pero muy efectivo contra incendios eléctricos",
              "Requiere una instalación compleja y costosa"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402005",
            pregunta: "¿Qué tamaño deben tener las partículas de agua en un sistema de extinción mediante agua nebulizada?",
            opciones: [
              "Mayor a 2000 micras",
              "Entre 1000 y 2000 micras",
              "Menor a 1000 micras",
              "Exactamente 1500 micras"
            ],
            correcta: 2,
            preguntaId: "40504020"
          },
          {
            id: "4050402006",
            pregunta: "¿Qué es un rack en el contexto de una sala de servidores?",
            opciones: [
              "Un sistema de refrigeración para equipos informáticos",
              "Un armario especial para albergar materiales y equipos tecnológicos",
              "Un dispositivo de almacenamiento de datos",
              "Un sistema de control de acceso"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402006",
            pregunta: "¿A qué equivale una unidad rack (U)?",
            opciones: [
              "1,25 pulgadas (3,175 cm) de alto",
              "1,5 pulgadas (3,81 cm) de alto",
              "1,75 pulgadas (4,445 cm) de alto",
              "2 pulgadas (5,08 cm) de alto"
            ],
            correcta: 2,
            preguntaId: "40504020"
          },
          {
            id: "4050402006",
            pregunta: "¿Cuál es el ancho estándar más común de un rack?",
            opciones: [
              "17 pulgadas (43,18 cm)",
              "19 pulgadas (48,26 cm)",
              "21 pulgadas (53,34 cm)",
              "23 pulgadas (58,42 cm)"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402006",
            pregunta: "¿Cuál es la principal diferencia entre un rack mural y un rack de suelo?",
            opciones: [
              "El rack mural es más caro que el rack de suelo",
              "El rack mural es más compacto y ligero, y se puede colgar en una pared",
              "El rack mural tiene mayor capacidad de refrigeración",
              "El rack mural solo admite equipos de un mismo fabricante"
            ],
            correcta: 1,
            preguntaId: "40504020"
          },
          {
            id: "4050402006",
            pregunta: "Además de servidores, ¿qué otros equipos se pueden ubicar en un rack?",
            opciones: [
              "Solo servidores y sistemas de refrigeración",
              "Únicamente servidores y monitores",
              "Switches, routers, paneles de parcheo, bandejas, etc.",
              "Exclusivamente equipos del mismo fabricante"
            ],
            correcta: 2,
            preguntaId: "40504020"
          }
        ]
      },
      "4050501000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050501001",
            pregunta: "¿Cuál es el objetivo principal de un sistema de gestión de incidencias?",
            opciones: [
              "Controlar el acceso de los usuarios a los sistemas informáticos",
              "Garantizar la continuidad de los trabajos en una organización mediante la resolución de incidencias informáticas",
              "Gestionar el inventario de equipos informáticos de la organización",
              "Monitorizar el rendimiento de los servidores y aplicaciones"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501001",
            pregunta: "Según el texto, ¿qué canal de comunicación se ha demostrado más eficaz para la gestión de incidencias?",
            opciones: [
              "El teléfono",
              "El correo electrónico",
              "Los sistemas de mensajería corporativa",
              "Un sistema específico de gestión de incidencias"
            ],
            correcta: 3,
            preguntaId: "40505010"
          },
          {
            id: "4050501001",
            pregunta: "¿Dónde suele estar ubicado normalmente el servicio de soporte informático?",
            opciones: [
              "En el departamento de sistemas",
              "En un Centro de Atención a Usuarios (CAU)",
              "En el departamento de recursos humanos",
              "En la dirección de la organización"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501002",
            pregunta: "¿Cuál es el objetivo del inventario de equipos en un sistema de gestión de incidencias?",
            opciones: [
              "Controlar el gasto en equipos informáticos",
              "Disponer en cada momento de toda la información acerca del equipo sobre el que se abrió la incidencia",
              "Asignar responsabilidades sobre los equipos a los usuarios",
              "Planificar la renovación de los equipos"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501002",
            pregunta: "¿Cuál de los siguientes datos NO forma parte típicamente del inventario de equipos?",
            opciones: [
              "Número de serie",
              "Fecha de instalación",
              "Dirección IP",
              "Historial de formación del usuario responsable"
            ],
            correcta: 3,
            preguntaId: "40505010"
          },
          {
            id: "4050501003",
            pregunta: "¿Quién establece la prioridad de una incidencia cuando se da de alta en el sistema?",
            opciones: [
              "El administrador del sistema",
              "El técnico de soporte",
              "El usuario que reporta la incidencia",
              "El jefe del departamento afectado"
            ],
            correcta: 2,
            preguntaId: "40505010"
          },
          {
            id: "4050501003",
            pregunta: "¿Qué información proporciona el usuario al abrir una incidencia?",
            opciones: [
              "Solo la descripción del problema",
              "Identificación, prioridad, categoría, asunto, descripción, evidencias e identificación de equipos",
              "Únicamente la categoría y la descripción del problema",
              "Solo la identificación del equipo afectado"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501003",
            pregunta: "¿Cuál de los siguientes NO es un estado posible de una incidencia?",
            opciones: [
              "Pendiente",
              "Asignada",
              "Resuelta",
              "Programada"
            ],
            correcta: 3,
            preguntaId: "40505010"
          },
          {
            id: "4050501003",
            pregunta: "¿Qué significa que una incidencia está en estado 'Escalada'?",
            opciones: [
              "Que ha sido asignada a un técnico de soporte",
              "Que el usuario ha dado por cerrada la incidencia",
              "Que ha sido derivada a otro nivel de soporte",
              "Que el usuario no acepta la solución propuesta"
            ],
            correcta: 2,
            preguntaId: "40505010"
          },
          {
            id: "4050501003",
            pregunta: "¿Qué información se rellena de manera automática en la base de datos de incidencias?",
            opciones: [
              "La descripción del problema",
              "La categoría de la incidencia",
              "El estado de la incidencia, fecha y hora de apertura, fecha y hora de cambios de estado, y técnicos asignados",
              "Las evidencias aportadas"
            ],
            correcta: 2,
            preguntaId: "40505010"
          },
          {
            id: "4050501003",
            pregunta: "¿Cómo se denomina la base de datos donde se almacenan las incidencias resueltas?",
            opciones: [
              "Base de datos de incidencias",
              "Base de datos de conocimiento (knowledge database)",
              "Base de datos de soluciones",
              "Base de datos de históricos"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501004",
            pregunta: "¿Cómo se notifica al personal de soporte que se ha dado de alta una incidencia?",
            opciones: [
              "Mediante una llamada telefónica",
              "A través de un mensaje a un buzón de correo electrónico predefinido o un sistema de mensajería",
              "Con una notificación en su teléfono móvil personal",
              "No se notifica, el personal debe revisar periódicamente el sistema"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501004",
            pregunta: "¿Cuál es el estado inicial de una incidencia cuando llega al personal de soporte?",
            opciones: [
              "Asignada",
              "Pendiente",
              "En análisis",
              "Nueva"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501004",
            pregunta: "¿Qué criterios se utilizan para asignar una incidencia a un técnico especialista?",
            opciones: [
              "Solo por orden de llegada",
              "Según su disponibilidad o su conocimiento en la categoría de la incidencia",
              "Por la ubicación geográfica del usuario",
              "Por la antigüedad del técnico en la organización"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501004",
            pregunta: "¿Qué acción realiza el técnico si necesita más información para resolver la incidencia?",
            opciones: [
              "Cierra la incidencia como 'No resoluble'",
              "La escala a un nivel superior de soporte",
              "Solicita más información al usuario usando sus datos de contacto",
              "Asigna la incidencia a otro técnico"
            ],
            correcta: 2,
            preguntaId: "40505010"
          },
          {
            id: "4050501004",
            pregunta: "¿Qué debe ocurrir para que una incidencia pase al estado 'Resuelta'?",
            opciones: [
              "El técnico debe aplicar cualquier solución",
              "El técnico debe aplicar una solución válida y comunicarla al usuario, que debe aprobarla",
              "El usuario debe cerrar la incidencia",
              "El administrador del sistema debe validar la solución"
            ],
            correcta: 1,
            preguntaId: "40505010"
          },
          {
            id: "4050501005",
            pregunta: "¿Para qué sirven las estadísticas generadas a partir de los datos de incidencias?",
            opciones: [
              "Solo para evaluar el rendimiento de los técnicos",
              "Únicamente para identificar los equipos más problemáticos",
              "Para conocer las categorías de incidencias más frecuentes, los tiempos de resolución y los equipos afectados",
              "Exclusivamente para justificar la contratación de más personal"
            ],
            correcta: 2,
            preguntaId: "40505010"
          },
          {
            id: "4050501005",
            pregunta: "¿Qué decisiones se pueden tomar a partir de las estadísticas de incidencias?",
            opciones: [
              "Solo decisiones sobre la renovación de equipos",
              "Únicamente decisiones sobre la formación de usuarios",
              "Decisiones sobre equipos y aplicaciones que originan más incidencias, y sobre el número y perfil del personal de soporte",
              "Exclusivamente decisiones sobre el horario de atención del soporte"
            ],
            correcta: 2,
            preguntaId: "40505010"
          },
          {
            id: "4050501005",
            pregunta: "¿Cuál de los siguientes NO es un sistema de gestión de incidencias mencionado en el texto?",
            opciones: [
              "GLPI",
              "GNATS",
              "ServiceNow",
              "OSTicket"
            ],
            correcta: 2,
            preguntaId: "40505010"
          },
          {
            id: "4050501005",
            pregunta: "¿Qué característica especial tiene el sistema Jira según el texto?",
            opciones: [
              "Es el único sistema open source",
              "Es el único sistema comercial",
              "Sirve tanto para gestión de proyectos como de incidencias",
              "Es el único que permite generar estadísticas"
            ],
            correcta: 2,
            preguntaId: "40505010"
          }
        ]
      },
      "4050502000e": {
        minimoParaAprobar: 7,
        preguntas: [
          {
            id: "4050502001",
            pregunta: "¿Cuál es el propósito principal de las herramientas de gestión remota de puestos de usuario?",
            opciones: [
              "Monitorizar el rendimiento de los equipos",
              "Permitir al técnico de soporte conectarse al puesto de usuario para conocer las incidencias y prestar apoyo",
              "Realizar copias de seguridad de los datos del usuario",
              "Instalar actualizaciones de software automáticamente"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502001",
            pregunta: "¿Qué arquitectura suelen utilizar las herramientas de gestión de puesto de usuario?",
            opciones: [
              "Arquitectura peer-to-peer",
              "Arquitectura cliente/servidor",
              "Arquitectura en la nube",
              "Arquitectura de microservicios"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502002",
            pregunta: "¿Qué tipo de software es VNC?",
            opciones: [
              "Comercial",
              "Opensource",
              "Exclusivo para Windows",
              "Solo para uso empresarial"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502002",
            pregunta: "¿Cuál es una característica importante de VNC respecto a la compatibilidad entre sistemas operativos?",
            opciones: [
              "Solo funciona entre equipos con el mismo sistema operativo",
              "No impone restricciones en el sistema operativo del ordenador servidor con respecto al del cliente",
              "Solo permite conexiones desde Windows a Linux",
              "Solo permite conexiones desde Linux a Windows"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502002",
            pregunta: "¿Cuál es el puerto por defecto que utiliza VNC para la conexión cliente-servidor?",
            opciones: [
              "Puerto 3389",
              "Puerto 5900",
              "Puerto 8080",
              "Puerto 22"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502002",
            pregunta: "¿Cuál es una debilidad de seguridad de VNC en su configuración por defecto?",
            opciones: [
              "No permite el uso de contraseñas",
              "Las contraseñas se envían en texto plano",
              "No permite conexiones cifradas",
              "Solo permite un usuario conectado a la vez"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502003",
            pregunta: "¿Cuál de las siguientes NO es una función de TeamViewer?",
            opciones: [
              "Control remoto de escritorios",
              "Reuniones en línea",
              "Transferencia de archivos",
              "Análisis de vulnerabilidades de seguridad"
            ],
            correcta: 3,
            preguntaId: "40505020"
          },
          {
            id: "4050502003",
            pregunta: "¿Qué genera TeamViewer cuando se inicia en un equipo?",
            opciones: [
              "Un certificado digital",
              "Una ID y una contraseña",
              "Un código QR",
              "Un token de seguridad"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502003",
            pregunta: "¿Qué tipo de cifrado utiliza TeamViewer para sus sesiones?",
            opciones: [
              "Solo cifrado simétrico AES",
              "Solo cifrado asimétrico RSA",
              "Infraestructura de clave pública RSA (1024-bit) y clave privada AES (256-bit)",
              "No utiliza cifrado"
            ],
            correcta: 2,
            preguntaId: "40505020"
          },
          {
            id: "4050502004",
            pregunta: "¿Qué protocolo de seguridad utiliza AnyDesk para las sesiones?",
            opciones: [
              "SSL 3.0",
              "TLS 1.2",
              "SSH",
              "IPsec"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502004",
            pregunta: "¿Cuál de las siguientes funcionalidades ofrece AnyDesk?",
            opciones: [
              "Solo control remoto",
              "Control remoto y transferencia de archivos",
              "Control remoto, transferencia de archivos y chat de cliente a cliente",
              "Solo transferencia de archivos"
            ],
            correcta: 2,
            preguntaId: "40505020"
          },
          {
            id: "4050502005",
            pregunta: "¿En qué versiones de Windows 10 está disponible el Escritorio remoto de Microsoft?",
            opciones: [
              "En todas las versiones de Windows 10",
              "Solo en Windows 10 Pro",
              "En Windows 10 Pro, Enterprise y Education, pero no en Home",
              "Solo en Windows 10 Enterprise"
            ],
            correcta: 2,
            preguntaId: "40505020"
          },
          {
            id: "4050502005",
            pregunta: "¿Cuál es una diferencia clave del Escritorio remoto de Microsoft respecto a otras herramientas como TeamViewer o VNC?",
            opciones: [
              "No requiere instalación",
              "No necesita conexión a Internet",
              "No se accede a la sesión de un usuario, sino que se abre una propia",
              "Solo permite ver la pantalla, no controlarla"
            ],
            correcta: 2,
            preguntaId: "40505020"
          },
          {
            id: "4050502006",
            pregunta: "¿Qué nombre recibe extraoficialmente el protocolo propietario desarrollado por Google para Chrome Remote Desktop?",
            opciones: [
              "Chromium",
              "Chromoting",
              "ChromeRDP",
              "ChromeVNC"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502006",
            pregunta: "¿Cómo era originalmente el cliente de Escritorio remoto de Chrome?",
            opciones: [
              "Una aplicación independiente",
              "Una extensión de Chrome de Chrome Web Store",
              "Un componente integrado en el sistema operativo",
              "Un servicio en la nube"
            ],
            correcta: 1,
            preguntaId: "40505020"
          },
          {
            id: "4050502006",
            pregunta: "¿Dónde está disponible actualmente el Escritorio remoto de Chrome?",
            opciones: [
              "Solo como extensión de Chrome",
              "Como aplicación de escritorio",
              "En un portal web en remotedesktop.google.com",
              "Solo en dispositivos Chromebook"
            ],
            correcta: 2,
            preguntaId: "40505020"
          },
          {
            id: "4050502007",
            pregunta: "¿Cuál de las siguientes herramientas de gestión remota es de tipo Opensource?",
            opciones: [
              "TeamViewer",
              "AnyDesk",
              "VNC",
              "Escritorio remoto de Microsoft"
            ],
            correcta: 2,
            preguntaId: "40505020"
          },
          {
            id: "4050502007",
            pregunta: "¿Cuál de las siguientes herramientas viene incluida en Windows?",
            opciones: [
              "TeamViewer",
              "AnyDesk",
              "VNC",
              "Escritorio remoto de Microsoft"
            ],
            correcta: 3,
            preguntaId: "40505020"
          },
          {
            id: "4050502007",
            pregunta: "¿Cuál de las siguientes herramientas NO permite acceder a la sesión actual del usuario, sino que abre una nueva?",
            opciones: [
              "TeamViewer",
              "AnyDesk",
              "VNC",
              "Escritorio remoto de Microsoft"
            ],
            correcta: 3,
            preguntaId: "40505020"
          },
          {
            id: "4050502007",
            pregunta: "¿Cuál de las siguientes herramientas utiliza el protocolo TLS 1.2 para las sesiones?",
            opciones: [
              "TeamViewer",
              "AnyDesk",
              "VNC",
              "Escritorio remoto de Microsoft"
            ],
            correcta: 1,
            preguntaId: "40505020"
          }
        ]
      }
  };