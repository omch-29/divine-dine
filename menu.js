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
'cucumber-salad': {
  title: 'cucumber Salad',
  image: 'ks.jpg',
  details: 'A refreshing chopped salad commonly served with Indian meals,<br>featuring finely diced cucumber, onion, and tomato with a squeeze of lemon.<br><br><b>Ingredients:</b> Cucumber, onion, tomato, green chili, coriander, lemon juice, black salt.<br><br><b>Price:</b> ₹120'
},
  'Butter-Paneer': {
  title: 'Paneer Butter Masala',
  image: 'pb.jpg',
  details: 'A rich and creamy North Indian delicacy, featuring paneer cubes simmered in a luscious tomato-based gravy, finished with butter and cream.<br><br><b>Ingredients:</b> Paneer, tomato, onion, cashews, butter, cream, kasuri methi, garam masala.<br><br><b>Price:</b> ₹280'
},
'Dal-Tadka': {
  title: 'Dal Tadka',
  image: 'dt.jpg',
  details: 'A comforting yellow lentil preparation, tempered with ghee, cumin, garlic, and red chili for a smoky, aromatic flavor.<br><br><b>Ingredients:</b> Toor dal, onion, tomato, garlic, cumin seeds, ghee, coriander.<br><br><b>Price:</b> ₹180'
},
'Sev-special': {
  title: 'Sev Tamatar (Special)',
  image: 'st.jpg',
  details: 'A Kathiyawadi favorite, this tangy tomato-based curry is topped with crunchy sev just before serving, bringing a delightful contrast of textures.<br><br><b>Ingredients:</b> Tomato, onion, sev, garlic, red chili, cumin, coriander.<br><br><b>Price:</b> ₹190'
},
'Methi-Mutter-Malai': {
  title: 'Methi Mutter Malai',
  image: 'mm.jpg',
  details: 'A mildly spiced dish with fresh fenugreek leaves and green peas cooked in a silky cream sauce – subtly sweet and aromatic.<br><br><b>Ingredients:</b> Fresh methi, green peas, cream, cashews, onion, spices.<br><br><b>Price:</b> ₹220'
},
'Malai-Kofta': {
  title: 'Malai Kofta',
  image: 'mk.jpg',
  details: 'Delicate cottage cheese and potato dumplings served in a rich, creamy cashew-tomato gravy – a royal Mughlai treat.<br><br><b>Ingredients:</b> Paneer, potato, cashew, onion, tomato, cream, cardamom.<br><br><b>Price:</b> ₹240'
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
