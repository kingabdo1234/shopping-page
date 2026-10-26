const PRODUCTS = [
  {
    id: 'prod-101',
    name: 'AcousticPro Wireless Headphones',
    category: 'Electronics',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: 'Active noise-canceling over-ear studio headphones featuring 40mm drivers, 30-hour battery life, and memory foam ear cushions.',
    featured: true
  },
  {
    id: 'prod-102',
    name: 'ChronoSync Smartwatch Ultra',
    category: 'Accessories',
    price: 189.00,
    originalPrice: 220.00,
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    description: 'Sleek fitness smartwatch with AMOLED display, heart rate tracking, GPS integration, and 7-day battery life.',
    featured: true
  },
  {
    id: 'prod-103',
    name: 'Lumina Minimalist LED Desk Lamp',
    category: 'Home & Living',
    price: 45.50,
    originalPrice: 59.99,
    rating: 4.6,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    description: 'Dimmable touch-control LED desk lamp with adjustable arm, temperature color modes, and integrated wireless phone charger.',
    featured: true
  },
  {
    id: 'prod-104',
    name: 'UrbanCommute Commuter Backpack',
    category: 'Lifestyle',
    price: 79.99,
    originalPrice: 95.00,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    description: 'Water-resistant laptop backpack with anti-theft hidden pockets, USB charging port, and ergonomic padded shoulder straps.',
    featured: true
  },
  {
    id: 'prod-105',
    name: 'SoundWave Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 59.00,
    originalPrice: 75.00,
    rating: 4.5,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
    description: 'Rugged IPX7 waterproof wireless speaker delivering 360-degree deep bass sound and 12-hour continuous playback.',
    featured: false
  },
  {
    id: 'prod-106',
    name: 'KeyCraft Mechanical Keyboard',
    category: 'Electronics',
    price: 119.50,
    originalPrice: 139.99,
    rating: 4.8,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
    description: 'Compact mechanical keyboard with hot-swappable tactile switches, RGB backlighting, and solid aluminum casing.',
    featured: true
  },
  {
    id: 'prod-107',
    name: 'Precision Ergonomic Optical Mouse',
    category: 'Accessories',
    price: 38.00,
    originalPrice: 48.00,
    rating: 4.4,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
    description: 'Wireless vertical ergonomic mouse designed to reduce wrist strain with adjustable DPI sensitivity levels.',
    featured: false
  },
  {
    id: 'prod-108',
    name: 'HydroPure Stainless Steel Flask',
    category: 'Lifestyle',
    price: 28.00,
    originalPrice: 35.00,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    description: 'Double-wall vacuum insulated water bottle keeping beverages cold for 24 hours or hot for 12 hours.',
    featured: false
  },
  {
    id: 'prod-109',
    name: 'AromaCalm Essential Oil Diffuser',
    category: 'Home & Living',
    price: 34.99,
    originalPrice: 42.00,
    rating: 4.3,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    description: 'Ultrasonic ceramic essential oil diffuser with ambient mood lighting and auto shut-off safety protection.',
    featured: false
  },
  {
    id: 'prod-110',
    name: 'FocusBuds True Wireless Earbuds',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 110.00,
    rating: 4.6,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    description: 'Compact wireless earbuds featuring environmental noise cancellation and wireless charging case.',
    featured: true
  },
  {
    id: 'prod-111',
    name: 'LeatherCraft Minimalist Wallet',
    category: 'Accessories',
    price: 32.00,
    originalPrice: 40.00,
    rating: 4.7,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
    description: 'Full-grain genuine leather cardholder wallet equipped with RFID-blocking protection layer.',
    featured: false
  },
  {
    id: 'prod-112',
    name: 'ZenSpace Desk Organizer Pad',
    category: 'Home & Living',
    price: 25.00,
    originalPrice: 30.00,
    rating: 4.5,
    reviewsCount: 48,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80',
    description: 'Premium dual-sided PU leather desk mat offering smooth mouse gliding and desk protection.',
    featured: false
  }
];

