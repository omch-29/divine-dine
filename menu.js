const menuItems = {
  'caesar-salad': {
    title: 'Caesar Salad',
    image: 'cs.jpg',
    details: 'Crisp romaine lettuce tossed in creamy Caesar dressing,<br>topped with crunchy garlic croutons and freshly shaved Parmesan cheese.<br><br><b>Ingredients:</b> Romaine lettuce, Caesar dressing (olive oil, garlic, anchovy, egg yolk, lemon juice, Dijon mustard), Parmesan cheese, croutons, black pepper.<br><br><b>Price:</b> ₹180'
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
'Palak-Paneer': {
  title: 'Palak Paneer',
  image: 'pp.jpg',
  details: 'Paneer cubes gently simmered in a velvety spinach gravy, mildly spiced and wholesome.<br><br><b>Ingredients:</b> Spinach, paneer, onion, garlic, green chili, cream, garam masala.<br><br><b>Price:</b> ₹240'
},
'Bhindi-Masala': {
  title: 'Bhindi Masala',
  image: 'bm.jpg',
  details: 'A simple yet flavorful stir-fry of okra cooked with onion, tomato, and Indian spices – light and homely.<br><br><b>Ingredients:</b> Okra, onion, tomato, ginger, garlic, cumin, coriander.<br><br><b>Price:</b> ₹180'
},

  'basmati-pulao': {
  title: 'Basmati Rice',
  image: 'bp.jpg',
  details: 'A fragrant and flavorful rice dish cooked with long-grain basmati rice, whole spices, and mild seasonings.<br><br><b>Description:</b> Each grain of rice remains separate and fluffy, infused with the aroma of cumin, cloves, bay leaf, and cardamom. Often served as an accompaniment to curries, dals, or enjoyed simply with raita.<br><br><b>Ingredients:</b> Basmati rice, cumin seeds, bay leaf, cardamom, cloves, cinnamon, onions, peas (optional), ghee/oil, salt.<br><br><b>Price:</b> ₹280'
},
'veg-fried-rice': {
  title: 'Veg Fried Rice',
  image: 'vfr.jpg',
  details: 'A classic Indo-Chinese staple prepared with aromatic rice and stir-fried vegetables.<br><br><b>Description:</b> Mild yet flavorful, this dish is loved for its simplicity and pairs beautifully with Manchurian or chili dishes.<br><br><b>Ingredients:</b> Steamed rice, carrot, beans, capsicum, spring onion, soy sauce, black pepper, garlic.<br><br><b>Price:</b> ₹200'
},
'schezwan-fried-rice': {
  title: 'Schezwan Fried Rice',
  image: 'sfr.jpg',
  details: 'Fiery, flavorful rice stir-fried with Schezwan sauce and crunchy vegetables.<br><br><b>Description:</b> Known for its spicy kick and bold red color, this dish is perfect for spice lovers who enjoy a Chinese-Indian fusion delight.<br><br><b>Ingredients:</b> Steamed rice, capsicum, carrot, beans, spring onion, garlic, ginger, Schezwan sauce, soy sauce.<br><br><b>Price:</b> ₹230'
},
  'manchurian': {
  title: 'Veg Manchurian',
  image: 'manch.jpg',
  details: 'A beloved Indo-Chinese delicacy made with crispy fried vegetable balls tossed in a flavorful soy-garlic sauce.<br><br><b>Description:</b> The dish combines the crunch of fried vegetable dumplings with a tangy, spicy, and slightly sweet gravy, making it a perfect companion to fried rice or noodles.<br><br><b>Ingredients:</b> Cabbage, carrot, capsicum, spring onion, ginger, garlic, green chili, cornflour, soy sauce, vinegar, chili sauce, black pepper.<br><br><b>Price:</b> ₹220'
},

  'hakka-noodles': {
  title: 'Veg Hakka Noodles',
  image: 'hn.jpg',
  details: 'A popular Indo-Chinese dish loved for its bold flavors and wok-tossed goodness.<br><br><b>Description:</b> Stir-fried noodles tossed with fresh vegetables, soy sauce, and spices for the perfect street-style taste.<br><br><b>Ingredients:</b> Boiled noodles, carrot, cabbage, capsicum, spring onion, garlic, soy sauce, vinegar, chili sauce, black pepper.<br><br><b>Price:</b> ₹210'
},

'margherita-pizza': {
  title: 'Margherita Pizza',
  image: 'mp.jpg',
  details: 'A timeless Italian classic with a touch of simplicity and elegance.<br><br><b>Description:</b> Soft pizza base topped with tangy tomato sauce, melted mozzarella, and fresh basil for an authentic taste of Italy.<br><br><b>Ingredients:</b> Pizza dough, tomato sauce, mozzarella cheese, olive oil, basil leaves, oregano.<br><br><b>Price:</b> ₹250'
},
'ff': {
  title: 'Crispy French Fries',
  image: 'fries.jpg',
  details: 'Golden, crispy, and perfectly salted potato fries  the ultimate comfort snack.<br><br><b>Ingredients:</b> Potatoes, refined oil, salt, seasoning.<br><br><b>Price:</b> ₹140'
},
  'vanilla-icecream': {
  title: 'Vanilla Ice Cream',
  image: 'vc.jpg',
  details: 'Classic creamy vanilla ice cream  simple, smooth, and loved by all ages.<br><br><b>Ingredients:</b> Milk, cream, sugar, vanilla extract.<br><br><b>Price:</b> ₹100 (2 scoops)'
},
'sf': {
  title: 'Special Royal Falooda',
  image: 'falooda.jpg',
  details: 'A royal chilled dessert layered with rose syrup, sweet basil seeds, falooda sev, milk, ice cream & dry fruits.<br><br><b>Ingredients:</b> Rose syrup, falooda sev, sabja seeds, chilled milk, ice cream, dry fruits.<br><br><b>Price:</b> ₹180'
},
'gj': {
  title: 'Gulab Jamun',
  image: 'gj.jpg',
  details: 'Soft, spongy khoya dumplings soaked in saffron-flavored sugar syrup – India’s most loved dessert.<br><br><b>Ingredients:</b> Khoya, maida, sugar, cardamom, saffron, ghee.<br><br><b>Price:</b> ₹120 (2 pcs)'
},
  'iced-tea': {
  title: 'Freshly Brewed Iced Tea',
  image: 'fbit.jpg',
  details: 'A chilled, refreshing drink made from freshly brewed tea, served with a hint of lemon and mint – perfect to cool down your day.<br><br><b>Ingredients:</b> Fresh tea leaves, lemon juice, mint leaves, sugar (optional), ice cubes.<br><br><b>Price:</b> ₹90 (per glass)'
},
'ht': {
  title: 'Hot Tea',
  image: 'ht.jpg',
  details: 'A comforting cup of freshly brewed Indian tea, infused with spices and served hot – the perfect companion for any meal.<br><br><b>Ingredients:</b> Tea leaves, milk, sugar, cardamom, ginger (optional).<br><br><b>Price:</b> ₹40 (per cup)'
},

'hc': {
  title: 'Hot Coffee',
  image: 'hc.jpg',
  details: 'A rich and aromatic cup of hot coffee, brewed to perfection with milk and sugar – a timeless favorite.<br><br><b>Ingredients:</b> Coffee powder, milk, sugar.<br><br><b>Price:</b> ₹60 (per cup)'
},

'cc': {
  title: 'Cold Coffee',
  image: 'cc.jpg',
  details: 'A chilled and creamy delight made with blended coffee, milk, and ice, topped with froth – refreshing and energizing.<br><br><b>Ingredients:</b> Coffee, milk, sugar, ice cubes, chocolate syrup (optional).<br><br><b>Price:</b> ₹120 (per glass)'
}

};


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
