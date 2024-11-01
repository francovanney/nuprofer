const productData = [
  {
    id: 1,
    nombre: "Nupro Active",
    titulo: "CONCENTRADO SOLUBLE",
    logo: "/src/assets/logoProductos/NUPROACTIVE.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Estéres metílicos de ácidos grasos de aceite de soja",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
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
    titulo: "CONCENTRADO SOLUBLE",
    logo: "/src/assets/logoProductos/NUPROSPRAY SC.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Alcohol graso etoxilado + silicona + ácido fosfórico secuestrante de cationes",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
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
    titulo: "CONCENTRADO SOLUBLE",
    logo: "/src/assets/logoProductos/SPRAYOIL M.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Estéres metílicos de ácidos grasos de aceite de soja",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
    presentacion: "Bidón de 20 litros",
    dosis: "200 a 500 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Es una aceite vegetal modificado (MSO) para ser utilizado como adyuvante en la aplicación de agroquímicos. Posee mayor capacidad de penetracion respecto a otros aceites no metilados.",
    beneficios: ["PENETRANTE", "HUMECTANTE", "TENSIOACTIVO", "ANTIEVAPORANTE"],
  },
  {
    id: 4,
    nombre: "Spray Oil",
    titulo: "CONCENTRADO SOLUBLE",
    logo: "/src/assets/logoProductos/SPRAY OIL.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Estéres metálicos de ácidos grasos de aceite de soja + silicona",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
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
    titulo: "CONCENTRADO SOLUBLE",
    logo: "/src/assets/logoProductos/SPECIALOIL.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Aceite desgomado de soja",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
    presentacion: "Bidón de 20 litros",
    dosis: "500 a 1.000 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Aceite vegetal emulsionable con efecto tensioactivo para ser utilizado como antievaporante en aplicaciones aéreas y terrestres de agroquímicos.",
    beneficios: ["HUMECTANTE", "ANTIEVAPORANTE"],
  },
  {
    id: 6,
    nombre: "Sulfa Plus",
    titulo: "",
    logo: "/src/assets/logoProductos/SULFAPLUS.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Sulfato de amonio + ácido fosfórico + secuestrante de cationes",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
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
    id: 7,
    nombre: "Sulfa Plus 2",
    titulo: "",
    logo: "/src/assets/logoProductos/SPRAYTOP MEZCLAS.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Sulfato de amonio + ácido fosfórico + secuestrante de cationes",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
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
    titulo: "LIQUIDO",
    logo: "/src/assets/logoProductos/SULFATEC.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Sulfato de amonio",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
    presentacion: "Bidón de 5 litros",
    dosis: "1.000 a 100 c.c. cada 100 lts de caldo a aplicar.",
    caracteristicas:
      "Formulación líquida de sulfato de amonio con efecto traslocador, activador y potenciador de herbicidas, aumentando fuertemente la eficiencia de control de los mismos.",
    beneficios: ["TRASLOCANTE", "SECUESTRANTE", "ACTIVADOR", "POTENCIADOR"],
  },
  {
    id: 9,
    nombre: "Animo Plus",
    titulo: "LIQUIDO",
    logo: "/src/assets/logoProductos/AMINOPLUS.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion: "Aminoácido de origen vegetal + extracto de algas",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
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
    titulo: "LIQUIDO",
    logo: "/src/assets/logoProductos/BIOACTIVE.png",
    envase: "/path-to-envase/specialoil.jpg",
    descripcion:
      "Aminoácidos + extracto de algas + fosfito de potasio + cobre + boro + zinc",
    marbetes: "/docs/marbetes/specialoil.pdf",
    hojaSeguridad: "/docs/hojas_seguridad/specialoil.pdf",
    presentacion: "Bidón de 5 litros",
    dosis: "500c.c. por Ha.",
    caracteristicas:
      "Es un fertilizante orgánico-mineral con la capacidad de activar diferentes acciones metabólicas en las plantas. Es una formulación que contiene aminoácidos, extracto de algas, fosfito de potasio y micronutrientes. Combina tres modos de acción estimulante que le permiten a las plantas revertir situaciones de estrés y aumentar el rendimiento de los cultivos",
    beneficios: [
      "MEJORAS LA ACTIVIDAD METABOLICA",
      "AUMENTA LAS DEFENSAS NATURALES",
      "MEJORA LA ABSORCIÓN DE NUTRIENTE",
      "FAVORECE LA FLORACIÓN Y FRUCTIFICACIÓN",
    ],
  },
];

export default productData;
