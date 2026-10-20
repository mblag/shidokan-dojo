// i18n
// -----------------------------------------------------------------------------
// Bulgarian is the source of truth and lives directly in index.html via the
// data-i18n / data-i18n-html / data-i18n-attr attributes. It is captured from
// the DOM on first load, so it is NOT duplicated here.
// Only the English strings live below, plus the list data for both languages
// (those lists are rendered by JS and have no markup in index.html).

const en = {
  dojoName: "Shidokan Dojo",
  trial: "Trial class",
  nav: { aikido: "Aikido", sensei: "Sensei", schedule: "Schedule", contact: "Contact" },
  navBelts: "Black Belts",
  navGallery: "Gallery",
  heroTitle1: "The way of",
  heroTitleEm: "harmony",
  heroTitle2: "with the spirit and",
  heroTitle3: "the universe.",
  heroDesc: "Shidokan Dojo is a traditional Aikido school \u2014 the martial art founded by O-Sensei Morihei Ueshiba. We cultivate body, mind and spirit in the tradition and system of Fumio Toyoda Shihan.",
  heroCta: "Begin your path",
  heroLink: "What is Aikido?",
  quote: `\u201eIt is not important to be better,<br />than someone else,<br />but to be better than yesterday.\u201c`,
  aboutEyebrow: "The Art",
  aboutTitle: "A martial art that emphasizes on control rather than destruction",
  aboutP1: "Aikido does not meet force with force. It receives, blends and redirects \u2014 turning aggression into circular motion and returning the encounter to stillness.",
  aboutP2: "On the tatami we train falls and throws, joint techniques, the way of the sword and staff. Off the mat, the same principles calm the mind and strengthen the heart.",
  aboutImgAlt: "Aikido technique in motion",
  senseiEyebrow: "Instructors",
  senseiTitle: "Sensei",
  beltsEyebrow: "Yudansha",
  beltsTitle: "Black Belts",
  beltsNote: "Students of the dojo",
  galleryEyebrow: "Dojo",
  galleryTitle: "Gallery",
  galleryNote: "Photos from training and seminars coming soon.",
  scheduleEyebrow: "Practice",
  scheduleTitle: "Weekly schedule",
  visitEyebrow: "Welcome",
  visitTitle1: "Step onto the",
  visitTitleEm: "tatami.",
  visitDesc: "The dojo welcomes new students throughout the year. No prior experience needed \u2014 only sincerity and the desire to begin.",
  mapsCta: "View on Google Maps",
  dojoLabel: "Dojo",
  dojoAddress: "Banishora, 45 Slivnitsa Blvd, 1309 Sofia",
  dojoHall: "SC Ilinden hall",
  facebookLabel: "Facebook group",
  title: "Shidokan Dojo \u2014 The Way of Aikido",
  description: "A traditional Aikido dojo devoted to the art of harmony. Classes for adults and children in the tradition of O-Sensei Morihei Ueshiba.",
};

