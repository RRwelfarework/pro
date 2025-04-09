document.addEventListener("DOMContentLoaded", function () {
  console.log("Custom Drupal 10 theme script initialized.");

  const nav = document.querySelector('nav#main-nav');
  const toggle = document.createElement('button');
  toggle.innerHTML = "☰ Menu";
  toggle.setAttribute("aria-label", "Toggle navigation");
  toggle.style.cssText = "background: var(--accent-color); color: white; padding: 0.5rem 1rem; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; margin-bottom: 1rem;";
  nav.parentElement.insertBefore(toggle, nav);

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    nav.style.display = nav.classList.contains('open') ? 'block' : 'none';
  });

  nav.style.display = 'none';
});
