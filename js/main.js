document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = contactForm.name.value.trim();
      var company = contactForm.company.value.trim();
      var email = contactForm.email.value.trim();
      var phone = contactForm.phone.value.trim();
      var product = contactForm.product.value;
      var message = contactForm.message.value.trim();

      var subject = "Fruit Export Inquiry: " + product;
      var bodyLines = [
        "Name: " + name,
        "Company: " + (company || "-"),
        "Email: " + email,
        "Phone: " + (phone || "-"),
        "Product of Interest: " + product,
        "",
        "Message:",
        message
      ];

      var mailto =
        "mailto:info@hajyeg.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });
  }
});