// Lists rendered by JS \u2014 no markup counterpart in index.html.
const lists = {
  bg: {
    characters: [
      { jp: "\u5408", ro: "\u0410\u0439", meaning: "\u0414\u0430 \u043e\u0431\u0435\u0434\u0438\u043d\u044f. \u0414\u0430 \u0445\u0430\u0440\u043c\u043e\u043d\u0438\u0437\u0438\u0440\u0430\u043c \u0441 \u0442\u043e\u0432\u0430, \u043a\u043e\u0435\u0442\u043e \u0438\u0434\u0432\u0430." },
      { jp: "\u6c23", ro: "\u041a\u0438", meaning: "\u0414\u0443\u0445. \u0415\u043d\u0435\u0440\u0433\u0438\u044f\u0442\u0430, \u043a\u043e\u044f\u0442\u043e \u0442\u0435\u0447\u0435 \u043f\u0440\u0435\u0437 \u0432\u0441\u0438\u0447\u043a\u0438 \u043d\u0435\u0449\u0430." },
      { jp: "\u9053", ro: "\u0414\u043e", meaning: "\u041f\u044a\u0442\u044f\u0442. \u041f\u044a\u0442, \u043a\u043e\u0439\u0442\u043e \u0441\u0435 \u0438\u0437\u0432\u044a\u0440\u0432\u044f\u0432\u0430, \u0430 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0437\u0443\u0447\u0430\u0432\u0430." },
    ],
    senseis: [
      { name: "\u0414\u0430\u043d\u0430\u0438\u043b\u0020\u041f\u0440\u0430\u043d\u0433\u043e\u0432", dan: "6 \u0414\u0430\u043d", bio: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0432\u0430\u0020\u0430\u0439\u043a\u0438\u0434\u043e\u0020\u043f\u043e\u0432\u0435\u0447\u0435\u0020\u043e\u0442\u0020\u0033\u0030\u0020\u0433\u043e\u0434\u0438\u043d\u0438\u002e\u0020\u0423\u0447\u0435\u043d\u0438\u043a\u0020\u0435\u0020\u043d\u0430\u0020\u0422\u043e\u0439\u043e\u0434\u0430\u0020\u0428\u0438\u0445\u0430\u043d\u002e\u0020\u041f\u0440\u0435\u0437\u0020\u0032\u0030\u0032\u0036\u0020\u0433\u002e\u0020\u043c\u0443\u0020\u0435\u0020\u043f\u0440\u0438\u0441\u044a\u0434\u0435\u043d\u0430\u0020\u043f\u0440\u0435\u0441\u0442\u0438\u0436\u043d\u0430\u0442\u0430\u0020\u0442\u0438\u0442\u043b\u0430\u0020\u201e\u0428\u0438\u0445\u0430\u043d\u201c\u002c\u0020\u0441\u0020\u043a\u043e\u0435\u0442\u043e\u0020\u0441\u0442\u0430\u0432\u0430\u0020\u043d\u0430\u0439\u002d\u043d\u043e\u0432\u0438\u044f\u0442\u0020\u0447\u043b\u0435\u043d\u0020\u043d\u0430\u0020\u201e\u0428\u0438\u0445\u0430\u043d\u0020\u041a\u0430\u0439\u0020\u2013\u0020\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f\u0022" },
    ],
    blackBelts: [
      { name: "\u0414\u0438\u043c\u0438\u0442\u044a\u0440\u0020\u0410\u043d\u0433\u0435\u043b\u043e\u0432", dan: "4 \u0414\u0430\u043d", bio: "" },
      { name: "\u0413\u0435\u043e\u0440\u0433\u0438\u0020\u0411\u043e\u0441\u0442\u0430\u043d\u0434\u0436\u0438\u0435\u0432", dan: "4 \u0414\u0430\u043d", bio: "" },
      { name: "\u041a\u0430\u043c\u0435\u043d\u0020\u041f\u0440\u0430\u043d\u0433\u043e\u0432", dan: "3 \u0414\u0430\u043d", bio: "" },
      { name: "\u0414\u0435\u0447\u043e\u0020\u041f\u0430\u0432\u043b\u043e\u0432", dan: "1 \u0414\u0430\u043d", bio: "" },
      { name: "\u041c\u0430\u0440\u0438\u044f\u0020\u0411\u043b\u0430\u0433\u043e\u0435\u0432\u0430", dan: "1 \u0414\u0430\u043d", bio: "" }
    ],
    schedule: [
      { day: "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", jp: "\u706b", time: "20:00 \u2013 21:00", class: "\u0412\u044a\u0437\u0440\u0430\u0441\u0442\u043d\u0438 \u00b7 \u0432\u0441\u0438\u0447\u043a\u0438 \u043d\u0438\u0432\u0430" },
      { day: "\u041f\u0435\u0442\u044a\u043a", jp: "\u91d1", time: "19:30 \u2013 20:30", class: "\u0412\u044a\u0437\u0440\u0430\u0441\u0442\u043d\u0438 \u00b7 \u0432\u0441\u0438\u0447\u043a\u0438 \u043d\u0438\u0432\u0430" },
      { day: "\u0421\u044a\u0431\u043e\u0442\u0430", jp: "\u571f", time: "09:00 \u2013 12:00", class: "\u0412\u044a\u0437\u0440\u0430\u0441\u0442\u043d\u0438 \u00b7 \u0432\u0441\u0438\u0447\u043a\u0438 \u043d\u0438\u0432\u0430" },
    ],
  },
  en: {
    characters: [
      { jp: "\u5408", ro: "Ai", meaning: "To unite. To harmonize with what comes." },
      { jp: "\u6c23", ro: "Ki", meaning: "Spirit. The energy that flows through all things." },
      { jp: "\u9053", ro: "Do", meaning: "The Way. A path that is walked, not merely studied." },
    ],
    senseis: [
      { name: "Danail Prangov", dan: "6th Dan Aikikai", bio: "Has practiced Aikido for over 30 years. Student of Toyoda Shihan. As of 2026 has been awarded the prestigious title of Shihan, becoming the latest member of Shihan Kai - Bulgaria." },
    ],
    blackBelts: [
      { name: "Dimitar Angelov", dan: "4th Dan", bio: "" },
      { name: "Georgi Bostandjiev", dan: "3rd Dan", bio: "" },
      { name: "Kamen Prangov", dan: "3rd Dan", bio: "" },
      { name: "Decho Pavlov", dan: "1st Dan", bio: "" },
      { name: "Maria Blagoeva", dan: "1st Dan", bio: "" }
    ],
    schedule: [
      { day: "Tuesday", jp: "\u706b", time: "20:00 \u2013 21:00", class: "Adults \u00b7 all levels" },
      { day: "Friday", jp: "\u91d1", time: "19:30 \u2013 20:30", class: "Adults \u00b7 all levels" },
      { day: "Saturday", jp: "\u571f", time: "09:00 \u2013 12:00", class: "Adults \u00b7 all levels" },
    ],
  },
};

// Filled from index.html by captureBulgarian().
const bg = {};

const translations = { bg, en };

function setPath(obj, path, value) {
  const keys = path.split(".");
  let cur = obj;
  keys.slice(0, -1).forEach((k) => {
    if (typeof cur[k] !== "object" || cur[k] === null) cur[k] = {};
    cur = cur[k];
  });
  cur[keys[keys.length - 1]] = value;
}

function captureBulgarian() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    setPath(bg, el.dataset.i18n, el.textContent.trim());
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    setPath(bg, el.dataset.i18nHtml, el.innerHTML.trim());
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split("|");
    setPath(bg, key, el.getAttribute(attr) || "");
  });
  bg.title = document.title;
  const desc = document.head.querySelector('meta[name="description"]');
  bg.description = desc ? desc.getAttribute("content") : "";
}

