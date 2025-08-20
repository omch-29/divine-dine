document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("event-form");

  form.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.tagName.toLowerCase() !== "textarea") {
    e.preventDefault();
  }
});


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("ev-name").value.trim();
    const email = document.getElementById("ev-email").value.trim();
    const phone = document.getElementById("ev-phone").value.trim();
    const decor = document.getElementById("ev-decor").value.trim();
    const custom = document.getElementById("ev-custom").value.trim();

    alert(
      "🎉 Your event is booked!\n\n" +
      `👤 Name: ${name}\n` +
      `✉️ Email: ${email}\n` +
      `📞 Phone: ${phone}\n` +
      `🎈 Decorations: ${decor || "No specific needs"}\n` +
      `📝 Customization: ${custom || "No additional notes"}\n\n` +
      "We’ll contact you soon with confirmation details. Thank you!"
    );

    form.reset();
  });
});
