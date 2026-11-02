const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const REGIME_CLASS = {
  "Autorización ambiental": "aut",
  "Licencia ambiental": "lic",
  "Comunicación ambiental": "com",
  "Declaración de impacto ambiental con autorización sustantiva": "dia",
};

function regimeClass(r) { return REGIME_CLASS[r] || "com"; }

// ---------- Tabs ----------
$$(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".tab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    $$(".panel").forEach((p) => p.classList.remove("active"));
    $("#" + btn.dataset.tab).classList.add("active");
  });
});

// ---------- Clasificador ----------
const tipoSel = $("#tipoProyecto");
const msgTipo = $("#msgTipo");
const bloque = $("#bloqueActividad");
const sectorSel = $("#sector");
const actSel = $("#actividad");
const filtroAct = $("#filtroAct");
const resultado = $("#resultado");

const sectors = [...new Set(ACTIVITIES.map((a) => a.sector).filter(Boolean))].sort();

function populateSectors() {
  sectorSel.innerHTML = '<option value="">— Selecciona sector —</option>';
  sectors.forEach((s) => {
    const o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    sectorSel.appendChild(o);
  });
}

function activityLabel(a) {
  const short = a.text.length > 95 ? a.text.slice(0, 95) + "…" : a.text;
  return `${a.code} — ${short} (${a.annex})`;
}

