/* =========================================================================
   AC Paint Center — Product Catalog
   -------------------------------------------------------------------------
   This file contains:
   1. PRODUCTS  — the product data array (no price/stock/fake fields)
   2. Rendering — builds product cards into #product-grid
   3. Filtering — search + brand filter + category filter (combined)
   4. Modal     — "View Details" popup
   5. Image fallback — clean placeholder if an image is missing

   This is a catalog/showcase only. There is intentionally no price,
   stock, cart, or ordering logic anywhere in this file.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1. PRODUCT DATA
   Allowed fields only: id, name, brand, category, description, image
   Category values may be compound (e.g. "Interior & Exterior") — filtering
   below matches on substring, so a compound category still shows up under
   both the "Interior" and "Exterior" filter buttons.
   ------------------------------------------------------------------------- */
const PRODUCTS = [
  // ---- DAVIES ----
  {
    id: 1,
    name: "Davies Megacryl",
    brand: "Davies",
    category: "Interior & Exterior",
    description:
      "A water-based acrylic latex paint from Davies, designed for both interior and exterior wall applications.",
    image: "../assets/images/products/davies-megacryl.jpg",
  },
  {
    id: 2,
    name: "Davies Bio-Fresh+",
    brand: "Davies",
    category: "Interior",
    description:
      "An interior latex paint from the Davies line, formulated for indoor walls.",
    image: "../assets/images/products/davies-bio-fresh.jpg",
  },
  {
    id: 3,
    name: "Davies Sun & Rain",
    brand: "Davies",
    category: "Exterior",
    description:
      "An exterior latex paint from Davies, designed for outdoor wall surfaces exposed to the elements.",
    image: "../assets/images/products/davies-sun-rain.jpg",
  },
  {
    id: 4,
    name: "Davies Aqua Floor",
    brand: "Davies",
    category: "Multi-Surface",
    description:
      "A water-based floor paint from Davies, suited for concrete and similar floor surfaces.",
    image: "../assets/images/products/davies-aqua-floor.jpg",
  },
  {
    id: 5,
    name: "Davies Roofshield",
    brand: "Davies",
    category: "Waterproofing",
    description:
      "A protective roof paint from Davies, designed for use on roofing surfaces.",
    image: "../assets/images/products/davies-roofshield.jpg",
  },
  {
    id: 6,
    name: "Davies Aqua Gloss-It",
    brand: "Davies",
    category: "Enamel",
    description:
      "A water-based gloss enamel from Davies for wood and metal surfaces.",
    image: "../assets/images/products/davies-aqua-gloss-it.jpg",
  },
  {
    id: 7,
    name: "Davies AquaWood",
    brand: "Davies",
    category: "Enamel",
    description:
      "A water-based wood finish from Davies, designed for wooden surfaces.",
    image: "../assets/images/products/davies-aquawood.jpg",
  },
  {
    id: 8,
    name: "Davies Elastogel",
    brand: "Davies",
    category: "Waterproofing",
    description:
      "An elastomeric waterproofing paint from Davies for exterior surfaces.",
    image: "../assets/images/products/davies-elastogel.jpg",
  },

  // ---- BOYSEN ----
  {
    id: 9,
    name: "Boysen Permacoat Latex",
    brand: "Boysen",
    category: "Interior & Exterior",
    description:
      "A latex paint from Boysen suitable for interior and exterior walls.",
    image: "../assets/images/products/boysen-permacoat.jpg",
  },
  {
    id: 10,
    name: "Boysen Acrytex",
    brand: "Boysen",
    category: "Multi-Surface",
    description:
      "A textured wall finish system from Boysen for decorative wall surfaces.",
    image: "../assets/images/products/boysen-acrytex.jpg",
  },
  {
    id: 11,
    name: "Boysen Acrytex Primer B-1705",
    brand: "Boysen",
    category: "Primer",
    description:
      "A primer from the Boysen Acrytex line, used to prepare surfaces before applying the texture finish.",
    image: "../assets/images/products/boysen-acrytex-primer.jpg",
  },
  {
    id: 12,
    name: "Boysen Acrytex Cast B-1711",
    brand: "Boysen",
    category: "Multi-Surface",
    description:
      "A textured cast finish product from the Boysen Acrytex system.",
    image: "../assets/images/products/boysen-acrytex-cast.jpg",
  },
  {
    id: 13,
    name: "Boysen Acrytex Sealer B-1708",
    brand: "Boysen",
    category: "Multi-Surface",
    description:
      "A sealer from the Boysen Acrytex line, used to protect finished textured surfaces.",
    image: "../assets/images/products/boysen-acrytex-sealer.jpg",
  },
  {
    id: 14,
    name: "Boysen Acrytex Reducer B-1750",
    brand: "Boysen",
    category: "Thinner",
    description:
      "A reducer used to adjust the consistency of Boysen Acrytex products.",
    image: "../assets/images/products/boysen-acrytex-reducer.jpg",
  },
  {
    id: 15,
    name: "Boysen AcquaPro B-6715",
    brand: "Boysen",
    category: "Waterproofing",
    description:
      "A waterproofing product from Boysen designed for surface protection against water.",
    image: "../assets/images/products/boysen-acquapro.jpg",
  },
  {
    id: 16,
    name: "Boysen Acqua Epoxy",
    brand: "Boysen",
    category: "Enamel",
    description: "A water-based epoxy coating from Boysen.",
    image: "../assets/images/products/boysen-acqua-epoxy.jpg",
  },

  // ---- PRIMERO ----
  {
    id: 17,
    name: "Primero Multi-Seal",
    brand: "Primero",
    category: "Waterproofing",
    description:
      "A multi-purpose sealant from Primero used for waterproofing applications.",
    image: "../assets/images/products/primero-multi-seal.jpg",
  },
  {
    id: 18,
    name: "Primero Pro Polydeck",
    brand: "Primero",
    category: "Waterproofing",
    description:
      "A deck coating product from Primero designed for floor and deck surfaces.",
    image: "../assets/images/products/primero-pro-polydeck.jpg",
  },
  {
    id: 19,
    name: "Primero Pro Skim Coat",
    brand: "Primero",
    category: "Multi-Surface",
    description:
      "A skim coat product from Primero used for smoothing wall surfaces before painting.",
    image: "../assets/images/products/primero-pro-skim-coat.jpg",
  },

  // ---- GUILDER ----
  {
    id: 20,
    name: "Guilder Epoxy Primer with Catalyst Set",
    brand: "Guilder",
    category: "Automotive",
    description:
      "An epoxy primer set from Guilder, typically used for automotive and metal surface preparation.",
    image: "../assets/images/products/guilder-epoxy-primer.jpg",
  },
  {
    id: 21,
    name: "Guilder Hi-Gloss Epoxy Enamel",
    brand: "Guilder",
    category: "Enamel",
    description: "A high-gloss epoxy enamel from Guilder.",
    image: "../assets/images/products/guilder-hi-gloss-epoxy-enamel.jpg",
  },
  {
    id: 22,
    name: "Guilder Automotive Acrylic Topcoat Colors",
    brand: "Guilder",
    category: "Automotive",
    description:
      "An automotive acrylic topcoat from Guilder, available in a range of colors.",
    image: "../assets/images/products/guilder-automotive-acrylic-topcoat.jpg",
  },

  // ---- SEKU ----
  {
    id: 23,
    name: "Seku Paint All Surface Decorative Paint",
    brand: "Seku",
    category: "Multi-Surface",
    description:
      "A decorative paint from Seku designed for use on multiple surface types.",
    image: "../assets/images/products/seku-all-surface.jpg",
  },

  // ---- MAYON ----
  {
    id: 24,
    name: "Mayon Paint Thinner",
    brand: "Mayon",
    category: "Thinner",
    description: "A paint thinner from Mayon used for thinning and cleanup.",
    image: "../assets/images/products/mayon-paint-thinner.jpg",
  },
  {
    id: 25,
    name: "Mayon Lacquer Thinner",
    brand: "Mayon",
    category: "Thinner",
    description:
      "A lacquer thinner from Mayon used for lacquer-based products.",
    image: "../assets/images/products/mayon-lacquer-thinner.jpg",
  },

  // ---- ANZAHL ----
  {
    id: 26,
    name: "Anzahl Urethane Thinner 22028",
    brand: "Anzahl",
    category: "Thinner",
    description:
      "A urethane thinner from Anzahl used for automotive coating applications.",
    image: "../assets/images/products/anzahl-urethane-thinner.jpg",
  },
  {
    id: 27,
    name: "Anzahl Urethane Flo 22027",
    brand: "Anzahl",
    category: "Automotive",
    description:
      "A urethane flow additive from Anzahl used in automotive refinishing.",
    image: "../assets/images/products/anzahl-urethane-flo.jpg",
  },
  {
    id: 28,
    name: "Anzahl Urethane Automotive Primer Surfacer",
    brand: "Anzahl",
    category: "Automotive",
    description:
      "A urethane primer surfacer from Anzahl used for automotive surface preparation.",
    image: "../assets/images/products/anzahl-automotive-primer.jpg",
  },

  // ---- CHAMP (brushes / tools) ----
  {
    id: 29,
    name: "Champ Paint Brush",
    brand: "Champ",
    category: "Tools",
    description: "A paint brush from Champ for general painting use.",
    image: "../assets/images/products/champ-paint-brush.jpg",
  },
  {
    id: 30,
    name: 'Champ Paint Brush 2"',
    brand: "Champ",
    category: "Tools",
    description: 'A 2" paint brush from Champ for general painting use.',
    image: "../assets/images/products/champ-paint-brush-2-inch.jpg",
  },
];

