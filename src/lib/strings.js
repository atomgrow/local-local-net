// ============================================================
//  LOCAL LOCAL v2 — Copy completo en español (rioplatense) e inglés.
//  Toda modificación de textos de la landing se hace acá.
//  Textos ES actualizados según devolución de Bernardo (23-jul-2026):
//  los textos en español van TEXTUALES — no editar sin aprobación.
// ============================================================

export const STRINGS = {
  /* ==========================================================
     ESPAÑOL
  ========================================================== */
  es: {
    meta: {
      title: 'Local Local | Relocalización y soft landing en Tandil',
      description:
        'Evaluamos tu proyecto, ordenamos cada decisión y te acompañamos con información de primera mano, una estrategia a tu medida y una red local cuidadosamente seleccionada.',
    },
    whatsappMessage:
      'Hola, estoy evaluando un proyecto en Tandil y quiero coordinar una entrevista de diagnóstico.',
    newsletterWhatsappMessage:
      'Hola, me interesa suscribirme al newsletter de Local Local.',

    nav: {
      links: [
        { label: 'Método', href: '#metodo' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Red local', href: '#red' },
        { label: 'Tandil', href: '#tandil' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Preguntas', href: '#preguntas' },
      ],
      cta: 'Contanos tu proyecto',
    },

    hero: {
      kicker: 'Relocalización y soft landing en Tandil',
      titleSans: 'Tu llegada a Tandil,',
      titleSerif: 'organizada con método y respaldo local',
      sub: 'Evaluamos tu proyecto, ordenamos cada decisión y te acompañamos con información de primera mano, una estrategia a tu medida y una red local cuidadosamente seleccionada',
      apoyo: '',
      cta: 'Quiero evaluar mi proyecto',
      ctaSec: 'Conocer el método',
      micro: 'Empecemos con tres preguntas. Sin compromiso de contratación',
      alt: 'Atardecer sobre el valle de Tandil, con casas entre sierras y arboledas',
    },

    trustbar: [
      { t: 'Mirada local', d: 'Vivimos en Tandil. Conocemos la ciudad de primera mano.' },
      { t: 'Criterio independiente', d: 'Nuestro único compromiso es ayudarte a tomar la mejor decisión.' },
      { t: 'Red validada', d: 'Profesionales seleccionados por su trayectoria, estándares de servicio y calidad humana.' },
      { t: 'Auditoría preventiva', d: 'Antes de comprometer tiempo o dinero, revisamos los aspectos legales y técnicos de cada operación para detectar riesgos, inconsistencias y costos ocultos.' },
      { t: 'Confidencialidad', d: 'Tu proyecto no circula por toda la ciudad: tus decisiones y tus tiempos se manejan con absoluta reserva. Nada se comparte sin que lo sepas y lo autorices.' },
    ],

    microDecision: {
      title: '¿Dónde estás en tu proceso de decisión?',
      sub: 'Elegí la opción que mejor represente tu situación hoy y te proponemos un camino para avanzar. Después, lo ajustamos juntos.',
      explorando: 'Todavía estoy explorando',
      avanzando: 'Ya estoy avanzando',
      msgExplorando:
        'Perfecto. Te acompañamos a explorar Tandil con información real, a tu ritmo y con libertad para decidir.',
      msgAvanzando:
        'Perfecto. Ordenamos tu proceso: diagnóstico personalizado, estrategia a medida y red local para activar el plan.',
      ctaExplorando: 'Quiero recibir la guía sobre Tandil',
      ctaAvanzando: 'Quiero evaluar mi proyecto',
    },

    problema: {
      kicker: 'El costo de improvisar',
      titleSans: 'Mudarte es mucho más que',
      titleSerif: 'encontrar una propiedad',
      intro:
        'Cambiar de ciudad pone en movimiento muchas variables al mismo tiempo: los colegios, las distancias, la rutina familiar, los costos, la vivienda y la forma de habitar la ciudad. Cuando esas decisiones se toman de manera fragmentada, el proyecto pierde coherencia: se multiplican los viajes, aparece información sesgada, se eligen proveedores poco confiables y se cometen errores difíciles de corregir.',
      intro2: 'En Local Local organizamos esas variables antes de que se conviertan en problemas.',
      escenarios: [
        {
          titulo: 'Viajes ineficientes',
          sinLabel: 'Sin método · Costos y desgaste evitables',
          conLabel: 'Con Local Local · Búsqueda con criterio',
          riesgo: false,
          sin: [
            '"Voy a ver propiedades a Tandil" — tres viajes o más',
            'Hoteles, combustible, días de trabajo perdidos',
          ],
          con: [
            'Primero definimos qué zonas se adaptan mejor a tu proyecto y las exploramos de forma remota',
            'Luego organizamos viajes estratégicos, con agenda armada de antemano',
          ],
        },
        {
          titulo: 'Información fragmentada',
          sinLabel: 'Sin método · Lectura incompleta',
          conLabel: 'Con Local Local · Información ordenada y contrastada',
          riesgo: false,
          sin: [
            'La información llega desde distintas fuentes, con criterios y niveles de detalle diferentes',
            'Sin una mirada de conjunto, es difícil saber qué comparar, qué información falta y qué conviene verificar.',
          ],
          con: [
            'Analizamos todas las alternativas bajo los mismos criterios',
            'Sumamos conocimiento local, información de mercado y una mirada a futuro para construir una visión completa.',
          ],
        },
        {
          titulo: 'Sorpresas legales y técnicas',
          sinLabel: 'Sin método · Riesgo alto',
          conLabel: 'Con Local Local · Riesgo mitigado',
          riesgo: true,
          sin: [
            '“Contrato y después me voy enterando…”',
            'Problemas que no se detectaron a tiempo y aparecen cuando la decisión ya está tomada',
          ],
          con: [
            'Antes de avanzar, auditamos el negocio desde una mirada legal y técnica',
            'Para que sepas qué estás contratando, en qué condiciones y con qué límites.',
          ],
        },
        {
          titulo: 'Coordinación fragmentada',
          sinLabel: 'Sin método · Proceso desordenado',
          conLabel: 'Con Local Local · Coordinación integral',
          riesgo: false,
          sin: [
            'Una mudanza involucra distintos profesionales, decisiones y tiempos.',
            'Sin alguien que articule el conjunto, la información se dispersa, las gestiones se superponen y el proceso pierde dirección.',
          ],
          con: [
            'Un único interlocutor ordena y conecta cada etapa',
            'Profesionales, tiempos y decisiones alineados bajo una misma hoja de ruta.',
          ],
        },
      ],
      cierre:
        'Local Local no elimina tu responsabilidad de decidir. Pero sí evita el caos de decidir solo, desde lejos y sin información completa.',
    },

    metodo: {
      kicker: 'El Método Local Local',
      titleSans: 'Un paso a paso para transformar incertidumbre',
      titleSerif: 'en decisiones estratégicas',
      formula: 'DIAGNÓSTICO + ESTRATEGIA + RED',
      intro:
        'Primero entendemos dónde estás. Después diseñamos juntos una hoja de ruta. Finalmente activamos las personas y recursos adecuados para ejecutarla',
      componentes: [
        {
          num: '01',
          titulo: 'Diagnóstico',
          copy: 'Analizamos tu situación personal, tus prioridades concretas y te entregamos un diagnóstico pormenorizado por escrito. El objetivo no es ofrecerte una solución prefabricada, sino entender qué decisión tomar primero.',
        },
        {
          num: '02',
          titulo: 'Estrategia',
          copy: 'Ordenamos las variables y construimos juntos una hoja de ruta a tu medida: qué resolver primero, qué alternativas evaluar y cómo avanzar con claridad, cuidando tu tiempo, tu dinero y manteniendo el control de cada decisión',
        },
        {
          num: '03',
          titulo: 'Red',
          copy: 'Cuando tu proyecto lo requiere, activamos una red local de profesionales y proveedores seleccionados por su experiencia, sus estándares de trabajo y su calidad humana. No pasamos contactos: construimos vínculos relevantes',
        },
      ],
      cta: 'Quiero evaluar mi proyecto',
    },

    servicios: {
      kicker: 'Servicios',
      titleSans: 'El recorrido completo,',
      titleSerif: 'resumido',
      etapas: [
        {
          num: '01',
          titulo: 'Diagnóstico personalizado y hoja de ruta',
          modalidad: 'Modalidad: 100 % remota',
          parrafos: [
            'Comenzamos con una entrevista personalizada por videollamada para conocernos y comprender en detalle tu proyecto de mudanza a Tandil: tu situación actual, tus necesidades, deseos, prioridades y tiempos.',
            'Con esa información analizamos el proyecto de manera integral e identificamos qué está definido, qué falta resolver y qué alternativas pueden ajustarse a tu realidad.',
          ],
          incluyeLabel: 'Incluye:',
          incluye: [
            'Entrevista personalizada por videollamada.',
            'Análisis integral del proyecto.',
            'Entrega de diagnóstico y propuesta de hoja de ruta por escrito, con prioridades, escenarios y próximos pasos dentro de los dos días hábiles posteriores a la entrevista.',
          ],
          valor: 'Valor final: $300.000.-',
          notas: [],
        },
        {
          num: '02',
          titulo: 'Visita estratégica a Tandil y activación de la red local',
          modalidad: 'Modalidad: presencial · Estadía estimada: de uno a tres días, preferentemente entre lunes y miércoles.',
          parrafos: [
            'Con la hoja de ruta como base, diseñamos antes de tu llegada una agenda personalizada para conocer y evaluar en Tandil las alternativas identificadas durante el diagnóstico.',
            'Priorizamos los días de semana para que conozcas la ciudad en su ritmo cotidiano y aproveches mejor cada jornada. Según tu proyecto, la agenda puede incluir visitas a colegios e inmuebles, recorridos por barrios y encuentros con profesionales y proveedores.',
            'Coordinamos cada instancia y te presentamos personalmente a las personas de nuestra red local seleccionadas para tu proyecto. Luego, cada encuentro se desarrolla directamente con ellas, para que puedas hacer preguntas y obtener información de primera mano.',
            'Al finalizar, compartimos conclusiones, ajustamos la hoja de ruta y definimos los próximos pasos.',
          ],
          incluyeLabel: 'Incluye:',
          incluye: [
            'Diseño y coordinación de la agenda.',
            'Organización de visitas, encuentros y recorridos.',
            'Acceso y presentación con nuestra red local.',
            'Devolución final y actualización de la hoja de ruta.',
            'Hasta dos noches de alojamiento, sujetas a disponibilidad y capacidad.',
          ],
          valor: 'Valor base: $500.000.- final para dos personas, con hasta dos noches de alojamiento incluidas.',
          notas: [
            'La propuesta definitiva se establece después del diagnóstico, según la cantidad de personas, las actividades previstas y la complejidad de la agenda. Antes de confirmar la visita, te informamos el valor final y los detalles del alojamiento.',
            'Para grupos de más de dos personas o cuando se requiera otra alternativa de alojamiento, cualquier diferencia se presupuesta previamente.',
            'Los traslados hasta Tandil y dentro de la ciudad no están incluidos.',
          ],
        },
        {
          num: '03',
          titulo: 'Auditoría integral de la operación',
          modalidad: 'Modalidad: híbrida. El análisis se realiza de manera remota, con instancias presenciales cuando la operación lo requiere',
          parrafos: [
            'Cuando una alternativa se vuelve concreta, definimos el alcance de la auditoría según el tipo y la complejidad de la operación.',
            'Nuestro equipo jurídico y notarial revisa la documentación y los antecedentes disponibles, las condiciones acordadas, los contratos que vas a firmar y las obligaciones que vas a asumir. Identificamos los riesgos que pueden afectar tu decisión, tu dinero o los tiempos del proyecto, y te explicamos con claridad qué está en orden, qué merece atención y qué debería resolverse antes de avanzar.',
            'Cuando resulta necesaria una evaluación técnica, coordinamos la intervención de profesionales especializados e incorporamos sus conclusiones al análisis. Sus honorarios y cualquier otro gasto adicional se informan previamente y se presupuestan por separado, salvo que la propuesta indique expresamente lo contrario.',
            'Antes de comenzar, recibís una propuesta que detalla el alcance de la revisión, los profesionales que intervendrán, los plazos estimados, los honorarios y los posibles costos de terceros.',
          ],
          incluyeLabel: 'Entregable: informe de revisión integral y mapa de riesgos, con el detalle de:',
          incluye: [
            'Qué fue revisado y verificado.',
            'Qué riesgos u observaciones encontramos.',
            'Qué impacto puede tener cada punto.',
            'Qué documentación o información falta.',
            'Qué ajustes, resguardos o condiciones recomendamos antes de avanzar.',
          ],
          valor: 'Valor: presupuesto personalizado según el tipo, el alcance y la complejidad de la operación. Se informa y acuerda antes de comenzar.',
          notas: [
            'El servicio incluye una reunión con nuestro equipo para explicarte las conclusiones, responder tus consultas y evaluar los próximos pasos.',
            'Con esa información, vas a poder decidir si avanzar, solicitar ajustes, renegociar las condiciones o considerar otra alternativa.',
            'Antes de avanzar, te presentamos un detalle claro y completo de los honorarios y costos profesionales involucrados, indicando a qué corresponde cada importe y qué tareas comprende.',
          ],
        },
        {
          num: '04',
          titulo: 'Llegaste. Sos parte.',
          modalidad: '',
          parrafos: [
            'Una vez en Tandil, seguís contando con la red de Local Local para hacer consultas, pedir recomendaciones y conectarte con personas y servicios de confianza en la ciudad.',
            'El recorrido inicial termina; tu acceso a la red continúa. Este acompañamiento está incluido y no tiene fecha de vencimiento.',
          ],
          incluyeLabel: '',
          incluye: [],
          valor: '',
          notas: [],
        },
      ],
      flexibleTitulo: 'Un recorrido flexible',
      flexible: [
        'El servicio está pensado para avanzar por etapas: cada una ordena y prepara la siguiente. Ese es el recorrido que recomendamos para evitar decisiones aisladas y avanzar con mayor claridad.',
        'Si tu proyecto ya está en marcha y necesitás una intervención puntual, podemos sumarnos en la instancia en la que te encontrás.',
      ],
      cta: 'Contanos tu caso por WhatsApp',
    },

    confidencialidad: {
      kicker: 'Confidencialidad',
      titleSans: 'Tu proyecto no tiene por qué',
      titleSerif: 'circular por toda la ciudad',
      copy: 'Una mudanza, una búsqueda inmobiliaria, una inversión o un proyecto empresarial involucran información familiar, profesional, estratégica y económica sensible. Su circulación puede exponer decisiones, condicionar negociaciones y sumar intereses ajenos al proyecto.',
      copy2:
        'En Local Local aplicamos un criterio de mínima exposición. Antes de activar cada contacto, acordamos con vos qué información se comparte, con quién y para qué. Cada profesional recibe únicamente lo indispensable para su intervención.',
      puntos: [
        'Tu capacidad de pago y tu presupuesto máximo se mantienen en reserva.',
        'Toda apertura de información cuenta con tu conocimiento y aprobación previa.',
        'Los profesionales involucrados respetan las mismas pautas de confidencialidad.',
        'Protegemos tu posición negociadora desde el primer contacto hasta el cierre de la operación.',
      ],
      cierre:
        'La confidencialidad se mantiene durante todo el proceso y continúa una vez finalizado. La discreción es un valor central de Local Local.',
      cta: 'Evaluar mi proyecto con confidencialidad',
    },

    red: {
      kicker: 'Red Local Local',
      titleSans: 'Sabemos a quién llamar,',
      titleSerif: 'para qué y en qué momento',
      copy: 'La fortaleza de nuestra red está en el criterio con el que fue construida y en la calidad de quienes la integran.',
      copy2:
        'Seleccionamos profesionales y proveedores por su trayectoria, referencias, estándares de trabajo, capacidad de respuesta y calidad humana. Cuando existen distintas alternativas confiables dentro de una misma área, proponemos la que consideramos más adecuada para las necesidades y características de cada proyecto.',
      statsTitle: 'La red en números',
      stats: [
        { n: '+20', d: 'profesionales y proveedores seleccionados' },
        { n: '+8', d: 'rubros esenciales reunidos en una mirada integral' },
        { n: '+15', d: 'años de vínculos profesionales construidos en Tandil' },
      ],
      statsFoot: 'Selección por criterio, no por cantidad.',
      statsNote:
        'Cada presentación se realiza cuando existe una necesidad concreta y contamos con la información necesaria para que el encuentro tenga sentido. La persona seleccionada recibe el contexto indispensable y vos sabés por qué la recomendamos y qué función tendrá dentro de tu proyecto.',
      principios: [
        { t: 'Selección previa', d: 'Cada profesional o proveedor es evaluado antes de incorporarse a la red.' },
        { t: 'Adecuación a cada proyecto', d: 'Cada presentación responde a una necesidad concreta, en el momento indicado y con un propósito definido.' },
        { t: 'Evaluación continua', d: 'Revisamos las experiencias y los resultados para mantener la red actualizada y sostener sus estándares de calidad.' },
      ],
      bilateral:
        'Cuidamos tanto a quienes llegan a través de Local Local como a los profesionales que integran nuestra red. Por eso, cada conexión comienza con contexto, expectativas claras y respeto por el tiempo de ambas partes.',
    },

    paraQuien: {
      kicker: 'Para quién es Local Local',
      titleSans: 'Para quienes reconocen el valor del asesoramiento preventivo:',
      titleSerif: 'ordenar antes de avanzar, verificar antes de comprometerse y decidir con una mirada integral',
      intro:
        'Local Local está pensado para personas, familias y empresas que valoran su tiempo, su patrimonio, la confidencialidad y el acceso a una red local seleccionada.',
      perfiles: [
        {
          t: 'Personas y familias',
          d: 'Que están explorando, preparando o concretando una mudanza y necesitan integrar vivienda, educación, trabajo, servicios, tiempos y vida cotidiana dentro de un mismo proyecto.',
        },
        {
          t: 'Profesionales, emprendedores e inversores',
          d: 'Que evalúan residir, invertir o desarrollar una actividad en Tandil y necesitan comprender el contexto local antes de comprometer tiempo, dinero o patrimonio.',
        },
        {
          t: 'Empresas',
          d: 'Que analizan instalarse, trasladar equipos, invertir o desarrollar un proyecto en Tandil y necesitan información, conexiones y profesionales locales para avanzar.',
        },
      ],
      filtro:
        'Trabajamos con quienes buscan un acompañamiento personalizado y entienden que una buena decisión también depende de la calidad del proceso que la precede',
    },

    tandil: {
      kicker: '¿Tandil sí o Tandil no?',
      titleSans: 'Tandil se conoce un fin de semana.',
      titleSerif: 'Pero se elige pensando en un martes',
      parrafos: [
        'En cuánto tiempo querés pasar viajando. En dónde querés que crezcan tus hijos. En la distancia entre tu casa, el colegio y el trabajo. En cómo querés que se sientan tus días.',
        'Tandil combina algo difícil de encontrar: naturaleza, movimiento y una escala todavía humana.',
        'Tiene colegios, universidad, salud, cultura, gastronomía, deporte y una economía que no depende de una sola actividad. Hay empresas, profesionales, industria, turismo, campo y un ecosistema tecnológico que sigue creciendo.',
        'Pero también hay aire, sierras y otra relación con el tiempo.',
        'Acá, la naturaleza no queda reservada para las vacaciones. Puede aparecer en una caminata después del trabajo, en una tarde con los chicos o en un camino que empieza a pocos minutos de tu casa.',
        'Tandil ofrece la posibilidad de vivir con más espacio, construir vínculos más cercanos y recuperar parte del tiempo que las grandes ciudades consumen todos los días.',
        'No es una ciudad detenida ni una promesa de vida perfecta. Es una ciudad activa, con identidad propia y con el tamaño suficiente para que un proyecto familiar, profesional o empresarial pueda desarrollarse sin quedar aislado.',
        'Claro que mudarse también implica revisar el trabajo, los ingresos, los colegios, la vivienda y la relación con la ciudad que dejás atrás. No todas las zonas ni todas las formas de vivir Tandil ofrecen la misma experiencia.',
        'Pero si estás buscando una vida con más naturaleza, más proximidad y mayor control sobre tus días, Tandil merece algo más que una visita.',
        'Merece convertirse en una posibilidad concreta.',
      ],
      cierre1: 'Tal vez no se trate de escapar de una ciudad.',
      cierre2: 'Tal vez se trate de elegir mejor la próxima.',
      credito: 'Fotografías: @santiarbeoph',
      galleryAlts: [
        'Pueblo serrano entre rocas y arboledas en Tandil',
        'La ciudad de Tandil al atardecer, vista desde las sierras',
        'Caballo pastando en las sierras de Tandil',
        'Cielo al atardecer sobre la ciudad de Tandil',
        'Torre del castillo del Parque Independencia de Tandil',
      ],
    },

    nosotros: {
      kicker: 'Nosotros',
      titleSans: 'Una mirada local,',
      titleSerif: 'una responsabilidad personal',
      nombre: 'Bernardo G. Cisterna',
      rol: 'Abogado (UBA – 2012) · Fundador y coordinador de la red Local Local · Tandil',
      saludo: 'Hola, soy Bernardo.',
      historia: [
        'Me crié en Tandil y me mudé a Buenos Aires para estudiar abogacía. Después elegí vivir en el exterior para conocer otras culturas y formas de vivir. Hoy vuelvo a elegir Tandil para desarrollarme y criar a mis hijos.',
        'Cada proceso de mudanza me enseñó -en primera persona- lo que significa armar una vida en otro lugar: coordinar decisiones a la distancia, avanzar sin una red de confianza y construir nuevas rutinas, vínculos y puntos de referencia.',
        'También aprendí que la información que parece definitiva muchas veces es incompleta, que las recomendaciones suelen responder a miradas parciales y que las decisiones apresuradas pueden ser costosas de corregir.',
        'Como abogado, veo repetirse ese mismo patrón en familias, profesionales y empresas que enfrentan las consecuencias de decisiones importantes tomadas con información fragmentada y sin asesoramiento preventivo.',
        'Así nació Local Local: el servicio con el que me habría gustado contar en cada mudanza.',
      ],
      expertiseLabel: 'Mi función',
      expertiseIntro: 'Soy el interlocutor principal de cada proyecto y coordino personalmente la intervención de nuestra red:',
      expertise: [
        'Escucho qué estás buscando y qué está en juego para vos.',
        'Te ayudo a ordenar prioridades y definir qué resolver primero.',
        'Convoco a las personas adecuadas en el momento indicado.',
        'Cuido tu posición durante las negociaciones.',
        'Te explico el fundamento de cada recomendación para que puedas decidir con claridad.',
      ],
      expertiseCierre: [
        'Cuando el proyecto incluye una operación patrimonial, lidero la etapa de auditoría jurídica, notarial y técnica.',
        'Cada recomendación lleva mi nombre, mi criterio y mi responsabilidad profesional.',
        'Estoy matriculado en el Colegio Público de Abogados de la Capital Federal y en el Colegio de Abogados del Departamento Judicial de Azul, Provincia de Buenos Aires. Esto me permite asumir personalmente las intervenciones jurídicas que cada caso requiera e integrarlas al resto del proceso.',
      ],
      compromisoLabel: 'Mi compromiso',
      compromiso: [
        'El diagnóstico inicial debe aportar claridad y criterio.',
        'Si dentro de las 48 horas de recibir tu hoja de ruta considerás que no cumplió con esa promesa, podés solicitar la devolución total del importe abonado por el diagnóstico.',
      ],
      ctaEvaluar: 'Quiero evaluar mi proyecto',
      cta: 'Conoceme en LinkedIn',
      fotoAlt: 'Retrato de Bernardo G. Cisterna en Tandil',
    },

    testimonios: {
      kicker: 'Testimonios',
      titleSans: 'Experiencias que construyeron',
      titleSerif: 'Local Local',
      demoBadge: 'TESTIMONIO DEMO — REEMPLAZAR ANTES DE PUBLICAR',
    },

    ctaFinal: {
      kicker: 'Empecemos',
      titleSans: 'Si Tandil está en tus planes:',
      titleSerif: 'tres preguntas, dos minutos, un primer paso concreto',
      copy: 'Contanos en qué momento está tu proyecto y te contacto dentro de las 24 horas para definir el próximo paso.',
      cta: 'Contanos tu proyecto',
      ctaSec: 'Conocer el método',
      micro: 'Confidencialidad desde el primer contacto.',
    },

    comoComienza: {
      kicker: 'Cómo comienza',
      title: 'Tres pasos, sin vueltas',
      pasos: [
        { n: '1', t: 'Respondés tres preguntas', d: 'Dos minutos' },
        { n: '2', t: 'Te contacto personalmente', d: 'Dentro de las 24 horas, por WhatsApp o email' },
        { n: '3', t: 'Agendamos tu diagnóstico', d: 'Entrevista remota de 45 minutos' },
      ],
      cierre: 'Todo es confidencial. Sin listas genéricas. Sin presión.',
    },

    cuestionario: {
      kicker: 'Contanos tu proyecto',
      titleSans: 'Contanos en qué momento',
      titleSerif: 'está tu proyecto',
      progreso: 'de',
      siguiente: 'Continuar →',
      atras: 'Atrás',
      q1: {
        label: '¿En qué momento está tu proyecto?',
        opciones: ['Recién estoy explorando.', 'Tandil ya es una opción concreta.', 'Ya decidí avanzar.'],
      },
      q2: {
        label: '¿Qué estás evaluando?',
        opciones: [
          'Una mudanza personal o familiar.',
          'Una inversión u operación patrimonial.',
          'Un proyecto profesional o empresarial.',
        ],
      },
      q3: {
        label: '¿Cuándo te gustaría avanzar?',
        opciones: [
          'Dentro de los próximos tres meses.',
          'Entre tres y seis meses.',
          'Más adelante; todavía estoy definiendo los tiempos.',
        ],
      },
      datos: {
        label: '¿Cómo preferís que te contacte?',
        nombre: 'Nombre y apellido',
        nombrePh: 'Tu nombre y apellido',
        email: 'Email',
        emailPh: 'tu@email.com',
        whatsapp: 'WhatsApp',
        whatsappPh: '+54 9 …',
        preferencia: 'Preferencia de contacto',
        preferencias: ['WhatsApp.', 'Email.', 'Cualquiera de los dos.'],
      },
      error: 'Contanos al menos tu nombre y un contacto para poder responderte.',
      enviar: 'Enviar mi proyecto',
      confid:
        'Confidencialidad desde el primer contacto. Tus respuestas se utilizan exclusivamente para comprender tu proyecto y contactarte.',
      directo: '¿Preferís conversar directamente?',
      directoCta: 'Escribime por WhatsApp',
      graciasTitulo: 'Recibido,',
      graciasCopy:
        'Se abrió WhatsApp con tu resumen listo para enviar. Si no se abrió, escribinos directo y lo coordinamos igual. Te respondemos dentro de las 24 horas.',
      postCtaPrincipal: 'Quiero mi entrevista de diagnóstico',
      postCtaSecundario: 'Todavía estoy explorando',
      leadLabels: {
        momento: 'Momento del proyecto',
        evaluando: 'Está evaluando',
        plazo: 'Cuándo quiere avanzar',
        nombre: 'Nombre',
        email: 'Email',
        whatsapp: 'WhatsApp',
        preferencia: 'Preferencia de contacto',
        campania: 'campaña',
      },
    },

    porQue: {
      kicker: '¿Por qué contratar Local Local?',
      titleSans: 'Porque hay errores',
      titleSerif: 'que se pagan caro',
      intro:
        'A la distancia, muchas decisiones parecen más sencillas de lo que realmente son, en Local Local te ayudamos a evitar:',
      items: [
        'Elegir una zona que parecía perfecta durante el fin de semana y descubrir después que no funciona para tu rutina diaria.',
        'Definir un colegio por referencias generales sin evaluar vacantes, distancias, propuesta educativa y compatibilidad con tu familia.',
        'Viajar varias veces a Tandil por reuniones desordenadas, visitas improductivas o información que podía obtenerse antes.',
        'Entregar una seña o poner tus ahorros en una “oportunidad” sin comprobar quién está detrás, qué se está vendiendo realmente y si los papeles respaldan lo prometido.',
        'Avanzar con un inmueble, lote o proyecto sin conocer sus limitaciones legales, técnicas, urbanísticas o de servicios.',
        'Contratar a alguien solo porque “lo conoce todo el mundo” y terminar con presupuestos que cambian, trabajos mal hechos o plazos que nunca se cumplen.',
        'Descubrir demasiado tarde gastos, obras, trámites o condicionantes que cambian por completo el costo de la decisión.',
        'Organizar mal los tiempos y terminar pagando alquileres superpuestos, estadías, depósitos, viajes o mudanzas innecesarias.',
        'Resolver vivienda, colegios, trabajo y vida cotidiana por separado, para descubrir después que las piezas no encajan.',
        'Exponer tu proyecto por toda la ciudad y quedar rodeado de llamados, recomendaciones interesadas y presión para decidir rápido.',
      ],
      cierre1:
        'Cada profesional conoce su parte. Nosotros integramos las variables, hacemos las preguntas incómodas y te ayudamos a detectar lo que todavía no estás viendo.',
      cierre2Intro: 'Muchas veces, el mejor resultado de nuestro trabajo es lo que no ocurrió:',
      cierre2Destacado:
        'la seña que no perdiste, el viaje que no hiciste, el proveedor que no contrataste y la decisión que no tuviste que lamentar.',
      cta: 'Evaluá tu proyecto →',
    },

    newsletter: {
      kicker: 'Newsletter',
      title: 'Sigamos pensando juntos',
      copy: 'Compartimos ideas, experiencias y herramientas para quienes están atravesando una mudanza, evaluando un cambio de ciudad o imaginando una nueva etapa para su familia o su proyecto.',
      cta: 'Suscribite para recibir nuestras próximas historias y novedades',
    },

    faq: {
      kicker: 'Preguntas frecuentes',
      title: 'Lo que suelen preguntarnos',
      items: [
        {
          q: '¿Qué hace exactamente Local Local?',
          a: 'Analizamos, planificamos y acompañamos proyectos de mudanza, inversión o instalación en Tandil. Trabajamos con un método propio: diagnóstico de tu situación, una estrategia a medida y, cuando hace falta, la activación de una red local de profesionales validados.',
        },
        {
          q: '¿En qué se diferencia de una inmobiliaria?',
          a: 'No vendemos propiedades ni cobramos comisiones de terceros. Nuestro único interés es que tomes una buena decisión. Una inmobiliaria trabaja sobre su cartera; nosotros trabajamos sobre tu proyecto completo: vivienda, colegios, aspectos legales, tiempos y vida cotidiana.',
        },
        {
          q: '¿Pueden ayudarme si todavía no decidí mudarme?',
          a: 'Sí. Gran parte del valor está justamente en la etapa de evaluación: entender si Tandil es para vos, qué zona tiene sentido y qué implicaría el cambio, antes de comprometer tiempo o dinero.',
        },
        {
          q: '¿Qué incluye el diagnóstico inicial?',
          a: 'Una entrevista remota de 45 minutos, el análisis integral de tu proyecto y la entrega de un diagnóstico y una propuesta de hoja de ruta por escrito, con prioridades, escenarios y próximos pasos.',
        },
        {
          q: '¿Puedo contratar solamente una etapa?',
          a: 'Sí. El servicio está pensado para avanzar por etapas: cada una ordena y prepara la siguiente. Si tu proyecto ya está en marcha y necesitás una intervención puntual, podemos sumarnos en la instancia en la que te encontrás.',
        },
        {
          q: '¿Cómo seleccionan a los profesionales de la red?',
          a: 'Por su trayectoria, referencias, estándares de trabajo, capacidad de respuesta y calidad humana, en vínculos construidos durante años en Tandil. No es una lista única: recomendamos según cada proyecto y evaluamos la red de forma continua.',
        },
        {
          q: '¿La información que comparto es confidencial?',
          a: 'Sí. Aplicamos un criterio de mínima exposición: antes de activar cada contacto acordamos con vos qué información se comparte, con quién y para qué. Tu capacidad de pago y tu presupuesto máximo se mantienen en reserva.',
        },
        {
          q: '¿Qué ocurre después del diagnóstico?',
          a: 'Recibís el documento con la hoja de ruta. A partir de ahí decidís: avanzar por tu cuenta, contratar etapas puntuales o un acompañamiento integral. Sin presión y sin compromisos automáticos.',
        },
      ],
      verTodas: 'Ver todas las preguntas frecuentes',
    },

    sticky: {
      cta: 'Evaluar mi proyecto',
    },

    footer: {
      blurb: 'Relocalización y soft landing en Tandil.',
      navLabel: 'Navegación',
      legalLabel: 'Legales',
      legalLink: 'Legales',
      contactoLabel: 'Contacto',
      whatsapp: 'Escribinos por WhatsApp →',
      linkedin: 'LinkedIn de Bernardo',
      disclaimer:
        'Local Local brinda servicios de análisis, planificación, orientación y acompañamiento. Las recomendaciones no garantizan resultados que dependan del mercado, organismos, disponibilidad o terceros. Los profesionales y proveedores de la red trabajan de manera independiente y cada operación requiere una evaluación específica.',
      credito: 'Fotografías: @santiarbeoph',
      derechos: 'Todos los derechos reservados',
      powered: 'Powered by Atomgrow',
    },
  },

  /* ==========================================================
     ENGLISH
     Final translation reviewed and aligned with Spanish copy.
  ========================================================== */
  en: {
    meta: {
      title: 'Local Local | Relocation & soft landing in Tandil',
      description:
        'We evaluate your project, bring order to every decision and support you with first-hand information, a tailored strategy and a carefully curated local network.',
    },
    whatsappMessage:
      "Hi, I'm evaluating a project in Tandil and I'd like to schedule a diagnostic interview.",
    newsletterWhatsappMessage:
      "Hi, I'd like to subscribe to the Local Local newsletter.",

    nav: {
      links: [
        { label: 'Method', href: '#metodo' },
        { label: 'Services', href: '#servicios' },
        { label: 'Local network', href: '#red' },
        { label: 'Tandil', href: '#tandil' },
        { label: 'About', href: '#nosotros' },
        { label: 'FAQ', href: '#preguntas' },
      ],
      cta: 'Evaluate my project',
    },

    hero: {
      kicker: 'Relocation & soft landing in Tandil',
      titleSans: 'Your arrival in Tandil,',
      titleSerif: 'organized with method and local backing',
      sub: 'We evaluate your project, bring order to every decision and support you with first-hand information, a tailored strategy and a carefully curated local network',
      apoyo: '',
      cta: 'I want to evaluate my project',
      ctaSec: 'See the method',
      micro: "Let's start with three questions. No commitment to hire",
      alt: 'Sunset over the Tandil valley, houses nestled among hills and trees',
    },

    trustbar: [
      { t: 'Local insight', d: 'We live in Tandil. We know the city first-hand.' },
      { t: 'Independent judgment', d: 'Our only commitment is helping you make the best decision.' },
      { t: 'Vetted network', d: 'Professionals selected for their track record, service standards and human quality.' },
      { t: 'Preventive audit', d: 'Before you commit time or money, we review the legal and technical aspects of each transaction to detect risks, inconsistencies and hidden costs.' },
      { t: 'Confidentiality', d: 'Your project doesn’t travel around town: your decisions and your timing are handled with absolute discretion. Nothing is shared without your knowledge and authorization.' },
    ],

    microDecision: {
      title: 'Where are you in your decision process?',
      sub: 'Choose the option that best reflects your situation today and we’ll propose a path forward. Then we adjust it together.',
      explorando: 'Still exploring',
      avanzando: 'Already moving forward',
      msgExplorando:
        'Great. We’ll help you explore Tandil with real information, at your own pace and with full freedom to decide.',
      msgAvanzando:
        'Great. We bring order to your process: personalized diagnosis, tailored strategy and a local network to activate the plan.',
      ctaExplorando: 'Send me the Tandil guide',
      ctaAvanzando: 'Evaluate my project',
    },

    problema: {
      kicker: 'The cost of improvising',
      titleSans: 'Moving is much more than',
      titleSerif: 'finding a property',
      intro:
        'Changing cities sets many variables in motion at once: schools, distances, family routines, costs, housing and the way you inhabit the city. When those decisions are made in a fragmented way, the project loses coherence: trips multiply, biased information appears, unreliable providers get chosen and mistakes become hard to fix.',
      intro2: 'At Local Local we organize those variables before they become problems.',
      escenarios: [
        {
          titulo: 'Inefficient trips',
          sinLabel: 'No method · Avoidable costs and wear',
          conLabel: 'With Local Local · A search with criteria',
          riesgo: false,
          sin: [
            '"I’ll go look at properties in Tandil" — three trips or more',
            'Hotels, fuel, lost working days',
          ],
          con: [
            'First we define which areas best fit your project and explore them remotely',
            'Then we organize strategic trips, with the agenda built in advance',
          ],
        },
        {
          titulo: 'Fragmented information',
          sinLabel: 'No method · An incomplete picture',
          conLabel: 'With Local Local · Ordered, cross-checked information',
          riesgo: false,
          sin: [
            'Information arrives from different sources, with different criteria and levels of detail',
            'Without an overall view, it’s hard to know what to compare, what’s missing and what should be verified.',
          ],
          con: [
            'We analyze every alternative under the same criteria',
            'We add local knowledge, market information and a forward-looking view to build a complete picture.',
          ],
        },
        {
          titulo: 'Legal & technical surprises',
          sinLabel: 'No method · High risk',
          conLabel: 'With Local Local · Risk mitigated',
          riesgo: true,
          sin: [
            '“I sign first, then find things out…”',
            'Problems that weren’t detected in time and surface once the decision is already made',
          ],
          con: [
            'Before moving forward, we audit the deal from a legal and technical standpoint',
            'So you know what you’re signing, under what conditions and with what limits.',
          ],
        },
        {
          titulo: 'Fragmented coordination',
          sinLabel: 'No method · A disorderly process',
          conLabel: 'With Local Local · Integral coordination',
          riesgo: false,
          sin: [
            'A move involves different professionals, decisions and timelines.',
            'Without someone articulating the whole, information scatters, tasks overlap and the process loses direction.',
          ],
          con: [
            'A single point of contact orders and connects every stage',
            'Professionals, timelines and decisions aligned under one roadmap.',
          ],
        },
      ],
      cierre:
        'Local Local doesn’t remove your responsibility to decide. But it does prevent the chaos of deciding alone, from afar and without complete information.',
    },

    metodo: {
      kicker: 'The Local Local Method',
      titleSans: 'A step-by-step process to turn uncertainty',
      titleSerif: 'into strategic decisions',
      formula: 'DIAGNOSIS + STRATEGY + NETWORK',
      intro:
        'First we understand where you stand. Then we design a roadmap together. Finally we activate the right people and resources to execute it',
      componentes: [
        {
          num: '01',
          titulo: 'Diagnosis',
          copy: 'We analyze your personal situation and concrete priorities, and deliver a detailed written diagnosis. The goal isn’t a prefabricated solution — it’s understanding which decision to make first.',
        },
        {
          num: '02',
          titulo: 'Strategy',
          copy: 'We organize the variables and build a tailored roadmap together: what to solve first, which alternatives to evaluate and how to move forward with clarity, protecting your time and money while keeping control of every decision',
        },
        {
          num: '03',
          titulo: 'Network',
          copy: 'When your project requires it, we activate a local network of professionals and providers selected for their experience, work standards and human quality. We don’t pass along contacts: we build relevant relationships',
        },
      ],
      cta: 'Evaluate my project',
    },

    servicios: {
      kicker: 'Services',
      titleSans: 'The full journey,',
      titleSerif: 'summarized',
      etapas: [
        {
          num: '01',
          titulo: 'Personalized diagnosis & roadmap',
          modalidad: 'Format: 100% remote',
          parrafos: [
            'We start with a personalized video-call interview to get to know each other and understand your move to Tandil in detail: your current situation, needs, wishes, priorities and timing.',
            'With that information we analyze the project as a whole and identify what’s defined, what remains to be solved and which alternatives may fit your reality.',
          ],
          incluyeLabel: 'Includes:',
          incluye: [
            'Personalized video-call interview.',
            'Comprehensive project analysis.',
            'Written diagnosis and roadmap proposal, with priorities, scenarios and next steps, delivered within two business days of the interview.',
          ],
          valor: 'Final price: ARS $300,000.-',
          notas: [],
        },
        {
          num: '02',
          titulo: 'Strategic visit to Tandil & local network activation',
          modalidad: 'Format: in person · Estimated stay: one to three days, preferably Monday to Wednesday.',
          parrafos: [
            'With the roadmap as a base, we design a personalized agenda before your arrival, to see and evaluate in Tandil the alternatives identified during the diagnosis.',
            'We prioritize weekdays so you experience the city at its everyday rhythm and make the most of each day. Depending on your project, the agenda may include school and property visits, neighborhood tours and meetings with professionals and providers.',
            'We coordinate every instance and personally introduce you to the people in our local network selected for your project. Each meeting then unfolds directly with them, so you can ask questions and get first-hand information.',
            'At the end, we share conclusions, adjust the roadmap and define next steps.',
          ],
          incluyeLabel: 'Includes:',
          incluye: [
            'Agenda design and coordination.',
            'Organization of visits, meetings and tours.',
            'Access and introduction to our local network.',
            'Final debrief and roadmap update.',
            'Up to two nights of accommodation, subject to availability and capacity.',
          ],
          valor: 'Base price: ARS $500,000.- final for two people, including up to two nights of accommodation.',
          notas: [
            'The final proposal is set after the diagnosis, based on the number of people, planned activities and the complexity of the agenda. Before confirming the visit, we inform you of the final price and accommodation details.',
            'For groups of more than two people, or when a different accommodation option is required, any difference is quoted in advance.',
            'Travel to Tandil and within the city is not included.',
          ],
        },
        {
          num: '03',
          titulo: 'Comprehensive transaction audit',
          modalidad: 'Format: hybrid. The analysis is done remotely, with in-person instances when the transaction requires it',
          parrafos: [
            'When an alternative becomes concrete, we define the scope of the audit according to the type and complexity of the transaction.',
            'Our legal and notarial team reviews the available documentation and records, the agreed conditions, the contracts you’re about to sign and the obligations you’re about to assume. We identify the risks that may affect your decision, your money or the project’s timing, and we explain clearly what’s in order, what deserves attention and what should be resolved before moving forward.',
            'When a technical evaluation is needed, we coordinate the involvement of specialized professionals and incorporate their conclusions into the analysis. Their fees and any additional expenses are informed in advance and quoted separately, unless the proposal expressly states otherwise.',
            'Before we begin, you receive a proposal detailing the scope of the review, the professionals involved, estimated timelines, fees and possible third-party costs.',
          ],
          incluyeLabel: 'Deliverable: comprehensive review report and risk map, detailing:',
          incluye: [
            'What was reviewed and verified.',
            'What risks or observations we found.',
            'What impact each point may have.',
            'What documentation or information is missing.',
            'What adjustments, safeguards or conditions we recommend before moving forward.',
          ],
          valor: 'Price: personalized quote based on the type, scope and complexity of the transaction. Informed and agreed before starting.',
          notas: [
            'The service includes a meeting with our team to explain the conclusions, answer your questions and evaluate next steps.',
            'With that information you’ll be able to decide whether to move forward, request adjustments, renegotiate terms or consider another alternative.',
            'Before moving forward, we present a clear, complete breakdown of the professional fees and costs involved, indicating what each amount corresponds to and which tasks it covers.',
          ],
        },
        {
          num: '04',
          titulo: 'You arrived. You belong.',
          modalidad: '',
          parrafos: [
            'Once in Tandil, you keep counting on the Local Local network for questions, recommendations and connections with trusted people and services in the city.',
            'The initial journey ends; your access to the network continues. This support is included and has no expiration date.',
          ],
          incluyeLabel: '',
          incluye: [],
          valor: '',
          notas: [],
        },
      ],
      flexibleTitulo: 'A flexible journey',
      flexible: [
        'The service is designed to move forward in stages: each one orders and prepares the next. That’s the journey we recommend to avoid isolated decisions and move forward with greater clarity.',
        'If your project is already underway and you need a specific intervention, we can join at whatever stage you’re in.',
      ],
      cta: 'Tell us your case on WhatsApp',
    },

    confidencialidad: {
      kicker: 'Confidentiality',
      titleSans: 'Your project doesn’t need to',
      titleSerif: 'travel around town',
      copy: 'A move, a property search, an investment or a business project involves sensitive family, professional, strategic and financial information. Its circulation can expose decisions, condition negotiations and attract interests foreign to the project.',
      copy2:
        'At Local Local we apply a minimum-exposure principle. Before activating each contact, we agree with you on what information is shared, with whom and for what purpose. Each professional receives only what’s indispensable for their intervention.',
      puntos: [
        'Your payment capacity and maximum budget remain undisclosed.',
        'Any release of information happens with your prior knowledge and approval.',
        'The professionals involved follow the same confidentiality guidelines.',
        'We protect your negotiating position from first contact through to closing.',
      ],
      cierre:
        'Confidentiality is maintained throughout the process and continues once it ends. Discretion is a core value of Local Local.',
      cta: 'Evaluate my project confidentially',
    },

    red: {
      kicker: 'Local Local Network',
      titleSans: 'We know who to call,',
      titleSerif: 'for what and when',
      copy: 'Our network’s strength lies in the criteria with which it was built and the quality of those who belong to it.',
      copy2:
        'We select professionals and providers for their track record, references, work standards, responsiveness and human quality. When several trustworthy alternatives exist within the same field, we propose the one we consider best suited to the needs and characteristics of each project.',
      statsTitle: 'The network in numbers',
      stats: [
        { n: '+20', d: 'selected professionals and providers' },
        { n: '+8', d: 'essential fields brought together in one integral view' },
        { n: '+15', d: 'years of professional relationships built in Tandil' },
      ],
      statsFoot: 'Selected by criteria, not by volume.',
      statsNote:
        'Each introduction happens when there’s a concrete need and we have the information required for the meeting to make sense. The selected person receives the indispensable context, and you know why we recommend them and what role they’ll play in your project.',
      principios: [
        { t: 'Prior selection', d: 'Every professional or provider is evaluated before joining the network.' },
        { t: 'Fit for each project', d: 'Each introduction responds to a concrete need, at the right moment and with a defined purpose.' },
        { t: 'Continuous evaluation', d: 'We review experiences and outcomes to keep the network up to date and uphold its quality standards.' },
      ],
      bilateral:
        'We look after both those who arrive through Local Local and the professionals who make up our network. That’s why every connection starts with context, clear expectations and respect for both parties’ time.',
    },

    paraQuien: {
      kicker: 'Who Local Local is for',
      titleSans: 'For those who recognize the value of preventive advice:',
      titleSerif: 'ordering before advancing, verifying before committing and deciding with an integral view',
      intro:
        'Local Local is designed for people, families and companies who value their time, their assets, confidentiality and access to a curated local network.',
      perfiles: [
        {
          t: 'People & families',
          d: 'Exploring, preparing or completing a move, needing to integrate housing, education, work, services, timing and daily life into one single project.',
        },
        {
          t: 'Professionals, entrepreneurs & investors',
          d: 'Evaluating living, investing or developing an activity in Tandil, needing to understand the local context before committing time, money or assets.',
        },
        {
          t: 'Companies',
          d: 'Considering setting up, relocating teams, investing or developing a project in Tandil, needing information, connections and local professionals to move forward.',
        },
      ],
      filtro:
        'We work with those seeking personalized support who understand that a good decision also depends on the quality of the process that precedes it',
    },

    tandil: {
      kicker: 'Tandil: yes or no?',
      titleSans: 'You get to know Tandil on a weekend.',
      titleSerif: 'But you choose it thinking about a Tuesday',
      parrafos: [
        'How much time you want to spend commuting. Where you want your kids to grow up. The distance between home, school and work. How you want your days to feel.',
        'Tandil combines something hard to find: nature, activity and a still-human scale.',
        'It has schools, a university, healthcare, culture, gastronomy, sports and an economy that doesn’t depend on a single activity. There are companies, professionals, industry, tourism, farmland and a tech ecosystem that keeps growing.',
        'But there’s also fresh air, hills and another relationship with time.',
        'Here, nature isn’t reserved for vacations. It can appear on a walk after work, an afternoon with the kids or a trail that starts a few minutes from your home.',
        'Tandil offers the possibility of living with more space, building closer relationships and recovering part of the time big cities consume every day.',
        'It isn’t a frozen city or a promise of a perfect life. It’s an active city, with an identity of its own and enough size for a family, professional or business project to develop without becoming isolated.',
        'Of course, moving also means reviewing work, income, schools, housing and your relationship with the city you leave behind. Not every area or way of living Tandil offers the same experience.',
        'But if you’re looking for a life with more nature, more proximity and greater control over your days, Tandil deserves more than a visit.',
        'It deserves to become a concrete possibility.',
      ],
      cierre1: 'Maybe it’s not about escaping a city.',
      cierre2: 'Maybe it’s about choosing the next one better.',
      credito: 'Photography: @santiarbeoph',
      galleryAlts: [
        'Hillside town among rocks and groves in Tandil',
        'The city of Tandil at dusk, seen from the hills',
        'Horse grazing in the Tandil hills',
        'Sunset sky over the city of Tandil',
        'Tower of the Independencia Park castle in Tandil',
      ],
    },

    nosotros: {
      kicker: 'About',
      titleSans: 'A local eye,',
      titleSerif: 'a personal responsibility',
      nombre: 'Bernardo G. Cisterna',
      rol: 'Lawyer (UBA – 2012) · Founder and coordinator of the Local Local network · Tandil',
      saludo: 'Hi, I’m Bernardo.',
      historia: [
        'I grew up in Tandil and moved to Buenos Aires to study law. Then I chose to live abroad to experience other cultures and ways of living. Today I choose Tandil again, to grow and raise my children.',
        'Each move taught me — first-hand — what it means to build a life somewhere else: coordinating decisions from afar, moving forward without a trusted network, and building new routines, relationships and points of reference.',
        'I also learned that information that seems definitive is often incomplete, that recommendations usually reflect partial views, and that hasty decisions can be costly to fix.',
        'As a lawyer, I see that same pattern repeat in families, professionals and companies facing the consequences of important decisions made with fragmented information and without preventive advice.',
        'That’s how Local Local was born: the service I wish I’d had in every move.',
      ],
      expertiseLabel: 'My role',
      expertiseIntro: 'I’m the main point of contact for every project and I personally coordinate our network’s involvement:',
      expertise: [
        'I listen to what you’re looking for and what’s at stake for you.',
        'I help you order priorities and define what to solve first.',
        'I bring in the right people at the right time.',
        'I protect your position during negotiations.',
        'I explain the reasoning behind each recommendation so you can decide with clarity.',
      ],
      expertiseCierre: [
        'When the project includes an asset transaction, I lead the legal, notarial and technical audit stage.',
        'Every recommendation carries my name, my criteria and my professional responsibility.',
        'I’m licensed with the Buenos Aires City Bar Association and the Azul Judicial Department Bar Association, Province of Buenos Aires. This allows me to personally take on the legal work each case requires and integrate it into the rest of the process.',
      ],
      compromisoLabel: 'My commitment',
      compromiso: [
        'The initial diagnosis must provide clarity and judgment.',
        'If within 48 hours of receiving your roadmap you feel it didn’t deliver on that promise, you can request a full refund of the amount paid for the diagnosis.',
      ],
      ctaEvaluar: 'I want to evaluate my project',
      cta: 'Meet me on LinkedIn',
      fotoAlt: 'Portrait of Bernardo G. Cisterna in Tandil',
    },

    testimonios: {
      kicker: 'Testimonials',
      titleSans: 'Experiences that built',
      titleSerif: 'Local Local',
      demoBadge: 'DEMO TESTIMONIAL — REPLACE BEFORE PUBLISHING',
    },

    ctaFinal: {
      kicker: 'Let’s begin',
      titleSans: 'If Tandil is in your plans:',
      titleSerif: 'three questions, two minutes, one concrete first step',
      copy: 'Tell us where your project stands and I’ll contact you within 24 hours to define the next step.',
      cta: 'Tell us about your project',
      ctaSec: 'See the method',
      micro: 'Confidentiality from the very first contact.',
    },

    comoComienza: {
      kicker: 'How it starts',
      title: 'Three steps, no runaround',
      pasos: [
        { n: '1', t: 'You answer three questions', d: 'Two minutes' },
        { n: '2', t: 'I contact you personally', d: 'Within 24 hours, by WhatsApp or email' },
        { n: '3', t: 'We schedule your diagnosis', d: 'A 45-minute remote interview' },
      ],
      cierre: 'Everything is confidential. No generic lists. No pressure.',
    },

    cuestionario: {
      kicker: 'Tell us about your project',
      titleSans: 'Tell us where your project',
      titleSerif: 'stands today',
      progreso: 'of',
      siguiente: 'Continue →',
      atras: 'Back',
      q1: {
        label: 'Where does your project stand?',
        opciones: ['I’m just exploring.', 'Tandil is already a concrete option.', 'I’ve decided to move forward.'],
      },
      q2: {
        label: 'What are you evaluating?',
        opciones: [
          'A personal or family move.',
          'An investment or asset transaction.',
          'A professional or business project.',
        ],
      },
      q3: {
        label: 'When would you like to move forward?',
        opciones: [
          'Within the next three months.',
          'Between three and six months.',
          'Later on; I’m still defining the timing.',
        ],
      },
      datos: {
        label: 'How would you prefer to be contacted?',
        nombre: 'Full name',
        nombrePh: 'Your full name',
        email: 'Email',
        emailPh: 'you@email.com',
        whatsapp: 'WhatsApp',
        whatsappPh: '+... your number',
        preferencia: 'Contact preference',
        preferencias: ['WhatsApp.', 'Email.', 'Either one.'],
      },
      error: 'Tell us at least your name and one contact so we can get back to you.',
      enviar: 'Send my project',
      confid:
        'Confidentiality from the very first contact. Your answers are used exclusively to understand your project and contact you.',
      directo: 'Prefer to talk directly?',
      directoCta: 'Message me on WhatsApp',
      graciasTitulo: 'Got it,',
      graciasCopy:
        'WhatsApp opened with your summary ready to send. If it didn’t, write to us directly and we’ll take it from there. We reply within 24 hours.',
      postCtaPrincipal: 'I want my diagnostic interview',
      postCtaSecundario: 'I’m still exploring',
      leadLabels: {
        momento: 'Project stage',
        evaluando: 'Evaluating',
        plazo: 'When they want to move forward',
        nombre: 'Name',
        email: 'Email',
        whatsapp: 'WhatsApp',
        preferencia: 'Contact preference',
        campania: 'campaign',
      },
    },

    porQue: {
      kicker: 'Why hire Local Local?',
      titleSans: 'Because some mistakes',
      titleSerif: 'are paid dearly',
      intro:
        'From a distance, many decisions look simpler than they really are. At Local Local we help you avoid:',
      items: [
        'Choosing an area that seemed perfect over the weekend, only to find it doesn’t work for your daily routine.',
        'Picking a school on general references without evaluating openings, distances, educational approach and fit with your family.',
        'Traveling to Tandil several times for disorganized meetings, unproductive visits or information that could have been obtained beforehand.',
        'Handing over a deposit or putting your savings into an “opportunity” without checking who’s behind it, what’s actually being sold and whether the paperwork backs up the promises.',
        'Moving forward with a property, lot or project without knowing its legal, technical, zoning or utility limitations.',
        'Hiring someone just because “everyone knows them” and ending up with shifting quotes, poor workmanship or deadlines that are never met.',
        'Discovering too late expenses, works, procedures or constraints that completely change the cost of the decision.',
        'Mismanaging the timing and ending up paying overlapping rents, stays, deposits, trips or unnecessary moves.',
        'Solving housing, schools, work and daily life separately, only to discover later that the pieces don’t fit.',
        'Exposing your project all over town and ending up surrounded by calls, self-interested recommendations and pressure to decide fast.',
      ],
      cierre1:
        'Each professional knows their part. We integrate the variables, ask the uncomfortable questions and help you detect what you’re not yet seeing.',
      cierre2Intro: 'Often, the best outcome of our work is what didn’t happen:',
      cierre2Destacado:
        'the deposit you didn’t lose, the trip you didn’t take, the provider you didn’t hire and the decision you didn’t have to regret.',
      cta: 'Evaluate your project →',
    },

    newsletter: {
      kicker: 'Newsletter',
      title: 'Let’s keep thinking together',
      copy: 'We share ideas, experiences and tools for those going through a move, evaluating a change of city or imagining a new stage for their family or their project.',
      cta: 'Subscribe to receive our upcoming stories and news',
    },

    faq: {
      kicker: 'FAQ',
      title: 'What people usually ask us',
      items: [
        {
          q: 'What exactly does Local Local do?',
          a: 'We analyze, plan and guide relocation, investment and set-up projects in Tandil. We work with our own method: a diagnosis of your situation, a tailored strategy and, when needed, the activation of a vetted local network of professionals.',
        },
        {
          q: 'How is it different from a real estate agency?',
          a: 'We don’t sell property or take third-party commissions. Our only interest is that you make a good decision. An agency works on its own portfolio; we work on your whole project: housing, schools, legal matters, timing and daily life.',
        },
        {
          q: 'Can you help me if I haven’t decided to move yet?',
          a: 'Yes. Much of the value is precisely in the evaluation stage: understanding whether Tandil is for you, which area makes sense and what the change would involve — before committing time or money.',
        },
        {
          q: 'What does the initial diagnosis include?',
          a: 'A 45-minute remote interview, a comprehensive analysis of your project, and a written diagnosis and roadmap proposal with priorities, scenarios and next steps.',
        },
        {
          q: 'Can I hire just one stage?',
          a: 'Yes. The service is designed to move forward in stages: each one orders and prepares the next. If your project is already underway and you need a specific intervention, we can join at whatever stage you’re in.',
        },
        {
          q: 'How do you select the professionals in the network?',
          a: 'By their track record, references, work standards, responsiveness and human quality, through relationships built over years in Tandil. It’s not a single list: we recommend per project and evaluate the network continuously.',
        },
        {
          q: 'Is the information I share confidential?',
          a: 'Yes. We apply a minimum-exposure principle: before activating each contact we agree with you on what information is shared, with whom and for what purpose. Your payment capacity and maximum budget remain undisclosed.',
        },
        {
          q: 'What happens after the diagnosis?',
          a: 'You receive the document with your roadmap. From there, you decide: move forward on your own, hire specific stages, or full support. No pressure, no automatic commitments.',
        },
      ],
      verTodas: 'See all frequently asked questions',
    },

    sticky: {
      cta: 'Evaluate my project',
    },

    footer: {
      blurb: 'Relocation & soft landing in Tandil.',
      navLabel: 'Navigation',
      legalLabel: 'Legal',
      legalLink: 'Legal',
      contactoLabel: 'Contact',
      whatsapp: 'Message us on WhatsApp →',
      linkedin: 'Bernardo on LinkedIn',
      disclaimer:
        'Local Local provides analysis, planning, guidance and support services. Recommendations do not guarantee outcomes that depend on the market, public bodies, availability or third parties. The professionals and providers in the network work independently, and every transaction requires its own specific evaluation.',
      credito: 'Photography: @santiarbeoph',
      derechos: 'All rights reserved',
      powered: 'Powered by Atomgrow',
    },
  },
}
