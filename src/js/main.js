// main.js — shared behavior across all pages

async function loadHeader() {
  const mount = document.getElementById("site-header-mount");
  if (!mount) {
    console.error(
      '[main.js] Walang #site-header-mount sa page na \'to — check kung nasa HTML mo yung <div id="site-header-mount"></div>.',
    );
    return;
  }

  const inPagesFolder = location.pathname.includes("/pages/");
  const prefix = inPagesFolder ? "../" : "./";
  const headerPath = prefix + "partials/header.html";

  let html;
  try {
    const res = await fetch(headerPath);
    if (!res.ok) {
      console.error(
        `[main.js] Hindi ma-fetch ang header (${headerPath}) — status ${res.status}. Check kung tama yung path/lokasyon ng partials/header.html.`,
      );
      return;
    }
    html = await res.text();
  } catch (err) {
    console.error(
      `[main.js] Error habang kina-fetch ang header (${headerPath}):`,
      err,
    );
    return;
  }

  mount.innerHTML = html;

  // fix paths depending on current folder
  document.querySelectorAll("[data-href]").forEach((el) => {
    el.setAttribute("href", prefix + el.dataset.href);
  });
  document.querySelectorAll("[data-src]").forEach((el) => {
    el.setAttribute("src", prefix + el.dataset.src);
  });

  // mark current page as active
  const current = inPagesFolder
    ? location.pathname.split("/").pop().replace(".html", "")
    : "home";
  document.querySelectorAll("[data-page]").forEach((el) => {
    if (el.dataset.page === current) el.classList.add("is-active");
  });

  // the header (and #nav-toggle / #mobile-menu) only exists after this
  // point, so the menu is wired up here instead of on DOMContentLoaded
  initMobileMenu();
}

function initMobileMenu() {
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("nav-toggle-icon-open");
  const iconClose = document.getElementById("nav-toggle-icon-close");

  if (!navToggle) {
    console.error(
      "[main.js] Walang #nav-toggle na nahanap sa injected header. Check yung header-partial.html mo kung tama ang id.",
    );
    return;
  }
  if (!mobileMenu) {
    console.error(
      "[main.js] Walang #mobile-menu na nahanap sa injected header. Check yung header-partial.html mo kung tama ang id.",
    );
    return;
  }

  console.log("[main.js] Mobile menu wired up successfully.");

  const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    navToggle.setAttribute("aria-expanded", "false");
    if (iconOpen && iconClose) {
      iconOpen.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  };

  navToggle.addEventListener("click", () => {
    const willOpen = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", String(willOpen));
    console.log(
      "[main.js] nav-toggle clicked. Menu is now:",
      willOpen ? "OPEN" : "CLOSED",
    );
    if (iconOpen && iconClose) {
      iconOpen.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
    }
  });

  // close the menu whenever a link inside it is tapped
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

loadHeader();

document.addEventListener("DOMContentLoaded", () => {
  // Auto-update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
