const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/* Menu hidden */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

	// quick fix to avoid non-existing elements //// modified  /////////////////////////////////
if(sectionsClass){
  if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
  sectionClass.classList.add('active-link')
  }else{
  sectionsClass.classList.remove('active-link')
  } 
}                        
	})
}
window.addEventListener('scroll', scrollActive)

// add to cart and add to favorites buttons /////////////////////////////////////////////////////////////

let selectedProduct = null;

document.addEventListener("DOMContentLoaded", function() {
  const categoryCards = document.querySelectorAll(".card");
  const productsContainer = document.getElementById("products");
  const addToCartButtonHeader = document.getElementById("add-to-cart-header");
  const addToFavoritesButtonHeader = document.getElementById("add-to-favorites-header");

  categoryCards.forEach(card => {
    card.addEventListener("click", function() {
      const selectedCategory = card.getAttribute("data-category");
      displayProducts(selectedCategory);
    });
  });

  // Event listener for "Add to Cart" button in header
  addToCartButtonHeader.addEventListener('click', function() {
    if (selectedProduct) {
      addToCart(selectedProduct);
    } else {
      console.log("No product selected.");
    }
  });

  // Event listener for "Add to Favorites" button in header
  addToFavoritesButtonHeader.addEventListener('click', function() {
    if (selectedProduct) {
      addToFavorites(selectedProduct);
    } else {
      console.log("No product selected.");
    }
  });

  function displayProducts(category) {

    selectedProduct = getProductsByCategory(category)[0];
    renderProducts(getProductsByCategory(category));
  }

  function renderProducts(products) {
    productsContainer.innerHTML = ''; 

    // Display each product
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}"> <!-- Include product image -->
        <h3>${product.name}</h3>
        <p>${product.price}</p> <!-- Include product price -->
        <div style="display: flex; gap:2px;">
        <button class="add-to-cart-btn">Add to Cart</button>
        <button class="add-to-favorites-btn">Add to Favorites</button>
      `;

      // Attach event listener to product card
      productElement.addEventListener('click', function() {
        selectedProduct = product; // Update selected product when product card is clicked
        console.log(`Selected product: ${selectedProduct.name}`);
      });

      // Append the product to the products container
      productsContainer.appendChild(productElement);
    });
  }

  function addToCart(product) {
    console.log(`Added ${product.name} to cart for ${product.price}`);
  }

  function addToFavorites(product) {
    console.log(`Added ${product.name} to favorites`);
  }
});
  
  

    function getProductsByCategory(category) {
      
      const products = {
        desks: [
            { name: "Modern Desk", image: "pic/modern-desk.jpg", price: "$299" },
            { name: "Standing Desk", image: "pic/standing-desk.jpg", price: "$309" },
            { name: "Executive Desk", image: "pic/executive-desk.jpg", price: "$329" },
            { name: "Directorial Desk", image: "pic/directorial-desk.jpg", price: "$209" },
            { name: "Kids Desk", image: "pic/kids-desk.jpg", price: "$99" },
            { name: "Black Desk", image: "pic/black-desk.jpg", price: "$289" },
          ],
          chairs: [
            { name: "Office Chair", image: "pic/office-chair.jpg", price: "$199" },
            { name: "Red Chair", image: "pic/red-chair.jpg", price: "$249" },
            { name: "Recliner Chair", image: "pic/recliner-chair.jpg", price: "$309" },
            { name: "Black and white Chair", image: "pic/black-and-white-chair.jpg", price: "$199" },
            { name: "kids Chair", image: "pic/kids-chair.jpg", price: "$99" },
            { name: "Brown Leather Chair", image: "pic/brown-leather-chair.jpg", price: "$409" },
          ],
          tables: [
            { name: "Dining Table", image: "pic/dining-table.jpg", price: "$499" },
            { name: "Coffee Table", image: "pic/coffee-table.jpg", price: "$299" },
            { name: "Side Table", image: "pic/side-table.jpg", price: "$139" },
            { name: "Luxury Table", image: "pic/luxury-table.jpg", price: "$129" },
            { name: "Black Table", image: "pic/black-table.jpg", price: "$149" },
            
          ],
          lamps: [
            { name: "Desk Lamp", image: "pic/desk-lamp.png", price: "$59" },
            { name: "Floor Lamp", image: "pic/floor-lamp.png", price: "$129" },
            { name: "Pink floor Lamp", image: "pic/pink-floor-lamp.jpg", price: "$79" },
            { name: "Silver Lamp", image: "pic/silver-lamp.png", price: "$85" },
            { name: "Beige Lamp", image: "pic/beige-lamp.png", price: "$110" },
          ],
          plants: [
            { name: "Fiddle Leaf Fig", image: "pic/fiddle-leaf-fig.png", price: "$39" },
            { name: "Snake Plant", image: "pic/snake-plant.png", price: "$29" },
            { name: "Monstera", image: "pic/monstera.png", price: "$99" },
            { name: "Umbrella Plant", image: "pic/umbrella-plant.png", price: "$19" },
            { name: "Cactus", image: "pic/cactus.png", price: "$25" },
            
          ],
          decoration: [
            { name: "Dry Flowers", image: "pic/dry-flowers.jpg", price: "$32" },
            { name: "Boho Arrangement", image: "pic/boho-arrangement.jpg", price: "$59" },
            { name: "Throw Pillow", image: "pic/throw-pillow.jpg", price: "$19" },
            { name: "Vase", image: "pic/vase.jpg", price: "$29" },
            { name: "Wall Art", image: "pic/wall-art.jpg", price: "$79" },
            
          ],
          collections: [
            { name: "Modern Vase Collection", image: "pic/modern-vase-collection.jpg", price: "$99" },
            { name: "Vintage Chair Collection", image: "pic/vintage-chair-collection.jpg", price: "$1799" },
            { name: "Minimalist Wall Art Collection", image: "pic/minimalist-wall-art.jpg", price: "$89" },
            
          ]
        };
  
      return products[category] || [];
    }

    function toggleContent() {
      var additionalContent = document.getElementById("additional-content");
      var buttonText = document.querySelector(".about-btn");
    
      if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
        buttonText.textContent = "Read Less";
      } else {
        additionalContent.style.display = "none";
        buttonText.textContent = "Read More";
      }
    }
  ;
  