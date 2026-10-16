const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }));
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const topic = String(formData.get("topic") || "Portfolio enquiry");
    const message = String(formData.get("message") || "").trim();

    // TODO: Replace this address with the email you want to publish.
    const recipient = "YOUR_EMAIL_HERE@example.com";
    const subject = encodeURIComponent(`[Portfolio] ${topic} — ${name}`);
    const body = encodeURIComponent(`Hi Devidas,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}\nTopic: ${topic}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