/* -------------------------------------------------------------------------
   2. STATE
   ------------------------------------------------------------------------- */
const state = {
  search: "",
  brand: "all",
  category: "all",
};

/* -------------------------------------------------------------------------
   3. DOM REFERENCES
   ------------------------------------------------------------------------- */
const grid = document.getElementById("product-grid");
const noResults = document.getElementById("no-results");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("product-search");
const brandFilterBar = document.getElementById("brand-filters");
const categoryFilterBar = document.getElementById("category-filters");
const modal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close");

/* -------------------------------------------------------------------------
   4. CARD MARKUP
   ------------------------------------------------------------------------- */
function productCardHTML(product) {
  const imageBlock = `
    <img
      src="${product.image}"
      alt="${product.name}"
      loading="lazy"
      decoding="async"
      class="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
      style="image-rendering: -webkit-optimize-contrast;"
      onerror="handleImageError(this, '${escapeForAttr(product.name)}')"
    />
  `;

  return `
    <div
      class="product-card group border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col"
      data-id="${product.id}"
      data-brand="${product.brand.toLowerCase()}"
      data-category="${product.category.toLowerCase()}"
      data-name="${product.name.toLowerCase()}"
    >
      <button
        type="button"
        class="zoom-image-btn aspect-square w-full bg-white border-b border-gray-100 flex items-center justify-center p-4 cursor-zoom-in"
        data-id="${product.id}"
        aria-label="View larger image of ${escapeForAttr(product.name)}"
      >
        ${imageBlock}
      </button>
      <div class="p-4 flex flex-col flex-1">
        <p class="text-xs font-display font-semibold tracking-wide uppercase text-brand-red mb-1">
          ${product.brand}
        </p>
        <h3 class="font-display font-semibold text-base mb-1 leading-snug">
          ${product.name}
        </h3>
        <p class="text-xs text-gray-500 mb-2">${product.category}</p>
        <p class="text-sm text-gray-600 flex-1 mb-4">${product.description}</p>
        <button
          type="button"
          class="view-details-btn mt-auto w-full border border-brand-black text-brand-black text-sm font-medium py-2 rounded-md hover:bg-brand-black hover:text-white transition-colors"
          data-id="${product.id}"
        >
          View Details
        </button>
      </div>
    </div>
  `;
}

