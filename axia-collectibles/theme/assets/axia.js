document.documentElement.classList.add('js');

// Rotate announcement bar messages
(function () {
  var items = document.querySelectorAll('[data-announcement] .announcement__item');
  if (items.length < 2) return;
  var i = 0;
  setInterval(function () {
    items[i].classList.remove('is-active');
    i = (i + 1) % items.length;
    items[i].classList.add('is-active');
  }, 4500);
})();

// Mobile menu drawer
(function () {
  var drawer = document.querySelector('[data-drawer]');
  if (!drawer) return;
  function close() { drawer.hidden = true; document.body.style.overflow = ''; }
  document.querySelectorAll('[data-drawer-open]').forEach(function (btn) {
    btn.addEventListener('click', function () { drawer.hidden = false; document.body.style.overflow = 'hidden'; });
  });
  document.querySelectorAll('[data-drawer-close]').forEach(function (btn) { btn.addEventListener('click', close); });
  drawer.addEventListener('click', function (e) { if (e.target === drawer) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

// Product gallery thumbnails
(function () {
  var main = document.querySelector('.product__main-media img');
  var thumbs = document.querySelectorAll('[data-gallery-thumb]');
  if (!main || !thumbs.length) return;
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      main.removeAttribute('srcset');
      main.src = thumb.getAttribute('data-gallery-thumb');
      thumbs.forEach(function (t) { t.classList.remove('is-active'); });
      thumb.classList.add('is-active');
    });
  });
})();

// Quantity +/- buttons
document.addEventListener('click', function (e) {
  var btn = e.target.closest('[data-qty]');
  if (!btn) return;
  var input = btn.parentElement.querySelector('input');
  var next = (parseInt(input.value, 10) || 1) + parseInt(btn.getAttribute('data-qty'), 10);
  var max = parseInt(input.getAttribute('max'), 10);
  if (next < 1) next = 1;
  if (max && next > max) next = max;
  input.value = next;
});

// Variant select updates price + button
(function () {
  var select = document.querySelector('[data-variant-select]');
  if (!select) return;
  select.addEventListener('change', function () {
    var opt = select.options[select.selectedIndex];
    var price = document.querySelector('[data-price] .price__current');
    var priceWrap = document.querySelector('[data-price] .price');
    var compare = document.querySelector('[data-price] .price__compare');
    var button = document.querySelector('[data-add-button]');
    if (price) price.textContent = opt.getAttribute('data-price');
    var compareText = opt.getAttribute('data-compare');
    if (priceWrap) {
      if (compareText) {
        if (!compare) { compare = document.createElement('s'); compare.className = 'price__compare'; priceWrap.appendChild(compare); }
        compare.textContent = compareText;
        priceWrap.classList.add('price--sale');
      } else {
        if (compare) compare.remove();
        priceWrap.classList.remove('price--sale');
      }
    }
    var available = opt.getAttribute('data-available') === 'true';
    if (button) { button.disabled = !available; button.textContent = available ? 'Add to cart' : 'Sold out'; }
    var url = new URL(window.location.href);
    url.searchParams.set('variant', opt.value);
    window.history.replaceState({}, '', url);
  });
})();

// Collection sorting
(function () {
  var sort = document.querySelector('[data-sort]');
  if (!sort) return;
  sort.addEventListener('change', function () {
    var url = new URL(window.location.href);
    url.searchParams.set('sort_by', sort.value);
    url.searchParams.delete('page');
    window.location.href = url.toString();
  });
})();

// Cart: submit when quantity changes
document.querySelectorAll('[data-cart-qty]').forEach(function (input) {
  input.addEventListener('change', function () {
    var form = input.closest('form');
    var hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.name = 'update';
    hidden.value = '1';
    form.appendChild(hidden);
    form.submit();
  });
});

// Login page: show password recovery
document.querySelectorAll('[data-toggle-recover]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('recover').classList.toggle('is-open');
  });
});
