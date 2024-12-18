const productData = [
  {
    id: 1,
    nombre: "Nupro Active",
    titulo: "adyuvantes",
    logo: "NUPROACTIVE.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Alcohol graso etoxilado + siicona",
    marbetes: "pdf/nuproactive/marbete.pdf",
    hojaSeguridad: "pdf/nuproactive/seguridad.pdf",
    imagen: "pdf/nuproactive/imagen.png",
    presentacion: "Botella de 1 litro",
    dosis: "35 a 50 c.c. cada 100 lts de caldo a aplicar",
    caracteristicas:
      "Es un adyuvante siliconado de última generación, que mejora la capacidad tensioactiva, logrando una mayor cobertura, poder de mojado y penetración de los distintos principios activos sobre la superficie foliar.",
    beneficios: [
      "SUPER MOJANTE",
      "SUPER TENSIOACTIVO",
      "SUPER ADHERENTE",
      "SUPER HUMECTANTE",
    ],
  },
  {
    id: 2,
    nombre: "Nupro Spray",
    titulo: "adyuvantes",
    logo: "NUPROSPRAY_SC.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Alcohol graso etoxilado + silicona + ácido fosfórico secuestrante de cationes",
    marbetes: "pdf/nuprospray/marbete.pdf",
    hojaSeguridad: "pdf/nuprospray/seguridad.pdf",
    imagen: "pdf/nuprospray/imagen.png",
    presentacion: "Botella de 1 litro",
    dosis: "50 a 80 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Eficaz corrector de aguas que regula el pH y reduce la dureza del agua. Contiene un virador de color que asegura el control adecuado del pH, regulando la dosis a aplicar. Su formulación contiene una silicona que reduce la tensión superficial de las gotas a aplicar.",
    beneficios: [
      "REGULADOR PH",
      "SECUESTRANTE DE CATIONES",
      "TENSIOACTIVO",
      "HUMECTANTE",
    ],
  },
  {
    id: 3,
    nombre: "Spray Oil M",
    titulo: "adyuvantes",
    logo: "SPRAYOIL_M.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Estéres metílicos de ácidos grasos de aceite de soja",
    marbetes: "pdf/sprayoilm/marbete.pdf",
    hojaSeguridad: "pdf/sprayoilm/seguridad.pdf",
    imagen: "pdf/sprayoilm/imagen.png",
    presentacion: "Bidón de 20 litros",
    dosis: "200 a 500 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Es una aceite vegetal modificado (MSO) para ser utilizado como adyuvante en la aplicación de agroquímicos. Posee mayor capacidad de penetracion respecto a otros aceites no metilados.",
    beneficios: ["PENETRANTE", "HUMECTANTE", "TENSIOACTIVO", "ANTIEVAPORANTE"],
  },
  {
    id: 4,
    nombre: "Spray Oil",
    titulo: "adyuvantes",
    logo: "SPRAY_OIL.png",
    envase: "/path-to-envase/specialoil.jpg",
    imagenes: "/docs/marbetes/specialoil.pdf",
    descripcion:
      "Estéres metálicos de ácidos grasos de aceite de soja + silicona",
    marbetes: "pdf/sprayoil/marbete.pdf",
    hojaSeguridad: "pdf/sprayoil/seguridad.pdf",
    imagen: "pdf/sprayoil/imagen.png",
    presentacion: "Bidón de 5 litros",
    dosis: "200 a 250 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Es una formulación termodinámicamente estable que combina la accion penetrante, traslocante y antievaporante del aceite vegetal modificado (MSO) más la acción super humectante y tensioaciva de la siicona. Maximiza el tándem penetración-traslocación garantizando mayor velocidad e incremento en el porcentaje de control.",
    beneficios: [
      "SUPERHUMECTANTE",
      "SUPER TENSIOACTIVO",
      "SUPER PENETRANTE",
      "SUPER MOJANTE",
      "ANTIEVAPORANTE",
    ],
  },
  {
    id: 5,
    nombre: "Special Oil",
    titulo: "adyuvantes",
    logo: "SPECIALOIL.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Aceite desgomado de soja",
    marbetes: "pdf/specialoil/marbete.pdf",
    hojaSeguridad: "pdf/specialoil/seguridad.pdf",
    imagen: "pdf/specialoil/imagen.png",
    presentacion: "Bidón de 20 litros",
    dosis: "500 a 1.000 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Aceite vegetal emulsionable con efecto tensioactivo para ser utilizado como antievaporante en aplicaciones aéreas y terrestres de agroquímicos.",
    beneficios: ["HUMECTANTE", "ANTIEVAPORANTE"],
  },
  {
    id: 6,
    nombre: "Spray Top",
    titulo: "adyuvantes",
    logo: "SPRAYTOP_MEZCLAS.png",
    envase: "/path-to-envase/specialoil.jpg",
    imagenes: "/docs/marbetes/specialoil.pdf",
    descripcion: "Alcohol láurico etoxilado",
    marbetes: "pdf/spraytop/marbete.pdf",
    hojaSeguridad: "pdf/spraytop/seguridad.pdf",
    imagen: "pdf/spraytop/imagen.png",
    presentacion: "Bidón de 5 litros",
    dosis: `Volumen de aplicación superior a 50lts.:<br> 
Uso preventivo de 100 a 300 c. c. por Ha.<br> 
Recuperador de 300 a 800 c. c. por Ha.<br> 
Volumen de aplicación menor a 50 lts. por Ha:<br> 
Aumentar la dosis. Realizar prueba a escalas.`,
    caracteristicas:
      "Es un adyuvantes que reduce los problemas de incompatibilidad e incrustaciones de mezclas en los tanques, favoreciendo la aplicación y homogenidad de distintos fitosanitarios.",
    beneficios: ["COMPATIBILIZANTE", "ESTABILIZANTE", "TENSIOACTIVO"],
  },
  {
    id: 7,
    nombre: "Sulfa Plus",
    titulo: "fertilizantes",
    logo: "SULFAPLUS.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Sulfato de amonio + ácido fosfórico + secuestrante de cationes",
    marbetes: "pdf/sulfaplus/marbete.pdf",
    imagen: "pdf/sulfaplus/imagen.png",
    presentacion: "Bidón de 5 litros",
    dosis: "300 a 500 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Formulación desarrollada y recomendada para mejorar la calidad del agua y potenciar la eficiencia de control de los fitosanitarios. Contiene tres activos que actúan directamente mejorando la calidad del caldo a asperjar.",
    beneficios: [
      "TRASLOCADOR",
      "ACTIVIDOR",
      "POTENCIADOR",
      "SECUESTRANTE",
      "ACIDIFICANTE",
    ],
  },
  {
    id: 8,
    nombre: "Sulfatec",
    titulo: "fertilizantes",
    logo: "SULFATEC.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Sulfato de amonio",
    marbetes: "pdf/sulfatec/marbete.pdf",
    imagen: "pdf/sulfatec/imagen.png",
    presentacion: "Bidón de 5 litros",
    dosis: "1.000 a 100 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Formulación líquida de sulfato de amonio con efecto traslocador, activador y potenciador de herbicidas, aumentando fuertemente la eficiencia de control de los mismos.",
    beneficios: ["TRASLOCANTE", "SECUESTRANTE", "ACTIVADOR", "POTENCIADOR"],
  },
  {
    id: 9,
    nombre: "Animo Plus",
    titulo: "bioestimulantes",
    logo: "AMINOPLUS.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Aminoácido de origen vegetal + extracto de algas",
    marbetes: "pdf/aminoplus/marbete.pdf",
    imagen: "pdf/aminoplus/imagen.png",
    presentacion: "Bidón de 5 litros",
    dosis: "500 a 750 c.c. por Ha",
    caracteristicas:
      "Formulación altamente concentrada en L-aminoácidos fisiológicamente activos, procedentes de hidrólisis enzimática de origen vegetal. Proporciona un mayor contenido en aminoácidos libres y asimilables, estimulando el desarrollo de la planta en momentos de máxima exigencia.",
    beneficios: [
      "BIOESTIMULANTE",
      "DESESTRESANTE",
      "DETOXIFICANTE",
      "ENERGIZANTE",
    ],
  },
  {
    id: 10,
    nombre: "Bio Active",
    titulo: "bioestimulantes",
    logo: "BIOACTIVE.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Aminoácidos + extracto de algas + fosfito de potasio + cobre + boro + zinc",
    marbetes: "pdf/bioactive/marbete.pdf",
    imagen: "pdf/bioactive/imagen.png",
    presentacion: "Bidón de 5 litros",
    dosis: "500c.c. por Ha.",
    caracteristicas:
      "Es un fertilizante orgánico-mineral con la capacidad de activar diferentes acciones metabólicas en las plantas. Es una formulación que contiene aminoácidos, extracto de algas, fosfito de potasio y micronutrientes. Combina tres modos de acción estimulante que le permiten a las plantas revertir situaciones de estrés y aumentar el rendimiento de los cultivos.",
    beneficios: [
      "MEJORAS LA ACTIVIDAD METABOLICA",
      "AUMENTA LAS DEFENSAS NATURALES",
      "MEJORA LA ABSORCIÓN DE NUTRIENTE",
      "FAVORECE LA FLORACIÓN Y FRUCTIFICACIÓN",
    ],
  },
];

export default productData;