function escapeForAttr(str) {
  return String(str).replace(/'/g, "&#39;");
}

/* Clean placeholder if an image fails to load or doesn't exist yet */
function handleImageError(imgEl, productName) {
  const wrapper = imgEl.parentElement;
  imgEl.remove();
  wrapper.innerHTML = `
    <div class="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-100 p-3 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span class="text-xs font-medium">${productName}</span>
      <span class="text-[11px] text-gray-400">Image coming soon</span>
    </div>
  `;
}
// Expose to inline onerror handler
window.handleImageError = handleImageError;

/* -------------------------------------------------------------------------
   5. RENDER + FILTER
   ------------------------------------------------------------------------- */
function getFilteredProducts() {
  const term = state.search.trim().toLowerCase();

  return PRODUCTS.filter((product) => {
    const matchesSearch =
      term === "" ||
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);

    const matchesBrand =
      state.brand === "all" || product.brand.toLowerCase() === state.brand;

    const matchesCategory =
      state.category === "all" ||
      product.category.toLowerCase().includes(state.category);

    return matchesSearch && matchesBrand && matchesCategory;
  });
}

function render() {
  const filtered = getFilteredProducts();

  grid.innerHTML = filtered.map(productCardHTML).join("");

  const count = filtered.length;
  if (resultsCount) {
    resultsCount.textContent = `Showing ${count} product${count === 1 ? "" : "s"}`;
  }

  if (count === 0) {
    noResults.classList.remove("hidden");
    grid.classList.add("hidden");
  } else {
    noResults.classList.add("hidden");
    grid.classList.remove("hidden");
  }
}

