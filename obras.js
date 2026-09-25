/** Datos del prototipo — orden cronológico por fecha del ataque documentado */
const MOTIVO_LABEL = {
  protesta: "Protesta política",
  gesto: "Gesto artístico",
  crisis: "Crisis personal",
  accidente: "Accidente",
  desconocido: "Desconocimiento",
};

const OBRAS = [
  {
    id: "venus-espejo",
    titulo: "La Venus del espejo",
    artista: "Diego Velázquez",
    anoObra: "1647–1651",
    lugarAtaque: "National Gallery, Londres",
    fechaAtaque: "10 marzo 1914",
    autorAtaque: "Mary Richardson",
    motivo: "protesta",
antes: {
    src: "imagenes/venus.jpg",
    alt: "La Venus del espejo intacta.",
    pie: "Antes · National Gallery. Wikimedia Commons.",
},
    despues: {
      src: "imagenes/8.jpg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · La obra presenta los siete cortes realizados durante el ataque de 1914.",
    },
    quePasó:
      "Mary Richardson, militante sufragista, clavó un cuchillo de carnicero en el lienzo siete veces durante una visita a la galería.",
    porQue:
      "Protesta por el arresto de Emmeline Pankhurst un día antes; Richardson vinculó la «destrucción de la mujer más bella de la mitología» con la persecución del movimiento sufragista.",
    queCambio:
      "La agresión convirtió la Venus en símbolo de protesta política: la obra dañada circuló como documento de la lucha por el voto, no solo como desnudo barroco. La restauración devolvió la imagen íntegra, pero el ataque permanece en la memoria histórica del arte y del feminismo.",
    cita: "Intenté destruir la imagen de la mujer más hermosa de la historia de la mitología en protesta contra el gobierno por destruir a la señora Pankhurst.",
    estado: "Restaurada con éxito; permanece en la National Gallery.",
    fuentes: "BBC Mundo (2012); National Gallery; archivo sufragista.",
  },
  {
    id: "ronda-nocturna",
    titulo: "La ronda nocturna",
    artista: "Rembrandt",
    anoObra: "1642",
    lugarAtaque: "Rijksmuseum, Ámsterdam",
    fechaAtaque: "1975 (ataque principal)",
    autorAtaque: "William de Rijk",
    motivo: "crisis",
    antes: {
      src: "imagenes/nightwatch.jpg",
      alt: "La ronda nocturna intacta",
      pie: "Antes · Rijksmuseum. Wikimedia Commons.",
    },
    despues: {
      src: "imagenes/6.jpeg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · El lienzo muestra las marcas dejadas por los cortes del ataque de 1975.",
    },
    quePasó:
      "En 1975, William de Rijk rasgó repetidamente el lienzo con un cuchillo. Antes hubo un intento fallido en 1911 y, en 1990, un paciente roció ácido sulfúrico (solo dañó el barniz).",
    porQue:
      "De Rijk afirmó que «Jesús» lo obligó a actuar; fue internado en un hospital psiquiátrico. Los otros ataques también involucran crisis personales o intentos de daño sin motivo político claro.",
    queCambio:
      "Tras cada restauración la escena recupera su lectura colectiva, pero el museo conserva memoria de las cicatrices del ataque de 1975. El caso muestra cómo un icono nacional puede volverse blanco de violencia repetida sin una sola narrativa de sentido.",
    cita: "Jesús me obligó a hacerlo (William de Rijk, según declaraciones citadas en prensa).",
    estado: "Restaurada; expuesta en el Rijksmuseum con historial de intervenciones documentado.",
    fuentes: "BBC Mundo (2012); Rijksmuseum.",
  },
  {
    id: "mona-lisa",
    titulo: "Mona Lisa",
    artista: "Leonardo da Vinci",
    anoObra: "c. 1503–1519",
    lugarAtaque: "Louvre / préstamos internacionales",
    fechaAtaque: "29 diciembre 1956 (piedra)",
    autorAtaque: "Ugo Ungaza Villegas",
    motivo: "crisis",
    antes: {
      src: "imagenes/mona.jpg",
      alt: "Mona Lisa",
      pie: "Antes · Louvre (reproducción). Wikimedia Commons.",
    },
    despues: {
      src: "imagenes/4.jpg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · Se observa la zona afectada por el lanzamiento de una piedra en 1956.",
    },
    quePasó:
      "Antes de la vitrina blindada, la obra sufrió un ataque con ácido y, en diciembre de 1956, Ungaza lanzó una piedra que desprendió pigmento cerca del codo. En 1974, en Tokio, pintura roja en protesta por accesibilidad; en 2009, una taza de cerámica contra el vidrio.",
    porQue:
      "Motivos distintos: gesto individual (piedra), protesta por derechos de personas con discapacidad (1974), y amenazas posteriores sin daño permanente gracias a la protección.",
    queCambio:
      "La Mona Lisa pasó a ser la obra más protegida del mundo; cada capa de seguridad resignifica el retrato como objeto de deseo y de agresión mediática. El artículo original mezcla fechas vagas («pocos meses después»); aquí se ancla el episodio de 1956.",
    cita: null,
    estado: "Íntegra tras repintes localizados; vitrina a prueba de balas (regalo de Japón).",
    fuentes: "BBC Mundo (2012); Louvre.",
  },
  {
    id: "piedad",
    titulo: "Piedad",
    artista: "Miguel Ángel",
    anoObra: "1498–1499",
    lugarAtaque: "Basílica de San Pedro, Ciudad del Vaticano",
    fechaAtaque: "21 mayo 1972",
    autorAtaque: "László Tóth",
    motivo: "crisis",
    antes: {
      src: "imagenes/pieta.jpg",
      alt: "Piedad de Miguel Ángel",
      pie: "Antes · Basílica de San Pedro. Wikimedia Commons.",
    },
    despues: {
      src: "imagenes/2.jpg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · La escultura presenta los daños causados en el rostro y el brazo de la Virgen.",
    },
    quePasó:
      "Tóth se abrió paso entre peregrinos y golpeó la escultura con un martillo de geólogo, mutilando la Virgen.",
    porQue:
      "Gritó «¡Soy Jesucristo!»; fue juzgado como enfermo mental y no recibió condena penal plena en Italia.",
    queCambio:
      "La reconstrucción y el panel a prueba de balas transformaron la Piedad en escultura vigilada: lo sagrado queda a la vez restaurado y distanciado del contacto público.",
    cita: "¡Soy Jesucristo, soy Jesucristo!",
    estado: "Reconstruida; protegida tras vidrio a prueba de balas.",
    fuentes: "BBC Mundo (2012); Vaticano.",
  },
  {
    id: "sirenita",
    titulo: "La sirenita",
    artista: "Edvard Eriksen",
    anoObra: "1913",
    lugarAtaque: "Puerto de Copenhague (Langelinie)",
    fechaAtaque: "1964 (primera decapitación)",
    autorAtaque: "Varios autores",
    motivo: "desconocido",
    antes: {
      src: "imagenes/mermaid.jpg",
      alt: "La sirenita en Copenhague",
      pie: "Antes · escultura en el paseo marítimo. Wikimedia Commons.",
    },
    despues: {
      src: "imagenes/1.jpg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · La escultura aparece después de uno de los actos de vandalismo que sufrió.",
    },
    quePasó:
      "Desde 1960 la estatua ha sido decapitada, mutilada, pintada y vandalizada repetidamente; las autoridades la alejaron del borde del agua.",
    porQue:
      "Actos mayormente anónimos o sin declaración política clara: hooliganismo, provocación, desconocimiento del valor simbólico.",
    queCambio:
      "La «Sirenita» deja de ser solo ícono turístico y pasa a ser pieza reparable en ciclo constante; cada restauración restablece el cuento de Andersen para el postcard oficial.",
    cita: null,
    estado: "Restaurada tras cada incidente; ubicación reforzada.",
    fuentes: "BBC Mundo (2012); nota: el original BBC escribe «Edward» en lugar de Edvard Eriksen.",
  },
  {
    id: "fuente",
    titulo: "La fuente",
    artista: "Marcel Duchamp",
    anoObra: "1917 (readymade)",
    lugarAtaque: "Centro Pompidou, París / Nîmes",
    fechaAtaque: "2006 (martillo, Pompidou)",
    autorAtaque: "Pierre Pinoncelli",
    motivo: "gesto",
    antes: {
      src: "imagenes/fountain.jpg",
      alt: "La fuente de Duchamp (foto Stieglitz)",
      pie: "Antes · reproducción histórica del readymade. Wikimedia Commons.",
    },
    despues: {
      src: "imagenes/3.jpg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · La réplica aparece intervenida después del ataque con un martillo.",
    },
    quePasó:
      "Pinoncelli atacó con martillo una copia en el Pompidou (2006) y, en 1993, orinó en otra versión en exhibición.",
    porQue:
      "Defiende el acto como performance: «refrescar» una obra radical ya museificada; molestia ante la institucionalización del dadaísmo.",
    queCambio:
      "Cada ataque reabre la pregunta duchampiana: ¿el urinario es arte porque el museo lo dice? Pinoncelli intenta devolver la provocación original mediante destrucción parcial.",
    cita: "La hice fresca y nueva, creé algo nuevo, algo que Duchamp habría aprobado.",
    estado: "Copia restaurada o reemplazada según edición; el original de 1917 se perdió.",
    fuentes: "BBC Mundo (2012); Centro Pompidou.",
  },
  {
    id: "bahia",
    titulo: "La bahía",
    artista: "Helen Frankenthaler",
    anoObra: "1963",
    lugarAtaque: "Detroit Institute of Arts",
    fechaAtaque: "2006",
    autorAtaque: "Niño de 12 años (visitante escolar)",
    motivo: "accidente",
    antes: {
      placeholder: true,
      texto: "Pintura abstracta «The Bay» (1963): manchas de azul, verde y ocre sobre lienzo sin marco figurativo.",
      pie: "Antes · Helen Frankenthaler, Detroit Institute of Arts. Espacio de referencia (licencia en producción).",
    },
    despues: {
      placeholder: true,
      texto: "Mancha de chicle adherida al lienzo; retirada sin daño permanente.",
      pie: "Después · mancha localizada tras el incidente. En producción: imagen con licencia.",
    },
    quePasó:
      "Durante una visita escolar, un niño pegó gum en el lienzo valorado en cerca de 1,5 millones de dólares.",
    porQue:
      "Acción infantil sin intención política ni artística; el museo suspendió al estudiante.",
    queCambio:
      "El incidente no altera la composición de forma duradera, pero expone la fragilidad de obras expuestas al público masivo frente a gestos mínimos.",
    cita: null,
    estado: "Restaurada; mancha eliminada sin daño permanente reportado.",
    fuentes: "BBC Mundo (2012); Detroit Institute of Arts.",
  },
  {
    id: "twombly",
    titulo: "Sin título",
    artista: "Cy Twombly",
    anoObra: "Tríptico sin título (serie)",
    lugarAtaque: "Collection Lambert, Aviñón",
    fechaAtaque: "2007",
    autorAtaque: "Rindy Sam",
    motivo: "gesto",
    antes: {
      src: "imagenes/twombly.jpg",
      alt: "Obra de Cy Twombly en tonos claros",
      pie: "Antes · referencia visual al estilo del tríptico. Wikimedia Commons.",
    },
    despues: {
      src: "imagenes/7.jpeg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · Se observa la huella de pintalabios dejada sobre el lienzo.",
    },
    quePasó:
      "Rindy Sam besó un panel del tríptico y dejó una huella de pintalabios; fue multada por daños y perjuicios.",
    porQue:
      "Declaró estar «abrumada por la pasión» y que el gesto era «un acto de amor» hacia la obra en blanco.",
    queCambio:
      "El beso obliga a preguntar si un gesto afectivo destruye o completa un lienzo minimalista: ¿contaminación o colaboración no autorizada? El tribunal trató el caso como daño material, no como performance.",
    cita: "Yo solo le di un beso. Fue un acto de amor… imaginé que el artista me entendería.",
    estado: "Restaurada; Sam pagó multas simbólicas y compensatorias.",
    fuentes: "BBC Mundo (2012); prensa francesa (2007).",
  },
  {
    id: "rothko",
    titulo: "Black on Maroon (murales Seagram)",
    artista: "Mark Rothko",
    anoObra: "1958",
    lugarAtaque: "Tate Modern, Londres",
    fechaAtaque: "7 octubre 2012",
    autorAtaque: "Vladimir Umanets",
    motivo: "gesto",
    antes: {
      src: "imagenes/rothko.jpg",
      alt: "Black on Maroon antes del ataque",
      pie: "Antes · Tate Modern. Wikimedia Commons.",
    },
    despues: {
      src: "imagenes/5.jpeg",
      alt: "Imagen de la obra después del ataque.",
      pie: "Después · El lienzo muestra la inscripción realizada con pintura durante el ataque.",
    },
    quePasó:
      "Un visitante escribió con pintura negra sobre el lienzo antes de salir de la sala.",
    porQue:
      "Umanets buscaba visibilidad para «Yellowism» (amarillismo), movimiento que propone reducir el arte a bloques amarillos con texto.",
    queCambio:
      "El mural contemplativo se convierte temporalmente en manifiesto; la restauración intenta borrar la capa, pero el debate sobre si el gesto es vandalismo o continuación conceptual replica la tensión del artículo entero.",
    cita: "Vladimir Umanets, A Potential Piece of Yellowism (texto pintado en el lienzo).",
    estado: "Restaurada; vuelta a exposición en 2014.",
    fuentes: "BBC Mundo (2012); Tate Modern.",
  },
  {
    id: "caridad",
    titulo: "Caridad",
    artista: "Damien Hirst",
    anoObra: "2002–2003",
    lugarAtaque: "Royal West of England Academy, Bristol",
    fechaAtaque: "2012",
    autorAtaque: "Autor desconocido",
    motivo: "desconocido",
    antes: {
      placeholder: true,
      texto: "Alcancía gigante de bronce: niña con pierna ortopédica y oso de peluche (The Spastics Society, años 60).",
      pie: "Antes · Damien Hirst, «Charity» (2002–2003). Espacio de referencia (licencia en producción).",
    },
    despues: {
      placeholder: true,
      texto: "Grafiti en la falda de la figura infantil.",
      pie: "Después · tinta en la falda (2012). En producción: imagen con licencia.",
    },
    quePasó:
      "Alguien roció grafiti sobre la falda de la niña de la escultura de 6,7 m expuesta en un balcón.",
    porQue:
      "Motivo no identificado; el BBC original no conecta el gesto con la crítica previa a la obra por imaginar paternalismo hacia personas con discapacidad.",
    queCambio:
      "La pieza ya representa una alcancía de caridad forzada y saqueada (collection box de los años 60). El grafiti añade una capa sobre un objeto que habla del saqueo: resignificación posible que el listado original no desarrolla.",
    cita: null,
    estado: "Grafiti retirado; obra asegurada.",
    fuentes: "BBC Mundo (2012); nota: traducción corregida de «collection box».",
  },
  {
    id: "banksy",
    titulo: "Varias obras",
    artista: "Banksy",
    anoObra: "1990s–2010s",
    lugarAtaque: "Reino Unido (Bristol, etc.)",
    fechaAtaque: "Varios (p. ej. octubre 2012 en Bristol)",
    autorAtaque: "Trabajadores de limpieza, propietarios, pintores",
    motivo: "desconocido",
    antes: {
      placeholder: true,
      texto: "Mural urbano en Bristol u otra ciudad: esténcil en blanco y negro sobre muro público.",
      pie: "Antes · obra callejera atribuida a Banksy. Espacio de referencia (licencia en producción).",
    },
    despues: {
      placeholder: true,
      texto: "Capas de pintura, enlucido o limpieza municipal que borran el mural.",
      pie: "Después · muro repintado. En producción: foto de caso concreto con licencia.",
    },
    quePasó:
      "Murales valorados en el mercado del arte han sido cubiertos sin que quien limpia supiera quién era Banksy; en Bristol (2012) residentes calificaron de vandalismo el encubrimiento con pintura negra.",
    porQue:
      "Desconocimiento del valor artístico, mantenimiento urbano rutinario o rechazo estético — distinto de la protesta o del gesto declarado en museo.",
    queCambio:
      "Caso aparte: pregunta si se puede «vandalizar» un grafiti. La destrucción a veces no busca la obra sino el muro; el debate urbano resignifica qué cuenta como patrimonio.",
    cita: null,
    estado: "Parcialmente restauradas algunas piezas; otras perdidas.",
    fuentes: "BBC Mundo (2012); prensa local Bristol.",
  },
];
];
