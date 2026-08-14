// contact-form.js — front-end only handling for the Contact page form.
// Since this site has no backend, this just prevents the default page
// reload and shows a success message. Swap in Formspree/EmailJS/etc.
// (or a real backend) when you're ready to actually receive messages.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // TODO: send form data to a form service or backend endpoint here.
    // Example (Formspree): fetch("https://formspree.io/f/yourFormId", {
    //   method: "POST", body: new FormData(form), headers: { Accept: "application/json" }
    // });

    if (successMsg) {
      successMsg.classList.remove("hidden");
    }
    form.reset();
  });
});