/* -------------------------------------------------------------------------
   6. FILTER BAR ACTIVE-STATE STYLING
   ------------------------------------------------------------------------- */
function setActiveButton(container, activeBtn) {
  container.querySelectorAll("button").forEach((btn) => {
    btn.classList.remove("bg-brand-black", "text-white");
    btn.classList.add("text-brand-black");
  });
  activeBtn.classList.add("bg-brand-black", "text-white");
  activeBtn.classList.remove("text-brand-black");
}

/* -------------------------------------------------------------------------
   7. MODAL
   ------------------------------------------------------------------------- */
function openModal(product) {
  modalContent.innerHTML = `
    <div class="aspect-square bg-white border border-gray-100 rounded-md overflow-hidden mb-5 flex items-center justify-center p-4">
      <img
        src="${product.image}"
        alt="${product.name}"
        decoding="async"
        class="max-w-full max-h-full w-auto h-auto object-contain"
        onerror="handleImageError(this, '${escapeForAttr(product.name)}')"
      />
    </div>
    <p class="text-xs font-display font-semibold tracking-wide uppercase text-brand-red mb-1">
      ${product.brand}
    </p>
    <h2 class="font-display font-bold text-2xl mb-1">${product.name}</h2>
    <p class="text-sm text-gray-500 mb-4">${product.category}</p>
    <p class="text-gray-600 leading-relaxed">${product.description}</p>
    <p class="text-xs text-gray-400 mt-4">
      Product information is available from AC Paint Center. Please contact the store for additional details.
    </p>
  `;
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

/* -------------------------------------------------------------------------
   8. EVENT LISTENERS
   ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  render();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      render();
    });
  }

  if (brandFilterBar) {
    brandFilterBar.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-brand]");
      if (!btn) return;
      state.brand = btn.dataset.brand;
      setActiveButton(brandFilterBar, btn);
      render();
    });
  }

  if (categoryFilterBar) {
    categoryFilterBar.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      state.category = btn.dataset.filter;
      setActiveButton(categoryFilterBar, btn);
      render();
    });
  }

  // Event delegation for "View Details" (cards are re-rendered, so we
  // listen on the grid container rather than individual buttons)
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-details-btn, .zoom-image-btn");
    if (!btn) return;
    const product = PRODUCTS.find((p) => p.id === Number(btn.dataset.id));
    if (product) openModal(product);
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});
