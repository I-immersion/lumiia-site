/* ═══════════════════════════════════════════════════════════
   LUMIIA — Système i18n
   Charge i18n/{lang}.json et remplace [data-i18n="key"]
   ═══════════════════════════════════════════════════════════ */

(function () {
  const BASE = '';
  const SUPPORTED = ['fr', 'en', 'nl', 'de'];
  const DEFAULT_LANG = 'fr';
  const STORAGE_KEY = 'lumiia.lang';

  let currentLang = DEFAULT_LANG;
  let dict = {};

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStoredLang(l) {
    try { localStorage.setItem(STORAGE_KEY, l); } catch (e) {}
  }

  function detectLang() {
    const stored = getStoredLang();
    if (stored && SUPPORTED.includes(stored)) return stored;
    const nav = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    if (SUPPORTED.includes(nav)) return nav;
    return DEFAULT_LANG;
  }

  // Resolve "hero.title" against nested dict
  function resolve(key) {
    return key.split('.').reduce((o, k) => (o == null ? null : o[k]), dict);
  }

  async function loadDict(lang) {
    try {
      const res = await fetch(`${BASE}/i18n/${lang}.json`);
      if (!res.ok) throw new Error(`${res.status}`);
      dict = await res.json();
      currentLang = lang;
      document.documentElement.lang = lang;
    } catch (err) {
      console.error(`[i18n] Failed to load ${lang}:`, err);
      // Fallback to FR if other lang failed
      if (lang !== DEFAULT_LANG) await loadDict(DEFAULT_LANG);
    }
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = resolve(key);
      if (val == null) return; // No translation: keep existing text
      // Detect attribute target: data-i18n-attr="placeholder" replaces attr instead of textContent
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });
    // Update active language in switcher
    document.querySelectorAll('[data-lang]').forEach((b) => {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === currentLang);
    });
  }

  async function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    setStoredLang(lang);
    await loadDict(lang);
    apply();
  }

  // Public API
  window.LUMIIA_I18N = { setLang, apply, getCurrent: () => currentLang };

  // Bind clicks on lang switcher (delegated, works after partials load)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    setLang(btn.getAttribute('data-lang'));
  });

  // Init
  async function init() {
    await loadDict(detectLang());
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
