// search.js — live search box for the Products page
// Relies on window.applyProductFilters exposed by filter.js

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("product-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    if (typeof window.applyProductFilters === "function") {
      window.applyProductFilters();
    }
  });
});
