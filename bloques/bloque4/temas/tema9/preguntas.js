const preguntas = {
    "4090101000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4090101001",
                pregunta: "¿Cuáles son las tres dimensiones de seguridad determinadas por el estándar ISO/IEC 27001?",
                opciones: [
                    "Confidencialidad, disponibilidad e integridad",
                    "Autenticidad, trazabilidad y confidencialidad",
                    "Integridad, disponibilidad y autenticidad",
                    "Confidencialidad, trazabilidad y disponibilidad"
                ],
                correcta: 0,
                preguntaId: "40901010"
            },
            {
                id: "4090101001",
                pregunta: "¿Qué dimensiones adicionales de seguridad establece el Esquema Nacional de Seguridad (ENS)?",
                opciones: [
                    "Privacidad y no repudio",
                    "Autenticidad y trazabilidad",
                    "Verificación y auditoría",
                    "Autorización y registro"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101001",
                pregunta: "La dimensión de seguridad que garantiza que los usuarios que tienen acceso son quienes dicen ser se denomina:",
                opciones: [
                    "Integridad",
                    "Confidencialidad",
                    "Autenticidad",
                    "Trazabilidad"
                ],
                correcta: 2,
                preguntaId: "40901010"
            },
            {
                id: "4090101001",
                pregunta: "¿Qué dimensión de seguridad se refiere al acceso a la información únicamente por aquellos que están autorizados para ello?",
                opciones: [
                    "Disponibilidad",
                    "Confidencialidad",
                    "Integridad",
                    "Autenticidad"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101002",
                pregunta: "Los ataques a las redes de comunicaciones se clasifican según afectan a:",
                opciones: [
                    "Hardware, software y firmware",
                    "Autenticidad, disponibilidad, confidencialidad e integridad",
                    "Usuarios, administradores y sistemas",
                    "Redes locales, redes externas y sistemas aislados"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101003",
                pregunta: "¿Qué es el Vishing?",
                opciones: [
                    "Un ataque que utiliza correos electrónicos fraudulentos",
                    "Una práctica fraudulenta que utiliza la línea telefónica para engañar y obtener información",
                    "Un tipo de malware que cifra los archivos del usuario",
                    "Un ataque de denegación de servicio a sistemas telefónicos"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101003",
                pregunta: "Según Kevin Mitnick, ¿cuáles son los principios básicos en los que se basan los ataques de ingeniería social?",
                opciones: [
                    "Miedo, urgencia, curiosidad y codicia",
                    "Todos queremos ayudar, confianza inicial, no nos gusta decir No, nos gusta que nos alaben",
                    "Autoridad, escasez, reciprocidad y compromiso",
                    "Anonimato, velocidad, engaño y persistencia"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101003",
                pregunta: "¿Cuáles son las mejores defensas frente a las técnicas de ingeniería social?",
                opciones: [
                    "Firewalls y antivirus",
                    "Formación del usuario y sentido común",
                    "Cifrado de datos y autenticación de doble factor",
                    "Sistemas de detección de intrusos y monitorización"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101004",
                pregunta: "¿Qué es el escaneo de puertos o port scanning?",
                opciones: [
                    "Una técnica para cifrar la comunicación entre puertos",
                    "Un método para determinar si un puerto está abierto, cerrado o protegido por un firewall",
                    "Un protocolo de comunicación segura entre servidores",
                    "Un sistema de autenticación para acceso a puertos restringidos"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101004",
                pregunta: "¿Cuál de los siguientes NO es un método de escaneo de puertos?",
                opciones: [
                    "TCP Connect Scan",
                    "TCP SYN Scan",
                    "TCP FIN Scan",
                    "TCP Authentication Scan"
                ],
                correcta: 3,
                preguntaId: "40901010"
            },
            {
                id: "4090101004",
                pregunta: "¿Qué característica tiene el TCP FIN Scan que lo hace ventajoso en ciertos escenarios?",
                opciones: [
                    "Es más rápido que otros métodos de escaneo",
                    "Puede pasar a través de un firewall preparado para filtrar escaneos con TCP SYN",
                    "Permite identificar el sistema operativo del servidor",
                    "Establece una conexión completa con el servidor"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101004",
                pregunta: "¿Cuál de las siguientes herramientas es una aplicación de código abierto para escaneo de puertos que puede adaptarse a la situación particular de la red?",
                opciones: [
                    "NMAP",
                    "Wireshark",
                    "TCP Port Scanner",
                    "Advanced Port Scanner"
                ],
                correcta: 0,
                preguntaId: "40901010"
            },
            {
                id: "4090101005",
                pregunta: "¿Qué es un sniffer en el contexto de seguridad de redes?",
                opciones: [
                    "Un sistema que bloquea conexiones no autorizadas",
                    "Un sistema que captura todos los paquetes que pasan por un punto específico de la red",
                    "Un software que cifra la comunicación entre dos puntos",
                    "Un dispositivo que amplifica la señal de red"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101005",
                pregunta: "¿Qué significa que un sniffer esté configurado en 'modo promiscuo'?",
                opciones: [
                    "Que puede interceptar cualquier paquete dentro de la red de área local",
                    "Que solo captura paquetes dirigidos específicamente a su dirección MAC",
                    "Que puede modificar los paquetes que intercepta",
                    "Que funciona exclusivamente en redes inalámbricas"
                ],
                correcta: 0,
                preguntaId: "40901010"
            },
            {
                id: "4090101005",
                pregunta: "¿Qué ataque suele seguir a los ataques de eavesdropping?",
                opciones: [
                    "Ataque de denegación de servicio",
                    "Ataque de hombre intermedio (man-in-the-middle)",
                    "Ataque de fuerza bruta",
                    "Ataque de día cero"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101005",
                pregunta: "¿Cuál es una de las aplicaciones sniffer más conocidas que proporciona una interfaz gráfica con opciones de filtrado de paquetes?",
                opciones: [
                    "NMAP",
                    "Wireshark",
                    "Advanced Port Scanner",
                    "Portqry"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101006",
                pregunta: "¿En qué se diferencia la técnica de Snooping downloading del Sniffing?",
                opciones: [
                    "El Snooping downloading solo funciona en redes inalámbricas",
                    "El Snooping downloading, además de visualizar la información, descarga correo electrónico, ficheros, etc.",
                    "El Snooping downloading solo intercepta tráfico cifrado",
                    "El Snooping downloading modifica los paquetes interceptados"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101007",
                pregunta: "¿En qué consiste un ataque de Path Traversal?",
                opciones: [
                    "En interceptar la comunicación entre dos puntos de la red",
                    "En saturar un servidor con múltiples peticiones",
                    "En acceder a directorios y ficheros fuera del servidor web manipulando variables en una URL",
                    "En suplantar la identidad de un usuario legítimo"
                ],
                correcta: 2,
                preguntaId: "40901010"
            },
            {
                id: "4090101007",
                pregunta: "¿Qué secuencia es característica de los ataques de Path Traversal?",
                opciones: [
                    "HTTP/1.1",
                    "../",
                    "SELECT * FROM",
                    "<script>"
                ],
                correcta: 1,
                preguntaId: "40901010"
            },
            {
                id: "4090101001",
                pregunta: "¿Qué dimensión de seguridad posibilita el seguimiento de los accesos indebidos a la organización?",
                opciones: [
                    "Integridad",
                    "Disponibilidad",
                    "Autenticidad",
                    "Trazabilidad"
                ],
                correcta: 3,
                preguntaId: "40901010"
            }
        ]
    },
    "4090102000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4090102001",
                pregunta: "¿Cuál es el objetivo principal de los ataques a la autenticidad?",
                opciones: [
                    "Robar información confidencial",
                    "Engañar al sistema de la víctima para ingresar como un usuario privilegiado",
                    "Interrumpir el funcionamiento normal de un servicio",
                    "Modificar datos sin autorización"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102002",
                pregunta: "En un ataque de Man-in-the-Middle, ¿qué acción realiza el atacante?",
                opciones: [
                    "Envía correos electrónicos falsos",
                    "Intercepta la comunicación entre dos extremos y puede leer o modificar los mensajes",
                    "Modifica el fichero hosts del equipo de la víctima",
                    "Realiza un escaneo de puertos"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102003",
                pregunta: "¿Qué tipo de spoofing consiste en cambiar la dirección MAC de un dispositivo de red?",
                opciones: [
                    "IP Spoofing",
                    "ARP Spoofing",
                    "MAC Spoofing",
                    "DNS Spoofing"
                ],
                correcta: 2,
                preguntaId: "40901020"
            },
            {
                id: "4090102004",
                pregunta: "El IP Spoofing consiste en:",
                opciones: [
                    "Sustituir la dirección IP origen de un paquete TCP/IP por otra dirección IP",
                    "Falsear la tabla ARP de una víctima",
                    "Falsear las entradas de la tabla de un servidor DNS",
                    "Suplantar la dirección de correo electrónico de otras personas"
                ],
                correcta: 0,
                preguntaId: "40901020"
            },
            {
                id: "4090102005",
                pregunta: "¿Qué técnica de spoofing consiste en falsear la relación entre nombre de dominio y una IP?",
                opciones: [
                    "Web Spoofing",
                    "Email Spoofing",
                    "ARP Spoofing",
                    "DNS Spoofing"
                ],
                correcta: 3,
                preguntaId: "40901020"
            },
            {
                id: "4090102006",
                pregunta: "El phishing se caracteriza por:",
                opciones: [
                    "Modificar el fichero hosts del equipo de la víctima",
                    "Suplantar la identidad de un sitio confiable para que el usuario proporcione información",
                    "Interceptar la comunicación entre dos extremos",
                    "Realizar un ataque de fuerza bruta contra contraseñas"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102007",
                pregunta: "¿Qué es el smishing?",
                opciones: [
                    "Un ataque de phishing a través de SMS",
                    "Un tipo de ataque de fuerza bruta",
                    "Una técnica de spoofing de direcciones MAC",
                    "Un ataque de denegación de servicio"
                ],
                correcta: 0,
                preguntaId: "40901020"
            },
            {
                id: "4090102008",
                pregunta: "¿Qué caracteriza a un ataque de whaling?",
                opciones: [
                    "Se dirige a cualquier usuario de internet",
                    "Se dirige específicamente a altos ejecutivos u otras personas importantes",
                    "Utiliza técnicas de fuerza bruta",
                    "Modifica las tablas ARP de los routers"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102009",
                pregunta: "El ataque pharming consiste en:",
                opciones: [
                    "Enviar correos electrónicos falsos",
                    "Infectar un equipo para redirigir sus peticiones a una página web falsificada",
                    "Interceptar la comunicación entre dos extremos",
                    "Realizar un ataque de fuerza bruta contra contraseñas"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102010",
                pregunta: "¿Qué elemento se modifica en un ataque de pharming?",
                opciones: [
                    "La dirección MAC del equipo",
                    "La tabla ARP",
                    "El fichero hosts o la configuración DNS",
                    "La cookie de sesión"
                ],
                correcta: 2,
                preguntaId: "40901020"
            },
            {
                id: "4090102011",
                pregunta: "¿Qué es el session hijacking?",
                opciones: [
                    "Un ataque que modifica el fichero hosts",
                    "La explotación de una sesión válida para obtener acceso no autorizado",
                    "Un tipo de ataque de fuerza bruta",
                    "Una técnica de spoofing de direcciones IP"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102012",
                pregunta: "En la fijación de sesión (Session Fixation), ¿qué acción realiza el atacante?",
                opciones: [
                    "Roba la cookie de sesión mediante un sniffer",
                    "Establece o encuentra el identificador de sesión de una víctima antes de que inicie sesión",
                    "Ejecuta código JavaScript malicioso en el navegador de la víctima",
                    "Modifica la tabla DNS del equipo de la víctima"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102013",
                pregunta: "¿Qué tipo de ataque XSS ocurre cuando la vulnerabilidad reside en el código del cliente?",
                opciones: [
                    "Stored XSS",
                    "Reflected XSS",
                    "DOM-based XSS",
                    "Session Side Jacking"
                ],
                correcta: 2,
                preguntaId: "40901020"
            },
            {
                id: "4090102014",
                pregunta: "El clickjacking se basa en:",
                opciones: [
                    "Robar cookies de sesión",
                    "Engañar al usuario para que haga clic en un objeto diferente al que está percibiendo",
                    "Modificar el fichero hosts",
                    "Realizar un ataque de fuerza bruta"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102015",
                pregunta: "¿Qué tipo de clickjacking engaña a un usuario para que marque un 'Like' en una red social?",
                opciones: [
                    "Likejacking",
                    "Cursorjacking",
                    "Nested clickjacking",
                    "Filejacking"
                ],
                correcta: 0,
                preguntaId: "40901020"
            },
            {
                id: "4090102016",
                pregunta: "¿Qué es un backdoor?",
                opciones: [
                    "Un tipo de ataque de phishing",
                    "Un método para evitar las medidas de seguridad y obtener acceso privilegiado",
                    "Una técnica de spoofing de direcciones MAC",
                    "Un ataque de denegación de servicio"
                ],
                correcta: 1,
                preguntaId: "40901020"
            },
            {
                id: "4090102017",
                pregunta: "¿Qué vulnerabilidades críticas de procesadores Intel se revelaron en 2018?",
                opciones: [
                    "Heartbleed y Shellshock",
                    "WannaCry y NotPetya",
                    "Meltdown y Spectre",
                    "Log4Shell y Spring4Shell"
                ],
                correcta: 2,
                preguntaId: "40901020"
            },
            {
                id: "4090102018",
                pregunta: "La vulnerabilidad Log4Shell de Apache permite:",
                opciones: [
                    "Modificar la tabla ARP",
                    "Robar cookies de sesión",
                    "Ejecución remota de código (RCE)",
                    "Realizar un ataque de denegación de servicio"
                ],
                correcta: 2,
                preguntaId: "40901020"
            },
            {
                id: "4090102019",
                pregunta: "Los ataques de fuerza bruta buscan:",
                opciones: [
                    "Revelar la contraseña de un usuario probando combinaciones de caracteres",
                    "Modificar el fichero hosts",
                    "Interceptar la comunicación entre dos extremos",
                    "Suplantar la identidad de un sitio confiable"
                ],
                correcta: 0,
                preguntaId: "40901020"
            },
            {
                id: "4090102020",
                pregunta: "¿Qué técnica se combina frecuentemente con los ataques de fuerza bruta?",
                opciones: [
                    "Phishing",
                    "Spoofing",
                    "Ingeniería social o ataques de diccionario",
                    "Clickjacking"
                ],
                correcta: 2,
                preguntaId: "40901020"
            }
        ]
    },
    "4090103000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4090103001",
                pregunta: "¿Cuál es el objetivo principal de los ataques de denegación de servicio (DoS)?",
                opciones: [
                    "Robar información confidencial",
                    "Saturar los servicios del sistema para que queden inhabilitados",
                    "Suplantar la identidad de un usuario legítimo",
                    "Modificar datos en los sistemas"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103002",
                pregunta: "¿Qué diferencia principal existe entre un ataque DoS y un ataque DDoS?",
                opciones: [
                    "El DoS es más efectivo que el DDoS",
                    "El DDoS se realiza desde múltiples puntos de conexión mientras que el DoS desde uno solo",
                    "El DoS afecta a la integridad mientras que el DDoS afecta a la disponibilidad",
                    "El DDoS solo afecta a servidores web"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103003",
                pregunta: "¿Qué es una botnet en el contexto de los ataques DDoS?",
                opciones: [
                    "Un software antivirus especializado",
                    "Una red de ordenadores o dispositivos controlados por un atacante",
                    "Un tipo de firewall distribuido",
                    "Un protocolo de seguridad para prevenir ataques"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103004",
                pregunta: "En el ataque DDoS a Dyn en 2016, ¿qué tipo de dispositivos se utilizaron principalmente para realizar el ataque?",
                opciones: [
                    "Ordenadores personales infectados",
                    "Servidores corporativos comprometidos",
                    "Dispositivos IoT infectados con el malware Mirai",
                    "Teléfonos móviles con aplicaciones maliciosas"
                ],
                correcta: 2,
                preguntaId: "40901030"
            },
            {
                id: "4090103005",
                pregunta: "¿En qué consiste una inundación SYN?",
                opciones: [
                    "Enviar múltiples paquetes ICMP Echo request a la víctima",
                    "Enviar un flujo de paquetes TCP/SYN sin completar el handshake TCP",
                    "Enviar paquetes UDP a puertos aleatorios",
                    "Enviar paquetes con el tamaño de ventana TCP igual a cero"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103006",
                pregunta: "¿Qué característica define al ataque Smurf?",
                opciones: [
                    "Utiliza paquetes UDP de gran tamaño",
                    "Envía paquetes ICMP a una dirección IP de difusión usando como origen la IP de la víctima",
                    "Envía paquetes con el flag FIN del protocolo TCP",
                    "Utiliza paquetes con el mismo puerto y dirección IP de origen y destino"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103007",
                pregunta: "¿En qué consiste el ataque Land?",
                opciones: [
                    "Enviar paquetes ping de tamaño superior al máximo autorizado",
                    "Enviar paquetes TCP SYN con la misma dirección IP y puerto en origen y destino",
                    "Enviar paquetes con el tamaño de ventana TCP igual a cero",
                    "Enviar paquetes ICMP a una dirección de broadcast"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103008",
                pregunta: "¿Qué es el Ping de la muerte?",
                opciones: [
                    "Un ataque que envía paquetes ping cuyo tamaño supera el máximo autorizado (64 KB)",
                    "Un ataque que envía millones de paquetes ping simultáneamente",
                    "Un ataque que modifica el contenido de los paquetes ping para hacerlos maliciosos",
                    "Un ataque que bloquea la respuesta a los paquetes ping"
                ],
                correcta: 0,
                preguntaId: "40901030"
            },
            {
                id: "4090103009",
                pregunta: "¿Qué es el cryptojacking?",
                opciones: [
                    "Un tipo de ransomware que cifra los archivos del usuario",
                    "Un ataque que roba las claves de cifrado de un sistema",
                    "Un malware que utiliza los recursos del sistema para minar criptomonedas sin consentimiento",
                    "Un ataque que modifica las transacciones de criptomonedas"
                ],
                correcta: 2,
                preguntaId: "40901030"
            },
            {
                id: "4090103010",
                pregunta: "¿Cuál de los siguientes efectos NO es causado por el cryptojacking?",
                opciones: [
                    "Reducción de la velocidad de otros procesos",
                    "Aumento en la factura de electricidad",
                    "Acortamiento de la vida útil del dispositivo",
                    "Cifrado de los archivos del usuario"
                ],
                correcta: 3,
                preguntaId: "40901030"
            },
            {
                id: "4090103011",
                pregunta: "¿Qué diferencia existe entre Data Tampering y Data Diddling?",
                opciones: [
                    "No hay diferencia, son términos sinónimos",
                    "Data Diddling es la alteración de datos al introducirlos, mientras que Data Tampering es la modificación de datos ya existentes",
                    "Data Tampering solo afecta a bases de datos, mientras que Data Diddling afecta a archivos",
                    "Data Diddling es más grave que Data Tampering"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103012",
                pregunta: "¿Qué es un exploit?",
                opciones: [
                    "Un tipo de virus informático",
                    "Un programa o fragmento de código que aprovecha una vulnerabilidad conocida",
                    "Un ataque de denegación de servicio",
                    "Un tipo de ransomware"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103013",
                pregunta: "¿Qué es un ataque de día cero (zero-day attack)?",
                opciones: [
                    "Un ataque que se realiza el primer día de cada mes",
                    "Un ataque que aprovecha vulnerabilidades desconocidas para los usuarios y fabricantes",
                    "Un ataque que tarda cero días en ser detectado",
                    "Un ataque que no causa daños inmediatos"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103014",
                pregunta: "¿Qué característica principal diferencia a un gusano (worm) de un virus?",
                opciones: [
                    "Los gusanos son más dañinos que los virus",
                    "Los gusanos pueden replicarse a sí mismos sin intervención del usuario",
                    "Los virus solo afectan a sistemas Windows",
                    "Los gusanos solo afectan a redes locales"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103015",
                pregunta: "¿Qué es un troyano (trojan)?",
                opciones: [
                    "Un malware que se oculta como líneas de código dentro de una aplicación legítima",
                    "Un malware que cifra los archivos del usuario",
                    "Un malware que se replica a sí mismo",
                    "Un malware que registra las pulsaciones de teclado"
                ],
                correcta: 0,
                preguntaId: "40901030"
            },
            {
                id: "4090103016",
                pregunta: "¿Qué es un keylogger?",
                opciones: [
                    "Un tipo de malware que cifra los archivos",
                    "Un software que registra cada tecla pulsada en un ordenador",
                    "Un programa que bloquea el acceso al teclado",
                    "Un virus que daña físicamente el teclado"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103017",
                pregunta: "¿Qué es un rootkit?",
                opciones: [
                    "Un conjunto de herramientas para administradores de sistemas",
                    "Un software que proporciona acceso remoto con privilegios de administrador a un usuario no autorizado",
                    "Un programa que analiza las vulnerabilidades del sistema",
                    "Un tipo de firewall avanzado"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103018",
                pregunta: "¿Qué característica define al ransomware?",
                opciones: [
                    "Roba información confidencial",
                    "Cifra los archivos y pide un rescate a cambio de la clave de descifrado",
                    "Registra las pulsaciones de teclado",
                    "Utiliza los recursos del sistema para minar criptomonedas"
                ],
                correcta: 1,
                preguntaId: "40901030"
            },
            {
                id: "4090103019",
                pregunta: "En el ataque del ransomware WannaCry en 2017, ¿qué sector fue especialmente afectado en Reino Unido?",
                opciones: [
                    "El sector financiero",
                    "El sector educativo",
                    "El Servicio Sanitario Nacional",
                    "El sector de telecomunicaciones"
                ],
                correcta: 2,
                preguntaId: "40901030"
            },
            {
                id: "4090103020",
                pregunta: "¿Cuál de los siguientes ataques NO afecta principalmente a la disponibilidad?",
                opciones: [
                    "Ataque DoS",
                    "Inundación SYN",
                    "Cryptojacking",
                    "Phishing"
                ],
                correcta: 3,
                preguntaId: "40901030"
            }
        ]
    },
    "4090201000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4090201001",
                pregunta: "¿Qué es la seguridad perimetral?",
                opciones: [
                    "Un conjunto de elementos y sistemas destinados a proteger perímetros físicos o lógicos, detectar tentativas de intrusión y expulsar intrusos",
                    "Un sistema que solo protege el perímetro físico de una organización",
                    "Un conjunto de medidas que solo se aplican a redes externas",
                    "Un sistema que solo detecta intrusiones pero no las previene"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201002",
                pregunta: "¿Qué es una zona desmilitarizada (DMZ)?",
                opciones: [
                    "Una red aislada dentro de la red interna donde se ubican recursos accesibles desde Internet",
                    "Una zona sin protección de seguridad",
                    "Una red externa a la organización",
                    "Una zona donde no se permite ningún tipo de conexión"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201003",
                pregunta: "¿Qué característica principal tiene una DMZ respecto a las conexiones?",
                opciones: [
                    "Permite conexiones desde Internet y desde la red local, pero bloquea conexiones desde la DMZ hacia la red local",
                    "Bloquea todas las conexiones entrantes",
                    "Permite todas las conexiones en cualquier dirección",
                    "Solo permite conexiones desde la red local hacia Internet"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201004",
                pregunta: "Según la Guía CCN-STIC-408, ¿qué es un firewall?",
                opciones: [
                    "Un sistema que hace cumplir una política de control de acceso en las comunicaciones entre dispositivos de red",
                    "Un sistema que solo bloquea conexiones entrantes",
                    "Un dispositivo que solo cifra las comunicaciones",
                    "Un sistema que solo detecta intrusiones"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201005",
                pregunta: "¿Cuál de las siguientes NO es una función típica de un firewall?",
                opciones: [
                    "Análisis de vulnerabilidades en el código fuente de aplicaciones",
                    "Filtrado del tráfico",
                    "Redireccionamiento de los paquetes",
                    "Establecimiento de redes privadas virtuales"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201006",
                pregunta: "¿Qué tipo de firewall se caracteriza por mantener información de estado de las conexiones establecidas?",
                opciones: [
                    "Firewall de inspección de estado (stateful packet filtering)",
                    "Firewall a nivel de paquete de datos (stateless packet filtering)",
                    "Firewall a nivel de aplicación",
                    "Firewall XML"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201007",
                pregunta: "¿Qué tipo de firewall actúa en la capa 7 del modelo OSI?",
                opciones: [
                    "Firewall a nivel de aplicación",
                    "Firewall a nivel de paquete de datos",
                    "Firewall de inspección de estado",
                    "Firewall de paquetes con estado e inspección"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201008",
                pregunta: "¿Qué es un proxy?",
                opciones: [
                    "Un servidor que hace de intermediario en las peticiones de recursos que realiza un cliente a un servidor web",
                    "Un dispositivo que solo filtra el tráfico de red",
                    "Un sistema que solo detecta intrusiones",
                    "Un servidor que solo almacena copias de seguridad"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201009",
                pregunta: "¿Qué tipo de proxy se encarga de enmascarar diferentes direcciones IPs a/desde las que se conectan a internet?",
                opciones: [
                    "Proxy NAT",
                    "Proxy web",
                    "Proxy inverso",
                    "Proxy abierto"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201010",
                pregunta: "¿Qué es un IDS (Intrusion Detection System)?",
                opciones: [
                    "Un programa de detección de accesos no autorizados a una red de ordenadores",
                    "Un sistema que solo bloquea conexiones entrantes",
                    "Un dispositivo que solo cifra las comunicaciones",
                    "Un sistema que solo redirige el tráfico"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201011",
                pregunta: "¿Qué tipo de IDS se instala en los servidores más críticos para evitar el acceso a los mismos?",
                opciones: [
                    "HIDS (Host IDS)",
                    "NIDS (Network IDS)",
                    "WIDS (Wireless IDS)",
                    "IPS (Intrusion Prevention System)"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201012",
                pregunta: "¿Qué tipo de IDS supervisa todos los paquetes de la red y los compara con una base de datos de firmas?",
                opciones: [
                    "IDS basado en firmas",
                    "IDS basado en anomalías",
                    "IDS pasivo",
                    "IDS activo"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201013",
                pregunta: "¿Cuál es la principal diferencia entre un IDS y un IPS?",
                opciones: [
                    "El IPS no solo identifica la actividad maliciosa, sino que intenta detenerla",
                    "El IDS es más moderno que el IPS",
                    "El IPS solo funciona a nivel de aplicación",
                    "El IDS requiere más recursos de hardware"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201014",
                pregunta: "¿Qué significa SAT en el contexto de la seguridad perimetral?",
                opciones: [
                    "Sistema de Alerta Temprana",
                    "Sistema Automático de Tráfico",
                    "Servicio de Análisis de Tráfico",
                    "Sistema de Administración Total"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201015",
                pregunta: "¿Cuál de las siguientes NO es una vertiente del SAT desarrollado por el CCN-CERT?",
                opciones: [
                    "SAT CLOUD",
                    "SAT ICS",
                    "SAT INET",
                    "SAT SARA"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201016",
                pregunta: "¿Qué técnica utilizan los IPS para efectuar su proactividad?",
                opciones: [
                    "Análisis del comportamiento de la red (NBA)",
                    "Solo análisis de firmas",
                    "Solo análisis de puertos",
                    "Solo análisis de protocolos"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201017",
                pregunta: "¿Qué son los UTM (Unified Threat Management)?",
                opciones: [
                    "Equipos de red que engloban varios sistemas de seguridad en el mismo dispositivo",
                    "Sistemas que solo detectan intrusiones",
                    "Dispositivos que solo cifran las comunicaciones",
                    "Sistemas que solo analizan logs"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201018",
                pregunta: "¿Cuál es la principal desventaja de los sistemas UTM?",
                opciones: [
                    "Se convierten en un único punto de fallo",
                    "No pueden filtrar el tráfico",
                    "No pueden detectar intrusiones",
                    "No pueden cifrar las comunicaciones"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201019",
                pregunta: "¿Qué es un SIEM (Security Information and Event Management)?",
                opciones: [
                    "Un sistema que efectúa un análisis de alertas de seguridad generadas por los dispositivos de la red en tiempo real",
                    "Un sistema que solo detecta intrusiones",
                    "Un dispositivo que solo cifra las comunicaciones",
                    "Un sistema que solo redirige el tráfico"
                ],
                correcta: 0,
                preguntaId: "40902010"
            },
            {
                id: "4090201020",
                pregunta: "¿Qué es un honeypot?",
                opciones: [
                    "Una herramienta de seguridad dispuesta para ser el objetivo de un posible ataque y así detectarlo y obtener información",
                    "Un sistema que solo detecta intrusiones",
                    "Un dispositivo que solo cifra las comunicaciones",
                    "Un sistema que solo redirige el tráfico"
                ],
                correcta: 0,
                preguntaId: "40902010"
            }
        ]
    },
    "4090301000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4090301001",
                pregunta: "¿Qué es una Red Privada Virtual (VPN)?",
                opciones: [
                    "Una red física que conecta diferentes sedes de una organización",
                    "Una tecnología que permite una extensión segura de la LAN sobre una red pública como Internet",
                    "Un protocolo de seguridad que solo funciona en redes locales",
                    "Un tipo de firewall que bloquea conexiones no autorizadas"
                ],
                correcta: 1,
                preguntaId: "40903010"
            },
            {
                id: "4090301002",
                pregunta: "¿Cuáles son las funciones principales que debe realizar una VPN?",
                opciones: [
                    "Autenticación, integridad y confidencialidad",
                    "Enrutamiento, filtrado y compresión",
                    "Almacenamiento, procesamiento y transmisión",
                    "Virtualización, emulación y simulación"
                ],
                correcta: 0,
                preguntaId: "40903010"
            },
            {
                id: "4090301003",
                pregunta: "¿Qué algoritmos de cifrado simétrico se utilizan comúnmente en las VPNs para garantizar la confidencialidad?",
                opciones: [
                    "RSA, DSA y ECC",
                    "MD5, SHA1 y SHA2",
                    "DES, 3DES y AES",
                    "HTTP, HTTPS y FTP"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301004",
                pregunta: "¿Qué tipo de VPN permite a un usuario conectarse con una red privada y acceder a todos sus servicios de manera remota?",
                opciones: [
                    "VPN punto a punto",
                    "VPN de acceso remoto",
                    "VPN de túnel seguro",
                    "VPN de capa 2"
                ],
                correcta: 1,
                preguntaId: "40903010"
            },
            {
                id: "4090301005",
                pregunta: "¿Qué tipo de VPN conecta dos redes de área local y se establece normalmente a través de sus routers?",
                opciones: [
                    "VPN punto a punto",
                    "VPN de acceso remoto",
                    "VPN de túnel seguro",
                    "VPN de capa 2"
                ],
                correcta: 0,
                preguntaId: "40903010"
            },
            {
                id: "4090301006",
                pregunta: "¿En qué capa del modelo OSI opera el protocolo IPsec?",
                opciones: [
                    "Capa 2 (Enlace de datos)",
                    "Capa 3 (Red)",
                    "Capa 4 (Transporte)",
                    "Capa 7 (Aplicación)"
                ],
                correcta: 1,
                preguntaId: "40903010"
            },
            {
                id: "4090301007",
                pregunta: "¿Cuáles son los tres protocolos principales que componen IPsec?",
                opciones: [
                    "TCP, UDP e ICMP",
                    "HTTP, HTTPS y FTP",
                    "IKE, AH y ESP",
                    "SSL, TLS y SSH"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301008",
                pregunta: "¿Qué protocolo de IPsec está dirigido a garantizar integridad y autenticación de los datos, pero no garantiza la confidencialidad?",
                opciones: [
                    "IKE (Internet Key Exchange)",
                    "AH (Authentication Header)",
                    "ESP (Encapsulating Security Payload)",
                    "SA (Security Association)"
                ],
                correcta: 1,
                preguntaId: "40903010"
            },
            {
                id: "4090301009",
                pregunta: "¿Qué protocolo de IPsec proporciona autenticidad de origen, integridad y protección de confidencialidad de un paquete?",
                opciones: [
                    "IKE (Internet Key Exchange)",
                    "AH (Authentication Header)",
                    "ESP (Encapsulating Security Payload)",
                    "SA (Security Association)"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301010",
                pregunta: "En el modo transporte de IPsec, ¿qué parte del paquete IP es cifrada o autenticada?",
                opciones: [
                    "Todo el paquete IP (datos más cabeceras)",
                    "Solo la cabecera IP",
                    "Solo la carga útil del paquete IP",
                    "Ninguna parte, solo se añade una nueva cabecera"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301011",
                pregunta: "En el modo túnel de IPsec, ¿qué parte del paquete IP es cifrada o autenticada?",
                opciones: [
                    "Todo el paquete IP (datos más cabeceras)",
                    "Solo la cabecera IP",
                    "Solo la carga útil del paquete IP",
                    "Ninguna parte, solo se añade una nueva cabecera"
                ],
                correcta: 0,
                preguntaId: "40903010"
            },
            {
                id: "4090301012",
                pregunta: "¿Cuál es el principal punto débil del protocolo PPTP?",
                opciones: [
                    "No es compatible con sistemas Windows",
                    "No soporta múltiples protocolos",
                    "Solo ofrece autenticación mediante contraseñas y no cifra las comunicaciones",
                    "Es demasiado complejo de configurar"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301013",
                pregunta: "¿Cuál es la principal diferencia entre PPTP y L2F?",
                opciones: [
                    "L2F no depende del protocolo IP y puede trabajar con otros medios como Frame Relay o ATM",
                    "L2F ofrece cifrado de datos mientras que PPTP no",
                    "L2F opera en la capa 3 mientras que PPTP opera en la capa 2",
                    "L2F solo funciona en entornos Linux mientras que PPTP es exclusivo de Windows"
                ],
                correcta: 0,
                preguntaId: "40903010"
            },
            {
                id: "4090301014",
                pregunta: "¿Qué protocolo fue diseñado como heredero de PPTP y L2F para corregir sus deficiencias?",
                opciones: [
                    "IPsec",
                    "L2TP",
                    "OpenVPN",
                    "SSTP"
                ],
                correcta: 1,
                preguntaId: "40903010"
            },
            {
                id: "4090301015",
                pregunta: "¿Qué decisión tomó el IETF para solventar los problemas de seguridad de L2TP?",
                opciones: [
                    "Crear un nuevo conjunto de protocolos específicos para L2TP",
                    "Abandonar el desarrollo de L2TP y centrarse en PPTP",
                    "Utilizar los protocolos IPsec para proteger los datos que viajan por un túnel L2TP",
                    "Implementar cifrado SSL/TLS en L2TP"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301016",
                pregunta: "¿Cuáles son los dos modos considerados seguros en OpenVPN?",
                opciones: [
                    "Modo transporte y modo túnel",
                    "Modo cliente y modo servidor",
                    "Modo cifrado simétrico con claves pre-compartidas y modo cifrado asimétrico con SSL/TLS",
                    "Modo capa 2 y modo capa 3"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301017",
                pregunta: "¿Qué característica permite a SSTP atravesar casi todos los firewalls y proxies?",
                opciones: [
                    "El uso de SSL/TLS sobre el puerto 443 de TCP",
                    "Su capacidad para cambiar dinámicamente de puerto",
                    "Su compatibilidad con IPsec",
                    "Su capacidad para ocultar el tráfico VPN como tráfico HTTP normal"
                ],
                correcta: 0,
                preguntaId: "40903010"
            },
            {
                id: "4090301018",
                pregunta: "¿Qué limitación tiene SSTP en comparación con otras soluciones VPN?",
                opciones: [
                    "No proporciona cifrado de datos",
                    "No es compatible con sistemas Windows",
                    "Se diseñó solo para VPN de clientes remotos y no para VPN de punto a punto",
                    "No puede atravesar firewalls"
                ],
                correcta: 2,
                preguntaId: "40903010"
            },
            {
                id: "4090301019",
                pregunta: "¿Qué protocolo de capa transporte utiliza WireGuard?",
                opciones: [
                    "TCP",
                    "UDP",
                    "SCTP",
                    "ICMP"
                ],
                correcta: 1,
                preguntaId: "40903010"
            },
            {
                id: "4090301020",
                pregunta: "Según la tabla comparativa de protocolos VPN, ¿qué protocolos proporcionan autenticidad, integridad y confidencialidad?",
                opciones: [
                    "IPsec, OpenVPN, SSTP y Wireguard",
                    "PPTP, L2F y L2TP",
                    "Solo IPsec y Wireguard",
                    "Todos los protocolos VPN mencionados"
                ],
                correcta: 0,
                preguntaId: "40903010"
            }
        ]
    },
"4090401000e": {
        minimoParaAprobar: 7,
        preguntas: [
            {
                id: "4090401001",
                pregunta: "¿Cuál es el principal activo de una organización que se gestiona desde el puesto de trabajo?",
                opciones: [
                    "Los dispositivos tecnológicos",
                    "La información",
                    "Los recursos humanos",
                    "La infraestructura física"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401001",
                pregunta: "¿Qué tipos de dispositivos se utilizan actualmente en el puesto de trabajo?",
                opciones: [
                    "Únicamente ordenadores de sobremesa",
                    "Solo dispositivos móviles y tabletas",
                    "Ordenadores de sobremesa, portátiles, teléfonos móviles, tabletas, dispositivos de almacenamiento extraíbles, entre otros",
                    "Exclusivamente dispositivos autorizados por el departamento de IT"
                ],
                correcta: 2,
                preguntaId: "40904010"
            },
            {
                id: "4090401002",
                pregunta: "¿Cuál es el origen de muchas fugas de información en las empresas?",
                opciones: [
                    "Ataques externos de hackers",
                    "El puesto de un empleado",
                    "Fallos en los servidores",
                    "Vulnerabilidades en el software"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401002",
                pregunta: "¿Por qué hay que tener especial cuidado con el correo electrónico?",
                opciones: [
                    "Porque consume mucho ancho de banda",
                    "Porque la función de autocompletar puede provocar el envío accidental de información confidencial a un destinatario inadecuado",
                    "Porque los correos se almacenan permanentemente",
                    "Porque los correos no están cifrados"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401004",
                pregunta: "¿Cuál es la primera y fundamental medida de carácter organizativo para proteger el puesto de trabajo?",
                opciones: [
                    "Instalar un antivirus",
                    "Implantar una política de seguridad interna de la organización",
                    "Bloquear el acceso a internet",
                    "Cifrar todos los dispositivos"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401004",
                pregunta: "¿Qué medida organizativa se refiere a no dejar documentos visibles al ausentarse del puesto de trabajo?",
                opciones: [
                    "Política de contraseñas",
                    "Política de mesas limpias",
                    "Política de confidencialidad",
                    "Política de destrucción de documentos"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401005",
                pregunta: "¿Qué aspectos debe incluir una política de contraseñas robusta?",
                opciones: [
                    "Solo la complejidad de las contraseñas",
                    "Solo la obligación de cambiar las contraseñas periódicamente",
                    "Complejidad, cambio periódico, bloqueo tras intentos fallidos y cambio de clave inicial",
                    "Únicamente el bloqueo de usuarios tras intentos fallidos"
                ],
                correcta: 2,
                preguntaId: "40904010"
            },
            {
                id: "4090401005",
                pregunta: "¿Por qué es importante limitar los privilegios de administración en los equipos de los usuarios?",
                opciones: [
                    "Para ahorrar recursos del sistema",
                    "Para evitar que los usuarios personalicen su entorno de trabajo",
                    "Porque un usuario con privilegios de administración puede instalar software no legítimo, desactivar el antivirus o ser más vulnerable a infecciones",
                    "Porque los privilegios de administración ralentizan el equipo"
                ],
                correcta: 2,
                preguntaId: "40904010"
            },
            {
                id: "4090401006",
                pregunta: "¿Qué es un sistema EDR?",
                opciones: [
                    "Un tipo de antivirus tradicional",
                    "Un sistema de protección que combina antivirus tradicional con herramientas de monitorización e inteligencia artificial",
                    "Un firewall avanzado",
                    "Un sistema exclusivo para proteger servidores"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401006",
                pregunta: "¿Qué empresas son referentes en soluciones EDR?",
                opciones: [
                    "Microsoft, Apple y Google",
                    "Norton, McAfee y Avast",
                    "Carbon Black, CrowdStrike, Cylance y SentinelOne",
                    "Cisco, Juniper y Fortinet"
                ],
                correcta: 2,
                preguntaId: "40904010"
            },
            {
                id: "4090401007",
                pregunta: "¿Qué tecnologías utiliza un sistema EDR para mejorar la detección y prevención de amenazas?",
                opciones: [
                    "Solo antivirus tradicional",
                    "Inteligencia artificial y Big Data",
                    "Únicamente firewalls avanzados",
                    "Solo sistemas de cifrado"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401007",
                pregunta: "¿Qué tipo de amenazas puede detectar un sistema EDR que un antivirus tradicional no puede?",
                opciones: [
                    "Virus comunes",
                    "Malware de tipo polimórfico, vulnerabilidades zero-day, ataques de ingeniería social y APTs",
                    "Solo troyanos",
                    "Únicamente spyware"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401007",
                pregunta: "¿Qué es un sandbox en el contexto de los sistemas EDR?",
                opciones: [
                    "Un tipo de malware",
                    "Un sistema virtual y aislado de pruebas para comprobar el comportamiento de archivos descargados",
                    "Una herramienta para cifrar archivos",
                    "Un tipo de firewall"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401008",
                pregunta: "¿Cuál de las siguientes es una ventaja de los sistemas EDR?",
                opciones: [
                    "Son más económicos que los antivirus tradicionales",
                    "Su configuración es muy sencilla",
                    "Recopilan información exhaustiva y detallada de las características del dispositivo",
                    "Funcionan con cualquier sistema operativo"
                ],
                correcta: 2,
                preguntaId: "40904010"
            },
            {
                id: "4090401008",
                pregunta: "¿Cuál es una desventaja de los sistemas EDR?",
                opciones: [
                    "No detectan malware tradicional",
                    "Su inversión supone un importe más elevado que en el caso del antivirus tradicional",
                    "No pueden conectarse a internet",
                    "Solo funcionan en sistemas Windows"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401009",
                pregunta: "¿Qué tipo de amenazas pueden detectar los antivirus tradicionales?",
                opciones: [
                    "Todo tipo de amenazas, incluyendo las más avanzadas",
                    "Principalmente virus, troyanos y gusanos",
                    "Solo ransomware",
                    "Únicamente ataques de día cero"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401009",
                pregunta: "¿En qué se diferencian los sistemas EDR de los antivirus tradicionales en cuanto a la respuesta automática?",
                opciones: [
                    "Los antivirus tradicionales tienen respuesta automática avanzada, mientras que los EDR tienen respuesta limitada",
                    "Los sistemas EDR tienen respuesta automática avanzada, mientras que los antivirus tradicionales tienen respuesta limitada",
                    "Ambos tienen el mismo nivel de respuesta automática",
                    "Ninguno ofrece respuesta automática"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401003",
                pregunta: "¿Qué organismo clasifica las medidas de protección del puesto de trabajo mencionadas?",
                opciones: [
                    "CCN-CERT",
                    "INCIBE (Instituto Nacional de Ciberseguridad)",
                    "ENISA",
                    "NIST"
                ],
                correcta: 1,
                preguntaId: "40904010"
            },
            {
                id: "4090401003",
                pregunta: "¿En qué categorías se clasifican las medidas de protección del puesto de trabajo?",
                opciones: [
                    "Físicas y lógicas",
                    "Hardware y software",
                    "Preventivas y reactivas",
                    "Organizativas y técnicas"
                ],
                correcta: 3,
                preguntaId: "40904010"
            },
            {
                id: "4090401005",
                pregunta: "¿Por qué es importante configurar el bloqueo de sesión por inactividad?",
                opciones: [
                    "Para ahorrar energía",
                    "Para evitar que, si la sesión permanece abierta cuando el usuario no está, cualquiera pueda acceder al equipo",
                    "Para mejorar el rendimiento del equipo",
                    "Para cumplir con la normativa de protección de datos"
                ],
                correcta: 1,
                preguntaId: "40904010"
            }
        ]
    }

};