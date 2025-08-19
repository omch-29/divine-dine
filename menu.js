const menuItems = {
  'caesar-salad': {
    title: 'Caesar Salad',
    image: 'cs.jpg',
    details: 'Crisp romaine lettuce tossed in creamy Caesar dressing,<br>topped with crunchy garlic croutons and freshly shaved Parmesan cheese.<br><br><b>Ingredients:</b> Romaine lettuce, Caesar dressing (olive oil, garlic, anchovy, egg yolk, lemon juice, Dijon mustard), Parmesan cheese, croutons, black pepper.<br><br><b>Price:</b> ₹220'
  },
  'sprout-salad': {
  title: 'Sprout Salad',
  image: 'ss.jpg',
  details: 'A protein-packed healthy salad made from boiled green gram sprouts,<br>tossed with onion, tomato, cucumber, coriander, and lemon juice.<br><br><b>Ingredients:</b> Sprouts, onion, tomato, cucumber, green chili, lemon juice, coriander, salt, chaat masala.<br><br><b>Price:</b> ₹120'
},
  'divine-pasta': {
    title: 'Divine Pasta with Truffle',
    image: 'pasta.jpg',
    details: 'Our signature handmade fettuccine pasta served with a rich and creamy Parmesan sauce, generously infused with the earthy aroma and delicate flavor of black truffle shavings. An unforgettable culinary experience.'
  },
  'basmati-pulao': {
    title: 'Basmati Pulao',
    image: 'pulao.jpg',
    details: 'A fragrant and flavorful rice dish made with long-grain basmati rice, gently spiced with whole garam masala and cooked with a mix of fresh seasonal vegetables. A perfect accompaniment to any curry or stew.'
  },
  'manchurian': {
    title: ' Manchurian',
    image: 'manch.jpg',
    details: 'Spicy and tangy Manchurian balls made from finely minced vegetables, deep-fried to perfection and coated in a savory sauce. A popular Indo-Chinese fusion dish.'
  },
  'noodles': {
    title: 'Hakka Noodles',
    image: 'noodles.jpg',
    details: 'Wok-tossed stir-fried noodles with a variety of fresh, crisp vegetables like cabbage, carrots, and bell peppers, flavored with a light sauce. A comforting and delicious snack.'
  },
  'pizza': {
    title: 'Margherita Pizza',
    image: 'pizza.jpg',
    details: 'A simple yet classic pizza topped with San Marzano tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil. The essence of Italian simplicity.'
  },
  'tiramisu': {
    title: 'Classic Tiramisu',
    image: 'tiramisu.jpg',
    details: 'A traditional Italian dessert with layers of coffee-soaked ladyfingers and a light, airy mascarpone cream. Dusted with rich cocoa powder for a bitter finish that complements the sweetness.'
  },
  'iced-tea': {
    title: 'Freshly Brewed Iced Tea',
    image: 'iced-tea.jpg',
    details: 'A refreshing and classic beverage made from freshly brewed tea leaves, served over ice with a slice of lemon. A perfect non-alcoholic choice to cleanse the palate.'
  }
};

// Function to open the modal
function openModal(itemKey) {
  const item = menuItems[itemKey];
  if (item) {
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-details').innerHTML = item.details;
    document.getElementById('item-modal').style.display = 'block';
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById('item-modal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  const modal = document.getElementById('item-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
