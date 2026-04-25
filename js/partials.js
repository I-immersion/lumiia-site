/* ═══════════════════════════════════════════════════════════
   LUMIIA — Partials loader
   Charge header.html et footer.html dans chaque page
   ═══════════════════════════════════════════════════════════ */

(function () {
  // Base path — change ici quand on migre de GitHub Pages vers lumiia.fr
  const BASE = '/lumiia-site';

  async function loadPartial(slot, file) {
    const target = document.querySelector(slot);
    if (!target) return;
    try {
      const res = await fetch(`${BASE}/partials/${file}`);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const html = await res.text();
      target.innerHTML = html;
    } catch (err) {
      console.error(`[partials] Failed to load ${file}:`, err);
      target.innerHTML = `<!-- partial ${file} failed to load -->`;
    }
  }

  function markActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('[data-nav]').forEach((link) => {
      const navKey = link.getAttribute('data-nav');
      // Matches /lumiia-site/spectacle, /spectacle, etc.
      const isActive = path === '/' + navKey || path.includes(`/${navKey}/`) || path.includes(`/${navKey}.html`);
      if (isActive) link.classList.add('is-active');
    });
  }

  async function init() {
    await Promise.all([
      loadPartial('[data-partial="header"]', 'header.html'),
      loadPartial('[data-partial="footer"]', 'footer.html'),
    ]);
    markActiveNav();
    // Re-trigger i18n once partials are in DOM
    if (window.LUMIIA_I18N && typeof window.LUMIIA_I18N.apply === 'function') {
      window.LUMIIA_I18N.apply();
    }
    document.dispatchEvent(new Event('partials:loaded'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
