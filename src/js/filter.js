// filter.js — category filtering for the Products page
// Works together with search.js (both filter the same #product-grid)

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");
  const noResults = document.getElementById("no-results");

  if (!filterButtons.length) return;

  let activeFilter = "all";

  function applyFilters() {
    const searchInput = document.getElementById("product-search");
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    let visibleCount = 0;

    productCards.forEach((card) => {
      const category = card.dataset.category;
      const name = (card.dataset.name || "").toLowerCase();

      const matchesFilter = activeFilter === "all" || category === activeFilter;
      const matchesSearch = !query || name.includes(query);

      const show = matchesFilter && matchesSearch;
      card.classList.toggle("hidden", !show);
      if (show) visibleCount++;
    });

    if (noResults) {
      noResults.classList.toggle("hidden", visibleCount !== 0);
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;

      // update active button styling
      filterButtons.forEach((b) => {
        b.classList.remove("bg-brand-black", "text-white");
        b.classList.add("text-brand-black");
      });
      btn.classList.add("bg-brand-black", "text-white");
      btn.classList.remove("text-brand-black");

      applyFilters();
    });
  });

  // expose so search.js can trigger a re-filter too
  window.applyProductFilters = applyFilters;
});
