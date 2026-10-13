// search.js - Apelele Hair Collection
document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('main');
  if (mainContent) {
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'site-search-wrapper';
    searchWrapper.innerHTML = `
      <div class="container" style="margin: 20px auto; text-align: center;">
        <input type="text" id="siteSearchInput" placeholder="Search services, bundles, weaves..." aria-label="Search site content" style="padding: 10px 15px; width: 100%; max-width: 400px; border: 1px solid #ccc; border-radius: 4px; font-size: 1rem;">
      </div>
    `;
    
    mainContent.insertBefore(searchWrapper, mainContent.firstChild);

    const searchInput = document.getElementById('siteSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        // Filter service cards (.service-card)[cite: 4]
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards.length > 0) {
          serviceCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
          });
        }

        // Filter content sections (.about-section, .contact-item)[cite: 1, 2]
        const sections = document.querySelectorAll('.about-section, .contact-item');
        if (sections.length > 0) {
          sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            section.style.display = text.includes(query) ? '' : 'none';
          });
        }
      });
    }
  }
});