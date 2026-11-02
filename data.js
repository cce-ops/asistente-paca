const ACTIVITIES = [
  {
    "annex": "I.1",
    "code": "1.1",
    "sector": "Energía",
    "text": "Instalaciones para la combustión con una potencia térmica de combustión superior a 50 megavatios (MW). Se incluyen las instalaciones de producción de energía eléctrica en régimen ordinario o en régimen especial en las que se produce la combustión de combustibles fósiles, residuos o biomasa, y también las instalaciones de cogeneración, calderas, hornos, generadores de vapor o cualquier otro equipamiento o instalación de combustión existente en una industria, tanto si ésta es su actividad principal como si no lo es.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "1.2",
    "sector": "Energía",
    "text": "Refinerías de petróleo y de gas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "1.3",
    "sector": "Energía",
    "text": "Coquerías.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "1.4",
    "sector": "Energía",
    "text": "Instalaciones para la gasificación y la licuefacción del carbón.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "3.1",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la calcinación o para la sinterización de minerales metálicos, incluido el mineral sulfuroso.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "3.2",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la producción de fundición o de aceros brutos (fusión primaria o secundaria), incluidas las instalaciones correspondientes de fundición continua, con una capacidad de más de 2,5 toneladas por hora.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "3.3",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la transformación de metales ferrosos:",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "3.4",
    "sector": "Producción y transformación de metales",
    "text": "Fundiciones de metales ferrosos con una capacidad de producción de más de 20 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "3.9",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para:",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "3.21",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para el tratamiento de superficie de metales y materiales plásticos mediante un procedimiento electrolítico o químico, cuando el volumen de las cubetas o de las líneas completas destinadas al tratamiento utilizado sea superior a 30 metros cúbicos (m3).",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "4.1",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para:",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "4.4",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para la obtención de amianto y para la fabricación de productos a base de amianto.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "4.5",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para la fabricación de vidrio, incluida la fibra de vidrio, con una capacidad de fusión superior a 20 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "4.6",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para la fundición de materiales minerales, incluida la fabricación de fibras minerales, con una capacidad de fundición superior a 20 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "4.7",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para la fabricación de productos cerámicos mediante el enhornado, en particular, de tejas, ladrillos refractarios, baldosas, gres cerámico o porcelanas con una capacidad de producción superior a 75 toneladas por día, o una capacidad de enhornar de más de 4 m3 y de más de 300 kg/m3 de densidad de carga por horno.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "5.1",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones químicas para fabricar productos químicos orgánicos de base, en particular:",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "5.2",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones químicas para la fabricación de productos químicos inorgánicos de base, como por ejemplo:",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "5.3",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones químicas para la fabricación de fertilizantes a base de fósforo, de nitrógeno o de potasio (fertilizantes simples o compuestos).",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "5.4",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones químicas para la fabricación de productos de base fitosanitarios y biocidas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "5.5",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones químicas que utilizan un proceso químico o biológico para la fabricación de medicamentos de base.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "5.7",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones químicas para la fabricación de explosivos.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "6.1",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Instalaciones para el tratamiento previo (operaciones de lavado, blanqueo, mercerización) o para el tinte de fibras o productos textiles, cuando la capacidad de tratamiento es superior a 10 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "6.2",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Instalaciones para el abono (operaciones previas, ribera, abono, post abono), cuando la capacidad de tratamiento es superior a 12 toneladas por día de productos acabados.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "7.1",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Mataderos con una capacidad de producción de canales superior a 50 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "7.2",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Tratamiento y transformación para la fabricación de productos alimenticios a partir de:",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "7.3",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Tratamiento y transformación de la leche, con una cantidad de leche recibida superior a 200 toneladas por día (valor medio anual).",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "9.1",
    "sector": "Industria del papel",
    "text": "Instalaciones industriales para la fabricación de pasta de papel a partir de madera u otras materias fibrosas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "9.2",
    "sector": "Industria del papel",
    "text": "Instalaciones industriales para la fabricación de papel y cartón, con una capacidad de producción de más de 20 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "9.4",
    "sector": "Industria del papel",
    "text": "Instalaciones para la producción y el tratamiento de la celulosa, con una capacidad de producción superior a 20 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "10.1",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la valorización de residuos peligrosos, incluida la gestión de aceites usados, o para la eliminación de estos residuos en lugares que no sean los depósitos controlados, con una capacidad superior a 10 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "10.4",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la incineración de los residuos municipales, con una capacidad superior a 3 toneladas por hora.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "10.5",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la eliminación de los residuos no peligrosos en lugares que no sean los depósitos controlados, con una capacidad superior a 50 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "10.6",
    "sector": "Gestión de residuos",
    "text": "Depósitos controlados que reciban más de 10 toneladas por día o que tengan una capacidad total superior a 25\\.000 toneladas, con la exclusión de los depósitos controlados de residuos inertes.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "11.1",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones ganaderas para la cría intensiva que tengan más de:",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "11.3",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones para la eliminación o el aprovechamiento de canales o restos de animales, con una capacidad de tratamiento superior a 10 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "12.2",
    "sector": "Otras actividades",
    "text": "Instalaciones para el tratamiento de superficie de materiales, objetos o productos, con la utilización de disolventes orgánicos, en particular para aprestarlos, estamparlos, revestirlos y desengrasarlos, impermeabilizarlos, encolarlos, laquearlos, pigmentarlos, limpiarlos o impregnarlos, con una capacidad de consumo superior a 150 kg de disolvente por hora o superior a 200 toneladas por año.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.1",
    "code": "12.8",
    "sector": "Otras actividades",
    "text": "Instalaciones para la fabricación de carbono sinterizado o electrografiado para la combustión o la grafitación.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 2 años"
  },
  {
    "annex": "I.2",
    "code": "1.8",
    "sector": "Otras actividades",
    "text": "Fabricación industrial de briquetas de hulla y de lignito.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "1.12",
    "sector": "Otras actividades",
    "text": "Instalaciones industriales, y de otros tipos, para la producción de electricidad, vapor y agua caliente, con una potencia térmica superior a 100 MW, que no estén incluidas en el código 1\\.1 del anexo I.1.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "3.30",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de automóviles, motocicletas, autocares y similares y de motores para vehículos, con una superficie total superior a 30\\.000 metros cuadrados (m2).",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "3.31",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de material ferroviario móvil, con una superficie total superior a 30\\.000 m2.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "3.33",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la construcción y la reparación de aeronaves, con una superficie total superior a 30\\.000 m2.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "3.34",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones o bancos de prueba de motores, turbinas o reactores que estén situadas fuera de polígonos industriales o a menos de 500 metros de una zona residencial.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "4.8",
    "sector": "Industrias minerales y de la construcción",
    "text": "Aglomerados de minerales.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "4.9",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para la calcinación y la sinterización de minerales metálicos, con una capacidad superior a 5\\.000 toneladas por año de mineral procesado.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "4.10",
    "sector": "Industrias minerales y de la construcción",
    "text": "Fabricación de perlita expandida.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "4.11",
    "sector": "Industrias minerales y de la construcción",
    "text": "Calcinación de la dolomita.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "4.12",
    "sector": "Industrias minerales y de la construcción",
    "text": "Plantas de aglomerados asfálticos con una capacidad de producción superior a 250 toneladas por hora.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "9.3",
    "sector": "Industria del papel",
    "text": "Instalaciones industriales para la fabricación de celofán.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "10.1",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la eliminación de residuos peligrosos, con una capacidad de hasta 10 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "10.2",
    "sector": "Gestión de residuos",
    "text": "Centro para la recogida y la transferencia de residuos peligrosos, con una capacidad superior a 30 toneladas por día.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "10.7",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la valorización de residuos no peligrosos, con una capacidad superior a 100\\.000 toneladas por año.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "11.2",
    "sector": "Actividades agroindustriales y ganaderas.–Instalaciones ganaderas para la cría intensiva que tengan:",
    "text": "Instalaciones para la acuicultura intensiva, con una capacidad de producción superior a 1\\.000 toneladas por año.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "12.1",
    "sector": "Actividades agroindustriales y ganaderas.–Instalaciones ganaderas para la cría intensiva que tengan:",
    "text": "Actividades e instalaciones afectadas por la legislación de accidentes graves.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "12.16",
    "sector": "Actividades agroindustriales y ganaderas.–Instalaciones ganaderas para la cría intensiva que tengan:",
    "text": "Construcción y reparación naval en atarazanas, con una superficie total superior a 20\\.000 m2.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "12.37",
    "sector": "Actividades agroindustriales y ganaderas.–Instalaciones ganaderas para la cría intensiva que tengan:",
    "text": "Campings con un número de unidades de acampada superior a 1\\.500.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "12.52",
    "sector": "Actividades agroindustriales y ganaderas.–Instalaciones ganaderas para la cría intensiva que tengan:",
    "text": "Pistas permanentes de carreras y de pruebas para vehículos motorizados, con una superficie superior a 5 hectáreas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "12.53",
    "sector": "Actividades agroindustriales y ganaderas.–Instalaciones ganaderas para la cría intensiva que tengan:",
    "text": "Instalaciones para el almacenaje de productos petrolíferos, con una capacidad superior a 100\\.000 toneladas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.2",
    "code": "12.54",
    "sector": "Actividades agroindustriales y ganaderas.–Instalaciones ganaderas para la cría intensiva que tengan:",
    "text": "Parques temáticos con una superficie superior a 20 hectáreas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.3",
    "code": "1.11",
    "sector": "Energía",
    "text": "Parques eólicos con un número de aerogeneradores superior a 5 o de potencia instalada superior a 10 MW, o bien que estén a menos de 2 kilómetros de otro parque eólico.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.3",
    "code": "1.13",
    "sector": "Energía",
    "text": "Instalaciones fotovoltaicas de superficie superior a 6 hectáreas ubicadas en suelo no urbanizable.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.3",
    "code": "2.1",
    "sector": "Minería",
    "text": "Actividades extractivas e instalaciones de los recursos explotados.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.3",
    "code": "2.4",
    "sector": "Minería",
    "text": "Explotaciones mineras subterráneas, operaciones conexas y perforaciones geotérmicas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "I.3",
    "code": "2.5",
    "sector": "Minería",
    "text": "Explotaciones ubicadas en terreno de dominio público hidráulico para extracciones superiores a 20\\.000 m3/año o en zona de policía de lecho cuya superficie supere las 3 hectáreas.",
    "regime": "Autorización ambiental",
    "authority": "Generalitat de Catalunya (departamento competente en medio ambiente)",
    "control": "Control periódico cada 4 años"
  },
  {
    "annex": "II",
    "code": "1.1",
    "sector": "Energía",
    "text": "Instalaciones para la combustión con una potencia térmica de combustión superior a 2 MW y hasta 50 MW. Se incluyen las instalaciones de producción de energía eléctrica en régimen ordinario o en régimen especial, en las que se produzca la combustión de combustibles fósiles, residuos o biomasa, y también las instalaciones de cogeneración, calderas, hornos, generadores de vapor o cualquier otro equipamiento o instalación de combustión existente en una industria, tanto si ésta es su actividad principal como si no lo es.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "1.6",
    "sector": "Energía",
    "text": "Generadores de vapor de capacidad superior a 4 toneladas de vapor por hora.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "1.7",
    "sector": "Energía",
    "text": "Generadores de calor de potencia calorífica superior a 2\\.000 termias por hora.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "1.10",
    "sector": "Energía",
    "text": "Carbonización de la madera (carbón vegetal), cuando se trate de una actividad fija extensiva.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "1.12",
    "sector": "Energía",
    "text": "Instalaciones industriales, y de otros tipos, para la producción de electricidad, vapor y agua caliente con una potencia térmica de hasta 100 MW y superior a 0,2 MW, que no estén incluidas en el código 1\\.1 del anexo I.1.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "2.3",
    "sector": "Minería",
    "text": "Extracción de sal marina.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.2",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la producción de fundición o de aceros brutos (fusión primaria o fusión secundaria), incluidas las instalaciones correspondientes de fundición continua, con una capacidad de hasta 2,5 toneladas por hora.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.3",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la transformación de metales ferrosos:",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.4",
    "sector": "Producción y transformación de metales",
    "text": "Fundiciones de metales ferrosos, con una capacidad de producción superior a 2 toneladas por día y de hasta 20 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.6",
    "sector": "Producción y transformación de metales",
    "text": "Tratamiento de escoria siderúrgica y de fundición.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.8",
    "sector": "Producción y transformación de metales",
    "text": "Preparación, almacenaje a la intemperie, carga, descarga, manutención y transporte de minerales dentro de las plantas metalúrgicas.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.11",
    "sector": "Producción y transformación de metales",
    "text": "Electrólisis de zinc.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.12",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para el aislamiento o el recubrimiento de hilos, superficies y conductores de cobre o similares, mediante resinas o procesos de esmaltado.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.13",
    "sector": "Producción y transformación de metales",
    "text": "Aleaciones de metal con inyección de fósforo.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.17",
    "sector": "Producción y transformación de metales",
    "text": "Forja, estampación, embutición de metales, sinterización.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.19",
    "sector": "Producción y transformación de metales",
    "text": "Decapado de piezas metálicas mediante procesos térmicos.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.21",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para el tratamiento de superficie de metales y materias plásticas por un procedimiento electrolítico o químico, cuando el volumen de las cubetas utilizadas o de las líneas completas destinadas al tratamiento sea de hasta 30 m3.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.25",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de armas y municiones.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.26",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de electrodomésticos.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.28",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la fabricación de acumuladores eléctricos, pilas y baterías.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.30",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de automóviles, motocicletas, autocares y similares y de motores para vehículos, con una superficie total de hasta 30\\.000 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.31",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de material ferroviario móvil, con una superficie total de hasta 30\\.000 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "3.33",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la construcción y la reparación de aeronaves, con una superficie total de hasta 30\\.000 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.1",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones de:",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.2",
    "sector": "Industrias minerales y de la construcción",
    "text": "Fabricación de hormigón y/o de elementos de hormigón, tiza y cemento.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.3",
    "sector": "Industrias minerales y de la construcción",
    "text": "Fabricación de productos de fibrocemento, salvo los que contengan amianto.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.5",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones de fabricación de vidrio, incluida la fibra de vidrio, con una capacidad de fusión de hasta 20 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.6",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para la fundición de materiales minerales, incluida la fabricación de fibras minerales, con una capacidad de fundición de hasta 20 toneladas por día y superior a 1 tonelada por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.7",
    "sector": "Industrias minerales y de la construcción",
    "text": "Fabricación de productos cerámicos para construcción, refractarios, porcelana, gres, arcilla plástica y similares en hornos con una capacidad de hasta 75 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.9",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones de calcinación y de sinterización de minerales metálicos, con una capacidad de hasta 5\\.000 toneladas por año de mineral procesado.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.12",
    "sector": "Industrias minerales y de la construcción",
    "text": "Plantas de aglomerado asfáltico, con una capacidad de producción de hasta 250 toneladas por hora.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.13",
    "sector": "Industrias minerales y de la construcción",
    "text": "Plantas de preparación y ensacado de cementos especiales y/o morteros.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.14",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones de almacenaje de productos pulverulentos o granulados, con una capacidad superior a 1\\.000 toneladas.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.16",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones de corte, aserrado y pulido por medios mecánicos de rocas y piedras naturales, con una capacidad de producción superior a 50 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.17",
    "sector": "Industrias minerales y de la construcción",
    "text": "Fabricación de materiales abrasivos a base de alúmina, carburo de silicio y otros productos similares.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.19",
    "sector": "Industrias minerales y de la construcción",
    "text": "Tratamientos superficiales del vidrio por métodos químicos.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "4.21",
    "sector": "Industrias minerales y de la construcción",
    "text": "Actividades de clasificación y tratamiento de áridos cuando la actividad se desarrolla fuera de un recinto minero.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.6",
    "sector": "Industria química",
    "text": "Preparación de especialidades farmacéuticas o veterinarias.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.8",
    "sector": "Industria química",
    "text": "Producción de mezclas bituminosas a base de asfalto, betún, alquitranes y breas.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.9",
    "sector": "Industria química",
    "text": "Producción de guarniciones de fricción que utilizan resinas fenoplásticas o aminoplásticas, salvo los que contienen amianto.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.10",
    "sector": "Industria química",
    "text": "Producción de colas y gelatinas.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.11",
    "sector": "Industria química",
    "text": "Fabricación de pinturas, tintas, lacas, barnices y revestimientos similares.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.12",
    "sector": "Industria química",
    "text": "Fabricación de:",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.13",
    "sector": "Industria química",
    "text": "Fabricación de material fotográfico virgen y preparados químicos para la fotografía.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.14",
    "sector": "Industria química",
    "text": "Oxidación de aceites vegetales.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.15",
    "sector": "Industria química",
    "text": "Sulfitación y sulfatación de aceites.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.16",
    "sector": "Industria química",
    "text": "Extracción química sin refinar de aceites vegetales.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "5.20",
    "sector": "Industria química",
    "text": "Fabricación o preparación de otros productos químicos que no estén incluidos en el anexo I.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "6.1",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Instalaciones para el tratamiento previo (operaciones de lavado, blanqueo, mercerización) o para el tinte de fibras o productos textiles, cuando la capacidad de tratamiento sea de hasta 10 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "6.2",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Instalaciones para el abono (operaciones previas, ribera, abono, post abono), con una capacidad de tratamiento del producto acabado de hasta 12 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "7.1",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Mataderos que tengan una capacidad de producción de canales de hasta 50 toneladas por día y superior a 2 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "7.2",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Tratamiento y transformación para la fabricación de productos alimenticios a partir de:",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "7.4",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Producción de almidón.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "7.8",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Tratamiento, manipulación y procesamiento de productos del tabaco.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "7.9",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Instalaciones industriales para elaborar grasas y aceites vegetales y animales, instalaciones industriales para elaborar cerveza y malta, instalaciones industriales para fabricar féculas, instalaciones industriales para elaborar confituras y almíbares, instalaciones industriales para fabricar harina de pez y aceite de pez, siempre y cuando en la instalación se den, de forma simultánea, las circunstancias siguientes: a) que esté situada fuera de polígonos industriales, b) que esté situada a menos de 500 metros de una zona residencial, c) que ocupe una superficie de al menos 1 hectárea. Las actividades incluidas en este epígrafe deben someterse previamente a la solicitud de la licencia a la decisión del órgano ambiental competente del Departamento de Medio Ambiente y Vivienda respecto de la necesidad de someterse o no a la evaluación de impacto ambiental.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "8.2",
    "sector": "Industria de la madera, del corcho y de muebles",
    "text": "Impregnación o tratamiento de la madera con aceite de creosota o alquitrán.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "9.2",
    "sector": "Industria del papel",
    "text": "Instalaciones industriales para la fabricación de papel y cartón, con una capacidad de producción de hasta 20 toneladas por día y superior a 5 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "9.4",
    "sector": "Industria del papel",
    "text": "Instalaciones de producción y tratamiento de celulosa, con una capacidad de producción de hasta 20 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "9.5",
    "sector": "Industria del papel",
    "text": "Instalaciones industriales para la manipulación de papel y cartón, con una capacidad de producción superior a 20 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.1",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la valorización de residuos peligrosos, con una capacidad de hasta 10 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.2",
    "sector": "Gestión de residuos",
    "text": "Centros para la recogida y la transferencia de residuos peligrosos, con una capacidad de hasta 30 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.4",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la incineración de los residuos municipales, con una capacidad de hasta 3 toneladas por hora.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.5",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la eliminación de los residuos no peligrosos en lugares que no sean los depósitos controlados, con una capacidad de hasta 50 toneladas por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.7",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para la valorización de residuos no peligrosos con una capacidad de hasta 100\\.000 toneladas por año.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.8",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para el almacenaje de residuos no peligrosos.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.9",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para el tratamiento de deyecciones ganaderas líquidas (purín).",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.10",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para el tratamiento mecánico biológico de residuos municipales no recogidos selectivamente.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "10.11",
    "sector": "Gestión de residuos",
    "text": "Instalaciones para el tratamiento biológico de residuos de alta fermentabilidad.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "11.1",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones para la cría intensiva que dispongan de:",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "11.2",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones de acuicultura:",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "11.3",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones para la eliminación o el aprovechamiento de canales o restos de animales, con una capacidad de tratamiento de hasta 10 toneladas por día y superior a 1 tonelada por día.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "11.4",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Deshidratación artificial de forrajes.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "11.7",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Secado de grano y de otras materias vegetales por medio de procedimientos artificiales, con una superficie superior a 500 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "11.8",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Desmontaje del algodón, con una superficie superior a 500 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.2",
    "sector": "Otras actividades",
    "text": "Instalaciones para el tratamiento de superficie de materiales, objetos o productos, con la utilización de disolventes orgánicos, en particular para aprestarlos, estamparlos, revestirlos y desengrasarlos, impermeabilizarlos, encolarlos, laquearlos, pigmentarlos, limpiarlos o impregnarlos, con una capacidad de consumo de hasta 150 kg de disolvente por hora y de hasta 200 toneladas por año, con una superficie superior a 500 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.3",
    "sector": "Otras actividades",
    "text": "Aplicación de barnices no grasos, pinturas, lacas y tintes de impresión sobre cualquier soporte, y la cocción y el secado correspondientes, cuando la cantidad almacenada de estas sustancias en los talleres es superior a 1\\.000 kg y/o la superficie sea superior a 500 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.4",
    "sector": "Otras actividades",
    "text": "Instalaciones para el secado con lecho fluido, horno rotatorio y otros, cuando la potencia de la instalación sea superior a 1\\.000 termias por hora.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.6",
    "sector": "Otras actividades",
    "text": "Instalaciones de lavado con disolventes clorados que utilizan más de 1 tonelada por año de estos disolventes.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.7",
    "sector": "Otras actividades",
    "text": "Instalaciones de lavado interior de cisternas de vehículos de transporte.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.9",
    "sector": "Otras actividades",
    "text": "Fabricación de hielo.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.10",
    "sector": "Otras actividades",
    "text": "Depósito y almacenaje de productos peligrosos (productos químicos, productos petroleros, gases combustibles y otros productos peligrosos), con una capacidad superior a 50 m3, a excepción de las instalaciones expresamente excluidas de tramitación en la reglamentación de seguridad industrial de aplicación.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.12",
    "sector": "Otras actividades",
    "text": "Almacenaje o manipulación de minerales, combustibles sólidos y otros materiales pulverulentos.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.14",
    "sector": "Otras actividades",
    "text": "Envasado en forma de aerosoles de productos fitosanitarios y biocidas que utilicen como propelente gases licuados del petróleo.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.16",
    "sector": "Otras actividades",
    "text": "Construcción y reparación naval en atarazanas y varaderos, con una superficie total de hasta 20\\.000 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.20",
    "sector": "Otras actividades",
    "text": "Venta al detalle de carburantes para motores de combustión interna.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.22",
    "sector": "Otras actividades",
    "text": "Industria de manufactura de caucho y similares.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.23",
    "sector": "Otras actividades",
    "text": "Laboratorios de análisis y de investigación con una superficie superior a 75 m2 (excluyendo despachos, almacenes y otras áreas auxiliares).",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.24",
    "sector": "Otras actividades",
    "text": "Laboratorios industriales de fotografía.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.25",
    "sector": "Otras actividades",
    "text": "Hospitales, clínicas u otros establecimientos sanitarios con un número superior a 100 camas para la hospitalización o el ingreso de pacientes.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.26",
    "sector": "Otras actividades",
    "text": "Centros de asistencia primaria y hospitales de día con una superficie superior a 750 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.31",
    "sector": "Otras actividades",
    "text": "Hornos crematorios en hospitales y cementerios.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.35",
    "sector": "Otras actividades",
    "text": "Campos de golf.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.36",
    "sector": "Otras actividades",
    "text": "Establecimientos hoteleros en todos los grupos, modalidades, categorías y especialidades con un número de habitaciones superior a 400\\.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.37",
    "sector": "Otras actividades",
    "text": "Campings con un máximo de 1\\.500 unidades de acampada.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.39",
    "sector": "Otras actividades",
    "text": "Lavandería industrial.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.41",
    "sector": "Otras actividades",
    "text": "Instalaciones para la limpieza en seco, con una superficie superior a 500 m2.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.42",
    "sector": "Otras actividades",
    "text": "Fabricación de circuitos integrados y circuitos impresos.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.47",
    "sector": "Otras actividades",
    "text": "Instalaciones y actividades para la limpieza de vehículos.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.52",
    "sector": "Otras actividades",
    "text": "Pistas permanentes de carreras y de pruebas para vehículos motorizados, con una superficie de hasta 5 hectáreas.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "II",
    "code": "12.54",
    "sector": "Otras actividades",
    "text": "Parques temáticos con una superficie de hasta 20 hectáreas.",
    "regime": "Licencia ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Control periódico cada 6 años"
  },
  {
    "annex": "III",
    "code": "1.1",
    "sector": "Energía",
    "text": "Instalaciones de combustión con una potencia térmica de combustión de hasta 2 MW. Se incluyen las instalaciones para la producción de energía eléctrica en régimen ordinario o en régimen especial en las que se produzca la combustión de combustibles fósiles, y también las instalaciones de cogeneración, calderas, hornos, generadores de vapor o cualquier otro equipamiento o instalación de combustión existente en una industria, tanto si ésta es su actividad principal como si no lo es.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "1.6",
    "sector": "Energía",
    "text": "Generadores de vapor con una capacidad de hasta 4 toneladas de vapor por hora.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "1.7",
    "sector": "Energía",
    "text": "Generadores de calor con una potencia calorífica de hasta 2\\.000 termias por hora.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "1.12",
    "sector": "Energía",
    "text": "Instalaciones industriales, y de otros tipos, para la fabricación de energía eléctrica, vapor y agua caliente, con una potencia térmica de hasta 0\\.2 MW.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "1.13",
    "sector": "Energía",
    "text": "Instalaciones fotovoltaicas con una superficie inferior a 6 hectáreas y una potencia superior a 100 kW.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.4",
    "sector": "Producción y transformación de metales",
    "text": "Fundiciones de metales ferrosos con una capacidad de producción de hasta 2 toneladas por día.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.5",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de tubos y perfiles.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.7",
    "sector": "Producción y transformación de metales",
    "text": "Industria para la transformación de metales ferrosos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.10",
    "sector": "Producción y transformación de metales",
    "text": "Producción y primera transformación de metales preciosos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.14",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de maquinaria y/o productos metálicos diversos y/o cerrajerías.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.15",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de calderería (cisternas, recipientes, radiadores y calderas de agua caliente).",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.16",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de generadores de vapor.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.18",
    "sector": "Producción y transformación de metales",
    "text": "Tratamiento térmico de metal.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.20",
    "sector": "Producción y transformación de metales",
    "text": "Afinamiento de metales.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.23",
    "sector": "Producción y transformación de metales",
    "text": "Soldadura en talleres de calderería, atarazanas y similares.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.24",
    "sector": "Producción y transformación de metales",
    "text": "Instalaciones para la producción de polvo metálico por picado o molienda.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.27",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de materiales, maquinaria y equipos eléctricos, electrónicos y ópticos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "3.32",
    "sector": "Producción y transformación de metales",
    "text": "Fabricación de artículos de joyería, orfebrería, argentería, bisutería y similares.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "4.6",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para la fundición de materiales minerales, incluida la fabricación de fibras minerales, con una capacidad de fundición de hasta 1 tonelada por día.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "4.14",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para el almacenaje de productos pulverulentos o granulados, con una capacidad de hasta 1\\.000 toneladas.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "4.16",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para el corte, el aserrado y el pulido, por medios mecánicos, de rocas y piedras naturales, con una capacidad de producción de hasta 50 toneladas por día.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "4.18",
    "sector": "Industrias minerales y de la construcción",
    "text": "Instalaciones para el arenado con arena, grava menuda u otros abrasivos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "4.20",
    "sector": "Industrias minerales y de la construcción",
    "text": "Tratamientos superficiales del vidrio por medio de métodos físicos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "5.19",
    "sector": "Industria química",
    "text": "Moldeo para la fusión de objetos parafínicos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.3",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Fabricación de fieltros, guatas y láminas textiles no tejidas.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.4",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Hilatura de fibras.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.5",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Fabricación de tejidos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.6",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Acabados de la piel.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.7",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Obtención de fibras vegetales por procedimientos físicos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.8",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Enriado del lino, del cáñamo y de otras fibras textiles.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.9",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Hilatura del capullo del gusano de seda.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "6.10",
    "sector": "Industria textil, de la piel y cueros",
    "text": "Talleres de confección, calzado, marroquinería y similares.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "7.1",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Mataderos con una capacidad de producción de canales de hasta 2 toneladas por día.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "7.3",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Tratamiento y transformación de la leche, con una cantidad de 200 toneladas por día (valor medio anual) de leche recibida.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "7.5",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Instalaciones para el almacenaje de grano y harina.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "7.6",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Carnicerías con obrador.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "7.7",
    "sector": "Industria alimenticia y del tabaco",
    "text": "Panaderías con hornos con una potencia superior a 7\\.5 kW.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "8.3",
    "sector": "Industria de la madera, del corcho y de los muebles",
    "text": "Fabricación de muebles.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "8.4",
    "sector": "Industria de la madera, del corcho y de los muebles",
    "text": "Fabricación de chapas, tablones contrachapados y enlistonados con partículas aglomeradas o con fibras, y fabricación de otros tablones y plafones.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "8.5",
    "sector": "Industria de la madera, del corcho y de los muebles",
    "text": "Tratamiento del corcho y producción de aglomerados de corcho y linóleos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "8.6",
    "sector": "Industria de la madera, del corcho y de los muebles",
    "text": "Instalaciones de transformación del corcho en panas de corcho. Hervidores de corcho.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "8.7",
    "sector": "Industria de la madera, del corcho y de los muebles",
    "text": "Aserrado y despiece de la madera y del corcho.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "8.8",
    "sector": "Industria de la madera, del corcho y de los muebles",
    "text": "Tratamiento de corcho bruto y fabricación de productos en corcho.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "8.9",
    "sector": "Industria de la madera, del corcho y de los muebles",
    "text": "Carpinterías, ebanisterías y similares.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "9.2",
    "sector": "Industria del papel",
    "text": "Instalaciones industriales para la fabricación de papel y cartón, con una capacidad de producción de hasta 5 toneladas por día.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "9.5",
    "sector": "Industria del papel",
    "text": "Instalaciones industriales para la manipulación de papel y cartón, con una capacidad de producción de hasta 20 toneladas por día.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "11.1",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones para la cría intensiva que dispongan de:",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "11.2",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones de acuicultura:",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "11.3",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Instalaciones para la eliminación y el aprovechamiento de canales o restos de animales, con una capacidad de tratamiento de hasta 1 tonelada por día.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "11.5",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Secado del poso del vino.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "11.6",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Secado del lúpulo con azufre.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "11.7",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Secado de grano y otras materias vegetales por procedimientos artificiales, con una de superficie de hasta 500 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "11.8",
    "sector": "Actividades agroindustriales y ganaderas",
    "text": "Desmontaje del algodón, con una superficie de hasta 500 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.2",
    "sector": "Otras actividades",
    "text": "Instalaciones para el tratamiento de superficie de materiales, objetos o productos con la utilización de disolventes orgánicos, en particular para aprestarlos, estamparlos, revestirlos y desengrasarlos, impermeabilizarlos, encolarlos, laquearlos, limpiarlos o impregnarlos, con una capacidad de consumo de disolvente de hasta 150 kg por hora y de 20 toneladas por año y una superficie de hasta 500 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.3",
    "sector": "Otras actividades",
    "text": "Aplicación de barnices no grasos, pinturas, lacas y tintes de impresión sobre cualquier soporte, y la cocción y el secado correspondientes, cuando la cantidad almacenada de estas sustancias en los talleres sea de hasta 1\\.000 kg como máximo y la superficie de hasta 500 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.4",
    "sector": "Otras actividades",
    "text": "Instalaciones de secado con lecho fluido, horno rotatorio y otros, cuando la potencia de la instalación sea de hasta 1\\.000 termias por hora.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.5",
    "sector": "Otras actividades",
    "text": "Argentado de espejos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.6",
    "sector": "Otras actividades",
    "text": "Instalaciones de lavado con disolventes clorados que utilizan hasta 1 tonelada por año de estos disolventes.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.10",
    "sector": "Otras actividades",
    "text": "Depósito y almacenaje de productos peligrosos (productos químicos, productos petroleros, gases combustibles y otros productos peligrosos), con una capacidad de hasta 50 m3.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.13",
    "sector": "Otras actividades",
    "text": "Operaciones de molienda y envasado de productos pulverulentos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.15",
    "sector": "Otras actividades",
    "text": "Envasado de aerosoles, no incluidos en el apartado 12\\.14.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.23",
    "sector": "Otras actividades",
    "text": "Laboratorios de análisis y de investigación, con una superficie de hasta 75 m2 (excluyendo despachos, almacenes y otras áreas auxiliares).",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.25",
    "sector": "Otras actividades",
    "text": "Hospitales, clínicas y otros establecimientos sanitarios, con un número de hasta 100 camas para la hospitalización o el ingreso de pacientes.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.26",
    "sector": "Otras actividades",
    "text": "Centros de asistencia primaria y hospitales de día, con una superficie de hasta 750 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.27",
    "sector": "Otras actividades",
    "text": "Centros geriátricos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.28",
    "sector": "Otras actividades",
    "text": "Centros de diagnosis por la imagen.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.29",
    "sector": "Otras actividades",
    "text": "Servicios funerarios.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.30",
    "sector": "Otras actividades",
    "text": "Cementerios.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.32",
    "sector": "Otras actividades",
    "text": "Centros veterinarios.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.33",
    "sector": "Otras actividades",
    "text": "Centros y establecimientos que alojan, comercializan, tratan y reproducen animales.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.34",
    "sector": "Otras actividades",
    "text": "Centros de cría y suministro, y centros usuarios de animales de experimentación.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.36",
    "sector": "Otras actividades",
    "text": "Establecimientos hoteleros en todos los grupos, modalidades, categorías y especialidades, con un número de habitaciones de hasta 400\\.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.38",
    "sector": "Otras actividades",
    "text": "Casas de colonias, granjas escuela, aulas de naturaleza y albergues de juventud.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.40",
    "sector": "Otras actividades",
    "text": "Lavanderías no industriales.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.41",
    "sector": "Otras actividades",
    "text": "Instalaciones para la limpieza en seco, con una superficie de hasta 500 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.43",
    "sector": "Otras actividades",
    "text": "Fabricación de fibra óptica.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.45",
    "sector": "Otras actividades",
    "text": "Campamentos juveniles.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.46",
    "sector": "Otras actividades",
    "text": "Actividades de garaje y aparcamiento de vehículos, con una superficie superior a 100 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.48",
    "sector": "Otras actividades",
    "text": "Centros docentes.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.49",
    "sector": "Otras actividades",
    "text": "Establecimientos comerciales con una superficie total superior a 400 m2.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.56",
    "sector": "Otras actividades",
    "text": "Establecimientos de turismo rural en todos los grupos y modalidades.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.57",
    "sector": "Otras actividades",
    "text": "Establecimientos de apartamentos turísticos.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.58",
    "sector": "Otras actividades",
    "text": "Actividades de almacenaje de productos de roca ornamental.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  },
  {
    "annex": "III",
    "code": "12.59",
    "sector": "Otras actividades",
    "text": "Actividades de espectáculos públicos y actividades recreativas no incluidas en la legislación específica que regula esta materia, en los términos establecidos reglamentariamente.",
    "regime": "Comunicación ambiental",
    "authority": "Ayuntamiento correspondiente",
    "control": "Autocontrol periódico (según normativa municipal)"
  }
];
