// Extract price helper from item.details
function extractPrice(details) {
  const match = details.match(/₹\s?(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

window.onload = () => {
  const menuContainer = document.getElementById("menu-items");

  for (const key in menuItems) {
    if (menuItems.hasOwnProperty(key)) {
      const item = menuItems[key];
      const price = extractPrice(item.details);

      const div = document.createElement("div");
      div.classList.add("menu-item");

      div.innerHTML = `
        <label>
          <input type="checkbox" value="${item.title}" data-price="${price}">
          <strong>${item.title}</strong> (₹${price})
        </label>
      `;

      menuContainer.appendChild(div);
    }
  }

  document.getElementById("deliveryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const selectedItems = [];
    let total = 0;

    document.querySelectorAll("#menu-items input:checked").forEach(cb => {
      const title = cb.value;
      const price = parseInt(cb.dataset.price);
      total += price;
      selectedItems.push(`${title} - ₹${price}`);
    });

    if (selectedItems.length === 0) {
      alert("⚠️ Please select at least one food item.");
      return;
    }

    alert(
      `✅ Order Placed!\n\n` +
      `👤 Name: ${name}\n📞 Phone: ${phone}\n📍 Address: ${address}\n\n` +
      `🍴 Items:\n- ${selectedItems.join("\n- ")}\n\n` +
      `💰 Total: ₹${total}`
    );

    this.reset();
  });
};
