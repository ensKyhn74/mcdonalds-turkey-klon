// McDonald's Türkiye - Klon - Basit etkileşimler
document.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      // Portföy klonu - arama placeholder
      const query = prompt('Arama (demo):');
      if (query) console.log('Arama:', query);
    });
  }
});