let cart = JSON.parse(localStorage.getItem('nova_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('nova_wishlist')) || [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'default';

const productGrid = document.getElementById('productGrid');
const emptyCatalog = document.getElementById('emptyCatalog');
const catalogCount = document.getElementById('catalogCount');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const resetCatalogBtn = document.getElementById('resetCatalogBtn');

const cartHeaderBtn = document.getElementById('cartHeaderBtn');
const cartCountBadge = document.getElementById('cartCount');
const drawerItemCount = document.getElementById('drawerItemCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartDrawer = document.getElementById('closeCartDrawer');
const cartItemsList = document.getElementById('cartItemsList');
const cartSubtotal = document.getElementById('cartSubtotal');
const shippingProgressBar = document.getElementById('shippingProgressBar');
const shippingProgressText = document.getElementById('shippingProgressText');
const clearCartBtn = document.getElementById('clearCartBtn');
const openCheckoutBtn = document.getElementById('openCheckoutBtn');

const wishlistHeaderBtn = document.getElementById('wishlistHeaderBtn');
const wishlistCountBadge = document.getElementById('wishlistCount');

const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');
const modalContent = document.getElementById('modalContent');

const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutShipping = document.getElementById('checkoutShipping');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutItemsPreview = document.getElementById('checkoutItemsPreview');
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmationBtn = document.getElementById('closeConfirmationBtn');
const confDetails = document.getElementById('confDetails');

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const closeAnnouncement = document.getElementById('closeAnnouncement');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterFeedback = document.getElementById('newsletterFeedback');

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
});

function setupEventListeners() {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  if (closeAnnouncement) {
    closeAnnouncement.addEventListener('click', () => {
      document.querySelector('.announcement-bar').style.display = 'none';
    });
  }

  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      activeCategory = card.dataset.category;
      renderProducts();
    });
  });

  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  clearFiltersBtn.addEventListener('click', resetFilters);
  resetCatalogBtn.addEventListener('click', resetFilters);

  cartHeaderBtn.addEventListener('click', toggleCartDrawer);
  closeCartDrawer.addEventListener('click', toggleCartDrawer);
  cartOverlay.addEventListener('click', toggleCartDrawer);
  clearCartBtn.addEventListener('click', handleClearCart);

  closeQuickView.addEventListener('click', () => quickViewModal.classList.add('hidden'));
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) quickViewModal.classList.add('hidden');
  });

  openCheckoutBtn.addEventListener('click', handleOpenCheckout);
  closeCheckout.addEventListener('click', () => checkoutModal.classList.add('hidden'));
  checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  closeConfirmationBtn.addEventListener('click', () => {
    confirmationModal.classList.add('hidden');
  });

  newsletterForm.addEventListener('submit', handleNewsletterSubmit);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      quickViewModal.classList.add('hidden');
      checkoutModal.classList.add('hidden');
      cartDrawer.classList.remove('open');
      cartOverlay.classList.add('hidden');
    }
  });
}

function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    const matchesCategory = (activeCategory === 'all') || (product.category === activeCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (currentSort === 'price-asc') return a.price - b.price;
    if (currentSort === 'price-desc') return b.price - a.price;
    if (currentSort === 'rating-desc') return b.rating - a.rating;
    if (currentSort === 'name-asc') return a.name.localeCompare(b.name);
    return 0; // Default order
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  catalogCount.textContent = `Showing ${filtered.length} item${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    productGrid.innerHTML = '';
    emptyCatalog.classList.remove('hidden');
    return;
  }

  emptyCatalog.classList.add('hidden');

  productGrid.innerHTML = filtered.map(product => {
    const isWishlisted = wishlist.includes(product.id);
    const discountBadge = product.originalPrice 
      ? `<span class="product-badge">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` 
      : '';

    return `
      <article class="product-card">
        ${discountBadge}
        <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}')" 
                aria-label="Toggle wishlist item">
          ${isWishlisted ? '❤️' : '🤍'}
        </button>
        <div class="product-image-box">
          <img src="${sanitizeHTML(product.image)}" alt="${sanitizeHTML(product.name)}" loading="lazy">
        </div>
        <div class="product-info">
          <span class="product-category">${sanitizeHTML(product.category)}</span>
          <h3 class="product-title">${sanitizeHTML(product.name)}</h3>
          <div class="product-rating">
            <span>★ ${product.rating.toFixed(1)}</span>
            <span class="rating-count">(${product.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <div class="card-actions">
            <button class="btn btn-outline btn-sm" onclick="openQuickView('${product.id}')">Quick View</button>
            <button class="btn btn-primary btn-sm" onclick="addToCart('${product.id}')">Add to Cart</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function handleSearch() {
  searchQuery = searchInput.value.trim();
  renderProducts();
}

function resetFilters() {
  searchQuery = '';
  searchInput.value = '';
  activeCategory = 'all';
  currentSort = 'default';
  sortSelect.value = 'default';
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
  document.querySelector('.category-card[data-category="all"]').classList.add('active');
  renderProducts();
}

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalContent.innerHTML = `
    <div class="quickview-grid">
      <div class="qv-image">
        <img src="${sanitizeHTML(product.image)}" alt="${sanitizeHTML(product.name)}">
      </div>
      <div class="qv-details">
        <span class="product-category">${sanitizeHTML(product.category)}</span>
        <h2 class="qv-title">${sanitizeHTML(product.name)}</h2>
        <div class="product-rating" style="margin-bottom: 0.5rem;">
          <span>★ ${product.rating.toFixed(1)}</span> (${product.reviewsCount} verified reviews)
        </div>
        <div class="qv-price">$${product.price.toFixed(2)}</div>
        <p class="qv-desc">${sanitizeHTML(product.description)}</p>
        
        <div class="qv-qty">
          <label for="qvQtyInput"><strong>Quantity:</strong></label>
          <button class="qty-btn" onclick="adjustQvQty(-1)">-</button>
          <input type="number" id="qvQtyInput" value="1" min="1" max="10" style="width: 50px; text-align: center; border: 1px solid var(--border); border-radius: 4px;">
          <button class="qty-btn" onclick="adjustQvQty(1)">+</button>
        </div>

        <button class="btn btn-primary btn-block" onclick="addQvToCart('${product.id}')">Add to Shopping Cart</button>
      </div>
    </div>
  `;

  quickViewModal.classList.remove('hidden');
}

function adjustQvQty(delta) {
  const input = document.getElementById('qvQtyInput');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(10, val + delta));
  input.value = val;
}

