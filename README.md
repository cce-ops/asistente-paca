# Asistente de Clasificación Normativa y Licencias Ambientales (Ley PACA)

Herramienta web estática (HTML/CSS/JS) para clasificar una actividad industrial según la Ley 20/2009 (PACA) de Cataluña y obtener la documentación mínima por régimen de intervención administrativa.

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

## Aviso

Herramienta de apoyo educativo. La clasificación definitiva corresponde a la administración competente; consulta siempre la normativa vigente.