function getPath(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
}

function initials(name) {
  return name.split(" ").map((n) => n[0]).join("");
}

function renderCharacters(t) {
  const el = document.getElementById("characters");
  el.innerHTML = t.characters.map((c) => `
    <div class="char">
      <div class="jp">${c.jp}</div>
      <div>
        <div class="ro">${c.ro}</div>
        <div class="meaning">${c.meaning}</div>
      </div>
    </div>`).join("");
}

function renderSenseis(t) {
  const el = document.getElementById("sensei-grid");
  el.innerHTML = t.senseis.map((s) => `
    <div class="sensei-card">
      <div class="sensei-thumb">
        <img class="sensei-photo" src="./public/images/sensei-shihan.jpg" alt="${s.name}" loading="lazy">
        <div class="sensei-overlay"><p>${s.bio}</p></div>
      </div>
      <div class="sensei-meta">
        <h3>${s.name}</h3>
        <span class="dan">${s.dan}</span>
      </div>
    </div>`).join("");
}

function renderBlackBelts(t) {
  const el = document.getElementById("belts-tree");
  if (!el) return;
  const n = t.blackBelts.length;
  const width = 800;
  const height = 220;
  const cx = width / 2;
  const branches = t.blackBelts.map((_, i) => {
    const x = ((i + 0.5) / n) * width;
    // curved path from top center to leaf point
    const midY = 90 + (i % 2) * 20;
    return `<path d="M ${cx} 0 C ${cx} ${midY}, ${x} ${midY}, ${x} ${height}" fill="none" stroke="currentColor" stroke-width="1" opacity="0.55" />`;
  }).join("");
  const dots = t.blackBelts.map((_, i) => {
    const x = ((i + 0.5) / n) * width;
    return `<circle cx="${x}" cy="${height}" r="4" fill="currentColor" />`;
  }).join("");
  const cards = t.blackBelts.map((b) => {
    const thumb = b.photo
      ? `<img class="belt-photo" src="${b.photo}" alt="${b.name}" loading="lazy">`
      : `<div class="belt-initials" aria-hidden="true">${initials(b.name)}</div>`;
    return `
    <div class="belt-card">
      <div class="belt-thumb">
        ${thumb}
        <div class="belt-overlay"><p>${b.bio || ""}</p></div>
      </div>
      <div class="belt-meta">
        <div class="belt-name">${b.name}</div>
        <div class="belt-dan">${b.dan}</div>
      </div>
    </div>`;
  }).join("");
  el.innerHTML = `
    <div class="belts-root">
      <div class="belts-trunk" aria-hidden="true"></div>
      <svg class="belts-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        ${branches}${dots}
      </svg>
      <div class="belts-grid" style="grid-template-columns: repeat(${n}, 1fr);">${cards}</div>
    </div>`;
}

function renderSchedule(t) {
  const el = document.getElementById("schedule-list");
  el.innerHTML = t.schedule.map((r) => `
    <div class="schedule-row">
      <div class="jp">${r.jp}</div>
      <div class="day">${r.day}</div>
      <div class="time">${r.time}</div>
      <div class="class-name">${r.class}</div>
    </div>`).join("");
}

