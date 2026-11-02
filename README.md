# Asistente de Clasificación Normativa y Licencias Ambientales (Ley PACA)

Herramienta web estática (HTML/CSS/JS) para clasificar una actividad industrial según la Ley 20/2009 (PACA) de Cataluña y obtener la documentación mínima por régimen de intervención administrativa.

https://cce-ops.github.io/asistente-paca/

## Uso

- Abre `index.html` con doble clic en el navegador. No requiere instalación ni servidor.
- O activa GitHub Pages (Settings → Pages → Deploy from branch → `main` / root) y comparte la URL.

## Qué incluye

- Diagrama de decisión: tipo de proyecto → sector → actividad concreta (anexo PACA) → régimen.
- Explorador de los anexos I.1, I.2, I.3, II y III (248 actividades) con búsqueda y filtros.
- Listado de documentación mínima por régimen (Autorización, Licencia, Comunicación) con casillas.
- Referencias a la Ley 20/2009 y a los apuntes de Proyectos de Ingeniería.

## Estructura

| Archivo | Contenido |
|---|---|
| `index.html` | Estructura principal |
| `styles.css` | Estilos responsive |
| `data.js` | Actividades de los anexos PACA |
| `app.js` | Lógica del clasificador, explorador y documentación |

## Caso real de uso (ejemplo para el alumno)

**Proyecto:** taller de reparación de vehículos con cabina de pintura y tratamiento de superficies.

1. En el clasificador elige **Actividad empresarial/industrial**.
2. Sector: **Otras actividades (12)**.
3. Actividad: `12.19.a` (mantenimiento y reparación de vehículos que hacen operaciones de pintura y tratamiento de superficie).

**Resultado:**

- Régimen: **Licencia ambiental (Anexo II)**.
- Administración: **Ayuntamiento** correspondiente.
- Control periódico: **cada 6 años**.
- Documentación mínima: solicitud, proyecto básico con estudio ambiental, características del suelo si aplica, designación del técnico responsable, declaración de datos confidenciales, informe de seguridad industrial si hay sustancias tóxicas/muy tóxicas, etc.

**Para qué sirve en el proyecto:** el alumno puede indicar en la memoria que el proyecto se somete a licencia ambiental municipal, preparar la documentación correspondiente y evitar tratarlo como una simple comunicación previa.

## Aviso

Herramienta de apoyo educativo. La clasificación definitiva corresponde a la administración competente; consulta siempre la normativa vigente.
