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
  oferta: {
    kicker: 'Primer paso',
    titleSans: 'Diagnóstico personalizado',
    titleSerif: 'y hoja de ruta',
    intro1: 'Una entrevista remota de aproximadamente 45 minutos para comprender el proyecto, ordenar prioridades e identificar las decisiones y los riesgos que conviene atender.',
    intro2: 'Después de la entrevista entregamos un documento personalizado con el diagnóstico, los escenarios posibles y una hoja de ruta concreta para avanzar.',
    incluyeLabel: 'Incluye:',
    incluye: [
      'entrevista personalizada por videollamada',
      'análisis integral del proyecto',
      'identificación de prioridades, riesgos y decisiones críticas',
      'diagnóstico y hoja de ruta por escrito',
      'entrega dentro de los tres días hábiles posteriores a la entrevista',
    ],
    valorLabel: 'Valor final:',
    valor: '$150.000 finales',
    garantia: 'Si dentro de las 48 horas de recibir el documento considerás que no te aportó claridad, información relevante ni una hoja de ruta útil, podés solicitar la devolución del importe abonado.',
    cta: 'QUIERO MI DIAGNÓSTICO',
    visita: 'Visita estratégica a Tandil y activación de la red local, desde $500.000 finales para dos personas.',
    visitaDetalle: 'Incluye una agenda personalizada de entre uno y tres días y hasta dos noches de alojamiento. No incluye traslados. La propuesta definitiva se prepara después del diagnóstico.',
  },

  bernardoHome: {
    kicker: 'Quién te acompaña',
    parrafos: [
      'Criado en Tandil, me mudé a Buenos Aires para estudiar Derecho. Hoy vuelvo a elegir Tandil para desarrollarme y criar a mis hijos.',
      'Con cada mudanza aprendí que la información que parece definitiva muchas veces es incompleta, y que las decisiones apresuradas son costosas de corregir.',
      'Por eso, cada proyecto lo acompaño con mi criterio, mi experiencia y la red personal y profesional que pongo a disposición.',
    ],
    cta: 'Conocer mi historia →',
  },
    meta: {
      title: 'Local Local | Relocalización en Tandil',
      description:
        'Evaluamos tu proyecto, ordenamos cada decisión y te acompañamos con información de primera mano, una estrategia a tu medida y una red local cuidadosamente seleccionada.',
    },
    whatsappMessage:
      'Hola, estoy evaluando un proyecto en Tandil y quiero coordinar una entrevista de diagnóstico.',
    newsletterWhatsappMessage:
      'Hola, me interesa suscribirme al newsletter de Local Local.',

    nav: {
      links: [
        { label: 'Servicios', href: '/metodo#servicios' },
        { label: 'Método', href: '/metodo' },
        { label: 'Nosotros', href: '/nosotros' },
      ],
      cta: 'Quiero mi diagnóstico',
    },

    hero: {
      kicker: 'Relocalización en Tandil',
      titleSans: 'Tu llegada a Tandil,',
      titleSerif: 'organizada con método y respaldo local',
      sub: 'Evaluamos tu proyecto, ordenamos cada decisión y te acompañamos con información de primera mano, una estrategia a tu medida y una red local cuidadosamente seleccionada',
      apoyo: '',
      cta: 'Quiero mi diagnóstico',
      ctaSec: 'Conocer el método',
      micro: 'Empecemos con tres preguntas. Sin compromiso de contratación',
      alt: 'Atardecer sobre el valle de Tandil, con casas entre sierras y arboledas',
    },

    trustbar: [
      { t: 'MIRADA LOCAL', d: 'Vivimos en Tandil. Conocemos la ciudad de primera mano.' },
      { t: 'CRITERIO INDEPENDIENTE', d: 'Nuestro único compromiso es ayudarte a tomar la mejor decisión.' },
      { t: 'RED VALIDADA', d: 'Profesionales seleccionados por su trayectoria, estándares de servicio y calidad humana.' },
      { t: 'AUDITORÍA PREVENTIVA', d: 'Revisamos los aspectos legales y técnicos antes de que comprometas tiempo o dinero.' },
      { t: 'CONFIDENCIALIDAD', d: 'Tu proyecto no circula por la ciudad. Nada se comparte sin tu autorización.' },
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
      ctaExplorando: 'Quiero recibir novedades',
      ctaAvanzando: 'Quiero mi diagnóstico',
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
          titulo: 'Información y coordinación fragmentadas',
          sinLabel: 'Sin método · Proceso desordenado',
          conLabel: 'Con Local Local · Información ordenada y coordinación integral',
          riesgo: false,
          sin: [
            'La información llega desde distintas fuentes y una mudanza involucra distintos profesionales, decisiones y tiempos.',
            'Sin alguien que articule el conjunto, es difícil saber qué comparar y qué falta: las gestiones se superponen y el proceso pierde dirección.',
          ],
          con: [
            'Analizamos todas las alternativas bajo los mismos criterios y sumamos conocimiento local e información de mercado.',
            'Un único interlocutor ordena y conecta cada etapa, con profesionales, tiempos y decisiones alineados bajo una misma hoja de ruta.',
          ],
        },
        {
          titulo: 'Sorpresas legales y técnicas',
          sinLabel: 'Sin método · Riesgo alto',
          conLabel: 'Con Local Local · Riesgo mitigado',
          riesgo: true,
          sin: [
            '"Contrato y después me voy enterando…"',
            'Problemas que no se detectaron a tiempo y aparecen cuando la decisión ya está tomada',
          ],
          con: [
            'Antes de avanzar, auditamos el negocio desde una mirada legal y técnica',
            'Para que sepas qué estás contratando, en qué condiciones y con qué límites.',
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
      cta: 'Quiero mi diagnóstico',
    },

    servicios: {
      kicker: 'Servicios',
      titleSans: 'El recorrido completo,',
      titleSerif: 'resumido',
      etapas: [
        {
          num: '01',
          titulo: 'Diagnóstico personalizado y hoja de ruta',
          modalidad: '100 % remota',
          parrafos: [
            'Comenzamos con una entrevista personalizada por videollamada para conocernos y comprender en detalle tu proyecto de mudanza a Tandil: tu situación actual, tus necesidades, deseos, prioridades y tiempos.',
            'Con esa información analizamos el proyecto de manera integral e identificamos qué está definido, qué falta resolver y qué alternativas pueden ajustarse a tu realidad.',
          ],
          incluyeLabel: 'Incluye:',
          incluye: [
            'Entrevista personalizada por videollamada.',
            'Análisis integral del proyecto.',
            'Entrega de diagnóstico y propuesta de hoja de ruta por escrito, con prioridades, escenarios y próximos pasos dentro de los tres días hábiles posteriores a la entrevista.',
          ],
          valor: 'Valor final: $150.000 finales',
          notas: [],
        },
        {
          num: '02',
          titulo: 'Visita estratégica a Tandil y activación de la red local',
          modalidad: 'presencial',
          estadiaEstimada: 'de uno a tres días, preferentemente entre lunes y miércoles.',
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
          valor: 'Desde $500.000 finales para dos personas, con hasta dos noches de alojamiento incluidas.',
          notas: [
            'La propuesta definitiva se establece después del diagnóstico, según la cantidad de personas, las actividades previstas y la complejidad de la agenda. Antes de confirmar la visita, te informamos el valor final y los detalles del alojamiento.',
            'Para grupos de más de dos personas o cuando se requiera otra alternativa de alojamiento, cualquier diferencia se presupuesta previamente.',
            'Los traslados hasta Tandil y dentro de la ciudad no están incluidos.',
          ],
        },
        {
          num: '03',
          titulo: 'Auditoría integral de la operación',
          modalidad: 'híbrida. El análisis se realiza de manera remota, con instancias presenciales cuando la operación lo requiere',
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
          titulo: 'Integración. De llegar a ser parte.',
          modalidad: '',
          parrafos: [
            'Mudarse a una ciudad no es lo mismo que integrarse a ella. Llegar resuelve una parte; sentirse parte lleva tiempo. Implica construir rutinas y vínculos, entender cómo funciona la ciudad y saber a quién recurrir cuando aparece una necesidad.',
            'En Local Local conocemos la complejidad de ese proceso y sabemos que muchas preguntas surgen recién después de la mudanza. Por eso, una vez en Tandil, seguís contando con nosotros para hacer consultas, pedir recomendaciones y conectarte con personas, profesionales y servicios de confianza.',
            'El recorrido inicial termina, pero tu acceso a la red continúa. Este acompañamiento de integración está incluido en el servicio, sin costo adicional y sin fecha de vencimiento.',
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
        { n: '+ de 20', d: 'profesionales y proveedores seleccionados' },
        { n: '+ de 8', d: 'rubros esenciales reunidos en una mirada integral' },
        { n: '+ de 15', d: 'años de vínculos profesionales construidos en Tandil' },
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

    queRecibis: {
      titulo: 'Qué recibís',
      subtitulo: 'No comprás una reunión. Recibís claridad para avanzar',
      items: [
        'Entrevista de diagnóstico de aproximadamente 45 minutos',
        'Análisis personalizado de tu situación',
        'Identificación de prioridades y riesgos',
        'Relevamiento necesario para tu caso',
        'Documento de diagnóstico',
        'Hoja de ruta concreta',
        'Recomendación de próximos pasos',
        'Propuesta opcional para continuar por etapas',
      ],
      nota: 'El diagnóstico es una etapa independiente. Después de recibirlo, podés avanzar por tu cuenta o continuar con Local Local.',
    },

    paraQuien: {
      kicker: 'Para quién es Local Local',
      titleSans: 'Para quienes reconocen el valor del asesoramiento preventivo:',
      titleSerif: 'ordenar antes de avanzar, verificar antes de comprometerse y decidir con una mirada integral',
      intro:
        'Local Local acompaña a personas, profesionales y familias que están evaluando relocalizarse en Tandil y valoran su tiempo, su patrimonio, la confidencialidad y el acceso a una red local seleccionada.',
      perfiles: [
        {
          t: 'Personas y familias',
          d: 'Que están explorando, preparando o concretando una mudanza y necesitan integrar vivienda, educación, trabajo, servicios, tiempos y vida cotidiana dentro de un mismo proyecto.',
        },
        {
          t: 'Profesionales, emprendedores, inversores y empresas',
          d: 'Que evalúan residir, instalarse, invertir o desarrollar una actividad en Tandil y necesitan comprender el contexto local y contar con profesionales de confianza antes de comprometer tiempo, dinero o patrimonio.',
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

    porQue: {
      kicker: '¿Por qué contratar Local Local?',
      titleSans: 'Porque hay errores',
      titleSerif: 'que se pagan caro',
      intro: 'A la distancia, muchas decisiones parecen más sencillas de lo que realmente son, en Local Local te ayudamos a evitar:',
      items: [
        'Elegir una zona que parecía perfecta durante el fin de semana y descubrir después que no funciona para tu rutina diaria.',
        'Definir un colegio por referencias generales sin evaluar vacantes, distancias, propuesta educativa y compatibilidad con tu familia.',
        'Viajar varias veces a Tandil por reuniones desordenadas, visitas improductivas o información que podía obtenerse antes.',
        'Entregar una seña o poner tus ahorros en una "oportunidad" sin comprobar quién está detrás, qué se está vendiendo realmente y si los papeles respaldan lo prometido.',
        'Avanzar con un inmueble, lote o proyecto sin conocer sus limitaciones legales, técnicas, urbanísticas o de servicios.',
        'Contratar a alguien solo porque "lo conoce todo el mundo" y terminar con presupuestos que cambian, trabajos mal hechos o plazos que nunca se cumplen.',
        'Descubrir demasiado tarde gastos, obras, trámites o condicionantes que cambian por completo el costo de la decisión.',
        'Organizar mal los tiempos y terminar pagando alquileres superpuestos, estadías, depósitos, viajes o mudanzas innecesarias.',
        'Resolver vivienda, colegios, trabajo y vida cotidiana por separado, para descubrir después que las piezas no encajan.',
        'Exponer tu proyecto por toda la ciudad y quedar rodeado de llamados, recomendaciones interesadas y presión para decidir rápido.',
      ],
      cierre1: 'Cada profesional conoce su parte. Nosotros integramos las variables, hacemos las preguntas incómodas y te ayudamos a detectar lo que todavía no estás viendo.',
      cierre2Intro: 'Muchas veces, el mejor resultado de nuestro trabajo es lo que no ocurrió:',
      cierre2Destacado: 'la seña que no perdiste, el viaje que no hiciste, el proveedor que no contrataste y la decisión que no tuviste que lamentar.',
      cta: 'Quiero mi diagnóstico',
    },

    nosotros: {
      kicker: 'Nosotros',
      titleSans: 'Una mirada local,',
      titleSerif: 'una responsabilidad personal',
      nombre: 'Bernardo G. Cisterna',
      rol: 'Abogado y fundador de Local Local',
      saludo: 'Hola, soy Bernardo.',
      historia: [
        'Criado en Tandil, me mudé a Buenos Aires para estudiar Derecho. Luego decidí vivir en el exterior junto a mi familia para conocer otras culturas y formas de vivir. Hoy vuelvo a elegir Tandil para desarrollarme y criar a mis hijos.',
        'Con cada mudanza experimenté lo que implica instalarse en un lugar nuevo: coordinar decisiones a la distancia, avanzar sin una red de confianza y construir nuevas rutinas, vínculos y puntos de referencia.',
        'También aprendí que la información que parece definitiva muchas veces es incompleta, que las recomendaciones suelen responder a miradas parciales y que las decisiones apresuradas son costosas de corregir.',
        'Como abogado, veo repetirse en mi Estudio ese mismo patrón en familias, profesionales y empresas que enfrentan las consecuencias de decisiones importantes tomadas con información fragmentada y sin asesoramiento preventivo.',
        'Así nació Local Local: el servicio con el que me habría gustado contar en cada mudanza.',
      ],
      expertiseLabel: 'Nuestra función',
      expertiseIntro: 'Soy el interlocutor principal de cada proyecto y coordino personalmente la intervención de nuestra red:',
      expertise: [
        'Escuchamos qué estás buscando y qué está en juego para vos.',
        'Te ayudamos a ordenar prioridades y definir qué resolver primero.',
        'Convocamos a las personas adecuadas en el momento indicado.',
        'Cuidamos tu posición durante las negociaciones.',
        'Te explicamos el fundamento de cada recomendación para que puedas decidir con claridad.',
      ],
      expertiseCierre: [
        'Cuando el proyecto incluye una operación patrimonial, lidero personalmente la etapa de auditoría jurídica, notarial y técnica. Cada recomendación lleva mi nombre, mi criterio y mi responsabilidad profesional.',
        'Estoy matriculado en el Colegio Público de Abogados de la Capital Federal y en el Colegio de Abogados del Departamento Judicial de Azul, provincia de Buenos Aires. Esto me permite asumir personalmente las intervenciones legales que cada caso requiera e integrarlas al resto del proceso.',
      ],
      compromisoLabel: 'Mi compromiso',
      compromiso: [
        'El diagnóstico inicial debe aportar claridad y criterio.',
        'Si dentro de las 48 horas de recibir tu hoja de ruta considerás que no cumplió con esa promesa, podés solicitar la devolución total del importe abonado por el diagnóstico.',
      ],
      ctaEvaluar: 'Quiero mi diagnóstico',
      cta: 'Conoceme en LinkedIn',
      fotoAlt: 'Retrato de Bernardo G. Cisterna en Tandil',
    },

    testimonios: {
      kicker: 'Testimonios',
      titleSans: 'Experiencias que construyeron',
      titleSerif: 'Local Local',
      items: [
        {
          texto: 'Estábamos bastante decididos, pero teníamos muchas dudas sueltas. Bernardo nos ayudó a ponerlas sobre la mesa y nos conectó con gente que nos dio mucha confianza.',
          autor: 'Rodrigo Zubillaga y flia.',
          ubicacion: '',
        },
        {
          texto: 'Llegué a Bernardo con una consulta bastante puntual y, hablando, aparecieron varias cosas que no había tenido en cuenta. Me ayudó a ordenar todo y a decidir con más tranquilidad.',
          autor: 'Mónica Guastella',
          ubicacion: 'inversora',
        },
        {
          texto: 'Bernardo y equipo conocen muy bien Tandil, pero, sobre todo, saben quién es quién y cómo trabaja cada uno. Eso fue lo que más confianza nos dio.',
          autor: 'Andrea Arévalo y flia.',
          ubicacion: '',
        },
        {
          texto: 'Estábamos por poner plata en un proyecto que parecía una buena oportunidad. Bernardo empezó a hacer preguntas que nadie había hecho y aparecieron varias cosas que no cerraban. Frenamos a tiempo. Viéndolo ahora, nos evitó un problema enorme.',
          autor: 'Francisco Bravo',
          ubicacion: 'inversor CABA',
        },
      ],
    },

    ctaFinal: {
      kicker: 'Empecemos',
      titleSans: 'Si Tandil está en tus planes:',
      titleSerif: 'tres preguntas, dos minutos, un primer paso concreto',
      copy: 'Contanos en qué momento está tu proyecto y te contacto dentro de las 24 horas para definir el próximo paso.',
      cta: 'Quiero mi diagnóstico',
      ctaSec: 'Conocer el método',
      micro: 'Confidencialidad desde el primer contacto.',
    },

    comoComienza: {
      kicker: 'Cómo comienza',
      intro: 'Empecemos',
      introSub: 'Si Tandil está en tus planes:',
      introHighlight: 'Tres preguntas. Dos minutos. Un primer paso concreto.',
      introDesc: 'Contanos en qué momento está tu proyecto y te contacto dentro de las 24 horas para definir el próximo paso.',
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
        origen: '¿Cómo conociste Local Local?',
        origenes: ['Instagram', 'Google', 'Me lo recomendó alguien', 'Tarjeta postal o código QR', 'LinkedIn', 'Otro'],
      },
      error: 'Contanos al menos tu nombre y un contacto para poder responderte.',
      enviar: 'Enviar mi proyecto',
      confid:
        'Confidencialidad desde el primer contacto. Tus respuestas se utilizan exclusivamente para comprender tu proyecto y contactarte.',
      privacidadLink: 'Política de privacidad',
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
        origen: 'Cómo conoció Local Local',
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
        'Entregar una seña o poner tus ahorros en una "oportunidad" sin comprobar quién está detrás, qué se está vendiendo realmente y si los papeles respaldan lo prometido.',
        'Avanzar con un inmueble, lote o proyecto sin conocer sus limitaciones legales, técnicas, urbanísticas o de servicios.',
        'Contratar a alguien solo porque "lo conoce todo el mundo" y terminar con presupuestos que cambian, trabajos mal hechos o plazos que nunca se cumplen.',
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
      cta: 'Quiero mi diagnóstico',
    },

    newsletter: {
      kicker: 'Newsletter',
      title: 'Sigamos pensando juntos',
      copy: 'Compartimos ideas, experiencias y herramientas para quienes están atravesando una mudanza, evaluando un cambio de ciudad o imaginando una nueva etapa para su familia o su proyecto.',
      cta: 'Suscribite para recibir nuestras próximas historias y novedades',
      placeholder: 'Tu correo electrónico',
      enviando: 'Enviando…',
      gracias: '¡Listo! Te sumamos a la lista y te vamos a escribir por email.',
      error: 'Ingresá un correo electrónico válido.',
      errorEnvio: 'No pudimos suscribirte ahora. Probá de nuevo en unos minutos o escribinos por WhatsApp.',
      privacidad: 'Al suscribirte aceptás recibir novedades por email. Podés darte de baja en cualquier momento desde el enlace incluido en cada envío.',
      privacidadLink: 'Política de privacidad',
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
      cta: 'Quiero mi diagnóstico',
    },

    legales: {
      ultimaActualizacion: 'Última actualización: 23 de julio de 2026',
      nombreComercial: 'Local Local es el nombre comercial bajo el cual Bernardo Gabriel Cisterna, CUIT N° 20-32643773-6, presta sus servicios. Su domicilio legal se encuentra en Mitre 767, piso 1, departamento "A", Tandil, Provincia de Buenos Aires.',
      correoContacto: 'Correo de contacto: bernardo@locallocal.net',
      matriculasTitulo: 'Matrículas profesionales:',
      matriculas: [
        'Colegio de Abogados del Departamento Judicial de Azul: T° XIII, F° 214.',
        'Colegio Público de la Abogacía de la Capital Federal: T° 116, F° 620.',
        'Matrícula Federal: T° 701, F° 856.',
      ],
    },

    terminosCondiciones: {
      titulo: 'Términos y condiciones',
      elServicio: {
        titulo: 'El servicio',
        contenido: 'Local Local brinda servicios de análisis, planificación, orientación y acompañamiento para personas, familias y empresas que evalúan instalarse, invertir o desarrollar un proyecto en Tandil. El servicio se organiza por etapas y puede incluir un diagnóstico inicial, la elaboración de una hoja de ruta, la organización de visitas y encuentros, la activación de una red local y la auditoría integral de una o varias operaciones, con intervención jurídica, notarial o técnica. Cada etapa tiene un alcance propio y puede contratarse de manera independiente. Antes de comenzar se informan las tareas incluidas, la modalidad, los plazos, los honorarios y los costos adicionales que pudieran corresponder. Cuando exista una propuesta particular, sus condiciones complementarán estos términos y prevalecerán respecto de los aspectos específicos del servicio contratado, sin afectar los derechos que resulten legalmente irrenunciables.',
      },
      contratacionHonorarios: {
        titulo: 'Contratación y honorarios',
        contenido: 'Cada etapa comienza una vez que el cliente acepta expresamente su alcance, sus honorarios y las condiciones de pago. El precio aplicable será el informado al momento de la contratación. Se emitirá el comprobante fiscal correspondiente y ningún costo adicional será asumido sin conocimiento y aprobación previa del cliente.',
      },
      decisionesResultados: {
        titulo: 'Decisiones y resultados',
        contenido: 'Local Local analiza la información disponible y formula recomendaciones con criterio profesional y conocimiento local. Sin embargo, no garantiza un resultado determinado ni reemplaza la decisión final del cliente. El cliente debe proporcionar información completa y verdadera, comunicar cualquier cambio relevante y revisar las condiciones antes de asumir compromisos con terceros.',
      },
      profesionalesProveedores: {
        titulo: 'Profesionales y proveedores',
        contenido: 'Cuando el proyecto lo requiere, Local Local puede presentar o coordinar la intervención de profesionales y proveedores externos. Salvo que una propuesta indique expresamente otra modalidad, esos servicios se contratan y facturan directamente con cada tercero. Cada profesional o proveedor responde por su propia actuación, mientras que Local Local conserva la responsabilidad sobre las tareas de análisis, coordinación o asesoramiento que haya asumido expresamente. El cliente mantiene plena libertad para contratar al tercero recomendado o elegir otra alternativa.',
      },
      transparenciaEconomica: {
        titulo: 'Transparencia económica',
        contenido: 'Los honorarios de Local Local y los gastos incluidos o excluidos se informan antes de comenzar cada etapa. Si existiera un acuerdo económico vinculado con un profesional, proveedor o servicio recomendado, se informará al cliente por escrito antes de que tome una decisión, indicando quién realiza el pago, su concepto y su importe o forma de cálculo.',
      },
      confidencialidad: {
        titulo: 'Confidencialidad',
        contenido: 'Local Local aplica un criterio de mínima exposición. La información del proyecto sólo se comparte cuando resulta necesario, con conocimiento del cliente y en la medida indispensable para cada intervención. Las actuaciones jurídicas se encuentran además alcanzadas por el secreto profesional. La confidencialidad puede ceder únicamente ante una autorización del cliente, una obligación legal o una orden de autoridad competente.',
      },
      garantiadiagnostico: {
        titulo: 'Garantía del diagnóstico',
        contenido: 'El diagnóstico inicial debe aportar claridad, criterio y una hoja de ruta útil. Si dentro de las 48 horas de recibirla el cliente considera que no cumplió con esa finalidad, puede solicitar la devolución total del importe abonado por esa etapa. Sólo le pediremos que nos indique brevemente los motivos de su disconformidad, con el único propósito de mejorar el servicio. La devolución no quedará condicionada a esa respuesta. La garantía corresponde exclusivamente al diagnóstico inicial y no se extiende a servicios posteriores ya prestados ni a gastos o prestaciones de terceros.',
      },
      cancelaciones: {
        titulo: 'Cancelaciones y reprogramaciones',
        contenido: 'Las condiciones particulares para cancelar o reprogramar visitas, reservas o servicios personalizados se informarán antes de la contratación. Las reservas y prestaciones de terceros estarán sujetas a sus propias condiciones de cancelación, que serán informadas antes de su confirmación. Si Local Local no pudiera prestar un servicio ya contratado, el cliente podrá optar entre reprogramarlo o solicitar la devolución del importe correspondiente a la parte no prestada.',
      },
      cambios: {
        titulo: 'Cambios y legislación aplicable',
        contenido: 'Estos términos pueden actualizarse para reflejar cambios en los servicios o en la normativa. Las modificaciones no alterarán las condiciones de una propuesta ya aceptada. Se aplica la legislación argentina y, en las relaciones de consumo, las normas de protección y competencia que resulten obligatorias.',
      },
    },

    politicaPrivacidad: {
      titulo: 'Política de privacidad',
      responsable: {
        titulo: 'Responsable de los datos',
        contenido: 'El responsable del tratamiento de los datos personales es Bernardo Gabriel Cisterna, CUIT 20-32643773-6, con domicilio en Mitre 767, piso 1, departamento "A", Tandil, Provincia de Buenos Aires. Las consultas relacionadas con el tratamiento de datos personales pueden enviarse a bernardo@locallocal.net.',
      },
      queInformacion: {
        titulo: 'Qué información recopilamos y para qué',
        contenido: 'Podemos recibir datos de identificación y contacto, respuestas enviadas mediante formularios, información suministrada durante entrevistas y comunicaciones, datos necesarios para la facturación, información relacionada con el proyecto del cliente y, cuando corresponda, datos técnicos de navegación. Los utilizamos para: responder consultas y contactar a la persona interesada; comprender, analizar y ejecutar el servicio solicitado; elaborar diagnósticos, propuestas y hojas de ruta; coordinar intervenciones previamente autorizadas; cumplir obligaciones profesionales, contables y legales; proteger la seguridad y el funcionamiento del sitio. Los datos necesarios para responder o prestar el servicio se identifican en cada instancia. Si no son proporcionados, es posible que no podamos atender la consulta o ejecutar la tarea solicitada. Las comunicaciones comerciales o newsletters sólo se enviarán cuando exista consentimiento y siempre permitirán solicitar la baja.',
      },
      datosSensibles: {
        titulo: 'Datos sensibles y de menores de edad',
        contenido: 'El formulario inicial no solicita datos sensibles. Si el desarrollo del proyecto hiciera necesario conocer información de esa naturaleza, se solicitará únicamente la indispensable, con una finalidad específica y bajo especiales condiciones de reserva. El sitio está dirigido a personas mayores de edad. Los datos relacionados con niños, niñas o adolescentes sólo podrán ser proporcionados por sus padres, representantes o responsables y cuando resulten necesarios para el proyecto.',
      },
      conQuienComparten: {
        titulo: 'Con quién se comparten',
        contenido: 'La información no se vende ni se entrega a terceros para fines ajenos al servicio. Puede compartirse, en la medida necesaria, con profesionales o proveedores cuya intervención haya sido informada y autorizada; con prestadores tecnológicos de alojamiento, formularios, correo, mensajería o analítica; y con autoridades públicas cuando exista una obligación legal o una orden válida.',
      },
      conservacionSeguridad: {
        titulo: 'Conservación y seguridad',
        contenido: 'Los datos se conservan durante el tiempo necesario para atender la consulta, prestar el servicio y cumplir las obligaciones profesionales, contables o legales aplicables. Local Local adopta medidas razonables para evitar su acceso, modificación, pérdida o divulgación no autorizada.',
      },
      derechosDatos: {
        titulo: 'Derechos sobre los datos',
        contenido: 'Cada persona puede solicitar el acceso, actualización o rectificación de sus datos y, cuando corresponda, su supresión. También puede retirar su consentimiento para tratamientos futuros o dejar de recibir comunicaciones comerciales. Determinada información podrá conservarse cuando resulte necesaria para cumplir obligaciones profesionales, contables o legales. Las solicitudes pueden enviarse a bernardo@locallocal.net.',
      },
      cookies: {
        titulo: 'Cookies y herramientas de medición',
        contenido: 'El sitio puede utilizar cookies técnicas necesarias para funcionar y, con el consentimiento correspondiente, herramientas de medición o publicidad como Google Analytics y Meta Pixel. El usuario podrá aceptar, rechazar o modificar esas preferencias desde el panel de cookies, excepto respecto de aquellas estrictamente necesarias para el funcionamiento del sitio.',
      },
    },

    footer: {
      blurb: 'Relocalización en Tandil.',
      navLabel: 'Navegación',
      legalLabel: 'Legales',
      legales: [
        { label: 'Legales', href: '/legales.html' },
      ],
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
  oferta: {
    kicker: 'First step',
    titleSans: 'Personalized assessment',
    titleSerif: 'and roadmap',
    intro1: 'A remote interview of approximately 45 minutes to understand your project, set priorities, and identify the decisions and risks that need attention.',
    intro2: 'After the interview, we deliver a personalized document with the initial assessment, the possible scenarios, and a concrete roadmap to move forward.',
    incluyeLabel: 'Includes:',
    incluye: [
      'personalized video interview',
      'comprehensive review of your project',
      'identification of priorities, risks, and critical decisions',
      'written assessment and roadmap',
      'delivery within three business days of the interview',
    ],
    valorLabel: 'Final price:',
    valor: 'USD 100',
    garantia: 'If within 48 hours of receiving the document you feel it did not bring you clarity, relevant information, or a useful roadmap, you can request a refund of the amount paid.',
    cta: 'Book my assessment',
    visita: 'Strategic visit to Tandil & introductions to our local network, starting at USD 350 for two people.',
    visitaDetalle: 'Includes a personalized itinerary of one to three days and up to two nights of accommodation. Transfers are not included. The final proposal is prepared after the assessment.',
  },

  bernardoHome: {
    kicker: 'Who guides you',
    parrafos: [
      'I grew up in Tandil and moved to Buenos Aires to study law. Today I choose Tandil again, to grow and raise my children.',
      'Each move taught me that information that seems definitive is often incomplete, and that hasty decisions are costly to fix.',
      'So every project gets my judgment, my experience, and the personal and professional network I put at its disposal.',
    ],
    cta: 'Read my story →',
  },
    meta: {
      title: 'Local Local | Relocating to Tandil',
      description:
        'Your move to Tandil, planned with a clear process and trusted local support. Assessment, strategy, and a carefully vetted local network.',
    },
    whatsappMessage:
      "Hi, I am evaluating a project in Tandil and I would like to schedule an assessment interview.",
    newsletterWhatsappMessage:
      "Hi, I would like to subscribe to the Local Local newsletter.",

    nav: {
      links: [
        { label: 'Services', href: '/metodo#servicios' },
        { label: 'Method', href: '/metodo' },
        { label: 'About', href: '/nosotros' },
      ],
      cta: 'Book my assessment',
    },

    hero: {
      kicker: 'Relocation in Tandil',
      titleSans: 'Your move to Tandil,',
      titleSerif: 'planned with a clear process and trusted local support',
      sub: 'We assess your project, bring clarity to every decision, and guide you with first-hand insight, a tailored strategy, and a carefully vetted local network.',
      apoyo: '',
      cta: 'Book my assessment',
      ctaSec: 'How it works',
      micro: "Start with three questions. No obligation to hire us.",
      alt: 'Sunset over the Tandil valley, houses nestled among hills and trees',
    },

    trustbar: [
      { t: 'LOCAL INSIGHT', d: 'We live in Tandil. We know the city first-hand.' },
      { t: 'INDEPENDENT JUDGMENT', d: 'Our only commitment is to help you make the best decision.' },
      { t: 'VETTED NETWORK', d: 'Professionals selected for their track record, service standards, integrity, and personal approach.' },
      { t: 'PREVENTIVE REVIEW', d: 'We review the legal and technical aspects before you commit time or money.' },
      { t: 'CONFIDENTIALITY', d: 'Your project is not shared around town. Nothing is shared without your knowledge and consent.' },
    ],

    microDecision: {
      title: 'Where are you in your decision-making process?',
      sub: 'Choose the option that best reflects your current situation, and we will suggest a path forward. Then we will tailor it together.',
      explorando: 'Still exploring',
      avanzando: 'Already moving forward',
      msgExplorando:
        'Great. We will help you explore Tandil with real information, at your own pace and with full freedom to decide.',
      msgAvanzando:
        'Great. We bring order to your process: personalized assessment, tailored strategy and a local network to activate the plan.',
      ctaExplorando: 'Get updates',
      ctaAvanzando: 'Book my assessment',
    },

    problema: {
      kicker: 'The cost of improvising',
      titleSans: 'Moving is much more than',
      titleSerif: 'finding a property',
      intro:
        'Moving to a new city affects many parts of your life at once: schools, distances, family routines, costs, housing, and how you live day to day. When those decisions are made separately, the project loses coherence: trips multiply, information may be biased, unreliable providers get chosen, and mistakes become difficult to fix.',
      intro2: 'At Local Local, we bring those variables together before they turn into problems.',
      escenarios: [
        {
          titulo: 'Inefficient trips',
          sinLabel: 'Without a plan · Avoidable costs and stress',
          conLabel: 'With Local Local · A focused, well-informed search',
          riesgo: false,
          sin: [
            '"I’ll go to Tandil to look at properties" — three trips or more',
            'Hotels, fuel, lost working days',
          ],
          con: [
            'First we define which areas best fit your project and explore them remotely',
            'Then we organize strategic trips, with the itinerary planned in advance.',
          ],
        },
        {
          titulo: 'Fragmented information and coordination',
          sinLabel: 'Without a plan · A disorganized process',
          conLabel: 'With Local Local · Structured information and end-to-end coordination',
          riesgo: false,
          sin: [
            'Information arrives from different sources, and a move involves different professionals, decisions and timelines.',
            'Without someone coordinating the whole process, it is hard to know what to compare and what is missing: tasks overlap and the project loses direction.',
          ],
          con: [
            'We assess every alternative against the same criteria and combine local knowledge with market information.',
            'A single point of contact coordinates and connects every stage, with professionals, timelines and decisions aligned under one roadmap.',
          ],
        },
        {
          titulo: 'Legal & technical surprises',
          sinLabel: 'Without a plan · High risk',
          conLabel: 'With Local Local · Risk mitigated',
          riesgo: true,
          sin: [
            '"I sign first and discover the problems later…"',
            'Problems that were not detected in time and surface once the decision is already made',
          ],
          con: [
            'Before moving forward, we review the transaction from a legal and technical standpoint.',
            'So you know what you are agreeing to, on what terms, and with what limitations.',
          ],
        },
      ],
      cierre:
        'Local Local does not make the decision for you. But it helps you avoid the chaos of deciding alone, from a distance, and without the full picture.',
    },

    metodo: {
      kicker: 'The Local Local Method',
      titleSans: 'A step-by-step process for turning uncertainty',
      titleSerif: 'into strategic decisions',
      formula: 'ASSESSMENT + STRATEGY + NETWORK',
      intro:
        'First we understand where you stand. Then we design a roadmap together. Finally, we bring in the right people and resources to put it into action.',
      componentes: [
        {
          num: '01',
          titulo: 'Initial assessment',
          copy: 'We analyze your personal situation and concrete priorities, and deliver a detailed written assessment. The goal is not a one-size-fits-all solution — it is understanding which decision to make first.',
        },
        {
          num: '02',
          titulo: 'Strategy',
          copy: 'We organize the variables and build a tailored roadmap together: what to solve first, which alternatives to evaluate and how to move forward with clarity, protecting your time and money while keeping control of every decision',
        },
        {
          num: '03',
          titulo: 'Network',
          copy: 'When your project requires it, we activate a local network of professionals and providers selected for their experience, professional standards, integrity, and personal approach. We do not simply hand you a list of contacts; we make purposeful introductions.',
        },
      ],
      cta: 'Book my assessment',
    },

    servicios: {
      kicker: 'Services',
      titleSans: 'The full journey',
      titleSerif: 'at a glance',
      etapas: [
        {
          num: '01',
          titulo: 'Personalized assessment & roadmap',
          modalidad: '100% remote',
          parrafos: [
            'We start with a personalized video-call interview to get to know each other and understand your move to Tandil in detail: your current situation, needs, wishes, priorities and timing.',
            'With that information we analyze the project as a whole and identify what has already been decided, what still needs attention, and which options best fit your circumstances.',
          ],
          incluyeLabel: 'Includes:',
          incluye: [
            'Personalized video-call interview.',
            'Comprehensive project analysis.',
            'Written assessment and roadmap proposal, with priorities, scenarios and next steps, delivered within three business days of the interview.',
          ],
          valor: 'Final price: USD 100',
          notas: [],
        },
        {
          num: '02',
          titulo: 'Strategic visit to Tandil & introductions to our local network',
          modalidad: 'in person',
          estadiaEstimada: 'one to three days, preferably Monday to Wednesday.',
          parrafos: [
            'Using the roadmap as our starting point, before your arrival, we design a personalized itinerary to explore and assess in person the alternatives identified during the initial assessment.',
            'We prioritize weekdays so you experience the city at its everyday rhythm and make the most of each day. Depending on your project, the agenda may include school and property visits, neighborhood tours and meetings with professionals and providers.',
            'We coordinate every step and personally introduce you to the people in our local network selected for your project. You then meet with them directly, so you can ask questions and receive first-hand information., so you can ask questions and get first-hand information.',
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
          valor: 'Starting at USD 350 for two people, including up to two nights of accommodation.',
          notas: [
            'The final proposal is set after the assessment, based on the number of people, planned activities and the complexity of the agenda. Before confirming the visit, we inform you of the final price and accommodation details.',
            'For groups of more than two people, or when a different accommodation option is required, any difference is quoted in advance.',
            'Travel to Tandil and within the city is not included.',
          ],
        },
        {
          num: '03',
          titulo: 'Comprehensive due diligence review',
          modalidad: 'hybrid. The review is conducted remotely, with in-person meetings when required by the transaction.',
          parrafos: [
            'When an alternative becomes concrete, we define the scope of the review according to the type and complexity of the transaction.',
            'Our legal and notarial team reviews the available documentation and records, the agreed conditions, the contracts you are about to sign and the obligations you are about to assume. We identify the risks that may affect your decision, your money or the project timeline, and we explain clearly what is in order, what deserves attention and what should be resolved before moving forward.',
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
          valor: 'Price: quoted individually based on the type, scope, and complexity of the transaction. The fee is confirmed and agreed before work begins.',
          notas: [
            'The service includes a meeting with our team to explain the conclusions, answer your questions and evaluate next steps.',
            'With that information you will be able to decide whether to move forward, request adjustments, renegotiate terms or consider another alternative.',
            'Before moving forward, we present a clear, complete breakdown of the professional fees and costs involved, indicating what each amount corresponds to and which tasks it covers.',
          ],
        },
        {
          num: '04',
          titulo: 'Integration: from arrival to belonging',
          modalidad: '',
          parrafos: [
            'Moving to a city is not the same as integrating into it. Arriving solves one part; feeling like part of the community takes time. It means building routines and relationships, understanding how the city works and knowing who to turn to when a need arises.',
            'At Local Local we understand the complexity of that process, and we know that many questions come up only after the move. That is why, once you are in Tandil, you can count on us for questions, recommendations and connections with trusted people, professionals and services.',
            'The initial journey ends, but your access to the network continues. This integration support is included in the service, at no additional cost and with no expiration date.',
          ],
          incluyeLabel: '',
          incluye: [],
          valor: '',
          notas: [],
        },
      ],
      flexibleTitulo: 'A flexible journey',
      flexible: [
        'The service is designed to move forward in stages: each stage organizes and prepares you for the next. That is the journey we recommend to avoid isolated decisions and move forward with greater clarity.',
        'If your project is already underway and you need a specific intervention, we can step in at the stage that best fits your needs.',
      ],
      cta: 'Tell us your case on WhatsApp',
    },

    confidencialidad: {
      kicker: 'Confidentiality',
      titleSans: 'Your project does not need to',
      titleSerif: 'be shared around town',
      copy: 'A move, a property search, an investment or a business project involves sensitive family, professional, strategic and financial information. Sharing it too broadly can expose your plans, weaken your negotiating position, and invite outside interests that do not serve your goals.',
      copy2:
        'At Local Local we apply a minimum-exposure principle. Before activating each contact, we agree with you on what information is shared, with whom and for what purpose. Each professional receives only the information necessary for their role.',
      puntos: [
        'Your financial capacity and maximum budget remain confidential.',
        'Any release of information happens with your prior knowledge and approval.',
        'The professionals involved follow the same confidentiality guidelines.',
        'We protect your negotiating position from first contact through to closing.',
      ],
      cierre:
        'Confidentiality is maintained throughout the process and continues once it ends. Discretion is a core value of Local Local.',
      cta: 'Book my assessment confidentially',
    },

    red: {
      kicker: 'Local Local Network',
      titleSans: 'We know who to call,',
      titleSerif: 'for what and when',
      copy: 'The strength of our network lies in the criteria with which it was built and the quality of those who belong to it.',
      copy2:
        'We select professionals and providers for their track record, references, work standards, responsiveness and integrity and personal approach. When several trustworthy alternatives exist within the same field, we propose the one we consider best suited to the needs and characteristics of each project.',
      statsTitle: 'The network in numbers',
      stats: [
        { n: '+20', d: 'selected professionals and providers' },
        { n: '+8', d: 'essential fields coordinated under one integrated approach' },
        { n: '+15', d: 'years of professional relationships built in Tandil' },
      ],
      statsFoot: 'Selected for quality, not quantity.',
      statsNote:
        'Each introduction happens when there is a concrete need and we have the information required for the meeting to make sense. The selected person receives the indispensable context, and you know why we recommend them and what role they will play in your project.',
      principios: [
        { t: 'Prior selection', d: 'Every professional or provider is evaluated before joining the network.' },
        { t: 'Fit for each project', d: 'Each introduction responds to a concrete need, at the right moment and with a defined purpose.' },
        { t: 'Continuous evaluation', d: 'We review experiences and outcomes to keep the network up to date and uphold its quality standards.' },
      ],
      bilateral:
        'We look after both those who arrive through Local Local and the professionals who make up our network. That is why every connection starts with context, clear expectations and respect for both parties’ time.',
    },

    queRecibis: {
      titulo: 'What you get',
      subtitulo: 'You do not buy a meeting. You get clarity to move forward',
      items: [
        'Assessment interview of approximately 45 minutes',
        'Personalized analysis of your situation',
        'Identification of priorities and risks',
        'Information gathering needed for your case',
        'Assessment document',
        'Concrete roadmap',
        'Recommendation of next steps',
        'Optional proposal to continue by stages',
      ],
      nota: 'The assessment is an independent stage. After receiving it, you can proceed on your own or continue with Local Local.',
    },

    paraQuien: {
      kicker: 'Who Local Local is for',
      titleSans: 'For those who recognize the value of preventive advice:',
      titleSerif: 'planning before moving forward, verifying before committing, and making decisions with the full picture',
      intro:
        'Local Local supports people, professionals and families who are evaluating a move to Tandil and value their time, their assets, confidentiality and access to a curated local network.',
      perfiles: [
        {
          t: 'People & families',
          d: 'Exploring, preparing or completing a move, needing to integrate housing, education, work, services, timing and daily life into one single project.',
        },
        {
          t: 'Professionals, entrepreneurs, investors & companies',
          d: 'Evaluating living, setting up, investing or developing an activity in Tandil, needing to understand the local context and count on trusted professionals before committing time, money or assets.',
        },
      ],
      filtro:
        'We work with people who value personalized support and understand that a good decision also depends on the quality of the process that comes before it.',
    },

    tandil: {
      kicker: 'Tandil: yes or no?',
      titleSans: 'You can get to know Tandil over a weekend.',
      titleSerif: 'But choosing it means thinking about an ordinary Tuesday.',
      parrafos: [
        'How much time you want to spend commuting. Where you want your kids to grow up. The distance between home, school and work. How you want your days to feel.',
        'Tandil combines something hard to find: nature, activity and a still-human scale.',
        'It has schools, a university, healthcare, culture, gastronomy, sports and an economy that does not depend on a single activity. There are companies, professionals, industry, tourism, farmland and a tech ecosystem that keeps growing.',
        'But there is also fresh air, hills and another relationship with time.',
        'Here, nature is not reserved for vacations. It can appear on a walk after work, an afternoon with the kids or a trail that starts a few minutes from your home.',
        'Tandil offers the possibility of living with more space, building closer relationships and recovering part of the time big cities consume every day.',
        'It is not a frozen city or a promise of a perfect life. It is an active city, with an identity of its own and enough size for a family, professional or business project to develop without becoming isolated.',
        'Of course, moving also means reviewing work, income, schools, housing and your relationship with the city you leave behind. Not every area or way of living Tandil offers the same experience.',
        'But if you are looking for a life with more nature, more proximity and greater control over your days, Tandil deserves more than a visit.',
        'It deserves to become a concrete possibility.',
      ],
      cierre1: 'Maybe it is not about escaping a city.',
      cierre2: 'Maybe it is about choosing your next one more carefully.',
      credito: 'Photography: @santiarbeoph',
      galleryAlts: [
        'Hillside town among rocks and groves in Tandil',
        'The city of Tandil at dusk, seen from the hills',
        'Horse grazing in the Tandil hills',
        'Sunset sky over the city of Tandil',
        'Tower of the Independencia Park castle in Tandil',
      ],
    },

    porQue: {
      kicker: 'Why hire Local Local?',
      titleSans: 'Because some mistakes come',
      titleSerif: 'at a high cost',
      intro: 'From a distance, many decisions look simpler than they really are. At Local Local we help you avoid:',
      items: [
        'Choosing an area that seemed perfect over the weekend, only to find it does not work for your daily routine.',
        'Choosing a school based only on general recommendations without evaluating availability, distances, educational approach and fit with your family.',
        'Traveling to Tandil several times for disorganized meetings, unproductive visits or information that could have been obtained beforehand.',
        'Handing over a deposit or putting your savings into an "opportunity" without checking who is behind it, what is actually being sold and whether the paperwork backs up the promises.',
        'Moving forward with a property, lot or project without knowing its legal, technical, zoning or utility limitations.',
        'Hiring someone just because "everyone knows them" and ending up with shifting quotes, poor workmanship or deadlines that are never met.',
        'Discovering too late the costs, repairs, procedures, or constraints that completely change the cost of the decision.',
        'Mismanaging the timing and ending up paying overlapping rents, stays, deposits, trips or unnecessary moves.',
        'Solving housing, schools, work and daily life separately, only to discover later that the pieces do not fit.',
        'Exposing your project all over town and ending up surrounded by calls, self-interested recommendations and pressure to decide fast.',
      ],
      cierre1:
        'Each professional understands their role. We integrate the variables, ask the uncomfortable questions and help you detect what you are not yet seeing.',
      cierre2Intro: 'Often, the best outcome of our work is what did not happen:',
      cierre2Destacado:
        'the deposit you did not lose, the trip you did not take, the provider you did not hire and the decision you did not have to regret.',
      cta: 'Book my assessment →',
    },

    nosotros: {
      kicker: 'About',
      titleSans: 'Local insight.',
      titleSerif: 'Personal accountability.',
      nombre: 'Bernardo G. Cisterna',
      rol: 'Lawyer and founder of Local Local',
      saludo: 'Hi, I am Bernardo.',
      historia: [
        'I grew up in Tandil and moved to Buenos Aires to study law. Then I chose to live abroad to experience other cultures and ways of living. Today, I have chosen Tandil again—as the place where I want to grow and raise my children.',
        'Each move taught me — first-hand — what it means to build a life somewhere else: coordinating decisions from afar, moving forward without a trusted network, and building new routines, relationships and points of reference.',
        'I also learned that information that seems definitive is often incomplete, that recommendations usually reflect partial views, and that hasty decisions can be costly to fix.',
        'As a lawyer, I see that same pattern repeat in families, professionals and companies facing the consequences of important decisions made with fragmented information and without preventive advice.',
        'That is how Local Local was born: the service I wish I’d had each time I moved.',
      ],
      expertiseLabel: 'My role',
      expertiseIntro: 'I am the main point of contact for every project and I personally coordinate the involvement of our network:',
      expertise: [
        'I listen to what you are looking for and what is at stake for you.',
        'I help you set priorities and define what needs to be addressed first.',
        'I bring in the right people at the right time.',
        'I protect your position during negotiations.',
        'I explain the reasoning behind each recommendation so you can decide with clarity.',
      ],
      expertiseCierre: [
        'When the project includes an asset transaction, I lead the legal, notarial, and technical due diligence stage. Every recommendation carries my name, my professional judgment, and my responsibility.',
        'I am licensed with the Buenos Aires City Bar Association and the Azul Judicial Department Bar Association in the Province of Buenos Aires. This allows me to personally handle the legal work required by each case and integrate it into the rest of the process.',
      ],
      compromisoLabel: 'My commitment',
      compromiso: [
        'The initial assessment must provide clarity and sound guidance.',
        'If within 48 hours of receiving your roadmap you feel it did not deliver on that promise, you can request a full refund of the amount paid for the assessment.',
      ],
      ctaEvaluar: 'Book my assessment',
      cta: 'Meet me on LinkedIn',
      fotoAlt: 'Portrait of Bernardo G. Cisterna in Tandil',
    },

    testimonios: {
      kicker: 'Testimonials',
      titleSans: 'Experiences that shaped',
      titleSerif: 'Local Local',
      items: [
        {
          texto: 'We were fairly decided, but we had a lot of loose doubts. Bernardo helped us put them on the table and connected us with people who gave us a lot of confidence.',
          autor: 'Rodrigo Zubillaga and family',
          ubicacion: 'Buenos Aires',
        },
        {
          texto: 'I came to Bernardo with a fairly specific question and, in talking, several things came up that I had not considered. He helped me organize everything and decide with more peace of mind.',
          autor: 'Mónica Guastella',
          ubicacion: 'investor, Olivos',
        },
        {
          texto: 'Bernardo and his team know Tandil very well, but most importantly, they know who is who and how each person works. That gave us the most confidence.',
          autor: 'Andrea Arévalo and family',
          ubicacion: 'Buenos Aires',
        },
        {
          texto: 'We were about to invest money in a project that seemed like a good opportunity. Bernardo started asking questions that no one else had asked and several things came up that did not add up. We stopped in time. Looking at it now, it saved us from a huge problem.',
          autor: 'Francisco Bravo',
          ubicacion: 'investor, Buenos Aires',
        },
      ],
    },

    ctaFinal: {
      kicker: 'Let’s get started',
      titleSans: 'If Tandil is in your plans:',
      titleSerif: 'three questions, two minutes, one concrete first step',
      copy: 'Tell us where your project stands, and Bernardo will contact you personally within 24 hours to define the next step.',
      cta: 'Tell us about your project',
      ctaSec: 'How it works',
      micro: 'Confidentiality from the very first contact.',
    },

    comoComienza: {
      kicker: 'How it starts',
      intro: 'Let’s get started',
      introSub: 'If Tandil is in your plans:',
      introHighlight: 'Three questions. Two minutes. One practical first step.',
      introDesc: 'Tell us where your project stands, and Bernardo will contact you personally within 24 hours to define the next step.',
      title: 'Three straightforward steps',
      pasos: [
        { n: '1', t: 'You answer three questions', d: 'Two minutes' },
        { n: '2', t: 'I contact you personally', d: 'Within 24 hours, by WhatsApp or email' },
        { n: '3', t: 'We schedule your initial assessment', d: 'A 45-minute remote interview' },
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
        opciones: ['I am just exploring.', 'Tandil is now a serious option.', 'I have decided to move forward.'],
      },
      q2: {
        label: 'What are you evaluating?',
        opciones: [
          'A personal or family move.',
          'An investment or property transaction.',
          'A professional or business project.',
        ],
      },
      q3: {
        label: 'When would you like to move forward?',
        opciones: [
          'Within the next three months.',
          'Between three and six months.',
          'Later on; I am still defining the timing.',
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
        preferencias: ['WhatsApp.', 'Email.', 'Either is fine.'],
        origen: 'How did you find out about Local Local?',
        origenes: ['Instagram', 'Google', 'A recommendation', 'Postcard or QR code', 'LinkedIn', 'Other'],
      },
      error: 'Tell us at least your name and one contact so we can get back to you.',
      enviar: 'Send my project',
      confid:
        'Confidentiality from the very first contact. Your answers are used exclusively to understand your project and contact you.',
      privacidadLink: 'Privacy policy',
      directo: 'Prefer to talk directly?',
      directoCta: 'Message me on WhatsApp',
      graciasTitulo: 'Got it,',
      graciasCopy:
        'WhatsApp opened with your summary ready to send. If it did not, write to us directly and we will take it from there. We reply within 24 hours.',
      postCtaPrincipal: 'I want my assessment interview',
      postCtaSecundario: 'I am still exploring',
      leadLabels: {
        momento: 'Project stage',
        evaluando: 'Evaluating',
        plazo: 'When they want to move forward',
        nombre: 'Name',
        email: 'Email',
        whatsapp: 'WhatsApp',
        preferencia: 'Contact preference',
        origen: 'How they found us',
        campania: 'campaign',
      },
    },

    porQue: {
      kicker: 'Why hire Local Local?',
      titleSans: 'Because some mistakes come',
      titleSerif: 'at a high cost',
      intro:
        'From a distance, many decisions look simpler than they really are. At Local Local we help you avoid:',
      items: [
        'Choosing an area that seemed perfect over the weekend, only to find it does not work for your daily routine.',
        'Choosing a school based only on general recommendations without evaluating availability, distances, educational approach and fit with your family.',
        'Traveling to Tandil several times for disorganized meetings, unproductive visits or information that could have been obtained beforehand.',
        'Handing over a deposit or putting your savings into an "opportunity" without checking who is behind it, what is actually being sold and whether the paperwork backs up the promises.',
        'Moving forward with a property, lot or project without knowing its legal, technical, zoning or utility limitations.',
        'Hiring someone just because "everyone knows them" and ending up with shifting quotes, poor workmanship or deadlines that are never met.',
        'Discovering too late the costs, repairs, procedures, or constraints that completely change the cost of the decision.',
        'Mismanaging the timing and ending up paying overlapping rents, stays, deposits, trips or unnecessary moves.',
        'Solving housing, schools, work and daily life separately, only to discover later that the pieces do not fit.',
        'Exposing your project all over town and ending up surrounded by calls, self-interested recommendations and pressure to decide fast.',
      ],
      cierre1:
        'Each professional understands their role. We integrate the variables, ask the uncomfortable questions and help you detect what you are not yet seeing.',
      cierre2Intro: 'Often, the best outcome of our work is what did not happen:',
      cierre2Destacado:
        'the deposit you did not lose, the trip you did not take, the provider you did not hire and the decision you did not have to regret.',
      cta: 'Book my assessment →',
    },

    newsletter: {
      kicker: 'Newsletter',
      title: 'Let’s keep exploring together',
      copy: 'We share ideas, experiences, and practical tools for people going through a move, considering a new city, or imagining a new chapter for their family or project.',
      cta: 'Subscribe for stories, insights, and updates',
      placeholder: 'Your email address',
      enviando: 'Sending…',
      gracias: 'Done! You are on the list and we will email you.',
      error: 'Please enter a valid email address.',
      errorEnvio: 'We could not subscribe you right now. Please try again in a few minutes or message us on WhatsApp.',
      privacidad: 'By subscribing you agree to receive updates by email. You can unsubscribe at any time using the link included in each message.',
      privacidadLink: 'Privacy policy',
    },

    faq: {
      kicker: 'FAQ',
      title: 'What people usually ask us',
      items: [
        {
          q: 'What exactly does Local Local do?',
          a: 'We analyze, plan and guide relocation, investment, and business projects in Tandil. We work with our own method: a assessment of your situation, a tailored strategy and, when needed, bringing in a vetted local network of professionals.',
        },
        {
          q: 'How is it different from a real estate agency?',
          a: 'We do not sell property or take third-party commissions. Our only interest is that you make a good decision. An agency works on its own portfolio; we work on your whole project: housing, schools, legal matters, timing and daily life.',
        },
        {
          q: 'Can you help me if I have not decided to move yet?',
          a: 'Yes. Much of the value is precisely in the evaluation stage: understanding whether Tandil is for you, which area makes sense and what the change would involve — before committing time or money.',
        },
        {
          q: 'What does the initial assessment include?',
          a: 'A 45-minute remote interview, a comprehensive analysis of your project, and a written assessment and roadmap proposal with priorities, scenarios and next steps.',
        },
        {
          q: 'Can I hire just one stage?',
          a: 'Yes. The service is designed to move forward in stages: each stage prepares you for the next. If your project is already underway and you need a specific intervention, we can step in at the stage that best fits your needs.',
        },
        {
          q: 'How do you select the professionals in the network?',
          a: 'By their track record, references, work standards, responsiveness and integrity and personal approach, through relationships built over years in Tandil. It is not a single list: we make recommendations based on each project and evaluate the network continuously.',
        },
        {
          q: 'Is the information I share confidential?',
          a: 'Yes. We apply a minimum-exposure principle: before activating each contact we agree with you on what information is shared, with whom and for what purpose. Your financial capacity and maximum budget remain confidential.',
        },
        {
          q: 'What happens after the assessment?',
          a: 'You receive the document with your roadmap. From there, you decide: continue on your own, hire us for specific stages, or choose full support. No pressure and no obligation to continue.',
        },
      ],
      verTodas: 'See all frequently asked questions',
    },

    sticky: {
      cta: 'Book my assessment',
    },

    footer: {
      blurb: 'Relocation in Tandil.',
      navLabel: 'Navigation',
      legalLabel: 'Legal',
      legales: [
        { label: 'Legal information', href: '/en/legal.html' },
      ],
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