// ---------------------------------------------------------------------------
// Gallery + lightbox
// Add photos here: { src: "/images/name.jpg", caption: { bg: "...", en: "..." } }
const galleryPhotos = [
  { src: "./public/images/sensei-shihan-full.jpg", caption: { bg: "Получаване сертификат за Шихан титла", en: "Receiving Shihan certificate" } },
  { src: "./public/images/ryudo-kan-seminiar-pazardjik.jpg", caption: { bg: "Рюдо кан доджо Пазарджик", en: "Ryudo Kan seminar in town Pazardjik" } },
];

const uiText = {
  bg: { close: "Затвори", prev: "Предишна", next: "Следваща" },
  en: { close: "Close", prev: "Previous", next: "Next" },
};

let currentLang = "bg";
let lightboxIndex = 0;

function renderGallery(lang) {
  const grid = document.getElementById("gallery-grid");
  const note = document.querySelector(".gallery-note");
  if (!grid) return;
  if (!galleryPhotos.length) return; // keep placeholder tiles + "coming soon" note
  if (note) note.hidden = true;
  grid.innerHTML = galleryPhotos.map((p, i) => `
    <button type="button" class="gallery-tile gallery-tile-photo" data-index="${i}">
      <img src="${p.src}" alt="${p.caption?.[lang] || ""}" loading="lazy">
      <span class="gallery-tile-caption">${p.caption?.[lang] || ""}</span>
    </button>`).join("");
  grid.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index)));
  });
}

function ensureLightbox() {
  let box = document.getElementById("lightbox");
  if (box) return box;
  box = document.createElement("div");
  box.id = "lightbox";
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML = `
    <button type="button" class="lightbox-close" data-action="close">&times;</button>
    <button type="button" class="lightbox-nav prev" data-action="prev">&#8249;</button>
    <figure class="lightbox-figure">
      <img alt="">
      <figcaption></figcaption>
    </figure>
    <button type="button" class="lightbox-nav next" data-action="next">&#8250;</button>`;
  document.body.appendChild(box);

  box.addEventListener("click", (e) => {
    const action = e.target.closest("[data-action]")?.dataset.action;
    if (action === "close" || e.target === box) closeLightbox();
    if (action === "prev") stepLightbox(-1);
    if (action === "next") stepLightbox(1);
  });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
  return box;
}

function updateLightbox() {
  const box = ensureLightbox();
  const photo = galleryPhotos[lightboxIndex];
  const caption = photo.caption?.[currentLang] || "";
  const img = box.querySelector("img");
  img.src = photo.src;
  img.alt = caption;
  box.querySelector("figcaption").textContent = caption;
  const ui = uiText[currentLang];
  box.querySelector(".lightbox-close").setAttribute("aria-label", ui.close);
  box.querySelector(".prev").setAttribute("aria-label", ui.prev);
  box.querySelector(".next").setAttribute("aria-label", ui.next);
}

function openLightbox(index) {
  lightboxIndex = index;
  const box = ensureLightbox();
  updateLightbox();
  box.hidden = false;
  document.body.style.overflow = "hidden";
  box.querySelector(".lightbox-close").focus();
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + galleryPhotos.length) % galleryPhotos.length;
  updateLightbox();
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  if (box) box.hidden = true;
  document.body.style.overflow = "";
}

function applyLang(lang) {
  const t = { ...translations[lang], ...lists[lang] };
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = t.title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = getPath(t, el.dataset.i18n);
    if (typeof val === "string") el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const val = getPath(t, el.dataset.i18nHtml);
    if (typeof val === "string") el.innerHTML = val;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split("|");
    const val = getPath(t, key);
    if (typeof val === "string") el.setAttribute(attr, val);
  });

  renderCharacters(t);
  renderSenseis(t);
  renderBlackBelts(t);
  renderSchedule(t);
  renderGallery(lang);
  if (!document.getElementById("lightbox")?.hidden) updateLightbox();

  const setMeta = (sel, attr, val) => {
    const el = document.head.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  };
  setMeta('meta[name="description"]', "content", t.description);
  setMeta('meta[property="og:title"]', "content", t.title);
  setMeta('meta[property="og:description"]', "content", t.description);
  setMeta('meta[property="og:locale"]', "content", lang === "bg" ? "bg_BG" : "en_US");
  setMeta('meta[property="og:locale:alternate"]', "content", lang === "bg" ? "en_US" : "bg_BG");
  setMeta('meta[property="og:url"]', "content", `/?lang=${lang}`);
  setMeta('link[rel="canonical"]', "href", `/?lang=${lang}`);

  document.querySelectorAll(".lang-toggle").forEach((toggle) => {
    toggle.querySelectorAll("button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  });

  try { localStorage.setItem("lang", lang); } catch {}
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
}

function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "bg" || fromUrl === "en") return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "bg" || saved === "en") return saved;
  } catch {}
  return "bg";
}

document.addEventListener("DOMContentLoaded", () => {
  captureBulgarian();
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
  applyLang(initialLang());
});

