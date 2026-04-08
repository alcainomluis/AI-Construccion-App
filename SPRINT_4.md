# Sprint 4: Backend, Sistema de Agente y Base de Datos (Data Capture Flow)

El objetivo de este próximo sprint es darle "cerebro" y persistencia a la experiencia conversacional que construimos en el Sprint 3. El operario enviará audio/texto desde la App, y nuestro Backend deberá interpretar la intención, extraer la "data dura" usando Gemini y almacenarla inteligentemente en la Nube.

## Visión General de la Arquitectura

Para mantener la app rápida y en los ecosistemas de Google/Modernos (tal como vendemos en la Landing Page con GCP), proponemos la siguiente robusta arquitectura:

1. **Framework de Servidor:** Next.js Server Actions o Route Handlers (API).
2. **Base de Datos (BBDD):** `PostgreSQL` vía Supabase o Firebase Firestore. Recomiendo **Supabase (PostgreSQL)** por su excelente modelo relacional para construcción (proyectos -> partidas -> reportes -> incidentes) y su facilidad de integración y almacenamiento de fotos (Storage Objects).
3. **Poder del Agente Intelectual:** Google Gemini Flash/Pro usando el último `google-genai` SDK.

---

## 1. El Modelo de Datos (BBDD Relacional)

La base de datos requerirá unas 4 tablas principales para poder alimentar el futuro "Dashboard Directivo":

1. **`projects` (Obras/Proyectos)**
   - id, name, location, deadline, status
2. **`tasks` (Partidas / Tareas)**
   - id, project_id, name, expected_completion, current_progress_percentage
3. **`reports` (Bitácora/Avance Diario)**
   - id, task_id, worker_id, transcription, structured_data (JSON), progress_delta (ej. +15%), date
4. **`incidents` (Riesgos)**
   - id, project_id, severity (low, medium, critical), description, status
5. **`evidence` (Fotografías)**
   - id, report_id, incident_id, image_url, uploaded_at

---

## 2. El Agente Especialista en Construcción

Construiremos un "Manager Agent" instruido (System Prompt) para comportarse como un supervisor de obra riguroso pero amable.
Su comportamiento tendrá una regla estricta: **"No registrar el avance en BD si falta información de cuadrilla o medidas exactas; debes responder, repreguntar al humano y volver a esperar respuesta."**

### Herramientas del Agente (Tools/Function Calling)
El Agente estará provisto por Gemini con funciones ejecutables directamente:

- `fetch_active_tasks()`: Para que la IA sepa qué partidas están actualmente activas cuando el capataz habla genéricamente (ej: "Avanzamos con la losa").
- `register_progress(task_id, percentage, notes)`: El Agente la invoca para inyectar a la base de datos el progreso estructurado.
- `flag_incident(severity, context)`: Herramienta que el Agente usará de forma autónoma si detecta que el capataz dice: "Casi se corta un cable" o "Se atrasó el cemento".
- `upload_evidence_metadata()`: Relaciona las fotos entrantes al reporte de texto.

---

## 3. El Flujo de Captura (End to End)

El "viaje de los datos" del usuario en terreno luce así:

1. **El Usuario presiona grabar (PTT).** (Ya lo hicimos)
2. El audio se envía directamente a un endpoint en Next.js.
3. El audio es transcrito a texto (O podemos usar Gemini Audio Multimodal directo).
4. El Agente lee la transcripción. 
   - *¿La orden está completa y clara?* Llama a la herramienta `register_progress()` en el servidor, guardando en Base de Datos. Retorna un mensaje amigable: "Excelente, avance de 20% guardado."
   - *¿La orden es ambigua?* El agente esquiva las tools y responde texto: "Copio el avance en muros, pero ¿me indicas cuántos metros aproximados fraguaron?".
5. El UI (WebApp) hace un re-render de las burbujas mostrando el resultado al instante.

## Open Questions

> [!QUESTION]  
> 1. **Base de Datos:** Para el modelo relacional te sugiero Supabase (usa PostgreSQL por debajo es súper ágil para lanzar) o Google Firebase. ¿Con cuál de las dos te sientes más cómodo para lanzar este MVP?
> 2. **Datos Críticos:** De la lista del "Modelo de Datos" (Projects, Tasks, Reports, Incidents, Evidence), ¿sientes que falta alguna tabla fundamental para la industria de la construcción que debamos tener desde el día 1?
> 3. ¿Apruebas este Master Plan para que en nuestra siguiente sesión entremos directo a montar la BBDD y el Prompt del Agente en el backend?