function addQvToCart(productId) {
  const input = document.getElementById('qvQtyInput');
  const qty = input ? parseInt(input.value) || 1 : 1;
  addToCart(productId, qty);
  quickViewModal.classList.add('hidden');
}

function addToCart(productId, quantity = 1) {
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity: quantity });
  }

  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function handleClearCart() {
  if (cart.length === 0) return;
  if (confirm('Are you sure you want to clear your cart items?')) {
    cart = [];
    saveCart();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem('nova_cart', JSON.stringify(cart));
}

function toggleCartDrawer(forceOpen = false) {
  if (forceOpen === true) {
    cartDrawer.classList.add('open');
    cartOverlay.classList.remove('hidden');
  } else {
    cartDrawer.classList.toggle('open');
    cartOverlay.classList.toggle('hidden');
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountBadge.textContent = totalItems;
  drawerItemCount.textContent = totalItems;

  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒</p>
        <p>Your shopping cart is currently empty.</p>
      </div>
    `;
    cartSubtotal.textContent = '$0.00';
    updateShippingProgress(0);
    return;
  }

  let subtotal = 0;

  cartItemsList.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';

    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${sanitizeHTML(product.image)}" alt="${sanitizeHTML(product.name)}">
        <div class="cart-item-info">
          <div class="cart-item-title">${sanitizeHTML(product.name)}</div>
          <div class="cart-item-price">$${product.price.toFixed(2)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
            <button style="margin-left: auto; color: #ef4444; font-size: 0.8rem;" onclick="removeFromCart('${item.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  updateShippingProgress(subtotal);
}

function updateShippingProgress(subtotal) {
  const target = 75;
  if (subtotal >= target) {
    shippingProgressText.innerHTML = '🎉 You qualify for <strong>FREE Shipping</strong>!';
    shippingProgressBar.style.width = '100%';
  } else {
    const diff = (target - subtotal).toFixed(2);
    shippingProgressText.innerHTML = `Add <strong>$${diff}</strong> more to qualify for <strong>FREE Shipping</strong>!`;
    const percentage = Math.min(100, (subtotal / target) * 100);
    shippingProgressBar.style.width = `${percentage}%`;
  }
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(productId);
  }
  localStorage.setItem('nova_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  wishlistCountBadge.textContent = wishlist.length;
}

function handleOpenCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add products before checking out.');
    return;
  }

  toggleCartDrawer(false);

  // Render Checkout Order Summary
  let subtotal = 0;
  checkoutItemsPreview.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    const lineTotal = product.price * item.quantity;
    subtotal += lineTotal;

    return `
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.5rem;">
        <span>${sanitizeHTML(product.name)} x ${item.quantity}</span>
        <strong>$${lineTotal.toFixed(2)}</strong>
      </div>
    `;
  }).join('');

  const shipping = subtotal >= 75 ? 0 : 9.99;
  const total = subtotal + shipping;

  checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  checkoutShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  checkoutTotal.textContent = `$${total.toFixed(2)}`;

  checkoutModal.classList.remove('hidden');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('custName');
  const emailInput = document.getElementById('custEmail');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');

  let isValid = true;

  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

  if (!nameInput.value.trim()) {
    document.getElementById('nameError').textContent = 'Full name is required.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (!phoneInput.value.trim()) {
    document.getElementById('phoneError').textContent = 'Phone number is required.';
    isValid = false;
  }

  if (!addressInput.value.trim()) {
    document.getElementById('addressError').textContent = 'Shipping address is required.';
    isValid = false;
  }

  if (!isValid) return;

  const orderNum = 'NVM-' + Math.floor(100000 + Math.random() * 900000);
  confDetails.innerHTML = `
    <p><strong>Order Reference:</strong> ${orderNum}</p>
    <p><strong>Customer:</strong> ${sanitizeHTML(nameInput.value.trim())}</p>
    <p><strong>Delivery To:</strong> ${sanitizeHTML(addressInput.value.trim())}</p>
    <p><strong>Total Charged (Demo):</strong> ${checkoutTotal.textContent}</p>
  `;

  cart = [];
  saveCart();
  updateCartUI();
  checkoutForm.reset();

  checkoutModal.classList.add('hidden');
  confirmationModal.classList.remove('hidden');
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  const email = emailInput.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newsletterFeedback.textContent = 'Please enter a valid email address.';
    newsletterFeedback.style.color = '#dc2626';
    newsletterFeedback.classList.remove('hidden');
    return;
  }

  newsletterFeedback.textContent = '🎉 Thank you for subscribing to our demo newsletter!';
  newsletterFeedback.style.color = '#0f766e';
  newsletterFeedback.classList.remove('hidden');
  newsletterForm.reset();
}

function sanitizeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&rawgt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}