function populateActivities() {
  const sector = sectorSel.value;
  const q = (filtroAct.value || "").toLowerCase().trim();
  actSel.innerHTML = "";
  const filtered = ACTIVITIES.filter((a) => {
    if (sector && a.sector !== sector) return false;
    if (q) {
      const hay = (a.code + " " + a.text + " " + a.annex + " " + a.sector).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  filtered.forEach((a) => {
    const o = document.createElement("option");
    o.value = a.annex + "|" + a.code;
    o.textContent = activityLabel(a);
    o.dataset.annex = a.annex;
    o.dataset.code = a.code;
    actSel.appendChild(o);
  });
  if (filtered.length === 0) {
    const o = document.createElement("option");
    o.textContent = "Sin resultados";
    o.disabled = true;
    actSel.appendChild(o);
  }
}

function findActivity(val) {
  const [annex, code] = val.split("|");
  return ACTIVITIES.find((a) => a.annex === annex && a.code === code);
}

function docsForRegime(regime) {
  const map = {
    "Autorización ambiental": [
      "Solicitud de autorización ambiental",
      "Estudio de impacto ambiental (art. 18), firmado por técnico competente",
      "Proyecto básico (descripción detallada y alcance de la actividad e instalaciones)",
      "Documentación sobre accidentes graves (si aplica)",
      "Informe urbanístico del ayuntamiento (compatibilidad urbanística y servicios)",
      "Características del suelo (si la actividad es potencialmente contaminante del suelo)",
      "Designación del técnico responsable de la ejecución del proyecto",
      "Declaración de datos confidenciales (si procede)",
      "Documentación sectorial adicional exigible",
    ],
    "Licencia ambiental": [
      "Solicitud de licencia ambiental",
      "Proyecto básico con estudio ambiental (contenido art. 18 a, c, d, f, g)",
      "Características del suelo (si la actividad es potencialmente contaminante)",
      "Designación del técnico responsable de ejecutar el proyecto",
      "Declaración de datos confidenciales (si procede)",
      "Informe del departamento competente en seguridad industrial (si hay sustancias tóxicas/muy tóxicas)",
      "Documentación sectorial adicional exigible",
    ],
    "Comunicación ambiental": [
      "Comunicación ambiental (declaración responsable)",
      "Proyecto básico con memoria ambiental (o solo memoria ambiental si así se determina)",
      "Certificación del técnico competente (adecuación al estudio ambiental y proyecto)",
      "Certificación de entidad colaboradora o servicios técnicos municipales (si se requieren mediciones)",
      "Autorización de vertidos (si la actividad incluye vertido de aguas residuales)",
      "Títulos administrativos habilitantes o controles iniciales sectoriales",
    ],
  };
  return map[regime] || [];
}

function renderResult(a) {
  const cls = regimeClass(a.regime);
  const docs = docsForRegime(a.regime).map((d) => `<li>☐ ${d}</li>`).join("");
  resultado.innerHTML = `
    <span class="badge ${cls}">${a.regime}</span>
    <h3>${a.code} · ${a.text}</h3>
    <div class="meta"><strong>Anexo:</strong> ${a.annex}</div>
    <div class="meta"><strong>Sector:</strong> ${a.sector}</div>
    <div class="meta"><strong>Autoridad competente:</strong> ${a.authority}</div>
    <div class="meta"><strong>Control periódico:</strong> ${a.control}</div>
    <h4>Documentación mínima requerida</h4>
    <ul>${docs}</ul>
    <p class="hint">Si en un mismo centro se ejercen varias actividades sujetas a distintos regímenes, se aplica el régimen de mayor incidencia ambiental (art. 7.2). La clasificación definitiva corresponde a la administración competente.</p>
  `;
  resultado.classList.remove("hidden");
  // sync doc tab selection
  document.querySelectorAll(".doc-card").forEach((c) => c.classList.remove("highlight"));
  const card = document.querySelector(`.doc-card[data-regime="${a.regime}"]`);
  if (card) card.classList.add("highlight");
}

tipoSel.addEventListener("change", () => {
  const bloqueInst = $("#bloqueInstalacion");
  if (tipoSel.value === "actividad") {
    msgTipo.textContent = "La Ley PACA regula actividades empresariales/industriales con incidencia ambiental.";
    bloque.classList.remove("hidden");
    bloqueInst.classList.add("hidden");
    populateSectors();
    populateActivities();
  } else if (tipoSel.value === "instalacion") {
    msgTipo.textContent = "Las instalaciones técnicas no se clasifican por PACA: se legalizan por su normativa técnica/industrial. Si la instalación forma parte de una actividad industrial, clasifica la actividad.";
    bloque.classList.add("hidden");
    bloqueInst.classList.remove("hidden");
    resultado.classList.add("hidden");
  } else {
    msgTipo.textContent = "";
    bloque.classList.add("hidden");
    bloqueInst.classList.add("hidden");
    resultado.classList.add("hidden");
  }
});

sectorSel.addEventListener("change", populateActivities);
filtroAct.addEventListener("input", populateActivities);

$("#btnClasificar").addEventListener("click", () => {
  const val = actSel.value;
  if (!val) return;
  const a = findActivity(val);
  if (a) renderResult(a);
});

$("#btnLimpiar").addEventListener("click", () => {
  tipoSel.value = "";
  msgTipo.textContent = "";
  bloque.classList.add("hidden");
  $("#bloqueInstalacion").classList.add("hidden");
  sectorSel.value = "";
  filtroAct.value = "";
  actSel.innerHTML = "";
  resultado.classList.add("hidden");
  resultado.innerHTML = "";
});

// ---------- Anexos ----------
const busqueda = $("#busquedaAnexo");
const filtroAnexo = $("#filtroAnexo");
const filtroRegimen = $("#filtroRegimen");
const listaAnexo = $("#listaAnexo");
const contador = $("#contadorAnexo");

function renderAnexos() {
  const q = (busqueda.value || "").toLowerCase().trim();
  const an = filtroAnexo.value;
  const reg = filtroRegimen.value;
  const filtered = ACTIVITIES.filter((a) => {
    if (an && a.annex !== an) return false;
    if (reg && a.regime !== reg) return false;
    if (q) {
      const hay = (a.code + " " + a.text + " " + a.annex + " " + a.sector + " " + a.regime).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  contador.textContent = `${filtered.length} actividades de ${ACTIVITIES.length}`;
  listaAnexo.innerHTML = "";
  filtered.slice(0, 300).forEach((a) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="code">${a.code}</span>${a.text}<span class="annex">· ${a.annex} · ${a.regime}</span>`;
    li.addEventListener("click", () => {
      // switch to clasificador and select
      $(".tab[data-tab='clasificador']").click();
      tipoSel.value = "actividad";
      tipoSel.dispatchEvent(new Event("change"));
      sectorSel.value = a.sector;
      sectorSel.dispatchEvent(new Event("change"));
      filtroAct.value = a.code;
      populateActivities();
      // select option
      const opt = Array.from(actSel.options).find((o) => o.value === a.annex + "|" + a.code);
      if (opt) actSel.value = opt.value;
      renderResult(a);
    });
    listaAnexo.appendChild(li);
  });
}

busqueda.addEventListener("input", renderAnexos);
filtroAnexo.addEventListener("change", renderAnexos);
filtroRegimen.addEventListener("change", renderAnexos);

// ---------- Documentación ----------
$("#btnImprimir").addEventListener("click", () => window.print());
$("#btnResetChecks").addEventListener("click", () => {
  document.querySelectorAll(".checklist input[type='checkbox']").forEach((c) => (c.checked = false));
});

// ---------- Init ----------
populateSectors();
renderAnexos();
